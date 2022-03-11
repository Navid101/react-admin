import React, { useState } from 'react'
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from '@mui/icons-material'
const New = ({title, inputs}) => {

  const [file,setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar></Sidebar>
      <div className="newContainer">
        <Navbar></Navbar>  
        <div className="top">
          <h1>{title}</h1>  
        </div>
        <div className="bottom">
          <div className="left">
              <img src={file? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form >
               <div className="formInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlined className='icon'></DriveFolderUploadOutlined>
                </label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}/>  
              </div>
              {inputs.map((input)=>{
                return(
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}/>  
                  </div> 
                )
              })} 
            
            </form>  
            <button>Send</button>
          </div>  
        </div>
      </div>  
    </div>
  )
}

export default New