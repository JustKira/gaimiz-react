import React from 'react'
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const Header = ({user}) => {
    return (
        <nav
            className='flex h-24 bg-black text-white font-semibold justify-between items-center w-full '>
            <ul className="flex px-8">
                <li className="mx-4 px-2 duration-150 ease-in hover:text-cyan-400">Cart
                    <FontAwesomeIcon className='mx-2' size="sm" icon="shopping-cart"/>
                </li>
                <li className="mx-4 px-2 duration-150 ease-in hover:text-cyan-400">
                    <IsUser user={user}/>
                </li>
            </ul>
            <ul className='flex items-center px-8'>
                <li className='px-2 duration-150 ease-in hover:text-cyan-400'>
                    <Link to="/laptop">Laptop Skins</Link>
                </li>
                <li className='px-2 duration-150 ease-in hover:text-cyan-400'>
                    <Link to="/console">Console Skins</Link>
                </li>
                <li className='px-2 duration-150 ease-in hover:text-cyan-400'><IsAdmin user={user}/></li>

                <li>
                    <Link to="/">
                        <img src="assets/logo.PNG" alt="Logo" className=" h-16"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const IsUser = ({user}) => {
    if (user.state !== null) {
        return (
            <div>
                <Link to="/profile">
                    <h>{user.state.username}</h>
                </Link>
            </div>
        )
    } else {
        return (
            <Link to="/login">
                <h>Login</h>
            </Link>
        )
    }
}

const IsAdmin = ({user}) => {
    if (user.state !== null) {
        if (user.state.is_staff === true) {
            return (
                <div>
                    <Link to="/admin">
                        <h>Panel</h>
                    </Link>
                </div>
            )
        } else {
            return <div></div>
        }
    } else {
        return <div></div>
    }
}

const mapStateToProps = (state) => {

    return {user: state.user}
}

export default connect(mapStateToProps, null)(Header)

// {user.state.username?   (     <>     <h>{user.state.username}</h>     <button
// onClick={() => dispatch({ type: 'USER_LOGOUT' })}> Logout</button>     </> )
//  :    <link to="/login"><h>Login</h></link>}