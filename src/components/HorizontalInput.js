import React from 'react'

const ModelInput = ({ title, option1, option2, option3, button }) => {
  return (
    <div className='input-row'>
        <form className="input-form">
          <label for='first'>{title}</label>
          <input type="text" name="first" placeholder={option2}></input>
          <input type="text" placeholder={option3}></input>
          {button && <input type="submit" value="NEXT"></input>}
        </form>
      </div>
  )
}

export default ModelInput