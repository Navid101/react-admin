import { ChatBubbleOutlineOutlined, DarkModeOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlined></SearchOutlined>  
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon'></LanguageOutlined>  
            English
          </div>  
          <div className="item">
            <DarkModeOutlined className='icon'></DarkModeOutlined>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className='icon'></NotificationsNoneOutlined>
            <div className="counter">1</div>
          </div>  
          <div className="item">
            <ChatBubbleOutlineOutlined className='icon'></ChatBubbleOutlineOutlined>
            <div className="counter">2</div>
          </div> 
          <div className="item">
            <ListOutlined className='icon'></ListOutlined>
          </div> 
          <div className="item">
            <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
            alt=""
            className='avatar' />
          </div> 
        </div>
      </div>  
    </div>
  )
}

export default Navbar