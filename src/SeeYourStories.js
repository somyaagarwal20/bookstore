import React from 'react'
import './SeeYourStories.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const SeeYourStories = () => {
  return (
    <div className='stories'>

      <div className='see'><span>See Your Stroies</span></div>
      <div className='innericon'>

      <div className='icon1'>
      <div className='icon1-1'>
      <LiveTvIcon />
      </div>
      <div className='icon1-2'><span>Get produced to movie or film</span></div>
      
      </div>
      <div className='icon1'>
      <div className='icon1-1'><GroupWorkIcon /></div>
      <div className='icon1-2'><span>Get adapted to a TV series</span></div>
      
      </div>
      <div className='icon1'>
      <div className='icon1-10'><AutoStoriesIcon/></div>
      <div className='icon1-2'><span id='get'>Get published</span></div>
      
      </div>
      
      
      
      </div>



    </div>
  )
}

export default SeeYourStories
