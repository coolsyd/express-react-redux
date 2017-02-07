import { combineReducers } from 'redux'
import login from './login'
import qr from './qr'

const reducer = combineReducers({
    login:login,
    qr:qr
});

export default reducer;