// 引入React核心库
import React from 'react'
// 引入react-dom
import ReactDOM from 'react-dom'
// 引入store
import store from './redux/store'
// 引入App
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'))
// 订阅store，
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})