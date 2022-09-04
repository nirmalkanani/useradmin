import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Nav/Sidebar'


const UserView = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  )
}

export default UserView
