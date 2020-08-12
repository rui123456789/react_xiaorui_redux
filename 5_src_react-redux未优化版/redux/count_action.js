// 该文件定义为Count组件服务器的actionCreator,专门用于创建和Count组件相关的action对象
import {INCREMENT,DECREMENT} from './constant'
// 创建加的action
export const incrementAction = number => ({type:INCREMENT,data:number})

// 创建一个延迟一会在加的action
export const incrementWaitAction = number =>{
    return (dispatch)=>{
        //这里我们用一个setTimeout模拟了一个异步代码，
        setTimeout(()=>{
            // 调用同步action-incrementAction实现添加
            dispatch(incrementAction(number))
        },500)
    }
}
// 创建减的action
export const decrementAction = number => ({type:DECREMENT,data:number})