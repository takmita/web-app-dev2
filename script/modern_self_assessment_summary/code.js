// スプレッドシート関連情報
// 参照しているシート名
const REFERENCE_SHEET = {
  SELF_ASSESSMENT: 'モダン自己評価',
  MIDTERM_REVIEW: '中間ふりかえり',
  SETTING: '環境設定シート'
}

//Slack関連情報
// メッセージ投稿情報
const POST_URL = 'https://hooks.slack.com/services/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'
const POST_USER_NAME = 'ひよこちゃん'
const POST_ICON = ':hatching_chick:'

/**
 * スプレッドシートを開いた時に起動する関数
 * カスタムメニューを追加する
 */
function onOpen () {
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu("カスタムメニュー", [
      {name: "今開いてるシートのモダン自己評価記録を更新する", functionName: "updateSelfAssessmentRecordOperation"},
      {name: "今開いてるシートの中間ふりかえり記録を更新する", functionName: "updateMidtermReviewRecordOperation"}
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
    // team_modern_studyチャンネルにエラーメッセージを投稿して、処理終了する
    let message = "モダン自己評価を更新しようとしたらエラーが発生したよっ :cry:\n"
    message += "エラーになった処理: selectChallengerData\n"
    notifySlack_(message)

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

  // team_modern_studyチャンネルに完了メッセージを投稿する
  const message = makeSelfAssessmentCompleteMessage_(digestMessages, errorMessages)
  notifySlack_(message)
}

/**
 * トリガーで実行する関数
 * 全てのチャレンジャーシートの該当日付データに中間ふりかえりを貼り付ける
 */
 function updateMidtermReviewRecordTrigger () {
  let challengerData = []
  try {
    // 環境設定シートからデータを取得する
    challengerData = selectChallengerData_()
  } catch {
    // team_modern_studyチャンネルにエラーメッセージを投稿して、処理終了する
    let message = "モダン自己評価を更新しようとしたらエラーが発生したよっ :cry:\n"
    message += "エラーになった処理: selectChallengerData\n"
    notifySlack_(message)

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
      const digestMessage = updateMidtermReviewRecord_({ ...challenger, ...updateSheetData })

      digestMessages.push(`${challenger.name}さん：　${digestMessage}`)
    } catch (e) {
      errorMessages.push(`${challenger.name}さん：　${e}`)
    }
  }

  // team_modern_studyチャンネルに完了メッセージを投稿する
  const message = makeMidtermReviewCompleteMessage_(digestMessages, errorMessages)
  notifySlack_(message)
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
 * スプレッドシートを開いて実行する関数
 * 1つのチャレンジャーシートの該当日付データに中間ふりかえりを貼り付ける
 */
function updateMidtermReviewRecordOperation () {
  // 環境設定シートからデータを取得する
  const challengerData = selectChallengerData_()

  // 更新対象シートの諸々のデータを取得する
  const updateSheetData = selectUpdateSheetData_(SpreadsheetApp.getActiveSheet().getName())

  // 開いているシートが各チャレンジャーシート以外の場合は処理を終了する
  if (!challengerData.some(challenger => challenger.name === updateSheetData.name)) {
    Browser.msgBox('このシートでは実行できません。\\n各チャレンジャーシートで実行してください。')
    return
  }

  // モダン自己評価を実行する前に実施した場合は処理を終了する
  if (!updateSheetData.thisTimeRange.getValues()[0][0]) {
    Browser.msgBox('まだ中間ふりかえりの反映はできません。\\n先にモダン自己評価を反映後、実行してください。')
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
    updateMidtermReviewRecord_({ email, ...updateSheetData })
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
    learnEagernessReasonRange: mySheet.getRange(updateRowFirstTime, 3),
    openReasonRange: mySheet.getRange(updateRowFirstTime, 5),
    competenceReasonRange: mySheet.getRange(updateRowFirstTime, 7),
    subjectiveReasonRange: mySheet.getRange(updateRowFirstTime, 9),
    harmonyReasonRange: mySheet.getRange(updateRowFirstTime, 11),
    strengthenElementRange: mySheet.getRange(updateRowFirstTime, 12),
    strengthenActionRange: mySheet.getRange(updateRowFirstTime, 13),
    midtermReviewRange: mySheet.getRange(updateRowFirstTime, 14)
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
function updateSelfAssessmentRecord_ ({ email, thisTimeRange, learnEagernessReasonRange, openReasonRange, competenceReasonRange, subjectiveReasonRange, harmonyReasonRange, strengthenElementRange, strengthenActionRange }) {
  const today = new Date()
  const searchStartDate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0)
  const searchEndDate = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59)

  // 各種シートからチャレンジャー名に紐づくデータを取得する
  const selfAssessmentData = selectSelfAssessmentData_(email, searchStartDate, searchEndDate)

  // 該当データがない場合はエラーをスローする
  if (!selfAssessmentData) {
    throw new Error('回答中です')
  }

  // 更新データを作成する
  const updateThisTimeValues =  thisTimeRange.getValues()
  updateThisTimeValues[0][0] = Utilities.formatDate(searchStartDate, "JST", "yyyy/MM/dd") // 年月
  updateThisTimeValues[0][1] = Number(selfAssessmentData.learnEagernessPoint) // 学習意欲評価
  updateThisTimeValues[0][2] = '' // 学習意欲評価理由
  updateThisTimeValues[0][3] = Number(selfAssessmentData.openPoint) // オープン評価
  updateThisTimeValues[0][4] = '' // オープン評価理由
  updateThisTimeValues[0][5] = Number(selfAssessmentData.competencePoint) // 言語力評価
  updateThisTimeValues[0][6] = '' // 言語力評価理由
  updateThisTimeValues[0][7] = Number(selfAssessmentData.subjectivePoint) // 主体性評価
  updateThisTimeValues[0][8] = '' // 主体性評価理由
  updateThisTimeValues[0][9] = Number(selfAssessmentData.harmonyPoint) // 協調性評価
  updateThisTimeValues[0][10] = '' // 協調性評価理由
  updateThisTimeValues[0][11] = '' // 改善・強化マインド要素
  updateThisTimeValues[0][12] = '' // 改善・強化tryAction
  updateThisTimeValues[0][13] = '' // 中間ふりかえり

  // 更新データをスプレッドシートに反映する
  thisTimeRange.setValues(updateThisTimeValues)
  learnEagernessReasonRange.setValue(selfAssessmentData.learnEagernessReason) // 学習意欲評価理由
  openReasonRange.setValue(selfAssessmentData.openReason) // オープン評価理由
  competenceReasonRange.setValue(selfAssessmentData.competenceReason) // 言語力評価理由
  subjectiveReasonRange.setValue(selfAssessmentData.subjectiveReason) // 主体性評価理由
  harmonyReasonRange.setValue(selfAssessmentData.harmonyReason) // 協調性評価理由
  strengthenElementRange.setValue(selfAssessmentData.strengthenElement) // 改善・強化マインド要素
  strengthenActionRange.setValue(selfAssessmentData.strengthenAction) // 改善・強化tryAction

  // ダイジェストメッセージとして改善・強化tryActionを返す
  return makeDigestMessage_(selfAssessmentData.strengthenAction)
}

/**
 * 更新対象シートを更新する（中間ふりかえり）
 */
 function updateMidtermReviewRecord_ ({ name, email, midtermReviewRange }) {
  const today = new Date()
  const searchStartDate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0)
  const searchEndDate = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59)

  // 各種シートからチャレンジャー名に紐づくデータを取得する
  const midtermReviewData = selectMidtermReviewData_(email, searchStartDate, searchEndDate)
   
  // 該当データがない場合はエラーをスローする
  if (!midtermReviewData) {
    throw new Error(`${name} さんは回答中です`)
  }
   
  // 更新データをスプレッドシートに反映する
  midtermReviewRange.setValue(midtermReviewData.midtermReview) // 中間ふりかえり

  // ダイジェストメッセージとして改善・強化tryActionを返す
  return makeDigestMessage_(midtermReviewData.midtermReview)
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
      midtermReview: myData[latestIndex][2], //中間ふりかえり
    }
}

