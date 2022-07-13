import './App.css';
import './settings.css';
import './Grid.css';
import WhiteBanner from './components/WhiteBanner';
import VideoHolder from './components/VideoHolder';
import Footer from './components/Footer';
import Header from './components/Header';

import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

import ConsolePage1 from './pages/ConsolePage1';
import LogoPage1 from './pages/LogoPage1';
import ConsoleOrderWizard from './pages/ConsolePage/ConsoleOrderWizard';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import LaptopOrderWizard from './pages/LaptopPage/LaptopOrderWizard';
import RequireAuth from './components/pagenavprot/RequireAuth';
import AdminAuth from './components/pagenavprot/AdminAuth';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPages/AdminPage';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {refreshTokenAction, getUserAction, getEvents} from './redux/actions';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft, faChevronRight, faShoppingCart, faUpload, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import CartPage from './pages/Users/CartPage';

library.add(faChevronLeft, faChevronRight, faShoppingCart, faUpload, faCircleExclamation)

function App(props) {

    let navigate = useNavigate();

    useEffect(() => {
        props.getEvents()
        localStorage.removeItem("image_Path")

        if (props.code === "token_not_valid") {
            return navigate('token-invalid')
        }
        props.refreshTokenAction()
        props.getUserAction()

    }, [])

    useEffect(() => {
        let fourMin = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (props.accessToken != null) {
                props.refreshTokenAction()
                props.getUserAction()
                console.log("refresh")
            }
        }, fourMin);

        return () => clearInterval(interval)

    }, [props.accessToken])

    return (
        <div
            className="bg-[url('../public/assets/background.png')] bg-fixed -z-50 bg-cover bg-center">
                <Header/>
                <Routes>
                <Route path="/" element={< Home />}/>
                    <Route path="/register" element={< RegisterPage />}/>
                    <Route path="/login" element={< LoginPage />}/>

                    <Route element={< RequireAuth />}>
                        <Route path='/profile' element={< ProfilePage />}/>
                        <Route path="/laptop" element={< LaptopOrderWizard />}/>
                        <Route path="/console" element={< ConsoleOrderWizard />}/>
                        <Route path='/cart' element={< CartPage />}/>

                        <Route element={< AdminAuth />}>
                            <Route path="/admin" element={< AdminPage />}/>
                        </Route>

                    </Route>

                    <Route path="/token-invalid" element={<div className="row black-body"><h1> Token is invalid or expired Please Login again </h1></div>}/>
                    <Route path="/autherror" element={<div className="row black-body"><h1> Error You Must Login Before you can make order </h1></div>}/>
                    <Route path="/denyaccess" element={<div className="row black-body"><h1> Error 404 : Page Not Found </h1></div>}/>
                    <Route path="*" element={<div className="row black-body"><h1> Error 404 : Page Not Found</h1></div>}/>

                </Routes>
        </div>
    )
}

const mapStateToProps = (state) => {
    if (state.auth.state) {
        return {accessToken: state.auth.state.access, code: state.auth.state.code}
    }
}

export default connect(mapStateToProps, {
    refreshTokenAction,
    getUserAction,
    getEvents
},)(App)
