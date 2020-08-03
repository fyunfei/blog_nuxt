import Vue from 'vue'
import { cover } from '../assets/js/utils'

Vue.filter('folderFilter', function (val) {
  switch (val) {
    case 'Inbox':
      return '收件箱'
    case 'Send':
      return '发件箱'
  }
})

/**
 * @todo
 * @param timeFlag 是否将格式转换为 YYYY-MM-DD HH:mm:ss ，后续考虑增加format参数
 */
Vue.filter('timeFilter', function (timeValue, timeFlag) {
  const nowTime = new Date()
  const nowTimeStamp = new Date().getTime()
  const time = new Date(timeValue)
  const mistiming = nowTimeStamp - timeValue
  let finalTime
  if (timeFlag) {
    const hour = time.getHours()
    const minute = time.getMinutes()
    const sec = time.getSeconds()

    return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} 
    ${cover(hour)}:${cover(minute)}:${cover(sec)}`
  }
  if (mistiming <= 60000) {
    // 一分钟
    finalTime = '刚刚'
  } else if (mistiming >= 60000 && mistiming < 86400000) {
    // 今天
    let minutes = time.getMinutes()
    if (minutes < 10) minutes = '0' + minutes
    finalTime = `今天，${time.getHours()}:${minutes}`
  } else if (
    nowTime.getDate() - 1 === time.getDate() &&
    nowTime.getFullYear() === time.getFullYear()
  ) {
    // 昨天
    let minutes = time.getMinutes()
    if (minutes < 10) minutes = '0' + minutes
    finalTime = `昨天，${time.getHours()}:${minutes}`
  } else if (nowTime.getFullYear() === time.getFullYear()) {
    // 今年
    finalTime = `${time.getMonth()}月${time.getDate()}日`
  } else {
    finalTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
  }
  return finalTime
})
