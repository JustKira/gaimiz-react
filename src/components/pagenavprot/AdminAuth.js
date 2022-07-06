import React from 'react'
import { connect } from 'react-redux';

import { useLocation , Navigate, Outlet } from 'react-router';

const AdminAuth = (props) => {

    const location = useLocation();

  return (
    props.user.is_staff? <Outlet/> : <Navigate to="/denyaccess"/>
  )
}

const mapStateToProps = (state) => {
    if(state.auth.state){
        return { 
            user : state.user.state
        }
    }
}

export default  connect(mapStateToProps,null)
(AdminAuth)