import React, {useState} from 'react'
import {Field, formValues, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'

const OrderCardLaptopPage = ({order, user, previousPage, handleSubmit}) => {

    const [order_respond,
        setOrder_respond] = useState("")

    const OrderSend = async(user, values, pk) => {

        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/order-create/${pk}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'user': user, 'order_json': values})
        })
        let data = await response.json()
        setOrder_respond(data)
    }

    function onSubmit(formValues) {

        if (formValues.keyboard === true) {
            formValues.keyboard = "True"
        } else {
            formValues.keyboard = "False"
        }
        if (formValues.back === true) {
            formValues.back = "True"
        } else {
            formValues.back = "False"
        }

        let path = localStorage.getItem('image_Path')
        console.log(path)
        if (path === undefined || path === "undefined") {
            formValues.customimage = "false"
            let values = JSON.stringify(formValues)
            OrderSend(user, values, 0)
            return
        }
        let values = JSON.stringify(formValues)
        OrderSend(user, values, path)

    }

    const ImageHandler = () => {
        let path = localStorage.getItem('image_Path')
        let customimage = JSON.parse(localStorage.getItem('customimage'))
        console.log(customimage,path)
        if (path === "") {
            return ( < div className = 'flex mx-10 mb-8 justify-between w-full' > <h1 className='text-xl text-white'>Selected Image</h1> < img className = ' h-20' src = {
                `${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/raw/${order.modelimage}`
            } /> </div>)
        } else {
            return (
                <div className='flex mx-10 mb-8 justify-between w-full '>
                    <h1 className='text-xl text-white'>
                        Selected Image
                    </h1>
                    <img
                        className=' h-20'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/tmp/${order.modelimage}`}/> {/* <h1 className='text-xl capitalize text-white'>{String(order.modelimage)}</h1> */}
                </div>
            )
        }
    }
        const LaptopCart = () => {
            return (
                <div className='flex flex-col w-full pr-10'>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Product</h1>
                        <h1 className='text-xl text-white'>{order.prod}</h1>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Laptop Model</h1>
                        <h1 className='text-xl text-white'>{order.model}</h1>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Model Year</h1>
                        <h1 className='text-xl text-white'>{order.year}</h1>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Print On Back</h1>
                        <h1 className='text-xl capitalize text-white'>{String(order.back)}</h1>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Print On Keyboard</h1>
                        <h1 className='text-xl capitalize text-white'>{String(order.keyboard)}</h1>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Print On Back</h1>
                        <h1 className='text-xl capitalize text-white'>{String(order.back)}</h1>

                    </div>

                    <ImageHandler/>

                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Back Dims</h1>
                        <div className='flex'>
                            <h1 className='text-xl capitalize mx-2 text-white'>Length : {String(order.back_dims_x)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>Width : {String(order.back_dims_y)}</h1>
                        </div>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Keyboard Dims</h1>
                        <div className='flex'>
                            <h1 className='text-xl capitalize mx-2 text-white'>Length : {String(order.keyboard_dims_x)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>Width : {String(order.keyboard_dims_y)}</h1>
                        </div>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Other1</h1>
                        <div className='flex'>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other1)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other1_dims_x)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other1_dims_y)}</h1>
                        </div>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Other2</h1>
                        <div className='flex'>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other2)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other2_dims_x)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other2_dims_y)}</h1>
                        </div>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>Other3</h1>
                        <div className='flex'>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other3)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other3_dims_x)}</h1>
                            <h1 className='text-xl capitalize mx-2 text-white'>{String(order.other3_dims_y)}</h1>
                        </div>
                    </div>
                    <div className='flex mx-10 mb-8 justify-between w-full'>
                        <h1 className='text-xl text-white'>With Logo</h1>
                        <div className='flex'>
                            <h1 className='text-xl capitalize text-white'>{String(order.withLogo)}</h1>

                        </div>
                    </div>
                </div>
            )
        }

        return (

            <div className='mx-80 my-40 px-20 pb-80 pt-10 rounded-2xl bg-black relative'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-white text-2xl font-bold my-10'>
                        Cart (Confirm your order)</h1>
                    <LaptopCart/>
                    <h1 className='mt-10 text-white'>{order_respond}</h1>
                    <div className='flex'>
                        <button onClick={() => previousPage()}  className=" text-white border-4 py-2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-3xl uppercase drop-shadow-black  w-1/2 mr-20">
                            Back</button>
                        <button onClick="submit"  className=" text-white border-4 py-2 tracking-widest text-lg font-light bg-cyan-400 border-cyan-400 rounded-3xl uppercase drop-shadow-black  ml-20 w-1/2">
                            Confirm</button>
                    </div>
                </form>
            </div>

        )
    }

    const mapStateToProps = (state) => {
        return {order: state.form.laptop_order.values, user: state.user.state.id}
    }
    export default compose(reduxForm({form: 'laptop_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(OrderCardLaptopPage)