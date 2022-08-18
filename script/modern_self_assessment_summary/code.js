// スプレッドシート関連情報
// 参照しているシート名
const REFERENCE_SHEET = {
  SELF_ASSESSMENT: 'モダン自己評価',
  MIDTERM_REVIEW: '中間ふりかえり',
  SETTING: '環境設定シート'
}

/**
 * スプレッドシートを開いた時に起動する関数
 * カスタムメニューを追加する
 */
function onOpen () {
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('カスタムメニュー', [
      {name: '今開いてるシートのモダン自己評価記録を更新する', functionName: 'updateSelfAssessmentRecordOperation'}
    ])
}

/**
 * トリガーで実行する関数
 * 全てのチャレンジャーシートの該当日付データにモダン自己評価を貼り付ける
 */
function updateSelfAssessmentRecordTrigger() {
  let challengerData = []
  try {
    // 環境設定シートからデータを取得する
    challengerData = selectChallengerData_()
  } catch {
    let message = 'モダン自己評価を更新しようとしたらエラーが発生したよっ :cry:\n'
    message += 'エラーになった処理: selectChallengerData\n'
    Logger.log(message)

    return
  }
    
  // challengerDataを元に各チャレンジャーごとにシートを更新する
  const digestMessages = []
  const errorMessages = []
  for (challenger of challengerData) {
    try {
      // 更新対象シートの諸々のデータを取得する
      const updateSheetData = selectUpdateSheetData_(challenger.name)

      // 更新対象シートを更新する
      const digestMessage = updateSelfAssessmentRecord_({ ...challenger, ...updateSheetData })

      digestMessages.push(`${challenger.name}さん：　${digestMessage}`)
    } catch (e) {
      errorMessages.push(`${challenger.name}さん：　${e}`)
    }
  }

  Logger.log('digestMessages: ', digestMessages)
  Logger.log('errorMessages: ', errorMessages)
}

/**
 * スプレッドシートを開いて実行する関数
 * 1つのチャレンジャーシートの該当日付データにモダン自己評価を貼り付ける
 */
function updateSelfAssessmentRecordOperation () {
  // 環境設定シートからデータを取得する
  const challengerData = selectChallengerData_()

  // 更新対象シートの諸々のデータを取得する
  const updateSheetData = selectUpdateSheetData_(SpreadsheetApp.getActiveSheet().getName())

  // 開いているシートが各チャレンジャーシート以外の場合は処理を終了する
  if (!challengerData.some(challenger => challenger.name === updateSheetData.name)) {
    Browser.msgBox('このシートでは実行できません。\\n各チャレンジャーシートで実行してください。')
    return
  }

  // 更新対象の確認ダイアログを表示する
  const updateRow = updateSheetData.thisTimeRange.getRow()
  if (Browser.msgBox(`${updateRow} 行目のデータを更新しますが、更新対象合ってますか？`, Browser.Buttons.OK_CANCEL) === 'cancel') {
    return
  }

  // 更新対象シートを更新する
  const email = challengerData.find(challenger => challenger.name === updateSheetData.name).email
  try {
    updateSelfAssessmentRecord_({ email, ...updateSheetData })
  } catch (e) {
    Browser.msgBox(e)
    return
  }
}

/**
 * 環境設定シートのデータを取得する
 */
function selectChallengerData_ () {
  // 環境設定シートを取得し、ヘッダーを取り除く
  const settingSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(REFERENCE_SHEET.SETTING).getDataRange().getValues()
  settingSheetValues.shift()

  return settingSheetValues.map(setting => {
    return {
      name: setting[0],
      email: setting[1]
    }
  })
}

/**
 * 更新対象シートの諸々のデータを取得する
 */
