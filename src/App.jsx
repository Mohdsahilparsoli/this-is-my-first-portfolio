import React, { useEffect } from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import  Portfolio from "./Components/portfolio/Portfolio";
import Service from "./Components/Services/Services";
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Menu from "./Components/Menu/Menu";
import Error from "./Components/Error/Eror";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const App = ()=>{



   
    useEffect(()=>{
        let navBar = document.querySelectorAll(".nav-link");
        let navCollapse = document.querySelector(".navbar-collapse.collapse");
        navBar.forEach(function (a){
            a.addEventListener("click", function(){
                navCollapse.classList.remove("show");
            })
        })
let nav = document.querySelector(".navbar");
window.onscroll= function(){
    if(document.documentElement.scrollTop>40){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }

}
        
    },[])
    return(<>

<Menu/>
    <Routes>
<Route index element={<Home/>}/>
<Route path="/service"  element={<Service/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/Portfolio" element={<Portfolio/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="*" element={<Error/>}/>
    </Routes>
    </>)
}
 export default App;