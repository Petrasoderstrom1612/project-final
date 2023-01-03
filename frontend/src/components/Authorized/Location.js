import React from "react";
import MapLocation from "components/MapLocation";
import Footer from "components/Footer";
import Header from "components/Header";
import { formatDistance } from 'date-fns';


const Location = () => {
return(

   <section className="outer-wrapper">
        <section className="inner-wrapper">
            <Header />
            <div><p>Description of location</p></div>
            <Footer />
            <MapLocation/>

        </section>
    </section>)};

export default Location;

//Description of location
//contact info
//RSVP-footer