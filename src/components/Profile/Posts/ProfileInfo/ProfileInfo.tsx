import React from "react";
import style from './ProfileInfo.module.css'

type ProfileInfoPropsType = {

}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src={'https://ilovevg.it/wp-content/uploads/2018/08/Cyberpunk-2077-logo-1000x300.jpg'} alt={'profile-img'}/>
            </div>
            <div className={style.descriptionBlock}>
                Ava + descriptions
            </div>
        </div>
    )
}