// 该文件是定义redux中最核心的管理者---store

// 引入createStore,用于创建redux中最核心的对象---store
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入countReducer
import countReducer from './reducers/count'
// 引入personReducer,用于加工Person组件的状态
import personReducer from './reducers/person'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'
// combineReducers()所传入的对象，就是redux中的总状态对象
const allReducer = combineReducers({
    count:countReducer,
    persons:personReducer
})
// applyMiddleware的作用是让store认可函数
const store = createStore(allReducer,applyMiddleware(thunk))
// 暴露store
export default store
