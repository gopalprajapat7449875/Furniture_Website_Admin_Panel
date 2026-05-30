
import React, { useEffect } from 'react'
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
export default function Addwhychoose() {

  let apibaseurl = import.meta.env.VITE_APIBASEURL
  let navigete = useNavigate()

  let AddWhychoose = (e) => {

    e.preventDefault()
    let data = new FormData(e.target)

    axios.post(`${apibaseurl}whychooseus/create`, data)
      .then((res) => res.data)
      .then((finalres) => {


        if (finalres._status) {



          toast.success(finalres._Message)
          setTimeout(() => {
            navigete('/view_why_choose_us')
          }, 2000)

          e.target.reset()

        }
        else {
          if ((finalres.erre)) {
            finalres.erre.forEach((item) => {
              Object.values(item).forEach((msg) => {
                toast.error(msg);
              });
            });
          }


          else {

            toast.error(finalres._Message)
          }
        }

      })
  }





  useEffect(() => {
    $(".hello").dropify({

      messages: {
        'default': 'file here or click',

      }
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <div className=' w-5xl mx-auto min-h-[88vh]'>
        <h2 className='ps-3 py-2'>Home/Addcatagory</h2>

        <div className='shadow p-2 w-5xl mx-auto bg-neutral-100'>

          <div className='shadow-xs shadow-violet-600 '> <h2 className='shadow-violet-900 text-2xl font-bold px-3 py-1 text-neutral-600'>Add Addcatagory</h2>  </div>


          <form onSubmit={AddWhychoose}>
            <div className='grid grid-cols-3'>

              <div className='col-span-2'>

                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                  <label htmlFor="Name" > Tital Name </label>
                  <input name='_WhyChooseTital' type="text" placeholder='Enter Tital Name ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                </div>
                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                  <label htmlFor="Name" > Discription </label>
                  <textarea name='_WhyChooseDiscription' type="text" placeholder='Enter Discription ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                </div>

                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                  <label htmlFor="Name" >  Order </label>
                  <input name='_WhyChooseOrder' type="number" placeholder='Enter order ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                </div>



                <button className='font-bold py-2 px-6 rounded bg-neutral-500 text-white mx-2 my-2 hover:bg-neutral-600 cursor-pointer'>Add</button>

              </div>


              <div className='col-span-1 h-300 pe-5   my-5'>
                <div>
                  <input
                    type="file"
                    name='_image'
                    className="hello "
                    data-height="300"
                    data-allowed-file-extensions="jpg png jpeg webp"


                  />

                </div>

              </div>


            </div>
          </form>

        </div>

      </div>
    </>
  )
}
