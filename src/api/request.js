// 对于axios进行二次封装
import axios from "axios"

// 利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    // baseUrl: 'api',
    //代表请求超时的时间5s
    timeout: 5000,
})

// requests.interceptors.request.use((config)=>{

// })

requests.interceptors.response.use((res)=>{
    return res.data
}, (error) => {
    return Promise.reject(new Error('fail'))
})

export default requests