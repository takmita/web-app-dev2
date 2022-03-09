import { MockScript } from '../mock/mockScript'

const mockScript = new MockScript()

export class GoogleScript {
  sample () {
    return this.run('sample')
  }

  /**
   * サーバ関数の呼び出し
   * @function : サーバの関数
   * @args : 関数引数（オブジェクト）
   */
  run (functionName, args) {
    console.log('functionName:' + functionName)
    console.log('args:', args)
    if (process.env.VUE_APP_MODE === 'mock') {
      // mockの関数を呼び出し
      return new Promise((resolve, reject) => {
        return resolve(mockScript[functionName](args))
      })
    } else {
      // 本来のサーバ関数を呼び出し
      if (typeof window.google === 'undefined' || window.google.script === 'undefined') {
        return Promise.resolve()
      }

      return new Promise((resolve, reject) => {
        window.google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)[functionName](args)
      })
    }
  }
}
