

function authReducer(state = { state:{} },action){
    switch (action.type) {
        case 'USER_LOGIN':
          return { ...state, state : action.payload }
        case 'TOKEN_REFRESH':
          return { ...state, state : action.payload}
        case 'USER_LOGOUT':
          return { ...state, state : null }
        default:
          return state
    }
}
export default authReducer

