import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { logoMainPath, logopath } from "../../reduxwork/slice";

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [logo, setLogo] = useState(null);
  const [comdata, setcumdata] = useState([])
  const [path, setpath] = useState("")
  let apibaseurl = import.meta.env.VITE_APIBASEURL


  let dispath = useDispatch()
  let createsubadmin = (e) => {
    e.preventDefault()
    let subdata = new FormData(e.target)
    if (e.target._UserPassword.value == e.target.ConfirmPassword.value) {
      axios.post(`${apibaseurl}admin/create`, subdata)
        .then((res) => res.data)
        .then((final) => {
          if (final._status) {
            toast.success(final._Message)
            e.target.reset()
          }
          else {
            toast.error(final._Message)
          }
        })


    }
    else {
      toast.error("Confirm password do not matched")
    }

  }

  let componydata = () => {

    axios.get(`${apibaseurl}admin/compony-data`)
      .then((res) => res.data)
      .then((final) => {
        if (final._status) {
          setcumdata(final.componydata)
          setpath(final._path)
          dispath(logoMainPath(final?._path))
          dispath(logopath(final.componydata?._logoimg))
        }
        else {
          toast.error(final._Message)
        }
      })
  }







  let updateadmin = (e) => {
    e.preventDefault()
    let comonydata = new FormData(e.target)


    if (!comdata) {
      axios.post(`${apibaseurl}admin/componycreate`, comonydata)
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
      axios.post(`${apibaseurl}admin/update/${comdata?._id}`, comonydata)
        .then((res) => res.data)
        .then((final) => {
          if (final._status) {
            componydata()
            toast.success(final._message)

          }
          else {
            toast.error(final._message)
          }
        })
    }






  }

  useEffect(() => {
    componydata()
  }, [])



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="w-full bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">
          Company Management
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b pb-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded ${activeTab === "profile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
          >
            Company Profile
          </button>

          <button
            onClick={() => setActiveTab("subadmin")}
            className={`px-4 py-2 rounded ${activeTab === "subadmin"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
          >
            Create Sub Admin
          </button>
        </div>

        {/* ================= PROFILE TAB ================= */}
        {activeTab === "profile" && (

          <form onSubmit={updateadmin}>
            <div className="space-y-6">

              {/* Logo */}
              <div className="flex items-center gap-6">
                <label className="cursor-pointer">
                  <img
                    src={path + comdata?._logoimg}
                    className="w-32 h-25 rounded  object-fit"
                  />
                  <input
                    type="file"
                    name="_logoimg"
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-3 gap-4">

                <input defaultValue={comdata?._ComponyName} name="_ComponyName" type="text" placeholder="Company Name" className="input" />
                <input defaultValue={comdata?._ComponyEmail} name="_ComponyEmail" type="email" placeholder="Email" className="input" />
                <input defaultValue={comdata?._ComponyPhoneNumber} name="_ComponyPhoneNumber" type="tel" placeholder="Phone" className="input" />

                <input defaultValue={comdata?._ComponyAlterPhoneNumber} name="_ComponyAlterPhoneNumber" type="text" placeholder="Alternate Phone" className="input" />
                <input defaultValue={comdata?._ComponyWebsite} name="_ComponyWebsite" type="text" placeholder="Website" className="input" />
                <input defaultValue={comdata?._ComponyGSTnumber} name="_ComponyGSTnumber" type="text" placeholder="GST Number" className="input" />

                <input defaultValue={comdata?._ComponyCINnumber} name="_ComponyCINnumber" type="text" placeholder="CIN Number" className="input" />
                <input defaultValue={comdata?._ComponyPANnumber} name="_ComponyPANnumber" type="text" placeholder="PAN Number" className="input" />
                <input defaultValue={comdata?._ComponyFoundedYear} name="_ComponyFoundedYear" type="text" placeholder="Founded Year" className="input" />

                <input defaultValue={comdata?._ComponyCountry} name="_ComponyCountry" type="text" placeholder="Country" className="input" />
                <input defaultValue={comdata?._ComponyState} name="_ComponyState" type="text" placeholder="State" className="input" />
                <input defaultValue={comdata?._ComponyCity} name="_ComponyCity" type="text" placeholder="City" className="input" />

                <input defaultValue={comdata?._ComponyPinCode} name="_ComponyPinCode" type="text" placeholder="Pincode" className="input" />
                <input defaultValue={comdata?._ComponyType} name="_ComponyType" type="text" placeholder="Industry Type" className="input" />



                <input defaultValue={comdata?._ComponyInstagram} name="_ComponyInstagram" type="text" placeholder="Instagram" className="input" />
                <input defaultValue={comdata?._Componyfacebook} name="_Componyfacebook" type="text" placeholder="facebook" className="input" />
                <input defaultValue={comdata?._Componylinkdin} name="_Componylinkdin" type="text" placeholder="linkdin" className="input" />

                <input defaultValue={comdata?._Componytwiter} name="_Componytwiter" type="text" placeholder="twiter" className="input" />
                <input defaultValue={comdata?._Componyyoutube} name="_Componyyoutube" type="text" placeholder="youtube" className="input" />
                <input defaultValue={comdata?._ComponyMap} name="_ComponyMap" type="text" placeholder="Map" className="input" />
  <input defaultValue={comdata?._Componyteligram} name="_Componyteligram" type="text" placeholder="Teligram" className="input" />

                


                <input defaultValue={comdata?._ComponySize} name="_ComponySize" type="text" placeholder="Company Size" className="input" />

                <input defaultValue={comdata?._ComponyOfferCoupan} name="_ComponyOfferCoupan" type="text" placeholder="Coupan" className="input" />
                <input defaultValue={comdata?._ComponyDisOffer} name="_ComponyDisOffer" type="number" placeholder="Discount Offer" className="input" />

              </div>

              <textarea
                defaultValue={comdata?._ComponyFullAddrese}
                name="_ComponyFullAddrese"
                placeholder="Full Address"
                className="w-full input"
              />

              <textarea
                defaultValue={comdata?._ComponyDiscription}
                name="_ComponyDiscription"
                placeholder="Company Description"
                className="w-full input"
              />

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Update Company Profile
              </button>
            </div>
          </form>
        )}

        {/* ================= SUB ADMIN TAB ================= */}
        {activeTab === "subadmin" && (

          <form onSubmit={createsubadmin}>
            <div className="space-y-6">

              <h3 className="text-xl font-semibold">
                Create Sub Admin
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                <input name="_UserName" type="text" placeholder="Full Name" className="input" />
                <input name="_UserEmail" type="email" placeholder="Email" className="input" />

                <input name="_UserPhoneNumber" type="tel" placeholder="Phone Number" className="input" />
                <input name="_Role" type="text" placeholder="Role (Manager, Staff)" className="input" />

                <input name="_UserPassword" type="password" placeholder="Password" className="input" />
                <input name="ConfirmPassword" type="password" placeholder="Confirm Password" className="input" />
                <div> Male <input value={1} name="_UserGender" type="radio" /> Female<input value={2} name="_UserGender" type="radio" /></div>

              </div>

              {/* Permissions */}
              <div>
                <p className="font-medium mb-2">Permissions</p>
                <div className="flex flex-wrap gap-4">
                  <label><input name="_Permissions" value={"1"} type="checkbox" /> Products</label>
                  <label><input name="_Permissions" value={"2"} type="checkbox" /> Orders</label>
                  <label><input name="_Permissions" value={"3"} type="checkbox" /> Users</label>
                  <label><input name="_Permissions" value={"4"} type="checkbox" /> Reports</label>
                </div>
              </div>

              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Create Sub Admin
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Tailwind reusable class */}
      <style jsx>{`
        .input {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
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