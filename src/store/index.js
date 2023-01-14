import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'    // 1.创建store仓库
import reduxThunk from 'redux-thunk'
import UserReducer from './User/reducer'


const reducers = combineReducers({
  UserReducer,
})

// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
// 让浏览器redux插件能正常使用
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose // rt

const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk))); // rt

export default store
