const fetch = require('node-fetch')
const wanxiang = async () => {
  const token = process.env.WANXIANG_TOKEN
  const cookie = process.env.WANXIANG_COOKIE
  if (!token || !cookie) return
  console.log('通义万相 开始签到')
  return fetch('https://wanxiang.aliyun.com/wanx/api/common/inspiration/dailySignReward', {
    'headers': {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json',
      'priority': 'u=1, i',
      'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'x-platform': 'web',
      'x-xsrf-token': token,
      cookie
    },
    'referrer': 'https://tongyi.aliyun.com/wanxiang/',
    'referrerPolicy': 'no-referrer-when-downgrade',
    'body': '{}',
    'method': 'POST',
    'mode': 'cors',
    'credentials': 'include'
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log)
}

const yige = async () => {
  const token = process.env.YIGE_TOKEN
  const cookie = process.env.YIGE_COOKIE
  if (!token || !cookie) return
  console.log('文心一格 开始签到')
  return fetch(`https://yige.baidu.com/api/t2p/points/task_complete?t=${+new Date}&appname=pc&ptask_type=6`, {
    'headers': {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'acs-token': token,
      'content-type': '*/*',
      'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      cookie
    },
    'referrer': 'https://yige.baidu.com/personal/center',
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'body': null,
    'method': 'GET',
    'mode': 'cors',
    'credentials': 'include'
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log)
}

const main = async (sign) => {
  return Object.keys(sign).map(key => sign[key]())
}

main({
  wanxiang,
  yige
})