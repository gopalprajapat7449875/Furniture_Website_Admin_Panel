import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoFunnel } from 'react-icons/io5'

export default function Newslatters() {

  let apibaseurl = import.meta.env.VITE_APIBASEURL

  const [data, setdata] = useState([])
  console.log(data)


  let newsdata = () => {
    axios.get(`${apibaseurl}enqury/newsletters`)
      .then((res) => res.data)
      .then((final) => {
        setdata(final.newsres)
        console.log(final)
      })
  }
  useEffect(() => {
    newsdata()
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
        <h2 className='ps-3 py-2'>Home/News letters/View</h2>
        <div className='py-2 px-8 flex justify-between p'>

          <div className='border rounded flex items-center px-2 text-[20px] '><input className='py-2 outline-none px-3' type="Search" /> <CiSearch className='hover:cursor-pointer' /></div>
          <div className='px-4 flex gap-4'>
            <button className='hover:cursor-pointer px-5 bg-violet-300 rounded py-2 text-shadow-white  flex items-center gap-2'> <IoFunnel /> Filter</button>

          </div>
        </div>

        <div className='shadow p-2 w-5xl mx-auto bg-neutral-100'>


          <div className='shadow-xs shadow-violet-600 '> <h2 className='shadow-violet-900 text-2xl font-bold px-3 py-1 text-neutral-600'>View News Enquiry</h2>  </div>

          <div className='py-5'>

            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>

                  <th className="border p-2">S.No</th>




                  <th className="border p-2">Email</th>

                  <th className="border p-2">Date</th>

                </tr>
              </thead>

              <tbody>
                {
                  data.map((item, i) => (
                    <tr className="text-center">



                      <td className="border p-2"> {i + 1} </td>

                      <td className="border p-2"> {item._Email} </td>
                      <th className="border p-2"> {new Date(item.
                        _Creted_to).toLocaleString("en-IN", options)} </th>





                    </tr>
                  ))
                }


              </tbody>
            </table>

          </div>

        </div>
      </div>


    </>
  )
}
