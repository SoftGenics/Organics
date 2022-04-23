import React from 'react';
import './App.css';//importing universal css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Home from './pages/Home.js'
import ContactPage from './pages/ContactPage.js';
import AccountPage from './pages/AccountPage.js';
import CookingessentialsProductPage from './pages/CookingessentialsProductPage.js';
// import Contact from './components/Contact/Contact';
import BreakfastAndSnacks from './pages/Breakfast&Snacks';
import DairyAndCheese from './pages/Dairy&Cheese';
import TheCoffeeAndBeverage from './pages/TeaCoffee&Beverage';
import HoneyandSpreads from './pages/Honey&Spreads';
import Digestion from './pages/Digestion';
import GluetenFree from './pages/GluetenFree';
import Diabetes from './pages/Diabetes';
import ChildCare from './pages/ChildCare';
import Vegan from './pages/Vegan'



function App(){
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={ <ContactPage />} />
        <Route exact path="/account" element={ <AccountPage />} />
        <Route exact path="/cookingessentials" element={ <CookingessentialsProductPage />} />
        <Route exact path="/dryfruitsandsuperfruits" element={ <DairyAndCheese />} />
        <Route exact path="/BreakfastAndSnacks" element={ <BreakfastAndSnacks />} />
        <Route exact path="/DairyAndCheese" element={ <DairyAndCheese />} />
        <Route exact path="/TheCoffeeAndBeverage" element={ <TheCoffeeAndBeverage />} />
        <Route exact path="/HoneyandSpreads" element={ <HoneyandSpreads />} />
        <Route exact path="/digestion" element={ <Digestion />} />
         <Route exact path="/glueten-free" element={ <GluetenFree />} />
         <Route exact path="/diabetes" element={ <Diabetes />} />
         <Route exact path="/childcare" element={ <ChildCare />} />
         <Route exact path="/vegan" element={ <Vegan />} />


      </Routes>
    </Router>
  );
};
export default App;