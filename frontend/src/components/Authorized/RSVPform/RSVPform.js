import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, batch } from "react-redux";
import Swal from "sweetalert2";

import rsvps from "reducers/rsvps";
import { API_URL } from "utils/utils";

import { InnerWrapper, OuterWrapper, StyledSubHeading, StyledButton, StyledFormInput, StyledRadioButton, StyledRadioContainer, StyledFormSelect } from "styles/GlobalStyles";
import { StyledComment } from "components/Authorized/WeddingForm/WeddingForm"
import Header from "components/Authorized/HeaderNav/Header";
import { Headings } from "components/Reusable/Headings/Headings";
import { Footer } from "components/Reusable/Footer/Footer";

const RSVP = () => {
  const [attendance, setAttendance] = useState("");
  const [guestname, setGuestName] = useState("");
  const [guestemail, setGuestEmail] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [foodrestrictions, setFoodrestrictions] = useState("");
  const [guestcomment, setGuestComment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onFormSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ attendance: attendance, guestname: guestname, guestemail: guestemail, accomodation: accomodation, foodrestrictions: foodrestrictions, guestcomment: guestcomment })
    }
    fetch(API_URL("rsvpform"), options)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("RSVPform post", data.response)
          batch(() => {
            dispatch(rsvps.actions.setAttendance(data.response.attendance));
            dispatch(rsvps.actions.setGuestName(data.response.guestname));
            dispatch(rsvps.actions.setGuestEmail(data.response.guestemail));
            dispatch(rsvps.actions.setAccomodation(data.response.accomodation));
            dispatch(rsvps.actions.setFoodrestrictions(data.response.foodrestrictions));
            dispatch(rsvps.actions.setGuestComment(data.response.guestcomment));
            dispatch(rsvps.actions.setError(null));
            navigate("/weddingform/guestpassword/:guestpassword/confirmation")
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
          <StyledRadioContainer>
            <div>
              <StyledRadioButton type="radio" id="attendance" name="attendance" onChange={e => setAttendance(e.target.value)} />
              <label>Yes, I will join you</label>
            </div>
            <div>
              <StyledRadioButton type="radio" id="attendance" name="attendance" onChange={e => setAttendance(e.target.value)} />
              <label>No, I will not</label>
            </div>
          </StyledRadioContainer>
          <label>
            <StyledFormInput id="guestname" type="text" placeholder="Full name" value={guestname} onChange={e => setGuestName(e.target.value)} required />
          </label>
          <label>
            <StyledFormInput id="email" type="email" placeholder="E-mail" value={guestemail} onChange={e => setGuestEmail(e.target.value)} required /></label>
          <StyledSubHeading>Accommodation</StyledSubHeading>
          <StyledRadioContainer>
            <div>
              <StyledRadioButton type="radio" id="accommodation-help" name="accommodation" value={accomodation} onChange={e => setAccomodation(e.target.value)} />
              <label>I need accommodation</label>
            </div>
            <div>
              <StyledRadioButton type="radio" id="accommodation-done" name="accommodation" value={accomodation} onChange={e => setAccomodation(e.target.value)} />
              <label>I have accommodation</label>
            </div>
          </StyledRadioContainer>
          <StyledFormSelect name="food-restrictions" id="food-restrictions" defaultValue='default' onChange={e => setFoodrestrictions(e.target.value)}>
            <option value="default">Food Restrictions</option>
            <option value="Gluten Free">Gluten free</option>
            <option value="Lactose Free">Lactose free</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Other">Other - please specify below</option>
          </StyledFormSelect>
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
