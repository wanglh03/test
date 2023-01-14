const store =  {
  state: {
    num: 20,
  },
  actions: {  // 只放同步的代码
    add2(newState, action) {
      newState.num += action.value
    },
  },
  // 优化redux-thunk 的异步写法（模仿vuex）
  // 只放异步的方法
  asyncAcitons: {
    asyncAdd1(dispatch) {
      setTimeout(() => {
        dispatch({type: 'add3'})
      }, 1000)
    },
  },
  // 方法名称统一管理
  actionNames: {},
}

let actionNames = {}
for (let key in store.actions) {
  actionNames[key] = key
}

store.actionNames = actionNames

export default store
