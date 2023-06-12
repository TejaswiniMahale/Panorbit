import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Profile from './Profile'
import Gallery from "./Gallery"
import Post from './Post'
import Todo from './Todo'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/profile/:id" element={<Profile/>}>
        </Route>
          <Route path='/profile/:id/post' element={<Post/>}></Route>
          <Route path='/profile/:id/gallery' element={<Gallery/>}></Route>
          <Route path='/profile/:id/todo' element={<Todo/>}></Route>
    </Routes>
  )
}

export default MainRoutes