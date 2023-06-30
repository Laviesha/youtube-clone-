import React from 'react'
import SidebarRow from './BarRow'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';

import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
    <SidebarRow selected Icon={HomeIcon} title="Home"/>
    <SidebarRow Icon={ExploreIcon} title="Explore"/>
    <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
    <hr /> 
    <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
    <SidebarRow Icon={ HistoryOutlinedIcon} title="History"/>
    <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later"/>
    <SidebarRow Icon={FileDownloadOutlinedIcon} title="Downloads"/>
    <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos"/>
    <SidebarRow Icon={KeyboardArrowDownOutlinedIcon} title="Show More"/>
    <hr/>
    <SidebarRow Icon={SettingsTwoToneIcon} title="Settings"/>
    <SidebarRow Icon={FlagTwoToneIcon} title="Report History"/>
    <SidebarRow Icon={HelpTwoToneIcon} title="Help"/>
    <SidebarRow Icon={AnnouncementTwoToneIcon} title="Send Feedback"/>

    </div>
  )
}

export default Sidebar

