import React from 'react'
import './home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const Home = (props) => {
  return (
    <div>

     <Topbar xxx={props.checkLogout}/>
     {/* <h1 className='wel'> Welcome to Admin Panel</h1> */}
     <Sidebar/>
      </div>
  )
}

export default Home