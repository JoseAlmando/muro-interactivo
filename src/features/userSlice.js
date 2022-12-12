import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload
    },
    logOut: (state) => {
      state.value = {}
    },
  },
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer
