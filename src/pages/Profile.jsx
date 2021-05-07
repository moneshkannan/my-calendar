import React from 'react'
import MyAcc from '../Components/AccPage/MyAcc'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

function Profile() {
    return (
        <div>
            <Navbar  active={true}/>
            <MyAcc/>
            <Footer/>
            
        </div>
    )
}

export default Profile
