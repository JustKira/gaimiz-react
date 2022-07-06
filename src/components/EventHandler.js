import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../redux/actions'


const EventHandler = ({events}) => {

  return <div className='event-post'> {events.map((e) => (<img width="200" src={`http://127.0.0.1:8000${e.image}`}/>))} Empty</div>
}

const mapStateToProps = (state) => {

  return { 
    events : state.events.events
}
}

export default connect(mapStateToProps,getEvents)(EventHandler)