import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>

    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <div className='h-full overflow-hidden'>
                    <App/>
                </div>
            </BrowserRouter>
        </PersistGate>
    </Provider>
</React.StrictMode>, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
