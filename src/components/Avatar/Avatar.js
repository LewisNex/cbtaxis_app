import React from 'react'
import blankAvatar from '../../assets/blank-avatar.jpg';

export default function Avatar(props) {
    return (
        <div>
            <img className='avatar' src={props.driver ? props.driver.img : blankAvatar} alt='driver avatar'></img>
        </div>
    )
}
