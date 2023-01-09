import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { API_URL } from "utils/utils";
import rsvps from "reducers/rsvps";
import { InnerWrapper, StyledButton, StyledSubHeading, StyledHeading } from "styles/GlobalStyles";
import { Headings } from "components/Headings/Headings";
import Swal from "sweetalert2";
import Header from "components/HeaderNav/Header";
// TODO: Check that this component still works

import FoodRestrictions from "./Foodrestrictions";
import Accommodation from "./Accomodation";
import Attendance from "./Attendance";

const RSVP = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [attending, setAttending] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ lastname: lastname, firstname: firstname, email: email, attending: attending })
    }
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(rsvps.actions.setFirstName(data.response.firstname));
            dispatch(rsvps.actions.setLastName(data.response.lastname));
            dispatch(rsvps.actions.setEmail(data.response.email));
            dispatch(rsvps.actions.setAttending(data.response.attending));
            dispatch(rsvps.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(rsvps.actions.setFirstName(null));
            dispatch(rsvps.actions.setUserId(null));
            dispatch(rsvps.actions.setEmail(null));
            dispatch(rsvps.actions.setAttending(null));
            dispatch(rsvps.actions.setError(data.response));
            Swal.fire(rsvps.response)
          });
        }
      })
  }
  return (
    <InnerWrapper>
      <Header />
      <Headings subheading="RSVP" heading="Will you join us on our special day?" />
      <form className="RSVP-form" onSubmit={onFormSubmit}>
        <label>
          <input id="firstname" className="RSVP-input" type="text" placeholder="First name" value={firstname} onChange={e => setFirstName(e.target.value)} />
        </label>
        <label>
          <input id="lastname" className="RSVP-input" type="text" placeholder="Last name" value={lastname} onChange={e => setLastName(e.target.value)} />
        </label>
        <label>
          <input id="email" className="RSVP-input" type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} /></label>
        <Attendance />
        <Accommodation />
        <br/>
        <FoodRestrictions />
        <label>
          <input className="RSVP-input message" type="text" placeholder="Comments" /></label>
          <br/>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </InnerWrapper>
  )
};

export default RSVP;
