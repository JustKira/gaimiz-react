import jwt_decode from "jwt-decode"
//AuthReducer
export const userLogin = (email,password) => async (dispatch,getState) => { 


        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/token/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'email':email,'password':password}),
            //redirect: 'follow'
        })
        let data = await response.json()
        console.log(data)
        dispatch({ type: 'USER_LOGIN', payload: data })
        dispatch(getUserAction())
        
}
export const userLogoutAction = () => {
    return { type : 'USER_LOGOUT'}
}
export const refreshTokenAction = () => async (dispatch,getState) => {

    let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/token/refresh`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':getState().auth.state.refresh})
    })
    let data = await response.json()

    var finalreq = {"refresh":getState().auth.state.refresh , "access":data.access} 

    dispatch({type: 'TOKEN_REFRESH', payload : finalreq})
}

export const getUserAction = () => async (dispatch,getState) => {

    const access = jwt_decode(getState().auth.state.access)
    //const access = jwt_decode(state.access)
    let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/user/${access.user_id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await response.json()
    console.log(data)
    dispatch({type: 'GET_USER_DATA', payload : data})
}

export const createUserAction = () => async (dispatch,getState) =>{
    
}

export const getEvents = () => async ( dispatch,getState) => {
    let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/events`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await response.json()

    let response2 = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/prod-list`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data2 = await response2.json()
    dispatch({type: 'GET_EVENTS', payload : data})
    dispatch({type: 'GET_IMAGES_LIST', payload : data2})
}
