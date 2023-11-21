import React from 'react'
import './Header.css'
import SerachIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Drop from './Drop';
import Write from './Write';


const Header = () => {
    return (
        <div className='helloheader'>
            <nav className='header'>

                <img className='header_logo'  src='https://logodix.com/logo/1847236.png' alt='' />

                <Drop />
                <div className='header_search'>
                    <input type='text' className='header_searchinput' />
                    <SerachIcon className='header_searchicon' />

                    <div className='header_nav'>


                        <div className='header_option'>

                            <span className='header_option21'><Write /> </span>
                        </div>




                        <a href='./signin' className='header_link' >

                            <div className='header_option'>

                                <span className='header_option2'>Sign In </span>
                            </div>

                        </a>
                        <a href="./signup" className='header_link' >



                            <div className='header_option'>

                                <span className='header_option2'> Sign Up</span>
                            </div>

                        </a>






                        <div className='header_Basketicon'>
                            <ShoppingBasketIcon />
                            <span className='header_optionLineTwo  headerbasket_count'>0</span>
                        </div>






                    </div>





                </div>



            </nav>


        </div>
    )
}

export default Header
