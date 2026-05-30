import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import ReactDOM from "react-dom/client";
import './index.css'
import Mainlayout from './Main_Router/Mainlayout'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import About_us from './pages/WebPages/about_us'
import Home from './pages/WebPages/home'
import Viewuser from './pages/Users.jsx/viewuser'
import Contactenquirys from './pages/Enquirys/contactenquirys'
import Newslatters from './pages/Enquirys/newslatters'
import Addcolor from './pages/Colors/addcolor'
import Viewcolor from './pages/Colors/viewcolor'
import Addsize from './pages/Size/addsize'
import Viewsize from './pages/Size/viewsize'
import Dashbord from './pages/Dashbord'
import Addsubcatagory from './pages/SubCatagory/addsubcatagory'
import Viewsubcatagory from './pages/SubCatagory/viewsubcatagory'
import Addproduct from './pages/Product/addproduct'
import Viewproduct from './pages/Product/viewproduct'
import Viewwhychoose from './pages/Why_Choose_Us/viewwhychoose'
import Order from './pages/Orders/order'
import Addslider from './pages/Slider/addslider'
import Viewslider from './pages/Slider/viewslider'
import Addcountry from './pages/Country/addcountry'
import Viewcountry from './pages/Country/viewcountry'
import Addtestimonial from './pages/Testimonial/addtestimonial'
import Addfaq from './pages/Faq/addfaq'
import Viewfaq from './pages/Faq/viewfaq'
import Addwhychoose from './pages/Why_Choose_Us/addwhychoose'
import Viewtestimonial from './pages/Testimonial/viewtestimonial'
import Login from './pages/Login/Login';
import ContextFile from './common/comancontesxt';
import MainAdmin from './Main_Router/MainAdmin';
import Addmeterial from './pages/Meterial/Addmeterial';
import ViewMeterial from './pages/Meterial/Viewmetarial';
import Editfaq from './pages/Faq/FaqEdit';
import Updatemeterial from './pages/Meterial/EditMeterial';
import Addcatagory from './pages/Catagory/addcatagory';
import Viewcatagory from './pages/Catagory/viewcatagory';
import Updatecatagory from './pages/Catagory/updatecategory';
import Updatesubcatagory from './pages/SubCatagory/updatecategory';
import AddSubSubCatagory from './pages/SubSubCategory/addsubsubcategory';
import ViewSubSubCategory from './pages/SubSubCategory/viewSubSubCategory';
import UpdateSlider from './pages/Slider/updateslider';
import Updatesubsubcatagory from './pages/SubSubCategory/updatesubsubcategory';
import Profile from './pages/Profile/Profile';
import CompanyProfile from './pages/ComponyProfile/ComponyProfile';
import ProductDetailAdmin from './pages/Product/viewproductDetails';
import ProductUpdate from './pages/Product/ProductUpdate';
import { Provider } from 'react-redux';
import { store } from './reduxwork/Store';
import UpdateWhyChooseUs from './pages/Why_Choose_Us/updatewhychooseus';
import Updateatestimonial from './pages/Testimonial/Updatetestimonial';
import PrivateRoute from './PrivetRoutes';


// const importent = createBrowserRouter(
//   createRoutesFromElements(

//   )
// )

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>

    <ContextFile>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route
              path='/'
              element={
                <PrivateRoute>
                  <MainAdmin />
                </PrivateRoute>
              }
            >

              <Route path='/dashboard' element={<Dashbord />} />
              <Route path='/componyprofile' element={<CompanyProfile />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about_us' element={<About_us />} />
            


              <Route path='/view_user' element={<Viewuser />} />


              <Route path='/contact_enquirys' element={<Contactenquirys />} />
              <Route path='/news_latters' element={<Newslatters />} />

              <Route path='/color/add_color' element={<Addcolor />} />
              <Route path='/color/add_color/:_id' element={<Addcolor />} />
              <Route path='/color/view_color' element={<Viewcolor />} />

              <Route path='/size/add_size' element={<Addsize />} />
              <Route path='/size/view_size' element={<Viewsize />} />

              <Route path='/catagory/add_catagory' element={<Addcatagory />} />
              <Route path='/catagory/update_catagory/:_id' element={<Updatecatagory />} />
              <Route path='/catagory/view_catagory' element={<Viewcatagory />} />

              <Route path='/add_sub_catagory' element={<Addsubcatagory />} />
              <Route path='/subcategory/view_sub_catagory' element={<Viewsubcatagory />} />
              <Route path='/subcategory/update_sub_catagory/:_id' element={<Updatesubcatagory />} />


              <Route path='/sub_sub_category/add_sub_sub_catagory' element={<AddSubSubCatagory />} />
              <Route path='/sub_sub_category/update_sub_sub_catagory/:_id' element={<Updatesubsubcatagory />} />
              <Route path='/sub_sub_category/view_sub_sub_catagory' element={<ViewSubSubCategory />} />


              <Route path='/product/add_product' element={<Addproduct />} />
              <Route path='/product/view_product' element={<Viewproduct />} />
              <Route path='/product/view/productditail/:slug' element={<ProductDetailAdmin />} />
              <Route path='/product/update_product/:_id' element={<ProductUpdate />} />


              <Route path='/add_why_choose_us' element={<Addwhychoose />} />
              <Route path='/view_why_choose_us' element={<Viewwhychoose />} />
              <Route path='/update/whychooseus/:_id' element={<UpdateWhyChooseUs />} />

              <Route path='/orders' element={<Order />} />


              <Route path='/slider/add_slider' element={<Addslider />} />
              <Route path='/slider/update_slider/:_id' element={<UpdateSlider />} />
              <Route path='/slider/view_slider' element={<Viewslider />} />

              <Route path='/meterial/add_meterial' element={<Addmeterial />} />
              <Route path='/meterial/update/:_id' element={<Updatemeterial />} />

              <Route path='/meterial/view_meterial' element={<ViewMeterial />} />

              <Route path='/country/add_country' element={<Addcountry />} />
              <Route path='/country/view_country' element={<Viewcountry />} />

              <Route path='/testimonials/add_testimonial' element={<Addtestimonial />} />
              <Route path='/testimonials/view_testimonial' element={<Viewtestimonial />} />
              <Route path='/testimonials/update/:_id' element={<Updateatestimonial />} />

              <Route path='/faq/add_faq' element={<Addfaq />} />
              <Route path='/faq/view_faq' element={<Viewfaq />} />
              <Route path='/faq/update/:_id' element={<Editfaq />} />





            </Route>

          </Routes>
        </Provider>
      </BrowserRouter>

      {/* <RouterProvider router={importent} /> */}
    </ContextFile>
  </StrictMode>

)
