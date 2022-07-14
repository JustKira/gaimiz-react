import React, {useState} from 'react'
import {Field, formValues, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'
import ResponseWButtonCloseless from '../Ress/ResponseWButtonCloseless'
import { useNavigate } from 'react-router'
const OrderCardLaptopPage = ({order, user, previousPage, handleSubmit}) => {

    const [order_respond,
        setOrder_respond] = useState("")

    const OrderSend = async(user, values, pk) => {

        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/order-create-console/${pk}`, {
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

        let path = localStorage.getItem('image_Path')
        console.log(path)
        if (path === undefined || path === "") {
            formValues.customimage = "false"
            let values = JSON.stringify(formValues)
            OrderSend(user, values, 0)
            return
        }
        let values = JSON.stringify(formValues)
        OrderSend(user, values, path)

    }

    const navigate = useNavigate()
    const PopupHandler = () => {

        if(order_respond === "success") {
            return <ResponseWButtonCloseless
                buttonfunc={() => navigate('/cart')}
                buttontext='Back'
                head='Success'
                info='Order was created and sent successfully HOORAY'/>
        }else if(order_respond === "error"){
            return <ResponseWButtonCloseless
            buttonfunc={() => navigate('/')}
            buttontext='Back'
            head='Failed'
            info='Order couldnt be sent or where was error in order please try again if you still face problem please contact support'/>
        }else {
            return <div></div>
        }
    }

    const ImageHandler = () => {
        let path = localStorage.getItem('image_Path')
        let customimage = JSON.parse(localStorage.getItem('customimage'))
        console.log(customimage, path)
        if (path === "") {
            return ( < div className = 'flex mx-4 lg:mx-10 mb-8  justify-between w-full' > <h1 className='text-ssm md:text-xl text-white'>Selected Image</h1> < img className = 'h-14 md:h-20' src = {
                `${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/raw/${order.modelimage}`
            } /> </div>)
        } else {
            return (
                <div className='flex mx-4 lg:mx-10 mb-8 justify-between w-full '>
                    <h1 className='text-ssm md:text-xl text-white'>
                        Selected Image
                    </h1>
                    <img
                        className='h-14 md:h-20'
                        src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/tmp/${order.modelimage}`}/> {/* <h1 className='text-xl capitalize text-white'>{String(order.modelimage)}</h1> */}
                </div>
            )
        }
    }
    const LaptopCart = () => {
        return (
            <div className='flex ssm flex-col w-full pr-10'>
                <div className='flex mx-4 lg:mx-10 mb-8 justify-between w-full'>
                    <h1 className='text-ssm md:text-xl text-white'>Product</h1>
                    <h1 className='text-ssm md:text-xl text-white'>{order.model}</h1>
                </div>
                <div className='flex  mx-4 lg:mx-10 mb-8 justify-between w-full'>
                    <h1 className='text-ssm md:text-xl text-white'>Laptop Model</h1>
                    <h1 className='text-ssm md:text-xl text-white'>{order.type}</h1>
                </div>
                <ImageHandler/>
                <div className='flex  mx-4 lg:mx-10 mb-8 justify-between w-full'>
                    <h1 className='text-ssm md:text-xl text-white'>Body Print</h1>
                    <h1 className='text-ssm md:text-xl text-white'>{String(order.body)}</h1>
                </div>
                <div className='flex  mx-4 lg:mx-10 mb-8 justify-between w-full'>
                    <h1 className='text-ssm md:text-xl text-white'>Number of Controllers</h1>
                    <h1 className='text-ssm md:text-xl capitalize text-white'>{String(order.control)}</h1>
                </div>
                <div className='flex  mx-4 lg:mx-10 mb-8 justify-between w-full'>
                    <h1 className='text-ssm md:text-xl text-white'>Print With Logo</h1>
                    <h1 className='text-ssm md:text-xl capitalize text-white'>{String(order.withLogo)}</h1>
                </div>
            </div>
        )
    }

    return (

        <div className='h-full py-10'>
            <PopupHandler/>
            <div
                className='mx-10 lg:mx-80 my-8 lg:my-40 px-10 lg:px-20 pb-10 lg:pb-80 pt-10 rounded-2xl bg-black relative '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-white text-lg lg:text-2xl font-bold mt-2 mb-6 lg:my-10'>
                        Cart (Confirm your order)</h1>
                    <LaptopCart/>
                    <div className='flex'>
                        <button
                            onClick={() => previousPage()}
                            className=" text-white border-4 py-2 tracking-widest rounded-xl text-sm lg:text-lg font-bold bg-cyan-400 border-cyan-400 md:rounded-3xl uppercase drop-shadow-black mr-2 w-1/2 md:mr-20">
                            Back</button>
                        <button
                            onClick="submit"
                            className=" text-white border-4 py-2   tracking-widest rounded-xl text-sm  lg:text-lg font-bold bg-cyan-400 border-cyan-400 md:rounded-3xl uppercase drop-shadow-black  ml-2 md:ml-20 w-1/2">
                            Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {order: state.form.console_order.values, user: state.user.state.id}
}
export default compose(reduxForm({form: 'console_order', destroyOnUnmount: false, forceUnregisterOnUnmount: true}), connect(mapStateToProps, null))(OrderCardLaptopPage)