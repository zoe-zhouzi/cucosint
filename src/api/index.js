import requests from "./request"

// 用上面的不知道咋设置参数
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const reqTest = (key) => requests({
    url: `/api/esdata/es/getData?key=${key}`,
    method: 'post',
})

export const reqSearchRes = (data) => requests({
    url: '/api/esdata/es/getData',
    method: 'post',
    data,
    headers // 不加请求头请求会失败
})



