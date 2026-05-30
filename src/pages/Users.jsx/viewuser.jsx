import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoFunnel } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

import Cookies from 'js-cookie'
export default function Viewuser() {
  const [data, setdata] = useState([])

const token = Cookies.get("token");
  console.log(token)

  let apibaseurl = import.meta.env.VITE_APIBASEURL
  let Showuser = () => {
    axios.get(`${apibaseurl}webuser/view`)
      .then((res) => res.data)
      .then((finalres) => {
        setdata(finalres.user)
      

      })
  }
  useEffect(() => {
    Showuser()
  }, [])

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
        <h2 className='ps-3 py-2'>Home/User/View</h2>
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


          <div className='shadow-xs shadow-violet-600 '> <h2 className='shadow-violet-900 text-2xl font-bold px-3 py-1 text-neutral-600'>View User</h2>  </div>

          <div className='py-5'>

            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border py-2"><input type="checkbox" name="" id="" /></th>
                  <th className="border p-2">S.No</th>
                  <th className="border p-2">Name</th>



                  <th className="border p-2">Email</th>
                  <th className="border p-2">Mobile no.</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Created</th>

                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr className="text-center">
                    <td className="border py-2"><input type="checkbox" name="" id="" /></td>
                    <td className="border p-2"> {i + 1} </td>
                    <td className="border p-2">  {item._UserName} </td>
                    <td className="border p-2">  {item._UserEmail}   </td>
                    <td className="border p-2">  {item._UserPhoneNumber} </td>



                    <td className="border p-2">  {item._UserStatus ? (<button className='bg-green-500 px-2 py-1 rounded-xl text-white' > Active</button>) : (<button className='bg-orange-500 px-2 py-1 rounded-xl text-white' > Deactive</button>)}  </td>
                    <td className="border p-2"><p className=' px-2 py-1 rounded-xl text-black' > {new Date(item.
                      _User_Creted_to).toLocaleString("en-IN", options)} </p></td>

                  </tr>

                ))}

              </tbody>
            </table>

          </div>

        </div>
      </div>
    </>
  )
}
