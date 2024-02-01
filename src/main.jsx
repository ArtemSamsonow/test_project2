import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App.jsx'

import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/test_project2">
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
