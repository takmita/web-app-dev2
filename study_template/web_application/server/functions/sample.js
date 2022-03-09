import { EsmRdb } from '../util/EsmRdb.js'

/**
 * xxx
 * @param
 * @returns
 */
export default function sample () {
  // SQL実行
  return EsmRdb().execQuery(buildSQL())
}

const buildSQL = () => {
  // SQLの作成
  return `
    SQLを書く
  `
}
