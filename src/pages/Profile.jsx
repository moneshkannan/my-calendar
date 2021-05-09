import React from 'react'
import MyAcc from '../Components/AccPage/MyAcc'
import Navbar from '../Components/Navbar/Navbar'

function Profile() {
    return (
        <div>
            <Navbar  active={true}/>
            <MyAcc/>
        </div>
    )
}

export default Profile
