import React from 'react'
import { Link } from 'react-router-dom';
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'

const ModelInput = ({ title, o1type,option1, option2, option3, button, buttonLink ,handleSubmit }) => {
 
  function onSubmit(formValues){
    console.log(formValues)
  }
  const o3 = ""+option3 
  const o2 = ""+option2
  return (
    <div className='input-row'>
        <form className="input-form" onSubmit={handleSubmit(onSubmit)} >
          <label for='first'>{title}</label>
          <Field component="select"  name={o1type} id="company_select">
            <option value = {option1}>Dell</option>
            <option value = "HP">HP</option>
            <option value = "Lenovo">Lenovo</option>
          </Field>
          <Field component="input" type="text" name={o2.toLowerCase()} placeholder={option2}></Field>
          <Field component="input"  type="text" name={o3.toLowerCase()} placeholder={option3}></Field>
          {button && <Link className='next-btn' to={buttonLink}>NEXT</Link>}

        </form>
      </div>
  )
}

const mapStateToProps = (state) => {
}

export default compose(
  reduxForm({
      form: 'laptop_order',
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true,
  }),
  connect(mapStateToProps,null)
)(ModelInput)