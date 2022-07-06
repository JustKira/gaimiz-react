
function eventReducer(state = {events : []},action){
    switch (action.type) {
        case 'GET_EVENTS':
          return { ...state, events : action.payload }
        case 'EVENTS_REFRESH':
          return { ...state, events : action.payload}
        default:
          return state
    }
}
export default eventReducer

