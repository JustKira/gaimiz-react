import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Order from './Order';
const CartPage = ({user}) => {

    const [reqData,
        setReqdata] = useState()

    const [renderId,setRenderID] = useState(-1)

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
        if(reqData != null || reqData != undefined) {
            return (
                <div>
                    {reqData.map((order_json, id) => {
                        return <h1 key={id}> <a className='my-20 text-lg uppercase' onClick={() => setRenderID(order_json.id)} > {order_json.id} : {order_json.order_json}</a> </h1>
                    })}
                </div>
            )
        }else {
            return <div> LOADING ...</div>
        }

    }

    return (
        <div><MapOrders/></div>
    )
}
const mapStateToProps = (state) => {
    return {user: state.user.state.id}
}
export default connect(mapStateToProps, null)(CartPage)