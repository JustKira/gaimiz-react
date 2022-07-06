import React from 'react'
import { connect } from 'react-redux';

import { useLocation , Navigate, Outlet } from 'react-router';
const RequireAuth = (props) => {

    const location = useLocation();

  return (
    props.accessToken? <Outlet/> : <Navigate to="/login" state={{ from: location}} replace />
  )
}

const mapStateToProps = (state) => {
    if(state.auth.state){
        return { 
            accessToken : state.auth.state.access
        }
    }
}

export default  connect(mapStateToProps,null)
(RequireAuth)