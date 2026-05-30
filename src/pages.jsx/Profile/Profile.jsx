import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [image, setImage] = useState(null);
  const [data, setdata] = useState(null);
  const [path, setpath] = useState("")
  const token = Cookies.get("atoken");


  let apibaseurl = import.meta.env.VITE_APIBASEURL
  let admin = () => {
    axios.post(`${apibaseurl}admin/user-data`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .then((finalres) => {
        setdata(finalres.userData)
        setpath(finalres._path)

      })
  }

  useEffect(() => {
    admin()
  }, [token])





  let changepass=(e)=>{
  e.preventDefault()


  let Newpass=e.target.NewPassword.value 
   let ConfirmPassword=e.target.ConfirmPassword.value 
   let OldPassword=e.target.OldPassword.value
  
  if(Newpass==ConfirmPassword){

let cdata={

  _NewPassword:Newpass,
  _OldPassword:OldPassword

}
axios.post(`${apibaseurl}admin/change-password`, cdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .then((final) => {
        if (final._status) {
          toast.success(final._message)
        }
        else {
          toast.error(final._message)
        }
      })




  }
else{
  toast.error("New password and confurm password not same")
}



  }


  let updateadmin = (e) => {
    e.preventDefault()
    let usr = new FormData(e.target)
    console.log(e.target._UserEmail.value)
     
    axios.post(`${apibaseurl}admin/update`,usr,{
      headers: {
        Authorization: `Bearer ${token}`,
         "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res.data)
      .then((final) => {
        if (final._status) {
            admin()
          toast.success(final._message)
        }
        else {
          toast.error("Sumthing Wrong")
        }
      })



  }

  return (


    <div className="min-h-[88vh] bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <ToastContainer />
      <div className="w-full bg-white rounded-2xl shadow-xl p-6">

        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">
          User Profile
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b pb-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-5 py-2 rounded ${activeTab === "profile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
          >
            Profile
          </button>

          <button
            onClick={() => setActiveTab("password")}
            className={`px-5 py-2 rounded ${activeTab === "password"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
          >
            Change Password
          </button>
        </div>

        {/* PROFILE TAB */}
        {activeTab === "profile" && (

          <form onSubmit={updateadmin}>


            <div className="space-y-6">



              {/* Image */}
              <div className="flex items-center gap-6">
                <label className="cursor-pointer">
                  <img
                    src={path + data?._ProfilePic}
                    className="w-28 h-28 rounded-full object-cover border"
                  />
                  <input
                    type="file"
                    name="_ProfilePic"

                    className="hidden"
                   
                  />
                </label>

                <p className="text-gray-500">
                  Click to change profile photo
                </p>
              </div>

              {/* Inputs */}
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="_UserName"
                  defaultValue={data?._UserName}
                  placeholder="Username"
                  className="input"
                />

                <input
                  type="email"
                  name="_UserEmail"
                  defaultValue={data?._UserEmail}
                  placeholder="Email"
                  className="input"
                />

                <input
                  type="tel"
                  name="_UserPhoneNumber"
                  defaultValue={data?._UserPhoneNumber}
                  placeholder="Phone Number"
                  className="input"
                />
              </div>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Update Profile
              </button>
            </div>
          </form>
        )}

        {/* PASSWORD TAB */}
        {activeTab === "password" && (
           <form  onSubmit={changepass} >
          <div className="space-y-5">

           
            <input type="password" name="OldPassword" placeholder="OldPassword" className="input" />
            <input type="password" name="NewPassword" placeholder="NewPassword" className="input" />
            <input type="password" name="ConfirmPassword" placeholder="ConfirmPassword" className="input" />

            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
              Change Password
            </button>
          
          </div>
            </form>
        )}
      </div>

      {/* Reusable class */}
      <style jsx>{`
        .input {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 100%;
          outline: none;
        }
        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  );
}