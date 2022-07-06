function userReducer(state = { state : null}, action){
    switch (action.type) {
        case 'GET_USER_DATA':
          return { ...state, state : action.payload }
        case 'USER_LOGOUT':
          return { ...state, state : null }
        default:
          return state
    }
}
export default userReducer