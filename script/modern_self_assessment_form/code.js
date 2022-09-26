// 参照先スプレッドシート
const SELF_ASSESSMENT_ID = '1SwLS5Lx0Ia6k6nIkwjhWwmR3rLdEKwiFNs70teXgeIU'
const FORM_SHEET_NAME = 'フォームの回答 1'
const SETTING_SHEET_NAME = '環境設定シート'

// メッセージ投稿情報
const POST_URL = 'https://hooks.slack.com/services/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'

/**
 * 月初の自己評価アンケート（自己評価編）を送信するトリガー関数
 */
function sendSelfAssessmentForm1Trigger() {
  const FUNC_NAME = 'sendSelfAssessmentForm1Trigger'
  let message = '<!subteam^S03B8LSN7KP> \n\n'
  message += '毎月恒例の自己評価アンケート（自己評価編）だよっ :baby_chick: \n'
  message += 'なるべく1週間以内に回答よろしくお願いしますピヨ \n'
  message += '難しそうでしたら、お気軽にご連絡ください。 \n'
  message += '\n'
  message += 'https://docs.google.com/forms/d/e/1FAIpQLSeOWzS1CjajE0oUiJhuBUGckALA6vHLF37_ZeFZHd20uNqNoQ/viewform \n'

  notifySlack_(message)

  // 次回トリガーのを設定する
  const triggerDate = makeTriggerDate_(1, 8, 30)
  deleteTrigger_(FUNC_NAME)
  setTrigger_(FUNC_NAME, triggerDate)
}

/**
 * 月中の自己評価アンケート（中間ふりかえり編）を送信するトリガー関数
 */
function sendSelfAssessmentForm2Trigger () {
  const FUNC_NAME = 'sendSelfAssessmentForm2Trigger'
  let message = '<!subteam^S03B8LSN7KP> \n\n'
  message += '毎月恒例の自己評価アンケート（中間ふりかえり編）だよっ :baby_chick: \n'
  message += 'なるべく1週間以内に回答よろしくお願いしますピヨ \n'
  message += '難しそうでしたら、お気軽にご連絡ください。 \n'
  message += '\n'
  message += 'https://docs.google.com/forms/d/e/1FAIpQLSfwxDJbjoeumHBdvMiFNWVZoxbJqqTdOHWSPPGQCjIjHUDutw/viewform \n'
  
  // 自己評価アンケート（自己評価編）の今月の回答状況を取得して、未回答者はメッセージを追加する
  const responseStatus = selectSelfAssessmentResponseStatus_(new Date())
  if (responseStatus.noAnswers.length) {
    message += '\n'
    message += '---------- \n'
    message += `自己評価アンケート（自己評価編）の回答がまだの方: ${responseStatus.noAnswers.map(answer => answer + 'さん').join(', ')} \n`
    message += '下記URLからご回答よろしくお願いしますピヨ \n'
    message += 'https://docs.google.com/forms/d/e/1FAIpQLSeOWzS1CjajE0oUiJhuBUGckALA6vHLF37_ZeFZHd20uNqNoQ/viewform \n'
  }

  notifySlack_(message)

  // 次回トリガーのを設定する
  const triggerDate = makeTriggerDate_(14, 8, 30)
  deleteTrigger_(FUNC_NAME)
  setTrigger_(FUNC_NAME, triggerDate)
}

/**
 * 自己評価アンケート（自己評価編）の回答状況を返す
 */
function selectSelfAssessmentResponseStatus_(targetDate) {
  // 回答データと環境設定データを取得し、それぞれヘッダーを取り除く
  const spreadSheet = SpreadsheetApp.openById(SELF_ASSESSMENT_ID)
  const formValues = spreadSheet.getSheetByName(FORM_SHEET_NAME).getDataRange().getValues()
  const settingValues = spreadSheet.getSheetByName(SETTING_SHEET_NAME).getDataRange().getValues()
  formValues.shift()
  settingValues.shift()

  const targetResponses = formValues.filter(value =>
    value[0].getFullYear() === targetDate.getFullYear() && value[0].getMonth() === targetDate.getMonth()
  )

  return settingValues.reduce((previousValue, currentValue) => {
    const isAnswer = targetResponses.some(response => response[1] === currentValue[1])
    const pushTo = isAnswer ? previousValue.answers : previousValue.noAnswers
    pushTo.push(currentValue[0])
    return previousValue
  }, { answers: [], noAnswers: [] })
}

/**
 * Slackにメッセージを送信する
 */
function notifySlack_ (message) {
    const options = {
      'method': 'post',
      'contentType': 'application/json',
      'payload': JSON.stringify({
        'text': message
      })
    }

    UrlFetchApp.fetch(POST_URL, options)
}

/**
 * 翌月の指定した日付（休日の場合、翌営業日）、時間のDateオブジェクトを返す
 */
function makeTriggerDate_(day, hour, minute){
  const tempDay = new Date()
  const triggerDate = calcLastBusinessNextDate_(new Date(tempDay.getFullYear(), tempDay.getMonth() + 1, day))
  triggerDate.setHours(hour)
  triggerDate.setMinutes(minute)

  return triggerDate
}

/**
 * 指定した日の翌営業日を算出する
 */
function calcLastBusinessNextDate_(date){
  // 日本の祝日カレンダーを取得
  const calJa = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com')
 
  // 最終営業日に月末日を代入し、曜日・祝日該当を判定していく
  let businessNextDate = new Date(date)
  for (let i = 1; i < 30; i++) {
    // 月末日の曜日を判定して平日かつ祝日に該当しない場合は最終営業日とする。
    // getDay()メソッド：日曜日を0として土曜日6まで数値を返す
    const dayOWeek = businessNextDate.getDay()
 
    // 条件分岐で日曜日・土曜日・日本の祝日の該当日であった場合は1日翌日にずらす
    if (dayOWeek == 0 || dayOWeek == 6 || calJa.getEventsForDay(businessNextDate).length > 0) {
      businessNextDate.setDate(businessNextDate.getDate() + 1);
      continue
    }
    break
  }
  return businessNextDate //例：Mon May 31 2021 00:00:00 GMT+0900 (Japan Standard Time)
}

/**
 * トリガーを設定する
 */
function setTrigger_(func, triggerDate) {
  ScriptApp.newTrigger(func).timeBased().at(triggerDate).create()
}

/**
 * トリガーを削除する
 */
function deleteTrigger_(func) {
  // このプロジェクトで設定しているトリガーを配列で取得する
  const triggers = ScriptApp.getProjectTriggers();
  
  // 配列を1要素ずつチェックし、実行する関数名が指定されたfuncと同一の場合トリガーを削除する
  for(let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == func) {
      ScriptApp.deleteTrigger(triggers[i])
    }
  }
}
