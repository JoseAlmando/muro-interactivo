import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from './features/userSlice'

function App() {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logIn({ usuario: 'xx', password: 'asd' }))
  }, [])

  return <h1 className="text-3xl font-bold underline">{user.usuario}</h1>
}

export default App
