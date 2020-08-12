import React, { Component } from 'react'
// 引入connect,用于连接
import {connect} from 'react-redux'
// 引入actionCreator
import {
  incrementAction,
  decrementAction,
  incrementWaitAction
} from '../redux/count_action'

class Count extends Component {
    state={
        school:'尚硅谷'
    }
    // 加
    add=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        //2.通知redux加value
        this.props.increment(value*1)
    }
    // 减
    decrement=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        //2.通知redux减value
        this.props.decrement(value*1)
    }
    addIfOdd=()=>{
        if(this.props.count % 2 !== 0){
           // 获取用户输入的值
            const {value} = this.refs.compone
            //2.通知redux加value
            this.props.increment(value*1)   
        }
    }
    addWait=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        //2.通知redux加value
        this.props.incrementWait(value*1)
       
    }
    render() {
        console.log('CountUI组件接收到的props:',this.props);
        return (
            
            <div>
               <h1>{this.state.school}- 当前和为：{this.props.count}</h1> 
               <select ref='compone'>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
               </select>&nbsp;
               <button onClick={this.add}>+</button>&nbsp;
               <button onClick={this.decrement}>-</button>&nbsp;
               <button onClick={this.addIfOdd}>和为奇数 +</button>&nbsp;
               <button onClick={this.addWait}>延迟后 +</button>
            </div>
        )
    }
}

// 暴露connect()()生成的容器组件
export default connect(
  state =>({count:state}),
  { 
    increment:incrementAction,
    decrement:decrementAction,
    incrementWait:incrementWaitAction,
  }
)(Count)

/**
 * 关于connect你要知道的：
 *    1.用法：const 容器组件 = connect(函数，函数/对象)(UI组件)
 */

/**
 * 我们写的是这样的
 * { 
    increment:incrementAction,
    decrement:decrementAction,
    incrementWait:incrementWaitAction,
  }
 */

//经过connect的加工就生成了，下面的：
/* 
		dispatch => ({
			increment: number => dispatch(incrementAction(number)),
			decrement: number => dispatch(decrementAction(number)),
			incrementWait: number => dispatch(incrementWaitAction(number)),
		}) 
*/