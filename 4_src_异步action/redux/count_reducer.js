// 此文件是定义为Count服务的reducer
// 引入
import {INCREMENT,DECREMENT} from './constant'
/**
 * countReducer专门用于加工Count组件的状态
 * @param {*} prestate  第一次调用，传入的是underfined。第二次传入的是之前的状态
 * @param {*} action   动作对象，包含要做事的对象
 */
function countReducer (prestate=0,action){
  /**
   * 如果是初次调用，
   *     (1)prestate是undefined.action是内置的一个动作
   *     (2)给prestate赋初始值，返回prestate作为初始状态
   * 如果不是初次调用，prestate是之前的状态，action是一个动作
   *     (1).根据action中的type值，决定要做哪一种操作（加？减）
   *     (2).根据action中的data值，决定加几或减几
   */
   //从action中取出type，data .
   const {type,data} = action
   //根据stype的类型，决定接下来干什么
   switch (type){
       case INCREMENT:
           return prestate + data
        case DECREMENT:
           return prestate - data    
        default:
            return prestate   
   }    
}
export default countReducer