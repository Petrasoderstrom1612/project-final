import React from "react";
import Counter from "components/Counter";
import Header from "../Navbar";
import Footer from "components/Footer";



const AuthorizedMain = () => {
return(
    <>
   <section className="outer-wrapper">
        <section className="inner-wrapper">
            <Header />
            <Counter />
            <Footer/>

        </section>
    </section></>)};

export default AuthorizedMain;
