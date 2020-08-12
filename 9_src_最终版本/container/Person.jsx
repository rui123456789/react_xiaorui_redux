import React,{Component} from 'react'
// 引入connect，用于连接
import {connect} from 'react-redux'
// 引入添加一个人的方法
import {addpersonAction} from '../redux/actions/person'

class Person extends Component{

    // 增加人的信息
    addPerson=()=>{
        // 获取输入的value值
        let {nameNode:{value:name},ageNode:{value:age}} = this.refs
        // 判断
        if(!name || !age) {
            alert('名字和年龄不能为空！')
            return
        }
        // 通知redux添加一个人
        this.props.addPersonObj({id:Date.now(),name,age})
        // 清空输入框
        this.refs.nameNode.value=''
        this.refs.ageNode.value=''
    }
    render(){
        return (
            <div>
                <h1>我是Person组件,上方组件求和为：{this.props.count}</h1>
                <input type="text" placeholder='请输入名字' ref='nameNode'/>
                <input type="text" placeholder='年龄' ref='ageNode'/>
                <button onClick={this.addPerson}>增加一个人的信息</button>
                <ul>
                    {
                        this.props.persons.map((person)=>{
                            return(
                                <li key={person.id}>
                                    姓名：{person.name},年龄：{person.age}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    (state)=>({
        // 映射状态
        count:state.count,
        persons:state.persons
    }),
    {
        // 映射操作的方法
        addPersonObj:addpersonAction
    }
)(Person)