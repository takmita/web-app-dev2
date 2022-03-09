import Vue from 'vue'
import { messages } from '@/modules/message'

export default () => {
  Vue.prototype.$message = messages
}
