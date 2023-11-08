import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavBarFriends} from "./NavBarFriends/NavBarFriends";
import {NavBarType} from "../../redux/reduxStore";

type navBarPropsType = {
    store:any
}


export const Navbar = (props: navBarPropsType) => {
    const state:NavBarType  = props.store.getState().navBar

    const activeColor = "gold"
    const navLinks = state.navLinks && state.navLinks.map(t => <NavLink
            key={t.url}
            to={t.url}
            className={style.item}
            style={({isActive}) => ({color: isActive ? activeColor : ""})}
        >
            {t.title}
        </NavLink>
    )

    return (
        <nav className={style.nav}>
            <div className={style.items}>
                {navLinks}
            </div>
            <NavBarFriends state={state.friends}/>
        </nav>
    )
}
