import { KeyboardArrowDown, KeyboardArrowUp, MoreVertRounded } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import "./featured.scss"
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRounded fontSize='small'></MoreVertRounded>
      </div> 
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3}></CircularProgressbar>
        </div>  
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small'></KeyboardArrowDown>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>  
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small'></KeyboardArrowUp>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>  
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize='small'></KeyboardArrowUp>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>  
        </div>
      </div> 
    </div>
  )
}

export default Featured