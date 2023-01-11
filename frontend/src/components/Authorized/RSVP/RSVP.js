import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { API_URL } from "utils/utils";
import rsvps from "reducers/rsvps";
import { InnerWrapper, OuterWrapper, StyledButton, StyledFormInput } from "styles/GlobalStyles";
import { StyledComment } from "components/Authorized/WeddingForm/WeddingForm"
import Header from "components/Authorized/HeaderNav/Header";
import { Headings } from "components/Reusable/Headings/Headings";
import Swal from "sweetalert2";
// TODO: Check that this component still works

import FoodRestrictions from "./Foodrestrictions";
import Accommodation from "./Accomodation";
import Attendance from "./Attendance";
import { Footer } from "components/Reusable/Footer/Footer";

const RSVP = () => {
  const [attendance, setAttendance] = useState("");
  const [guestname, setGuestName] = useState("");
  const [guestemail, setGuestEmail] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [foodrestrictions, setFoodrestrictions] = useState("");
  const [guestcomment, setGuestComment] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ attendance: attendance, guestname: guestname, guestemail: guestemail, accomodation: accomodation, foodrestrictions: foodrestrictions, guestcomment: guestcomment })
    }
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(rsvps.actions.setAttendance(data.response.attendance));
            dispatch(rsvps.actions.setGuestName(data.response.guestname));
            dispatch(rsvps.actions.setGuestEmail(data.response.guestemail));
            dispatch(rsvps.actions.setAccomodation(data.response.accomodation));
            dispatch(rsvps.actions.setFoodrestrictions(data.response.foodrestrictions));
            dispatch(rsvps.actions.setGuestComment(data.response.guestcomment));
            dispatch(rsvps.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(rsvps.actions.setAttendance(null));
            dispatch(rsvps.actions.setGuestName(null));
            dispatch(rsvps.actions.setGuestEmail(null));
            dispatch(rsvps.actions.setAccomodation(null));
            dispatch(rsvps.actions.setFoodrestrictions(null));
            dispatch(rsvps.actions.setGuestComment(null));
            dispatch(rsvps.actions.setError(data.response));
            Swal.fire(rsvps.response)
          });
        }
      })
  }
  return (
    <OuterWrapper>
      <Header />
      <InnerWrapper>
        <Headings subheading="Magical moments" heading="Will you attend to our special day?" />
        <form onSubmit={onFormSubmit}>
          <Attendance />
          <label>
            <StyledFormInput id="guestname" type="text" placeholder="Full name" value={guestname} onChange={e => setGuestName(e.target.value)} />
          </label>
          <label>
            <StyledFormInput id="email" type="email" placeholder="E-mail" value={guestemail} onChange={e => setGuestEmail(e.target.value)} /></label>
          <Accommodation />
          <FoodRestrictions />
          <label>
            <StyledComment type="text" placeholder="Comments" value={guestcomment} onChange={e => setGuestComment(e.target.value)} /></label>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </InnerWrapper>
      <Footer subheading="Hope to see you" heading="Thank you for responding!" />
    </OuterWrapper>
  )
};

export default RSVP;
