import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import hotelesReduccer from './hotelesReducer'

export default combineReducers({
    login: loginReducer,
    hoteles: hotelesReduccer
})