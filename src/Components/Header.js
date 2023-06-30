import React , {useState}from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import img from '../images/yt.jpg'
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';

function Header() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const showAlert = () => {
    alert(`Loading: ${inputValue}`);
  };

  return (
    <div className='header'>
     < div className='header__left'>

      <MenuIcon className="icon1"/>
     
      <img className="header__logo"src={img} alt=""/>
      
      </div>

      <div className="header__input">
      <input placeholder='Search' type="text"  value={inputValue} onChange={handleInputChange}/>
      <SearchIcon className="header__inputButton" onClick={showAlert}/>
      <MicIcon className='mic'/>
      </div>
      <div className='icon2'>
      
</div>
<div className="header__icons">
      <VideoCallIcon className="header__icon"/>
      <AppsIcon className="header__icon"/>
      <NotificationsIcon className="header__icon"/>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      
    </div>
  )
}

export default Header
