import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const CartPage = ({user}) => {

    const [reqData,
        setReqdata] = useState()

    const [renderId,
        setRenderID] = useState(-1)

    const cartData = async() => {
        let response = await fetch(`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/api/order-list/${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        console.log(data)
        setReqdata(data)

    }
    useEffect(() => {
        cartData()

    }, [])

    const MapOrders = () => {
        if (reqData != null || reqData != undefined) {
            return (
                <div className=''>
                    {reqData.map((order_json, id) => {
                        return <div className='h-26 my-4' key={id}><Order order_json={order_json}/></div>
                    })}
                </div>
            )
        } else {
            return <div>
                LOADING ...</div>
        }

    }

    const Order = (order_json) => {
        const order_values = JSON.parse(order_json.order_json.order_json)

        const OrderImage = () => {
            if (order_values.customimage === "True") {
                return <img
                    className='h-24 mx-4'
                    src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/custom/raw/${order_values.modelimage}`}/>
            } else {
                return <img
                    className='h-24 mx-4'
                    src={`${process.env.REACT_APP_GAIMIZ_BACKEND_URL}/media/products/raw/${order_values.modelimage}`}/>
            }
        }

        if (order_values.order_type === "console") {
            return (
                <div
                className='flex w-full my-10 py-4 gap-4 border-l-8 border-white flex-grow justify-between'>
                    <div className='flex'>
                        <h1 className='mx-2 font-semibold uppercase'>order:
                            <span className='font-thin'>{order_json.order_json.id}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>order_type:
                            <span className='font-thin'>{order_values.order_type}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>model:
                            <span className='font-thin'>{order_values.model}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>type:
                            <span className='font-thin'>{order_values.type}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>body:
                            <span className='font-thin'>{(order_values.body).toString()}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>controlers:
                            <span className='font-thin'>{order_values.control}</span>
                        </h1>
                    </div>
                    <div className='flex'>
                        <h1 className='mx-2 font-semibold text-lg uppercase'>customimage:
                            <span className='font-thin'>{order_values.customimage}</span>
                        </h1>
                        <OrderImage/>
                    </div>

                </div>
            )
        } else {
            return <div
                className='flex w-full my-10 py-4 gap-4 border-l-8 border-white flex-grow justify-between'>
                <h1 className='mx-2 font-semibold uppercase'>order:
                    <span className='font-thin'>{order_json.order_json.id}</span>
                </h1>
                <div className='flex flex-col'>

                    <div className='flex'>

                        <h1 className='mx-2 font-semibold uppercase'>order_type:
                            <span className='font-thin'>{order_values.order_type}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>product:
                            <span className='font-thin'>{order_values.prod}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>model:
                            <span className='font-thin'>{order_values.model}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>year:
                            <span className='font-thin'>{order_values.year}</span>
                        </h1>
                    </div>
                    <div className='flex my-4'>
                        <h1 className='mx-2 font-semibold uppercase'>back:
                            <span className='font-thin'>{(order_values.back).toString()}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>keyboard:
                            <span className='font-thin'>{(order_values.keyboard).toString()}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>back_size
                            <span className=' font-normal'>
                                : L : {order_values.back_dims_x}
                                | W : {order_values.back_dims_y}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>keyboard_size
                            <span className=' font-normal'>
                                : L : {order_values.keyboard_dims_x}
                                | W : {order_values.keyboard_dims_y}</span>
                        </h1>
                        <h1 className='mx-2 font-semibold uppercase'>with logo:
                            <span className='font-thin'>{(order_values.withLogo).toString()}</span>
                        </h1>
                    </div>
                </div>
                <div className='flex'>
                    <h1 className='mx-2 font-semibold text-lg uppercase'>customimage:
                        <span className='font-thin'>{order_values.customimage}</span>
                    </h1>
                    <OrderImage/>
                </div>

            </div>
        }
    }

    return (
        <div className='h-screen text-slate-200 text-2xl'>
            <div className='bg-black mt-10 mx-32 drop-shadow-2xl'>
                <h1 className='text-4xl'>Order History</h1>
                <MapOrders/>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {user: state.user.state.id}
}
export default connect(mapStateToProps,)(CartPage)