
function imageReducer(state = null,action){
    switch (action.type) {
        case 'GET_IMAGES_LIST':
          return { ...state, lpl : action.payload }
        default:
          return state
    }
}
export default imageReducer

