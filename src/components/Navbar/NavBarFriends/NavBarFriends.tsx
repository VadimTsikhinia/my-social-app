import React from 'react';
import style from "./NavBarFriends.module.css"
import {FriendsType} from "../../../redux/reduxStore";

type navBarFriendsPropsType = {
    state: FriendsType
}

export const NavBarFriends = (props: navBarFriendsPropsType) => {

    const friends = props.state && props.state.map(t => <div
            key={t.id}
            className={style.friend}>
            <img
                src={t.avatar}
                alt={t.name}
                title={`${t.name} (${t.id})`}
            />
        </div>
    )

    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <h2>Your friends...</h2>
            </div>
            <div className={style.friends}>
                {friends}
            </div>

        </div>
    );
};
