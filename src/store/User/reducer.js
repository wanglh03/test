import store from './index'


let reducer = (state = {...store.state}, action) => {
  // 调用 dispatch 就会执行
  let newState = JSON.parse(JSON.stringify(state))   // 深拷贝

  // 思路 switch 是拿着action type 和后面的每一个进行对比
  // 这种做法很像遍历 那就把case后面的值做成对象 actionNames
  // switch(action.type) {
  //     case handleNum.add1 :
  //     handleNum.actions[handleNum.add1](newState)
  //     break
  //     case handleNum.add2 :
  //     handleNum.actions[handleNum.add2](newState, action)
  //     break
  //     default:
  //     break
  // }
  for (let key in store.actionNames) {
    if (action.type === store.actionNames[key]) {
      store.actions[store.actionNames[key]](newState, action)
      break
    }
  }
  // 这样写每次写一个方法都不需要手动添加了
  return newState
}

export default reducer
