import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { Link, NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

const Sidebar = () => {
  let {id} = useParams()
  return (
    <div className='sidebar'>
      <NavLink to={`/profile/${id}`} activeStyle={{ color:'#fff' }}>
        <div className='sidebar_ele'>
          <p>Profile</p>
        </div>
      </NavLink>
      <NavLink to={`/profile/${id}/post`} activeStyle={{ color:'#fff' }}>
        <div className='sidebar_ele'>
          <p>Post</p>
        </div>
      </NavLink>
      <NavLink to={`/profile/${id}/gallery`} activeStyle={{ color:'#fff' }}>
        <div className='sidebar_ele'>
          <p>Gallery</p>
        </div>
      </NavLink>
      <NavLink to={`/profile/${id}/todo`} activeStyle={{ color:'#fff' }}>
        <div className='sidebar_ele'>
          <p>ToDo</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Sidebar