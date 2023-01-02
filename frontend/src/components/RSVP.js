import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../components/Unauthorized/PageIntro";
import Header from "./Header";
import Button from "./Button";
import infinity from "assets/icons/icon.svg";


const RSVP = ( {buttonText}) => {
return(
   <section className="outer-wrapper">
        <section className="inner-wrapper">
            <Header />
            <StyledDiv><div>
            <h3>RSVP</h3>
        <h2>Will you attend to our special day?</h2>
        <div className="img-div"><img src={infinity} className="infinity"/></div>
       <form>
        <label>
          <input className="RSVP-input" type="text" placeholder="Your First Name"/>
          </label><br/><br/>
          <label>
          <input className="RSVP-input" type="text" placeholder="Your Last Name"/>
          </label><br/><br/>
          <label>
          <input className="RSVP-input" type="text" placeholder="Your e-mail"/></label><br/><br/>
          <label> Attenting?</label><br></br>
          <input type="radio" id="attending" name="attending" value="Yes" />
          <label for="attending">Yes, I'll be there</label>
          <input type="radio" id="not-attending" name="attending" value="No" />
          <label for="not-attending">Sorry, I can't come</label><br/><br/>

        <label> Accommodation</label><br/>
          <input type="radio" id="accommodation-help" name="accommodation" value="accommodation-help" />
          <label for="accommodation-help">I need help finding accommodation</label>
          <input type="radio" id="accommodation-done" name="accommodation" value="accommodation-done" />
          <label for="accommodation-done">I already have accommodation</label><br/><br/>

        <label>
          <input className="RSVP-input food" type="text" placeholder="Food Restrictions"/></label><br/><br/>
          <label>
          <input className="RSVP-input message" type="text" placeholder="Any Additional Information You would like to add?"/></label><br/><br/>
       <div className="button-div"><Button buttonText={"Send"}/></div>
        </form>
    </div></StyledDiv>

        </section>
    </section>)};

export default RSVP;
