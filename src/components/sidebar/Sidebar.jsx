import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { BarChart, Notifications } from '@mui/icons-material';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>React-Admin</span>    
        </div>    
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'></DashboardIcon>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineIcon className='icon'></PersonOutlineIcon>
                    <span>Users</span>
                </li>
                <li>
                    <InventoryIcon className='icon'></InventoryIcon>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className='icon'></CreditCardIcon>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'></LocalShippingIcon>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <BarChart className='icon'></BarChart>
                    <span>Stats</span>
                </li>
                <li>
                    <Notifications className='icon'></Notifications>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='icon'></SettingsSystemDaydreamIcon>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon'></PsychologyIcon>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'></SettingsApplicationsIcon>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon'></AccountCircleIcon>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'></LogoutIcon>
                    <span>Logout</span>
                </li>
            </ul>
        </div>    
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>    
    </div>
  )
}

export default Sidebar