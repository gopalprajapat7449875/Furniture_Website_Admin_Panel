import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const AdminSlice = createSlice({
  name: 'admin',
  initialState: {
    token: Cookies.get('token') || '',
    logomainpath: Cookies.get('logomainpath') || '',
    logopath: Cookies.get('logopath') || '',

  },



  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      Cookies.set('token', state.token)


    },
    logOut: (state) => {

      state.token = null
      Cookies.remove('token')

    },
    logopath: (state, action) => {
      state.logopath = action.payload
      Cookies.set('logopath', state.logopath)

    },
    logoMainPath: (state, action) => {
      state.logomainpath = action.payload
      Cookies.set('logomainpath', state.logomainpath)

    },


  },
})

export const { setToken, logOut, logopath, logoMainPath } = AdminSlice.actions

export default AdminSlice.reducer