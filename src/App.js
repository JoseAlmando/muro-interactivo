import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostsList from './components/PostsList'
import PostSquared from './components/PostSquared'
import { NavBar } from './views/NavBar/NavBar'

function App() {
  const user = useSelector((state) => state.user.value)
  const auth = useSelector((state) => state.user.auth)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <NavBar />
      { auth && <PostSquared /> }
      <PostsList />
    </div>
  )
}

export default App
