export function EsmRdb () {
  return new RdbInstance(settings)
}

// ScriptDbInstanceもどき
function RdbInstance (config) {
  this.ASCENDING = 0
  this.DESCENDING = 1

  SQ.registerValueHandler(Date, function (date) {
    //    return '"' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + '"';
    return "'" + Utilities.formatDate(date, 'JST', 'yyyy-MM-dd HH:mm:ss') + "'"
  })

  this.address = config.dbAddress || '34.84.254.108'
  this.mysqlUser = config.user || 'user'
  this.mysqlPwd = config.pwd || 'hoge99'
  this.db = config.db || 'bpm'
  this.instanceUrl = 'jdbc:google:mysql://' + this.address
  this.dbUrl = this.instanceUrl + '/' + this.db
  this.autoCommit = (typeof config.autoCommit === 'undefined') ? true : config.autoCommit

  this.debugSheet = config.debugSheetId ? SpreadsheetApp.openById(config.debugSheetId).getSheetByName('debug') : null
  this.nonExecute = config.nonExecute || false
  this.debugUpdateOnly = config.debugUpdateOnly || false

  this.conn = Jdbc.getCloudSqlConnection(this.dbUrl, this.mysqlUser, this.mysqlPwd)
  this.conn.setAutoCommit(this.autoCommit)

  this.debug = function (str) {
    if (this.debugSheet) {
      this.debugSheet.appendRow([str + ';'])
    } else {
      Logger.log(str)
    }
  }

  // autoCommitの設定
  this.setAutoCommit = (autoCommit) => {
    this.autoCommit = autoCommit
    this.conn.setAutoCommit(this.autoCommit)
  }

  this.createTableBySheet = function (sheetId, sheetName, dropTable, copyData) {
    this.autoCommit = false
    this.conn.setAutoCommit(this.autoCommit)

    var ss = SpreadsheetApp.openById(sheetId)
    var sheet = ss.getSheetByName(sheetName)
    var ddl = 'CREATE TABLE ' + sheetName + ' ('

    var range = sheet.getDataRange()
    var values = range.getValues()
    var headers = values[0] // 先頭がカラム名が前提

    var colDefs = []
    var keyCol = ''
    for (var i = 0; i < headers.length; i++) {
      var colName = headers[i]
      if (i == 0) keyCol = colName
      var colType = sheet.getRange(1, (i + 1)).getNote()
      colDefs.push(colName + ' ' + colType)
    }
    ddl += colDefs.join(',')
    ddl += ',PRIMARY KEY(' + keyCol + ')'
    ddl += ');'
    this.debug(ddl)

    try {
      if (dropTable) {
        this.conn.createStatement().execute('drop table ' + sheetName)
      }
    } catch (e) {
      this.debug('drop table失敗（無視）')
    }

    this.conn.createStatement().execute(ddl)

    if (copyData) {
      for (var i = 1; i < values.length; i++) {
        var row = values[i]
        var item = {}
        item.type = sheetName
        for (var j = 0; j < row.length; j++) {
          item[headers[j]] = row[j]
        }
        this.debug(item)
        this.insert(item, { autoId: false })
      }
    }
    this.close()
  }

  var AnyOf = function (values) {
    this.values = values
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' in ?', this.values)
      return sql
    }
  }
  this.anyOf = function (values) {
    return new AnyOf(values)
  }
  var Not = function (value) {
    this.value = value

    this.buildWhere = function (sql, propName, propValue) {
      var type = typeof (this.value)
      if (type == 'string') {
        sql.where(propName + " != '" + this.value + "'")
      } else if (type == 'number') {
        sql.where(propName + ' != ' + this.value + '')
      } else if (type == 'boolean') {
        var bool = (this.value == true) ? 1 : 0
        sql.where(propName + " != '" + bool + "'")
      }
      return sql
    }
  }
  this.not = function (value) {
    return new Not(value)
  }

  var GreaterThanOrEqualTo = function (value) {
    this.value = value
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' >= ?', this.value)
      return sql
    }
  }
  this.greaterThanOrEqualTo = function (value) {
    return new GreaterThanOrEqualTo(value)
  }
  var LessThanOrEqualTo = function (value) {
    this.value = value
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' <= ?', this.value)
      return sql
    }
  }
  this.lessThanOrEqualTo = function (value) {
    return new LessThanOrEqualTo(value)
  }
  var GreaterThan = function (value) {
    this.value = value
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' > ?', this.value)
      return sql
    }
  }
  this.greaterThan = function (value) {
    return new GreaterThan(value)
  }
  var LessThan = function (value) {
    this.value = value
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' < ?', this.value)
      return sql
    }
  }
  this.lessThan = function (value) {
    return new LessThan(value)
  }
  var Between = function (value1, value2) {
    this.value1 = value1
    this.value2 = value2
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' between ? and ?', this.value1, this.value2)
      return sql
    }
  }
  this.between = function (value1, value2) {
    return new Between(value1, value2)
  }
  var Contains = function (value) {
    this.value = value
    this.hasValue = function () {
      return this.value != ''
    }
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + " like '%" + this.value + "%'")
      return sql
    }
  }
  this.contains = function (value) {
    return new Contains(value)
  }
  var IsNull = function (value) {
    this.value = value
    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' is NULL')
      return sql
    }
  }
  this.isNull = function (value) {
    return new IsNull(value)
  }
  // insertメソッド。
  this.insert = function (item, option) {
    checkNoTypeError(item.type)

    var idColumn = option.idColumn || '_id_'
    var autoId = (typeof option.autoId === 'undefined') ? true : option.autoId
    if (autoId) { // insert auto key
      item[idColumn] = genUUID()
    }

    var sql = this.buildInsert(item)
    this.execUpdate(sql)
    return item
  }
  // updateメソッド。
  this.update = function (item, option) {
    checkNoTypeError(item.type)

    var idColumn = '_id_'
    if (option) {
      idColumn = option.idColumn
    }

    var sql = this.buildUpdate(item, idColumn)
    this.execUpdate(sql)
    return item
  }
  // あればupdate、なければinsert
  this.updateOrInsert = function (item, option) {
    checkNoTypeError(item.type)
    var idColumn = '_id_'
    if (option) {
      idColumn = option.idColumn
    }
    var countSql = 'select count(*) as count from ' + item.type + ' where ' + idColumn + " = '" + item[idColumn] + "'"
    var results = this.execQuery_(countSql)
    if (results.length === 0) throw new Error('レコードが存在しません。:' + item)
    var count = results[0].count
    if (count == 0) {
      // insert
      return this.insert(item, option)
    } else {
      // update
      return this.update(item, option)
    }
  }

  // save互換メソッド。
  // 互換性のため、_id_カラムがプライマリーキーとして存在することを前提とする。
  this.save = function (item) {
    checkNoTypeError(item.type)
    var colName = null; var colValue = null
    for (var propName in item) {
      if (propName == '_id_') {
        colName = propName
        colValue = item[propName]
      }
    }
    if (!colName) { // insertモード
      colName = '_id_'
    }
    var sql
    var uuid = genUUID()
    if (!colValue) { // insert auto key
      item[colName] = uuid
      sql = this.buildInsert(item)
    } else {
      sql = this.buildUpdate(item, '_id_')
    }

    this.execUpdate(sql)
    return item
  }
  // remove互換メソッド。
  this.remove = function (item) {
    checkNoTypeError(item.type)

    var sql = this.buildDelete(item)
    return this.execUpdate(sql)
  }
  // query互換メソッド。
  this.query = function (query, fields) {
    checkNoTypeError(query.type)

    var sql = this.buildSelect(query, fields)
    var results = this.execQuery(sql)
    return new RDbResult(results)
  }
  this.buildSelect = function (query, fields) {
    var sql = SQ.select()
    if (fields) {
      for (var i = 0; i < fields.length; i++) {
        sql.field(fields[i])
      }
    }
    var tableName
    for (var propName in query) {
      var propValue = query[propName]
      if (propName == 'type') {
        sql.from(propValue)
      } else {
        if (typeof propValue.buildWhere === 'function') {
          sql = propValue.buildWhere(sql, propName, propValue)
        } else {
          sql = this.buildWhere_(sql, propName, propValue)
        }
      }
    }
    return sql.toString()
  }
  this.buildDelete = function (query) {
    var sql = SQ.remove()
    var tableName
    for (var propName in query) {
      var propValue = query[propName]
      if (propName == 'type') {
        sql.from(propValue)
      } else {
        sql = this.buildWhere_(sql, propName, propValue)
      }
    }
    return sql.toString()
  }
  this.buildUpdate = function (query, idColumn) {
    var sql = SQ.update()
    var tableName
    for (var propName in query) {
      var propValue = query[propName]
      if (propName == 'type') {
        sql.table(propValue)
      } else if (propName == idColumn) {
        var colName = propName
        var colValue = query[colName]
        sql = this.buildWhere_(sql, colName, colValue)
      } else {
        sql = this.buildSet_(sql, propName, propValue)
      }
    }
    return sql.toString()
  }
  this.buildInsert = function (query) {
    var sql = SQ.insert()
    var tableName
    for (var propName in query) {
      var propValue = query[propName]
      if (propName == 'type') {
        sql.into(propValue)
      } else if (propName.indexOf('_ts_') != -1) {
      } else {
        sql = this.buildSet_(sql, propName, propValue)
      }
    }
    return sql.toString()
  }

  this.buildWhere_ = function (sql, propName, propValue) {
    var type = typeof (propValue)
    if (type == 'string') {
      sql.where(propName + " = '" + propValue.replace(/'/g, "''") + "'")
    } else if (type == 'number') {
      sql.where(propName + ' = ' + propValue + '')
    } else if (type == 'boolean') {
      var bool = (propValue == true) ? 1 : 0
      sql.where(propName + " = '" + bool + "'")
    }
    return sql
  }
  this.buildSet_ = function (sql, propName, propValue) {
    var type = typeof (propValue)
    if (propValue === '') propValue = null
    var setValue
    if (type == 'string' && propValue) {
      setValue = propValue.replace(/'/g, "''")
    } else {
      setValue = propValue
    }
    if (type != 'undefined') sql.set(propName, setValue)
    return sql
  }

  this.close = function () {
    if (this.conn) {
      if (!this.autoCommit) {
        this.conn.commit()
      }
      this.conn.close()
      this.conn = null
    }
  }
  this.rollback = function () {
    if (this.conn) {
      if (!this.autoCommit) {
        this.conn.rollback()
      }
      this.conn.close()
      this.conn = null
    }
  }
  this.getMetaData = function (sql) {
    var stmt_total = this.conn.createStatement()
    try {
      var result = stmt_total.executeQuery(sql)
      var meta = result.getMetaData()

      var metadata = []
      for (var i = 1; i <= meta.getColumnCount(); i++) {
        metadata.push({ columnName: meta.getColumnLabel(i), columnType: meta.getColumnType(i), columnTypeName: meta.getColumnTypeName(i), nullable: meta.isNullable(i), precision: meta.getPrecision(i), scale: meta.getScale(i) })
      }

      stmt_total.close()
      return metadata
    } catch (error) {
      stmt_total.close()
      this.conn.close()
      this.debug(error.message)
      throw error
    }
  }

  this.execQuery = function (sql) {
    if (!this.debugUpdateOnly) this.debug(sql)
    var results = this.execQuery_(sql)
    if (this.autoCommit) {
      this.conn.close()
      this.conn = null
    }
    return results
  }
  this.execQuery_ = function (sql) {
    var stmt_total = this.conn.createStatement()
    try {
      var result = stmt_total.executeQuery(sql)
      var meta = result.getMetaData()

      var headers = []
      for (var i = 1; i <= meta.getColumnCount(); i++) {
        headers.push(meta.getColumnLabel(i))
      }
      var results = []
      while (result.next()) {
        var obj = {}
        for (var i = 0; i < headers.length; i++) {
          var columnType = meta.getColumnType(i + 1)
          if (columnType == -6) {
            obj[headers[i]] = result.getBoolean(i + 1) || false
          } else if (columnType <= 5 && columnType >= 4) {
            var val = result.getObject(i + 1)
            obj[headers[i]] = (val === null ? '' : val)
          } else if (columnType <= 8 && columnType >= 6) {
            var val = result.getObject(i + 1)
            obj[headers[i]] = (val === null ? '' : val)
          } else {
            obj[headers[i]] = (result.getString(i + 1) == null ? '' : result.getString(i + 1))
          }
        }
        results.push(obj)
      }
      stmt_total.close()
      return results
    } catch (error) {
      stmt_total.close()
      this.conn.close()
      this.debug(error.message)
      throw error
    }
  }
  this.execUpdate = function (sql) {
    this.debug(sql)
    if (this.nonExecute) {
      return
    }
    try {
      var stmt = this.conn.prepareStatement(sql)
      stmt.addBatch()
      var res = stmt.executeBatch()
      stmt.close()
      if (this.autoCommit) {
        this.close()
      }
      return res[0]
    } catch (error) {
      this.debug(error.message)
      this.conn.close()
      throw error
    }
  }

  function checkNoTypeError (type) {
    if (typeof (type) === 'undefined') {
      throw new Error('テーブル名をtypeプロパティで指定してください：type')
    }
  }
  function genUUID () {
    return (function () {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (S4() + S4() + '_' + S4() + '_' + S4() + '_' + S4() + '_' + S4() + S4() + S4())
    })()
  }
}

function RDbResult (items) {
  this.dbResult = items
  this.resultLength = items.length
  this.currentIndex = 0
  this.startAtIndex = 0

  // hasNext互換メソッド。
  this.hasNext = function () {
    return (this.dbResult.length > 0 && this.currentIndex < this.resultLength)
  }
  // next互換メソッド。
  this.next = function () {
    return this.dbResult[this.currentIndex++]
  }

  // sortBy互換メソッド。
  this.sortBy = function (fieldPath, direction) {
    var obj = this.dbResult[this.currentIndex]
    if (typeof obj === 'undefined') return this
    if (typeof obj[fieldPath] === 'undefined') return this

    var ascending = function (a, b) {
      var aS = a[fieldPath]
      var bS = b[fieldPath]
      if (aS < bS) return -1
      if (aS > bS) return 1
      return 0
    }
    var descending = function (a, b) {
      var aS = a[fieldPath]
      var bS = b[fieldPath]
      if (aS < bS) return 1
      if (aS > bS) return -1
      return 0
    }

    var sorter = ascending
    if (arguments.length == 2 && direction == 1) sorter = descending
    this.dbResult.sort(sorter)

    return this
  }

  this.limit = function (number) {
    if (number + this.startAtIndex <= this.resultLength) {
      this.resultLength = (number + this.startAtIndex)
    }
    return this
  }

  this.startAt = function (number) {
    this.startAtIndex = number
    this.currentIndex = number
    return this
  }

  return this
}
