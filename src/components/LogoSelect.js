import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'

const LogoSelect = (props) => {
  return (
    <div className='logo-select'>
    <div className='row'>
        <h4>Do you want the brand logo printed?</h4>
    </div>
      <div className='row logo-btns'>
          <div className="col span-1-of-2">
              <Field className='hidden' component="input" type="radio" id={'wlogo'} name="withLogo" value="True"/>
              <label for="wlogo"><img src = "assets/white.PNG" alt='Logo on'/></label>
              <h4>WITH LOGO PRINTED ON SKIN</h4>
          </div>
          <div className="col span-1-of-2">
              <Field className='hidden' component="input" type="radio" id={'wologo'} name="withLogo" value="False"/>
              <label for="wologo"><img src = "assets/white.PNG" alt='Logo on'/></label>
              <h4>WITHOUT LOGO PRINTED ON SKIN</h4>
          </div>
          <div>
            {props.children}
          </div>
      </div>
    </div>
  )
}

export default compose(
  reduxForm({
      form: 'laptop_order',
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true,
  }),
  connect(null,null)
)(LogoSelect)