function selectUpdateSheetData_ (name) {
  // 開いているシートとシート名を取得する
  const mySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name)
  const mySheetValues = mySheet.getDataRange().getValues()

  // データがなかったら処理終了する
  if (!(mySheetValues.length > 1 || mySheetValues[0].length > 1)) {
    return {
      name: mySheet.getName(),
      thisTimeRange: null,
      learnEagernessReasonRange: null,
      openReasonRange: null,
      competenceReasonRange: null,
      subjectiveReasonRange: null,
      harmonyReasonRange: null,
      strengthenElementRange: null,
      strengthenActionRange: null,
      midtermReviewRange: null
    }
  }

  // 更新する学習記録範囲を特定する
  const updateRowNum = 1
  const updateRowFirstTime = 2
  const updateRowThisTime = calcUpdateRowThisTime_(mySheet)
  const updateColumn = 1 //年月から
  const updateNumColumn = mySheetValues[0].length // 中間ふりかえりまで

  return {
    name: mySheet.getName(),
    thisTimeRange: mySheet.getRange(updateRowThisTime, updateColumn, updateRowNum, updateNumColumn),
    learnEagernessReasonRange: mySheet.getRange(updateRowFirstTime, 4),
    openReasonRange: mySheet.getRange(updateRowFirstTime, 6),
    competenceReasonRange: mySheet.getRange(updateRowFirstTime, 8),
    subjectiveReasonRange: mySheet.getRange(updateRowFirstTime, 10),
    harmonyReasonRange: mySheet.getRange(updateRowFirstTime, 12),
    strengthenElementRange: mySheet.getRange(updateRowFirstTime, 13),
    strengthenActionRange: mySheet.getRange(updateRowFirstTime, 14),
    midtermReviewRange: mySheet.getRange(updateRowFirstTime, 16)
  }
}

function calcUpdateRowThisTime_ (mySheet) {
  const today = new Date()
  const lastRow = mySheet.getLastRow()
  const lastRowDate = mySheet.getRange(lastRow, 1).getValue()
  return (lastRow > 1 && lastRowDate && lastRowDate.getFullYear() === today.getFullYear() && lastRowDate.getMonth() === today.getMonth())
    ? lastRow
    : lastRow + 1
}

/**
 * 更新対象シートを更新する（モダン自己評価）
 */
function updateSelfAssessmentRecord_ ({ email, thisTimeRange, learnEagernessReasonRange, openReasonRange, competenceReasonRange, subjectiveReasonRange, harmonyReasonRange, strengthenElementRange, strengthenActionRange, midtermReviewRange }) {
  const today = new Date()
  const searchStartDate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0)
  const searchEndDate = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59)

  // 各種シートからチャレンジャー名に紐づくデータを取得する
  const selfAssessmentData = selectSelfAssessmentData_(email, searchStartDate, searchEndDate)
  const midtermReviewData = selectMidtermReviewData_(email, searchStartDate, searchEndDate)

  // 更新データを作成する
  const updateThisTimeValues = thisTimeRange.getValues()
  if (selfAssessmentData) {
    updateThisTimeValues[0][0] = Utilities.formatDate(searchStartDate, 'JST', 'yyyy/MM/dd') // 年月
    updateThisTimeValues[0][1] = Utilities.formatDate(selfAssessmentData.selfAssessmentDate, 'JST', 'yyyy/MM/dd') // 自己評価回答日
    updateThisTimeValues[0][2] = Number(selfAssessmentData.learnEagernessPoint) // 学習意欲評価
    updateThisTimeValues[0][3] = '' // 学習意欲評価理由
    updateThisTimeValues[0][4] = Number(selfAssessmentData.openPoint) // オープン評価
    updateThisTimeValues[0][5] = '' // オープン評価理由
    updateThisTimeValues[0][6] = Number(selfAssessmentData.competencePoint) // 言語力評価
    updateThisTimeValues[0][7] = '' // 言語力評価理由
    updateThisTimeValues[0][8] = Number(selfAssessmentData.subjectivePoint) // 主体性評価
    updateThisTimeValues[0][9] = '' // 主体性評価理由
    updateThisTimeValues[0][10] = Number(selfAssessmentData.harmonyPoint) // 協調性評価
    updateThisTimeValues[0][11] = '' // 協調性評価理由
    updateThisTimeValues[0][12] = '' // 改善・強化マインド要素
    updateThisTimeValues[0][13] = '' // 改善・強化tryAction
  }
  if (midtermReviewData) {
    updateThisTimeValues[0][14] = Utilities.formatDate(midtermReviewData.midtermReviewDate, 'JST', 'yyyy/MM/dd') // 中間ふりかえり回答日
    updateThisTimeValues[0][15] = '' // 中間ふりかえり  
  }

  // 更新データをスプレッドシートに反映する
  thisTimeRange.setValues(updateThisTimeValues)
  if (selfAssessmentData) {
    learnEagernessReasonRange.setValue(selfAssessmentData.learnEagernessReason) // 学習意欲評価理由
    openReasonRange.setValue(selfAssessmentData.openReason) // オープン評価理由
    competenceReasonRange.setValue(selfAssessmentData.competenceReason) // 言語力評価理由
    subjectiveReasonRange.setValue(selfAssessmentData.subjectiveReason) // 主体性評価理由
    harmonyReasonRange.setValue(selfAssessmentData.harmonyReason) // 協調性評価理由
    strengthenElementRange.setValue(selfAssessmentData.strengthenElement) // 改善・強化マインド要素
    strengthenActionRange.setValue(selfAssessmentData.strengthenAction) // 改善・強化tryAction
  }
  if (midtermReviewData) {
    midtermReviewRange.setValue(midtermReviewData.midtermReview) // 中間ふりかえり
  }
}

