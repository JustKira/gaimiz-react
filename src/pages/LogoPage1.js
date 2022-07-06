import React from 'react'
import LogoSelect from '../components/LogoSelect'
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'

const LogoPage1 = ({nextPage,previousPage,order}) => {
  return (
    <>
    <div className="row black-body">
        <LogoSelect>
        <button onClick={() => previousPage()} className='next-btn'> Back</button>
        <button onClick={() => nextPage()}className='next-btn'> Next</button>
        </LogoSelect>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
}

export default compose(
  reduxForm({
      request : 'laptop_order',
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true,
  }),
  connect(mapStateToProps,null)
)(LogoPage1)