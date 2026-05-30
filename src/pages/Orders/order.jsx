import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoFunnel } from 'react-icons/io5'

export default function Order() {

  const [orders, setorder] = useState([])
    let apibaseurl = import.meta.env.VITE_APIBASEURL
  let ShowOrder = ()=> {
    axios.get(`${apibaseurl}weborder/view`)
      .then((res) => res.data)
      .then((finalres) => {
        console.log(finalres)
        setorder(finalres.order)
        console.log(finalres.order)


      })
  }
  useEffect(() => {
    ShowOrder()
  },[])

  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };

  return (
    <>
      <div className=' w-5xl mx-auto min-h-[88vh]'>
        <h2 className='ps-3 py-2'>Home/Order/ViewOrder</h2>
        <div className='py-2 px-8 flex justify-between p'>
          <button className='px-5 bg-violet-300 rounded py-2 text-shadow-white '>
            <input type="checkbox" />
            All Select
          </button>
          <div className='border rounded flex items-center px-2 text-[20px] '><input className='py-2 outline-none px-3' type="Search" /> <CiSearch className='hover:cursor-pointer' /></div>
          <div className='px-4 flex gap-4'>
            <button className='hover:cursor-pointer px-5 bg-violet-300 rounded py-2 text-shadow-white  flex items-center gap-2'> <IoFunnel /> Filter</button>
            <button className='px-5 hover:cursor-pointer bg-green-300 rounded py-2 text-shadow-white '> Active </button>
          </div>
        </div>

        <div className='shadow p-2 w-5xl mx-auto bg-neutral-100'>


          <div className='shadow-xs shadow-violet-600 '> <h2 className='shadow-violet-900 text-2xl font-bold px-3 py-1 text-neutral-600'>ViewOrder</h2>  </div>

          <div className='py-5'>

            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border py-2"><input type="checkbox" name="" id="" /></th>
                  <th className="border p-2">S.No</th>
                  <th className="w-50 border py-2">Date</th>
                  <th className="border p-2">Price</th>
                  <th className="w-60 border p-2">OrderId</th>
                  <th className="border p-2">Qty.</th>
                  <th className="border p-2">Payment</th>
                  <th className="border p-2">  Status</th>

                </tr>
              </thead>

              <tbody>

                {orders.map((item, i) => {
                  return (
                    <tr className="text-center" key={i}>
                      <td className="border py-2"><input type="checkbox" name="" id="" /></td>
                      <td className="border p-2">{i} </td>
                      <td className="border py-2">   {new Date(item. _OrderDate).toLocaleString("en-IN", options)}</td>
                      <td className="border p-2">Rs. {item._OrderAmount} </td>
                      <td className="border py-2">{item._OrderID} </td>
                      <td className="border p-2"> {item._OrderItems.length} </td>
  <td className="border p-2"> {item._PaymentMethod==1?'COD':'Online'} </td>
                      <td className="border p-2"><button className='bg-neutral-500 px-2 py-1 rounded-xl text-white' > {item._OrderStatus} </button></td>
                      
                    </tr>
                  )
                })}



              </tbody>
            </table>

          </div>

        </div>
      </div>
    </>
  )
}