/**
 *モダン自己評価シートから指定されたチャレンジャー名、日付に紐づくデータを取得する
 */
function selectSelfAssessmentData_ (myEmail, searchStartDate, searchEndDate) {
  const selfAssessmentSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(REFERENCE_SHEET.SELF_ASSESSMENT).getDataRange().getValues()
  const myData = selfAssessmentSheetValues
    .filter(row => row[1] === myEmail)
    .filter(row => searchStartDate.getTime() <= row[0].getTime() && row[0].getTime() <= searchEndDate.getTime())
  const latestIndex = myData.length - 1

  return latestIndex === -1
    ? null // アンケート回答がなかったときはnullを返す
    : {
      selfAssessmentDate: myData[latestIndex][0], // 自己評価回答日
      learnEagernessPoint: myData[latestIndex][2], // 学習意欲評価
      learnEagernessReason: myData[latestIndex][3], // 学習意欲評価理由
      openPoint: myData[latestIndex][4], // オープン評価
      openReason: myData[latestIndex][5], // オープン評価理由
      competencePoint: myData[latestIndex][6], // 言語力評価
      competenceReason: myData[latestIndex][7], // 言語力評価理由
      subjectivePoint: myData[latestIndex][8], // 主体性評価
      subjectiveReason: myData[latestIndex][9], // 主体性評価理由
      harmonyPoint: myData[latestIndex][10], // 協調性評価
      harmonyReason: myData[latestIndex][11], // 協調性評価理由
      strengthenElement: myData[latestIndex][12], // 改善・強化マインド要素
      strengthenAction: myData[latestIndex][13] // 改善・強化tryAction
    }
}

/**
 * 中間ふりかえりシートから指定されたチャレンジャー名、日付に紐づくデータを取得する
 */
function selectMidtermReviewData_ (myEmail, searchStartDate, searchEndDate) {
  const midtermReviewSheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(REFERENCE_SHEET.MIDTERM_REVIEW).getDataRange().getValues()
  const myData = midtermReviewSheetValues
    .filter(row => row[1] === myEmail)
    .filter(row => searchStartDate.getTime() <= row[0].getTime() && row[0].getTime() <= searchEndDate.getTime())
  const latestIndex = myData.length - 1

  return latestIndex === -1
    ? null // アンケート回答がなかったときはnullを返す
    : {
      midtermReviewDate: myData[latestIndex][0], //ふりかえり日
      midtermReview: myData[latestIndex][2], //中間ふりかえり
    }
}

/**
 * シート名を取得する（スプレッドシートのセル内で使用する関数）
 */
function sheetName() {
  return SpreadsheetApp.getActiveSheet().getName();
}
