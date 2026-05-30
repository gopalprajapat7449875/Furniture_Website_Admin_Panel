import React, { useContext } from 'react'
import Sidebar from '../common/Sidebar.jsx'
import Header from '../common/Header.jsx'
import Footer from '../common/footer.jsx'
import { Outlet, useNavigate } from 'react-router-dom'

import { CartApi } from '../common/comancontesxt.jsx'
import MainAdmin from './MainAdmin'

export default function Mainlayout() {

    const { Login } = useContext(CartApi)
    const navigat = useNavigate()

    return (
        <>


            <MainAdmin />







        </>
    )
}