function makeSelfAssessmentCompleteMessage_ (digestMessages, errorMessages) {
  let message = "<!channel> \n"
  message += "モダン自己評価を学習記録に更新したよっ\n"

  if (digestMessages.length) {
    message += "\n" + digestMessages.join("\n") + "\n"
  }

  message += "\n"
  message += "詳しくはコチラを見てね :baby_chick:\n"
  message += "https://datastudio.google.com/s/rdVaSsI1-8o\n"

  if (errorMessages.length) {
    message += "\n----------\n"
    message += errorMessages.join("\n")
  }

  return message
}

function makeMidtermReviewCompleteMessage_ (digestMessages, errorMessages) {
  let message = "<!channel> \n"
  message += "モダン自己評価の中間ふりかえりを学習記録に更新したよっ\n"

  if (digestMessages.length) {
    message += "\n" + digestMessages.join("\n") + "\n"
  }

  message += "\n"
  message += "詳しくはコチラを見てね :baby_chick:\n"
  message += "https://datastudio.google.com/s/rdVaSsI1-8o\n"

  if (errorMessages.length) {
    message += "\n----------\n"
    message += errorMessages.join("\n")
  }

  return message
}

function makeDigestMessage_ (message) {
  return message.replace(/\r?\n/g, ' ').substring(0, 13) + '...'
}

/**
 * Slackにメッセージを送信する
 */
function notifySlack_ (message) {
    const options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify({
        "username": POST_USER_NAME,
        "icon_emoji": POST_ICON,
        "text": message
      })
    }

    UrlFetchApp.fetch(POST_URL, options)
}

/**
 * シート名を取得する（スプレッドシートのセル内で使用する関数）
 */
function sheetName() {
  return SpreadsheetApp.getActiveSheet().getName();
}
