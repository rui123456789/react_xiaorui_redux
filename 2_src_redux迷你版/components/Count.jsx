import React, { Component } from 'react'
// 引入store
import store from '../redux/store'
export default class Count extends Component {
    state={
        school:'尚硅谷'
    }
    // 加
    add=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        // 分发从store得到的数据
        store.dispatch({type:'increment',data:value*1})   
    }
    // 减
    decrement=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        // 
        store.dispatch({type:'decrement',data:value*1})
    }
    addIfOdd=()=>{
        if(store.getState() % 2 !== 0){
           // 获取用户输入的值
            const {value} = this.refs.compone
             // 分发从store得到的数据
            store.dispatch({type:'increment',data:value*1})   
        }
    }
    addWait=()=>{
        setTimeout(()=>{
            // 获取用户输入的值
            const {value} = this.refs.compone
            store.dispatch({type:'increment',data:value*1})  
        },500)
    }
    render() {
        return (
            <div>
               <h1>{this.state.school}- 当前和为：{store.getState()}</h1> 
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
