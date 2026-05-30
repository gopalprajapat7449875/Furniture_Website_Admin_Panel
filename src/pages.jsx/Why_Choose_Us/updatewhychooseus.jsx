
import React, { useEffect, useState } from 'react'
import $ from "jquery";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
export default function UpdateWhyChooseUs() {

    const [single, setsingale] = useState(null)
    const [path, setpath] = useState('')
    console.log(single, path)
    let { _id } = useParams()
    console.log(_id)
    let apibaseurl = import.meta.env.VITE_APIBASEURL
    let navigete = useNavigate()

    let AddWhychoose = (e) => {

        e.preventDefault()
        let data = new FormData(e.target)

        axios.put(`${apibaseurl}whychooseus/update/${_id}`, data)
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


    useEffect(() => {

        axios.get(`${apibaseurl}whychooseus/updatedata/${_id}`)
            .then((res) => {
                setsingale((res.data.data))
                setpath(res.data._path)

            })


    }, [_id])
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
                                    <input defaultValue={single?._WhyChooseTital} name='_WhyChooseTital' type="text" placeholder='Enter Tital Name ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                                </div>
                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                                    <label htmlFor="Name" > Discription </label>
                                    <textarea defaultValue={single?._WhyChooseDiscription} name='_WhyChooseDiscription' type="text" placeholder='Enter Discription ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
                                </div>

                                <div className='flex flex-col mx-2 my-4 gap-2 text-[18px ] font-bold'>
                                    <label htmlFor="Name" >  Order </label>
                                    <input defaultValue={single?._WhyChooseOrder} name='_WhyChooseOrder' type="number" placeholder='Enter order ' className='w-xl px-2 py-2 border border-violet-300 bg-white outline-none rounded' />
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

                </div>

            </div>
        </>
    )
}
