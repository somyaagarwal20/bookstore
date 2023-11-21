import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';
import './Write.css'

const Write = () => {
  return (
    <div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="write">
     Write
      <ArrowDropDownIcon className='dropdown' />
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <div className='create'>
      <Dropdown.Item className='write_content' href="#/action-1"><span><EditCalendarTwoToneIcon className='plus'/>Create a new story</span></Dropdown.Item>
      <Dropdown.Item className='write_content' href="#/action-2"><span>My Stories</span></Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='write_content' href="#/action-3"><span>Helpfule writer resources</span></Dropdown.Item>
      <Dropdown.Item className='write_content' href="#/action-2"><span>Bookworm Programs</span><span> & opportunities</span></Dropdown.Item>
      <Dropdown.Item className='write_content' href="#/action-2"><span>Writing Contest</span></Dropdown.Item>
      </div>
    </Dropdown.Menu>
  </Dropdown>
    </div>
  )
}

export default Write
