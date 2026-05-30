import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoFunnel } from 'react-icons/io5'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import axios from 'axios';
export default function Contactenquirys() {

  let apibaseurl = import.meta.env.VITE_APIBASEURL

  const [data, setdata] = useState([])
  console.log(data)


  let contectdata = () => {
    axios.get(`${apibaseurl}enqury/contect`)
      .then((res) => res.data)
      .then((final) => {
        setdata(final.contectres)
        console.log(final)
      })
  }
  useEffect(() => {
    contectdata()
  }, [])

  // gsap.registerPlugin(useGSAP);



  // const container = useRef();

  // useGSAP(() => {
  //   // gsap code here...
  //   gsap.to(".box", {x: 100}); // <-- automatically reverted

  // }, { scope: container }); 

  //   const boxRef = useRef();

  // useGSAP(() => {
  //  // Refs allow you to access DOM nodes
  //   console.log(boxRef) // { current: div.box }

  //   // then we can animate them like so...
  //   gsap.to(boxRef.current, {
  //     rotation: "+=5760",
  //    repeat:Infinity ,
  //    ease:true,

  //    duration:3


  //   });

  // });
  return (
    <>
      <div className=' w-5xl mx-auto min-h-[88vh]'>
        <h2 className='ps-3 py-2'>Home/Contact Enquiry/View</h2>
        <div className='py-2 px-8 flex justify-between p'>


          <div className='border rounded flex items-center px-2 text-[20px] '><input className='py-2 outline-none px-3' type="Search" /> <CiSearch className='hover:cursor-pointer' /></div>
          <div className='px-4 flex gap-4'>
            <button className='hover:cursor-pointer px-5 bg-violet-300 rounded py-2 text-shadow-white  flex items-center gap-2'> <IoFunnel /> Filter</button>

          </div>
        </div>

        <div className='shadow p-2 w-5xl mx-auto bg-neutral-100'>


          <div className='shadow-xs shadow-violet-600 '> <h2 className='shadow-violet-900 text-2xl font-bold px-3 py-1 text-neutral-600'>View Contact Enquiry</h2>  </div>

          <div className='py-5'>

            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>

                  <th className="border p-2">S.No</th>
                  <th className="border p-2">Name</th>

                  <th className="border py-2">Email</th>

                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Message</th>
                  <th className="border p-2">Action</th>

                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr className="text-center">

                    <td className="border p-2"> {i + 1} </td>
                    <td className="border p-2">{item._Name} </td>
                    <td className="border py-2">{item._Email}</td>
                    <td className="border p-2">{item._Subject}</td>

                    <td className="border p-2">{item._Phone}</td>

                    <td className="border p-2">{item._Message}</td>
                    <td className="border p-2"><button className='bg-red-500 px-2 py-1 rounded-xl text-white' > Delate </button></td>
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
