import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import LandingPage from '../Components/LandingPage/LandingPage'
import HomePage from '../Components/HomePage/HomePage'
import DealsPage from '../Components/DealsPage/DealsPage'
import Clients from '../Components/Client/Clients'
import SeasonalPage from '../Components/SeasonalPage/SeasonalPage'
import FabricPage from '../Components/Fabric/FabricPage'
import WomenPage from '../Components/Women/WomenPage'
import MenPage from '../Components/Men/MenPage'
import Visited from '../Components/Visited/Visited'
import Footer from '../Components/Footer/Footer'
import CoppyRight from '../Components/CoppyRight/CoppyRight'
import ProductPage from '../Components/ProductPage/ProductPage'
import Product from '../Components/Product/Product'
import MoreProduct from '../Components/MoreProduct/MoreProduct'
import Customize from '../Components/Customize/Customize'
import Profile from '../Components/Profile/Profile'
import ManageAddress from '../Components/ManageAddress/ManageAddress'
import EditAddress from '../Components/EditAddress/EditAddress'
import MySize from '../Components/MySize/MySize'
import EditSize from '../Components/EditSize/EditSize'
import AddAddress from '../Components/AddAddress/AddAddress'
import LearnMeasure from '../Components/LearnMeasure/LearnMeasure'
import ScheduleAppoinment from '../Components/ScheduleAppointment/ScheduleAppoinment'

import { ChakraProvider } from '@chakra-ui/react'
import ShirtMeasure from '../Components/ShirtMeasure/ShirtMeasure'
import Appointment from '../Components/Appointment/Appointment'
import  Payment  from '../Components/PaymentPage/Payment'
import SavedCard from '../Components/SavedCards/SavedCard'
import MyWish from '../Components/MyWishlist/MyWish'
import Rating from '../Components/Ratings/Rating'
import Notification from '../Components/Notification/Notification'
import NotificationPage from '../Components/NotificationPage/NotificationPage'
import OrderPage from '../Components/OrderPage/OrderPage'
import TrackPage from '../Components/Track/TrackPage'
import CartOne from '../Components/CartOne/CartOne'
import CartAddress from '../Components/CartAddress/CartAddress'
import CartPay from '../Components/CartPay/CartPay'
import DropeBox from '../Components/DropeDownBox/DropeBox'
import SideBar from '../Components/SideBar/SideBar'


function AllRoutes() {
  return (
    <div>
        
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/navbar" element={<Navbar />} />
<Route path="/homepage" element={<HomePage />} />
<Route path="/dealspage" element={<DealsPage />} />
<Route path="/seasonalpage" element={<SeasonalPage />} />
<Route path="/fabric" element={<FabricPage />} />
<Route path="/women" element={<WomenPage />} />
<Route path="/men" element={<MenPage />} />
<Route path="/visit" element={<Visited />} />
<Route path="/footer" element={<Footer />} />
<Route path="/coppy" element={<CoppyRight />} />
<Route path="/product" element={<ProductPage />} />
<Route path="/moreproduct" element={<MoreProduct />} />
<Route path="/customize" element={<Customize />} />
<Route path="/profile" element={<Profile />} />
<Route path="/manageadd" element={<ManageAddress />} />
<Route path="/editaddress" element={<EditAddress />} />
<Route path="/mysize" element={<MySize />} />

<Route path="/editsize" element={<EditSize />} />
<Route path="/addaddress" element={<AddAddress />} />
<Route path="/learn" element={<LearnMeasure />} />

<Route path="/scheduleappoint" element={<ScheduleAppoinment />} />
<Route path="/shirt" element={<ShirtMeasure />} />  
<Route path="/appoint" element={<Appointment />} />


<Route path="/paymentpage" element={<Payment />} />
<Route path="/saved" element={<SavedCard />} />
<Route path="/mywish" element={<MyWish />} />
<Route path="/rating" element={<Rating />} />

<Route path="/notification" element={<Notification />} />
<Route path="/notificationpage" element={<NotificationPage />} />
<Route path="/order" element={<OrderPage />} />


<Route path="/trackpage" element={<TrackPage />} />
<Route path="/cartone" element={<CartOne />} />
<Route path="/cartadd" element={<CartAddress />} />

<Route path="/cartpay" element={<CartPay />} />
<Route path="/drope" element={<DropeBox />} />
<Route path="/side" element={<SideBar />} />

{/* <Route path="/landingpage" element={<LandingPage />} /> */}
</Routes>

    </div>
  )
}

export default AllRoutes