import React from "react";
import Counter from "components/Counter";
import Navbar from "../Navbar/Navbar";
import Footer from "components/Footer/Footer";



const AuthorizedMain = () => {
    return (
        <>
            <section className="outer-wrapper">
                <section className="inner-wrapper">
                    <Navbar />
                    <Counter />
                    <Footer />

                </section>
            </section></>)
};

export default AuthorizedMain;
