// メッセージ投稿情報
const POST_URL = 'https://hooks.slack.com/services/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'
const POST_USER_NAME = 'ひよこちゃん'
const POST_ICON = ':hatching_chick:'

/**
 * 月初の自己評価アンケート（自己評価編）を送信するトリガー関数
 */
function sendSelfAssessmentForm1Trigger () {
  let message = "<!モダンチャレンジャー> \n"
  message += "毎月恒例の自己評価アンケート（自己評価編）だよっ :baby_chick: \n"
  message += "なるべく1週間以内に回答よろしくお願いしますピヨ \n"
  message += "難しそうでしたら、お気軽にご連絡ください。 \n"
  message += "\n"
  message += "https://docs.google.com/forms/d/e/1FAIpQLSeOWzS1CjajE0oUiJhuBUGckALA6vHLF37_ZeFZHd20uNqNoQ/viewform\n"

  notifySlack_(message)
}

/**
 * 月中の自己評価アンケート（中間ふりかえり編）を送信するトリガー関数
 */
function sendSelfAssessmentForm2Trigger () {
  let message = "<!モダンチャレンジャー> \n"
  message += "毎月恒例の自己評価アンケート（中間ふりかえり編）だよっ :baby_chick: \n"
  message += "なるべく1週間以内に回答よろしくお願いしますピヨ \n"
  message += "難しそうでしたら、お気軽にご連絡ください。 \n"
  message += "\n"
  message += "https://docs.google.com/forms/d/e/1FAIpQLSfwxDJbjoeumHBdvMiFNWVZoxbJqqTdOHWSPPGQCjIjHUDutw/viewform\n"
  
  notifySlack_(message)
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
