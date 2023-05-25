import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='home'>
      <HomeIcon/>
      <span>Home</span>
      </div>

      <div className='explore'>
      <ExploreIcon/>
      <span>Explore</span>
      </div>

      <div className='subs'>
      <SubscriptionsIcon/>
      <span>Subsxriptions</span>
    </div>
    </div>
  )
}

export default Sidebar
