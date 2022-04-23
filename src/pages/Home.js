import React, {useState} from 'react'
import Category from '../components/CategorySection/Category';
import Concern from '../components/ConcernSection/Concern';
import HeroSection from '../components/HeroSection/HeroSection';
import {homeObjOne} from '../components/HeroSection/HeroData';
import Info from '../components/InfoSection/Info';
import Nav from '../components/HomeNavbar/HomeNav'; //importing component nav 
import Separator from '../components/Separator/Separator';
import About from '../components/AboutSection/About';
import Sidebar from '../components/Sidebar/Sidebar'; //importing component sidebar
import ImageSlider from '../components/SliderSection/ImageSlider';
import Footer from '../components/Footer/Footer';
import { SliderData } from '../components/SliderSection/SliderData';
import ScrollToTop from '../components/ScrollToTop';
import AccountSidebar from '../components/AccountSidebar/AccountSidebar';


const Home = () => {
    const [open, setOpen] = useState(false);  //We set the initial state to false, because our menu should be hidden when the application is rendered.  here, setOpen is a function and you can change the value of this 

    const [show, setShow] = useState(true);
    
    return (
        <>
           <ScrollToTop />
           <Sidebar open={open} setOpen={setOpen} />
           <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />  {/*this won't work again, because we havenot pass it to actual nav. We have just put it here for indicating that this accept these values */}
           <AccountSidebar show={show} setShow={setShow} /> 
           <HeroSection {...homeObjOne}/>
           <Info />
           <Category />
           <Separator />
           <Concern />
           <ImageSlider slides= {SliderData}/>
           <Separator />
           <About />
           <Footer />
        </>
    )
}
export default Home;