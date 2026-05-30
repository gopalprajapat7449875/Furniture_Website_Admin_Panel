import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoFunnel } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'

export default function About_us() {

   const [data, setdata] = useState([])
  const [path, setpath] = useState("")
  let apibaseurl = import.meta.env.VITE_APIBASEURL


 console.log(data)
  

  let aboutdata = () => {

    axios.get(`${apibaseurl}about/view`)
      .then((res) => res.data)
      .then((final) => {
        if (final._status) {
          setdata(final.about)
          setpath(final._path)
          
        }
        else {
          toast.error(final._Message)
        }
      })
  }







  let updateabout = (e) => {
    e.preventDefault()
    let comonydata = new FormData(e.target)


    if (data?.length == 0) {
     e.preventDefault()
  
  
      axios.post(`${apibaseurl}about/create`, comonydata)
        .then((res) => res.data)
        .then((final) => {
          if (final._status) {
            toast.success(final._Message)
   
          }
          else {
            toast.error(final._Message)
          }
        })

    }
    else {
      axios.post(`${apibaseurl}about/update/${data?._id}`, comonydata)
        .then((res) => res.data)
        .then((final) => {
          if (final._status) {
            aboutdata()
            toast.success(final._message)

          }
          else {
            toast.error(final._message)
          }
        })
    }






  }

  useEffect(() => {
    aboutdata()
  }, [])


  return (
    <>
    <ToastContainer/>
      <div className=' w-5xl mx-auto min-h-[88vh]'>

          <form onSubmit={updateabout}>


            <div className="space-y-6 mt-5">



              {/* Image */}
              <div className="flex items-center gap-6">
                <label className="cursor-pointer">
                  <img
                    src={path+ data?._AboutHero}
                    className="w-50 h-40 rounded object-cover border"
                  />
                  <input
                    type="file"
                    name="_AboutHero"

                    className="hidden"
                   
                  />
                </label>

                <p className="text-gray-500">
                  Click to change _AboutHero photo
                </p>
              </div>

              {/* Inputs */}
              <div className="grid gap-4">
                <textarea
                  type="text"
                  name="_AboutDiscription"
                  defaultValue={data?._AboutDiscription}
                  placeholder="Discription"
                  className="border-2 rounded border-neutral-400 outline-none hover:border-yellow-500"
                />

               

               
              </div>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Update
              </button>
            </div>
          </form>


      </div>

    </>
  )
}
