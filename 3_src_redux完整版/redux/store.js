// 该文件是定义redux中最核心的管理者---store

// 引入createStore,用于创建redux中最核心的对象---store
import {createStore} from 'redux'
// 引入countReducer
import countReducer from './count_reducer'


// 调用createStore可以生成一个store对象
const store = createStore(countReducer)
// 暴露store
export default store
