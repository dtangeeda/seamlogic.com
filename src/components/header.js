import React from "react";
import Helmet from "react-helmet"
import { Link } from "react-scroll";
import LogoImg from "../images/logo.png";

function Header() {
    return (
            <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>SeamLogic Inc - Seamless. Synthesis. Solutions. </title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta name="author" content="" />

            { /* -- Font Awesome if you need it */ }
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
            
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
            
            { /* --Replace with your tailwind.css once created--> */}

                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />

                {/* -- Define your gradient here - use online tools to find a gradient matching your branding-- */ }
                <style>{"\
                    .gradient {{\
                        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);\
                    }\
                "}</style>

            </Helmet>
    
    )
  }


  function HeaderNav() {
    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
      
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              
          <div className="pl-4 flex items-center">
              <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="/"> 
                  {/* --Icon from: http://www.potlabicons.com/ -- */ }
                  <img className="h-8 fill-current inline" src={LogoImg} alt='' />
                    SeamLogic
              </a>
          </div>
  
          <div className="block lg:hidden pr-4">
              <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
                  <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
          </div>
  
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                      <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a>
                  </li>
                  <li className="mr-3">
                      <Link className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" activeClass="active" to="services" spy={true} smooth={true} duration={1000} style={{cursor:'pointer'}}>Services</Link>
                  </li>
                  <li className="mr-3">
                      <Link className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" activeClass="active" to="aboutus" spy={true} smooth={true} duration={1000} style={{cursor:'pointer'}}>Company</Link>
                  </li>
              </ul>
              <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Contact</button>
          </div>
      </div>
      
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>  

    )
    } 



  export default { Header, HeaderNav };


  