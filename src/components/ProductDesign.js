import React from 'react'
import { Field } from 'redux-form'

const ProductDesign = ({id,click}) => {

  const id_str = "slide-" + id
  return (
    <div id={id_str}>
      <Field component="input" type="radio" id={'assets/'+id+'.jpg'} name="modelimage" value={'model'+id+'.jpg'} onClick={()=> click(id)}/>
      <label for={'assets/'+id+'.jpg'} ><img src={`http://127.0.0.1:8000/media/products/raw/product${id}.png`} /></label>
    </div>
  )
}

export default ProductDesign