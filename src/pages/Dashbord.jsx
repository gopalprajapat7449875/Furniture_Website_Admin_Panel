import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillProduct } from 'react-icons/ai';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Dashbord() {


    const [data, setdata] = useState([])
    const[order,setorder]=useState([])
    console.log(order)


    let apibaseurl = import.meta.env.VITE_APIBASEURL
    let Showuser = () => {
        axios.get(`${apibaseurl}webuser/view`)
            .then((res) => res.data)
            .then((finalres) => {
                setdata(finalres.user)


            })
    }
    
    let ShowOrder = () => {
        axios.get(`${apibaseurl}weborder/view`)
            .then((res) => res.data)
            .then((finalres) => {
                setorder(finalres.order)


            })
    }
    useEffect(() => {
        Showuser()
        ShowOrder()
    }, [])
    // let data = useSelector((store) => store.userStore.webuser)
    // console.log(data, "2222")
    return (

        <>
            <div className='ps-3'>
                <h2 className='ps-3 py-2'>Home/Dashbord</h2>
                <div className='grid grid-cols-3 gap-5 p-8 h-[78vh]' >


                    <Link to={'/view_user'}>

                        <div className='bg-violet-600 h-45 rounded shadow-lg text-white p-3 text-2xl font-medium flex justify-between '>

                            <div>
                                <p>
                                    {data.length}
                                </p>
                                <p>
                                    User
                                </p>
                            </div>
                            <div >
                                <FaRegUserCircle />

                            </div>
                        </div>

                    </Link>
                    <Link to={'/product/view_product'}>
                        <div className='bg-blue-400 h-45 rounded shadow-lg text-white p-5 text-2xl font-medium flex justify-between '>
                            <div>
                                <p>
                                    20
                                </p>
                                <p>
                                    Product
                                </p>
                            </div>
                            <div>
                                <MdProductionQuantityLimits />


                            </div>
                        </div>

                    </Link>

                    <Link to={'/catagory/view_catagory'}>
                        <div className='bg-yellow-400 h-45 rounded shadow-lg text-white p-5 text-2xl font-medium flex justify-between '>

                            <div>
                                <p>
                                    15
                                </p>
                                <p>
                                    Catagory
                                </p>
                            </div>
                            <div>
                                <AiFillProduct />



                            </div>
                        </div>
                    </Link>

                    <Link to={'/orders'}>

                        <div className='bg-red-600 h-45 rounded shadow-lg text-white p-5 text-2xl font-medium flex justify-between'>

                            <div>
                                <p>
                                       {order.length}
                                </p>
                                <p>
                                    Orders
                                </p>
                            </div>
                            <div>


                                <FaCartShopping />

                            </div>
                        </div>
                    </Link>


                </div>
            </div>

        </>

    )
}
