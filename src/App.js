import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Portfolio from "./component/Portfolio";
import Faq from "./component/Faq";
import Services from "./component/Services";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import Hero from "./component/Hero";
import About from "./component/About";
import Counts from "./component/Counts";
import Tabs from "./component/Tabs";
import Team from "./component/Team";
import Contact from "./component/Contact";
import Clients from "./component/Clients";




function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
     
      <Switch>
      <Route path="/" exact component={About}></Route>
      <Route path="/portfolio" exact component={Portfolio}></Route>
      <Route path="/team" exact component={Team}></Route>
      <Route path="/services" exact component={Services}></Route>
      <Route path="/testimonials" exact component={Testimonials}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      </Switch>
      </BrowserRouter>

      
      <Header/> 
      <Clients/>
      <About/>
      <Counts/>
      <Tabs/>
      <Hero/>
      <Portfolio/>
      <Faq/>
      <Team/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>

     
    </div>
  );
}

export default App;
