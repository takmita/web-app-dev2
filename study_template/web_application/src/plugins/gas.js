import Vue from 'vue'
import { GoogleScript } from '@/gas/script'

export default () => {
  Vue.prototype.$script = new GoogleScript()
}
