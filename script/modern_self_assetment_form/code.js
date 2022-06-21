// メッセージ投稿情報
const POST_URL = 'https://hooks.slack.com/services/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'
const POST_USER_NAME = 'ひよこちゃん'
const POST_ICON = ':hatching_chick:'

/**
 * 月初の自己評価アンケート（自己評価編）を送信するトリガー関数
 */
function sendSelfAssessmentForm1Trigger() {
  const FUNC_NAME = 'sendSelfAssessmentForm1Trigger'
  let message = "<!モダンチャレンジャー> \n"
  message += "毎月恒例の自己評価アンケート（自己評価編）だよっ :baby_chick: \n"
  message += "なるべく1週間以内に回答よろしくお願いしますピヨ \n"
  message += "難しそうでしたら、お気軽にご連絡ください。 \n"
  message += "\n"
  message += "https://docs.google.com/forms/d/e/1FAIpQLSeOWzS1CjajE0oUiJhuBUGckALA6vHLF37_ZeFZHd20uNqNoQ/viewform\n"

  notifySlack_(message)

  deleteTrigger(FUNC_NAME)

  // 次回トリガーの設定日を求める
  const tempDay = new Date()
  let triggerDate = new Date(tempDay.getFullYear(), tempDay.getMonth() + 1, 14)
  triggerDate = calcLastBusinessNextDate(triggerDate)
  triggerDate.setHours(8)
  triggerDate.setMinutes(30)
  
  setTrigger(FUNC_NAME, triggerDate)
}

/**
 * 月中の自己評価アンケート（中間ふりかえり編）を送信するトリガー関数
 */
function sendSelfAssessmentForm2Trigger () {
  const FUNC_NAME = 'sendSelfAssessmentForm2Trigger'
  let message = "<!モダンチャレンジャー> \n"
  message += "毎月恒例の自己評価アンケート（中間ふりかえり編）だよっ :baby_chick: \n"
  message += "なるべく1週間以内に回答よろしくお願いしますピヨ \n"
  message += "難しそうでしたら、お気軽にご連絡ください。 \n"
  message += "\n"
  message += "https://docs.google.com/forms/d/e/1FAIpQLSfwxDJbjoeumHBdvMiFNWVZoxbJqqTdOHWSPPGQCjIjHUDutw/viewform\n"
  
  notifySlack_(message)

  deleteTrigger(FUNC_NAME)

  // 次回トリガーの設定日を求める
  const tempDay = new Date()
  let triggerDate = new Date(tempDay.getFullYear(), tempDay.getMonth() + 1, 1)
  triggerDate = calcLastBusinessNextDate(triggerDate)
  triggerDate.setHours(8)
  triggerDate.setMinutes(30)

  setTrigger(FUNC_NAME, triggerDate)
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
 * 指定した日の翌営業日を算出する
 */
function calcLastBusinessNextDate(date){
  // 日本の祝日カレンダーを取得
  const calJa = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com')
 
  // 最終営業日に月末日を代入し、曜日・祝日該当を判定していく
  for (let i = 1; i < 30; i++) {
    // 月末日の曜日を判定して平日かつ祝日に該当しない場合は最終営業日とする。
    // getDay()メソッド：日曜日を0として土曜日6まで数値を返す
    const dayOWeek = date.getDay()
 
    // 条件分岐で日曜日・土曜日・日本の祝日の該当日であった場合は1日翌日にずらす
    if (dayOWeek == 0 || dayOWeek == 6 || calJa.getEventsForDay(date).length > 0) {
      date = new Date(today.getFullYear(), today.getMonth() + 2, 1 * i)
      continue
    }
    break
  }
  return date //例：Mon May 31 2021 00:00:00 GMT+0900 (Japan Standard Time)
}

/**
 * トリガーを設定する
 */
function setTrigger(func, triggerDate) {
  ScriptApp.newTrigger(func).timeBased().at(triggerDate).create()
}

/**
 * トリガーを削除する
 */
function deleteTrigger(func) {
  // このプロジェクトで設定しているトリガーを配列で取得する
  const triggers = ScriptApp.getProjectTriggers();
  
  // 配列を1要素ずつチェックし、実行する関数名が指定されたfuncと同一の場合トリガーを削除する
  for(let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == func) {
      ScriptApp.deleteTrigger(triggers[i])
    }
  }
}
