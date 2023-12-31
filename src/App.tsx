import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


type AppStateType = {
    store: any
}

export const App: React.FC<AppStateType> = (props) => {


    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar store={props.store}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<Profile
                        store={props.store}
                    />}/>
                    <Route path={'/profile'} element={<Profile
                        store={props.store}
                    />}/>
                    <Route path={'/dialogs'} element={<Dialogs
                        store={props.store}
                    />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
