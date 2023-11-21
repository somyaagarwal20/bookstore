import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Drop.css';
import { Link } from 'react-router-dom';

const Drop = () => {
  return (
   
    <div>
            <Dropdown>

            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dip into
            <ArrowDropDownIcon className='dropdown' />
          </Dropdown.Toggle>

                

                   
                <Dropdown.Menu>
                <div className='dropbar'>
                <div className='menu1'>
                <Dropdown.Item className='drop' href="./fourthpage"><span id='dip'>Dip into</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Paid Stroies</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Adventure</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Fanfiction</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Horror</span ></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Mystrey</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Science Fiction</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Thriller</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Paranomal</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Romance</span></Dropdown.Item>
                </div>
                <div className='menu2'>
                <Dropdown.Item className='drop' href="./fourthpage"><span id='hello'>Editor's Picks</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>The Wattys</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Contemporary Lit</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Diverse Lit</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Fantasy</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Historical Fiction</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Humor</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Teen Fiction</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>LGBT+</span></Dropdown.Item>
                </div>
                <div className='menu3'>
                <Dropdown.Item className='drop' href="./fourthpage"><span id='picks'>Bookworm Picks </span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Editor Choice's</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Dangerous Worlds &#128302; &#129498;</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>A latte love &#128151; &#9749;</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>From our creators </span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./secondpage"><span>Bookworm studio Hits</span></Dropdown.Item>
                <Dropdown.Item className='drop' href="./fourthpage"><span>Writing Contest</span></Dropdown.Item>
                
                </div>
                </div>
                </Dropdown.Menu>
             
            </Dropdown>
        </div>
  )
}

export default Drop
