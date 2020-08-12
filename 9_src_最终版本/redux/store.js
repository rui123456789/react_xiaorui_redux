// 该文件是定义redux中最核心的管理者---store

// 引入createStore,用于创建redux中最核心的对象---store
import {createStore,applyMiddleware} from 'redux'

// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'

// 引入
import {composeWithDevTools} from 'redux-devtools-extension'

//引入汇总完的reducer
import reducer from './reducers'

// 引入
// applyMiddleware的作用是让store认可函数
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
// 暴露store
export default store
