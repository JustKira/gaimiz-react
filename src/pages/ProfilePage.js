import React from 'react'
import { connect } from 'react-redux'

const ProfilePage = (props) => {
  return (
    <div className="row black-body">
      <div>ProfilePage</div>
      <button onClick={() => props.dispatch({type:"USER_LOGOUT"})}>Logout</button>
    </div>
  )
}

export default connect(null,null)(ProfilePage)