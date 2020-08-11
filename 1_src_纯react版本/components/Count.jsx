import React, { Component } from 'react'

export default class Count extends Component {
    state={
        count:0
    }
    // 加
    add=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        // 获取当前结果
        const {count} = this.state
        // 更新状态
        this.setState({count:count + value*1})

    }
    // 减
    jian=()=>{
        // 获取用户输入的值
        const {value} = this.refs.compone
        // 获取当前结果
        const {count} = this.state
        // 更新状态
        this.setState({count:count - value*1})
    }
    addIfOdd=()=>{
        if(this.state.count % 2 !== 0){
           // 获取用户输入的值
            const {value} = this.refs.compone
            // 获取当前结果
            const {count} = this.state
            // 更新状态
            this.setState({count:count + value*1})
        }
    }
    addWait=()=>{
        setTimeout(()=>{
            // 获取用户输入的值
            const {value} = this.refs.compone
            // 获取当前结果
            const {count} = this.state
            // 更新状态
            this.setState({count:count + value*1})
        },500)
    }
    render() {
        return (
            <div>
               <h1>和为：{this.state.count}</h1> 
               <select ref='compone'>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
               </select>&nbsp;
               <button onClick={this.add}>+</button>&nbsp;
               <button onClick={this.jian}>-</button>&nbsp;
               <button onClick={this.addIfOdd}>和为奇数 +</button>&nbsp;
               <button onClick={this.addWait}>延迟后 +</button>
            </div>
        )
    }
}
