import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
    auth: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
      state.auth = true
    },
    logOut: (state) => {
      state.value = {}
      state.auth = false
    },
  },
})

export const { setUser, logOut } = userSlice.actions

export default userSlice.reducer
