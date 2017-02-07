import { createSelector } from 'reselect'

const login = (state) => state.login;

export default  createSelector(
    [login],
    (login) => {
        return {
            isLogin: login.isLogin,
            isLogining: login.isLogining
        }
    }
)