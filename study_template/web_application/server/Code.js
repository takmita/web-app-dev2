import { EsmRdb } from './util/EsmRdb'
import { setSQ } from './util/squel'
import doGet from './functions/doGet'
import sample from './functions/sample'

global.settings = (function () {
  // eslint-disable-next-line no-undef
  return JSON.parse(HtmlService.createHtmlOutputFromFile('settings.json').getContent())
}())

global.SQ = setSQ()

global.EsmRdb = EsmRdb
global.doGet = doGet
global.sample = sample
