import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/reduxStore";


    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

export const renderedEntireTree = (state = store.getState()) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(()=>{
    const state = store.getState()
    renderedEntireTree(state)
})

renderedEntireTree()


reportWebVitals();
