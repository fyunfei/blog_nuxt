export function checkRepeat(arr) {
  const hash = {}
  for (const val of arr) {
    if (hash[val]) {
      return true
    }
    hash[val] = true
  }
  return false
}
/**
 * @description 用于自助查询时间戳转换，常规时间戳转换使用timeStamp方法
 * @param {*} date
 * @param {*} timeFlag 是否解析为类似15:33时间格式
 */
export function queryTimeStamp(date, timeFlag) {
  const now = new Date()
  const current = new Date(date)
  const nowYear = now.getFullYear()
  const year = now.getFullYear()
  const nowMonth = now.getMonth()
  const month = current.getMonth()
  const nowDay = now.getDate()
  const day = current.getDate()
  const flag = year === nowYear && month === nowMonth
  if (timeFlag) {
    return `${cover(current.getHours())}:${cover(current.getMinutes())}`
  }
  if (flag && nowDay === day) {
    return `今天（${getWeek(current.getDay())}）`
  } else if (flag && nowDay - 1 === day) {
    return `昨天（${getWeek(current.getDay())}）`
  } else {
    return `${year}-${month}-${day}（${getWeek(current.getDay())}）`
  }
}
/**
 * @description 补位
 */
export function cover(date) {
  if (parseInt(date) < 10) {
    return '0' + date
  }
  return date
}

function getWeek(day) {
  switch (day) {
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
    case 0:
      return '星期日'
  }
}
