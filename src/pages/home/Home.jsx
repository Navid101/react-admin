import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
        <Sidebar></Sidebar>   
        <div className="homeContainer">
          <Navbar></Navbar>
          <div className="widgets">
            <Widget type="user"></Widget>
            <Widget type="order"></Widget>
            <Widget type="balance"></Widget>
            <Widget type="earning"></Widget>
          </div>
          <div className="charts">
            <Featured></Featured>
            <Chart></Chart>
          </div>
        </div> 
    </div>
  )
}

export default Home