// 该组件为UI组件，不能写任何与redux相关的API，
// 可以通过容器组件（子组件）传进来的相关状态，
import React, { Component } from 'react'
// 引入store
// import store from '../redux/store'
// 引入count_action
// import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count_action'
export default class Count extends Component {
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
