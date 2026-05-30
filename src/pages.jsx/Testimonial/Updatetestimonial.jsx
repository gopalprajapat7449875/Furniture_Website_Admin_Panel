import React, { useEffect, useState } from 'react'
import $ from "jquery";
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
export default function Updateatestimonial() {

    let { _id } = useParams()


    let apibaseurl = import.meta.env.VITE_APIBASEURL
    let navigete = useNavigate()

    let AddTestimonial = (e) => {

        e.preventDefault()
        let data = new FormData(e.target)

        axios.put(`${apibaseurl}testimonial/update/${_id}`, data)
            .then((res) => res.data)
            .then((finalres) => {


                if (finalres._status) {



                    toast.success(finalres._Message)
                    setTimeout(() => {
                        navigete('/testimonials/view_testimonial')
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
    const [single, setsingale] = useState(null)
    const [path, setpath] = useState('')
    useEffect(() => {

        axios.get(`${apibaseurl}testimonial/updatedata/${_id}`)
            .then((res) => {
                setsingale((res.data.data))
                setpath(res.data._path)

            })


    }, [_id])




    return (
        <>
            <ToastContainer />
            <div className=' w-5xl mx-auto min-h-[88vh] '>
                <h2 className='ps-3 py-2'>Home/Testimonial/AddTestimonial</h2>

                <div className='shadow p-2 w-5xl mx-auto bg-neutral-100'>

                    <div className='shadow-xs shadow-violet-600 '> <h2 className='shadow-violet-900 text-2xl font-bold px-3 py-1 text-neutral-600'>AddTestimonial</h2>  </div>
                    <form onSubmit={AddTestimonial} >
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2'>


                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>

                                    <label htmlFor="Name" > Name </label>
                                    <input name='_TestimonialName' type="text" placeholder='Enter full Name ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                                </div>



                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                                    <label htmlFor="Name" > Company Name</label>
                                    <input defaultValue={single?._TestimonialComponiName} name='_TestimonialComponiName' type="text" placeholder='Enter  Company Name ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                                </div>

                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                                    <label htmlFor="Name" > Rating </label>
                                    <input defaultValue={single?._TestimonialRating}  name='_TestimonialRating' type="number" placeholder='Enter rating ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                                </div>

                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                                    <label htmlFor="Name" > Order </label>
                                    <input defaultValue={single?._TestimonialOrder}  name='_TestimonialOrder' type="number" placeholder='Enter order ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                                </div>
                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                                    <label htmlFor="Name" > Discrition </label>
                                    <textarea defaultValue={single?._TestimonialAbout}  name='_TestimonialAbout' type="text" className='w-[575px]  px-2 py-2 border border-violet-300 bg-white outline-none rounded' ></textarea>
                                </div>





                                <button className='font-bold py-2 px-6 rounded bg-neutral-500 text-white mx-2 my-2 hover:bg-neutral-600 cursor-pointer'>Add</button>

                            </div>


                           <div className='col-span-1 h-300 pe-5  relative  my-5'>

                                <img className=' h-80 w-full  absolute z-10 hover:z-0' src={path + single?._image} alt="" />
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
                </div >

            </div ></>
    )
}
