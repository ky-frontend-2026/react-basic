import React ,{useState,useEffect }from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import PostList from './components/PostList'
import UserDetail from './components/UserDetail'
import DummyJson from './components/DummyJson'
const App = () => {



  return (
    <div>
      <h1>axios</h1>
      <DummyJson/>
      <UserDetail/>
      {/* <UserList/> */}
      {/* <PostList/> */}
    </div>
  )
}

export default App