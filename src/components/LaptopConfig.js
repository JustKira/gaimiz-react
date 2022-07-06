import React, {useEffect, useState} from 'react'
import WhiteBannerLaptop from './WhiteBannerLaptop'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {compose} from 'redux'
import ProductDesign from './ProductDesign';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

const FileInput = ({
    input: {
        value: omitValue,
        onChange,
        onBlur,
        ...inputProps
    },
    meta: omitMeta,
    ...props
}) => <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}/>

const LaptopConfig = ({nextPage, previousPage, handleSubmit, images_list, user ,path,setPath}) => {

    const [image,
        setImage] = useState(-1)

    const [useci,
        setUseci] = useState(false)

    const SendCustomImage = async(e) => {

        if (path !== undefined) {
            let response = await fetch(`http://127.0.0.1:8000/api/custom-image-clear/${path}`, {method: 'POST'})
        }
        setPath(undefined)
        const uploadData = new FormData()
        console.log(user)
        uploadData.append('image', e)
        uploadData.append('user', user.id)
        let response = await fetch(`http://127.0.0.1:8000/api/custom-image/${user.id}`, {
            method: 'POST',
            body: uploadData
        })
        let data = await response.json()
        console.log(data)
        setPath(parseInt(data.id))
    }

    const onSubmit = (formValues) => {

        if ((formValues.modelimage !== null || path !== undefined) && formValues.keyboard === true || formValues.back === true) {

            if (useci === true) {
                formValues.modelimage = `customProduct${path}.png`
                console.log("test")
            }
            nextPage()
        }
    }

    const ChangeImage = (id) => {
        setImage(id)
        console.log(`changed id :${id}`)
        console.log(image)
    }

    return (
        <div>
            <WhiteBannerLaptop image={image} custom={path}/>
            <div className="row black-body console-config-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col span-1-of-3">
                        <h3>BACK</h3>

                        <div>
                            <label>ADD</label>
                            <Field component="input" type="checkbox" id="back" name="back"/>
                        </div>
                        <p>150 LE</p>
                    </div>
                    <div className="col span-1-of-3"></div>
                    <div className="col span-1-of-3">
                        <h3>KEYBOARD</h3>
                        <div>
                            <label>ADD</label>
                            <Field component="input" type="checkbox" id="keyboard" name="keyboard"/>
                        </div>
                        <p>150 LE</p>
                    </div>
                    <div class="slider">

                        <a href="#slide-1">1</a>
                        <a href="#slide-4">2</a>
                        <a href="#slide-5">3</a>
                        <a href="#slide-6">4</a>

                        <div class='carousel'>
                            {[...Array(parseInt(images_list.list))].map((elementInArray, index) => (<ProductDesign key={index} id={index} click={() => ChangeImage(index)}/>))}
                        </div>
                        <button type="button" onClick={() => setUseci(!useci)} className='next-btn'>
                            Custom image</button>
                        {useci
                            ? <Field
                                    component={FileInput}
                                    name="customimage"
                                    onChange={(e) => SendCustomImage(e)}
                                    value={`customProduct${path},png`}/>
                            : <div></div>}

                    </div>
                    <button onClick={() => previousPage()} className='next-btn'>
                        Back</button>
                    <button type="submit" className='next-btn'>
                        Next</button>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {images_list: state.images.lpl, user: state.user.state}
}
export default compose(reduxForm({form: 'laptop_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(LaptopConfig)