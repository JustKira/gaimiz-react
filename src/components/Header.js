import React from 'react'
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const Header = ({user}) => {
    return (
        <nav
            className='flex lg:h-24 md:h-16 sm:h-12 bg-black text-white font-semibold justify-between items-center w-full text-ssm md:text-sm lg:text-base z-50'>
            <ul className="flex px-8">
                <li className="lg:mx-4 lg:px-2 duration-150 ease-in hover:text-cyan-400"><Link to="/cart">Cart
                    <FontAwesomeIcon className='mx-2 hidden md:inline-block' size="sm" icon="shopping-cart"/></Link>
                </li>
                <li className="mx-4 px-2 duration-150 ease-in hover:text-cyan-400">
                    <IsUser user={user}/>
                </li>
            </ul>
            <ul className='flex items-center lg:px-8'>
                <li className='px-2 duration-150 ease-in hover:text-cyan-400'>
                    <Link to="/laptop">Laptop <div className='hidden md:inline-block'>Skins</div></Link>
                </li>
                <li className='px-2 duration-150 ease-in hover:text-cyan-400'>
                    <Link to="/console">Console <div className='hidden md:inline-block'>Skins</div></Link>
                </li>
                <li className='px-2 duration-150 ease-in hover:text-cyan-400'><IsAdmin user={user}/></li>

                <li>
                    <Link to="/">
                        <img src="assets/logo.PNG" alt="Logo" className=" lg:w-24 md:w-18 w-24 py-2"/>
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
                    <h1>{user.state.username}</h1>
                </Link>
            </div>
        )
    } else {
        return (
            <Link to="/login">
                <h1>Login</h1>
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