import {ADD_PERSON} from '../constant'
// 添加一个人的action(同步action)
export const addpersonAction = personObj => ({type:ADD_PERSON,data:personObj})