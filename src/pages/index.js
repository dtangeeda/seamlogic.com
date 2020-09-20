import React from "react"
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import MainMessage from "../components/mainmessage.js";
import MainItems from "../components/mainitems.js";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby"
//import { withPrefix, Link } from "gatsby"




const BodyStyle = {
  fontFamily: ['Source Sans Pro', 'sans-serif']
};

function HomePage() {
  return (
    
    <>
    <Header.Header /> 
    <div className="leading-normal tracking-normal text-white gradient" style={BodyStyle}>
    <Header.HeaderNav />
    <MainMessage />
    <MainItems />
    <Footer.Message />
    <Footer.Element />
    </div>
    <Helmet>
    <script src={withPrefix('nav.js')} type="text/javascript" />
    <script src={withPrefix('toggle-dropdown.js')} type="text/javascript" />
    </Helmet>
    </>
  );
}

export default HomePage;

