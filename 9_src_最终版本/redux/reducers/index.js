import {combineReducers} from 'redux'

// 引入countReducer
import countReducer from './count'
// 引入personReducer,用于加工Person组件的状态
import personReducer from './person'

// combineReducers()所传入的对象，就是redux中的总状态对象
export default combineReducers({
    count:countReducer,
    persons:personReducer
})
