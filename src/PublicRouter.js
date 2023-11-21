
import React from 'react'
import { Route, Routes } from "react-router";
import FourthPage from './FourthPage';
import FrontPage from './FrontPage';
import SecondPage from './SecondPage';
import SignIn from './SignIn';
import SignUp from './SignUp'



// import FourthPage from './FourthPage';
const PublicRouter = () => {
    return (
        <Routes>
            <Route path='/fourthpage' element={<FourthPage />} />
            <Route path='/' element={<FrontPage />} />
            <Route path='/secondpage' element={<SecondPage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            
            
     
            

        </Routes>
    )
}

export default PublicRouter

