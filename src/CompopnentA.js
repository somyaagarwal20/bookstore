import React from 'react'
import './ComponentA.css'

const CompopnentA = () => {
    return (
        <div className='we_are_bookworm'>
            <div className='bookworm'>
            <div className='content1'>
                <div className='content'><span id='worm'>Hi, we're </span><span id='hi' >Bookworm. </span><span id='world'>The world's most-loved social storytelling platform</span><span id='global'>Bookworm connects a global community of 25 million readers and writers through the power of story.</span>

                <div className='buttons'>
                <div className='button_1'>
                <a href='./secondpage' className='header_link' >
                <button type="button" onclick="alert('Hello world!')">Start Writing</button>
                </a>
                </div>
                
                <div className='button_2'>
                <a href='./fourthpage' className='header_link' >
                <button  type="button">Start Reading</button>
                </a>
                </div>
                </div>
                
                
                </div>

                <div className='contenta'>
                
                <div className='laptom_img'>
                <img src='https://imobie-resource.com/en/support/img/how-to-transfer-music-from-iphone-to-itunes-1.png' alt=''/>
                </div>
                
                </div>
            </div>
            </div>

            <div className='booksheleves'>
            <div className='hiii'>
            <div className='your_voice'>
           <div className='head'> <span>Bookworm</span></div>
           <div className='loggo'> <img className='header_logo'id='logooo' src='https://logodix.com/logo/1847236.png' alt='' /></div>
            </div>
            <div className='belongs'><span>Your voice belongs on bookshelves</span></div>
            <div className='reflect'><span>Bookworm Books aspires to recognize and reflect diverse voices by taking Bookworm stories to published book and onto bookshelves around the world.</span></div>
            </div>
            <div id='hi2'>
            <div className='shoesimg'>
            <img src=' https://www.booktopia.com.au/covers/big/9781524852191/1013/you-are-here.jpg' alt='' />
            
            </div>
            
            </div>
            </div>

            <div className='link'>
            <div className='linkspan'>
            <a href=',/fourthpage' className='linkkk' >
                <span >Find out more about what we do for writes</span>
                </a>
                </div>
            </div>
        </div>
    )
}

export default CompopnentA
