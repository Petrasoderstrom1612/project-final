import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
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
  const [accommodation, setAccommodation] = useState("");
  const [foodrestrictions, setFoodrestrictions] = useState("");
  const [guestcomment, setGuestComment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { guestpassword } = useParams();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ attendance: attendance, guestname: guestname, guestemail: guestemail, accommodation: accommodation, foodrestrictions: foodrestrictions, guestcomment: guestcomment })
    }
    dispatch(rsvps.actions.setLoading(true))
    fetch(API_URL("rsvpform"), options)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(rsvps.actions.setAttendance(data.response.attendance));
            dispatch(rsvps.actions.setGuestName(data.response.guestname));
            dispatch(rsvps.actions.setGuestEmail(data.response.guestemail));
            dispatch(rsvps.actions.setAccommodation(data.response.accommodation));
            dispatch(rsvps.actions.setFoodrestrictions(data.response.foodrestrictions));
            dispatch(rsvps.actions.setGuestComment(data.response.guestcomment));
            dispatch(rsvps.actions.setError(null));
            dispatch(rsvps.actions.setLoading(false));
            navigate(`/wedding/confirmation/${guestpassword}`);

          });
        } else {
          batch(() => {
            dispatch(rsvps.actions.setAttendance(null));
            dispatch(rsvps.actions.setGuestName(null));
            dispatch(rsvps.actions.setGuestEmail(null));
            dispatch(rsvps.actions.setAccommodation(null));
            dispatch(rsvps.actions.setFoodrestrictions(null));
            dispatch(rsvps.actions.setGuestComment(null));
            dispatch(rsvps.actions.setError(data.response));
            Swal.fire("Oh, there's an error! Please re-check your responses")
          });
        }
      })
  }
  return (
    <OuterWrapper>
      <Header tabIndex="0" />
      <InnerWrapper>
        <Headings tabIndex="0" subheading="Magical moments" heading="Will you attend to our special day?" />
        <form onSubmit={onFormSubmit}>
          <StyledRadioContainer>
            <div>
              <StyledRadioButton type="radio" id="attendance" name="attendance" value="YesAttend" onChange={e => setAttendance(e.target.value)} />
              <label tabIndex="0">Yes, I will join you</label>
            </div>
            <div>
              <StyledRadioButton type="radio" id="attendance" name="attendance" value="NotAttend" onChange={e => setAttendance(e.target.value)} />
              <label tabIndex="0">No, I will not</label>
            </div>
          </StyledRadioContainer>
          <label>
            <StyledFormInput id="guestname" type="text" placeholder="Full name" value={guestname} onChange={e => setGuestName(e.target.value)} required />
          </label>
          <label>
            <StyledFormInput id="email" type="email" placeholder="E-mail" value={guestemail} onChange={e => setGuestEmail(e.target.value)} required /></label>
          <StyledSubHeading tabIndex="0">Accommodation</StyledSubHeading>
          <StyledRadioContainer>
            <div>
              <StyledRadioButton type="radio" id="YesAccommodation" name="accommodation" value="YesAccommodation" onChange={e => setAccommodation(e.target.value)} />
              <label tabIndex="0">I need accommodation</label>
            </div>
            <div>
              <StyledRadioButton type="radio" id="NoAccommodation" name="accommodation" value="NoAccommodation" onChange={e => setAccommodation(e.target.value)} />
              <label tabIndex="0">I have accommodation</label>
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
