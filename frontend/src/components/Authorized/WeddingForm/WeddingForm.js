import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, batch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import styled from "styled-components/macro"

import weddingdata from "reducers/weddingdata";
import { API_URL } from "utils/utils";

import {
	OuterWrapper,
	StyledCatchPhrase,
	InnerWrapper,
	StyledButton,
	StyledSubHeading,
	StyledFormInput
} from "styles/GlobalStyles";
import { StyledHeader } from "components/Authorized/HeaderNav/Header";
import { Headings } from "components/Reusable/Headings/Headings";
import { Footer } from "components/Reusable/Footer/Footer";

const WeddingForm = () => {
	const [firstperson, setFirstPerson] = useState("");
	const [secondperson, setSecondPerson] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhonenumber] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [location, setLocation] = useState("");
	const [guestpassword, setGuestpassword] = useState("");
	const [comment, setComment] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const accessToken = useSelector((store) => store.user.accessToken)

	const onFormSubmit = (event) => {
		event.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			},
			body: JSON.stringify({ firstperson: firstperson, secondperson: secondperson, email: email, phonenumber: phonenumber, date: date, time: time, location: location, guestpassword: guestpassword, comment: comment })
		}
		fetch(API_URL("wedding"), options)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					batch(() => {
						dispatch(weddingdata.actions.setFirstPerson(data.response.firstperson));
						dispatch(weddingdata.actions.setSecondPerson(data.response.secondperson));
						dispatch(weddingdata.actions.setEmail(data.response.email));
						dispatch(weddingdata.actions.setPhonenumber(data.response.phonenumber));
						dispatch(weddingdata.actions.setDate(data.response.date));
						dispatch(weddingdata.actions.setTime(data.response.time));
						dispatch(weddingdata.actions.setLocation(data.response.location));
						dispatch(weddingdata.actions.setGuestpassword(data.response.guestpassword));
						dispatch(weddingdata.actions.setComment(data.response.comment));
						dispatch(weddingdata.actions.setError(null));
						navigate(`/wedding/${guestpassword}`)
					});
				} else {
					batch(() => {
						dispatch(weddingdata.actions.setFirstPerson(null));
						dispatch(weddingdata.actions.setSecondPerson(null));
						dispatch(weddingdata.actions.setEmail(null));
						dispatch(weddingdata.actions.setPhonenumber(null));
						dispatch(weddingdata.actions.setDate(null));
						dispatch(weddingdata.actions.setTime(null));
						dispatch(weddingdata.actions.setLocation(null));
						dispatch(weddingdata.actions.setComment(null));
						dispatch(weddingdata.actions.setGuestpassword(null));
						dispatch(weddingdata.actions.setError(data.response));
						Swal.fire('This password is already taken. Please select a unique one!')
					});
				}
			})
	}
	return (
		<OuterWrapper>
			<StyledHeader>
				<StyledCatchPhrase tabIndex="0">Blissful Beginnings</StyledCatchPhrase>
			</StyledHeader >
			<InnerWrapper>
				<Headings tabIndex="0" subheading="Wedding form" heading="Generate your dreamy website here" />
				<form onSubmit={onFormSubmit}>
					<StyledSubHeading tabIndex="0">Information about your wedding</StyledSubHeading>
					<label>
						<StyledFormInput id="Firstperson" type="text" placeholder="Name of spouse 1" value={firstperson} onChange={e => setFirstPerson(e.target.value)} required />
					</label>
					<label>
						<StyledFormInput id="Secondperson" type="text" placeholder="Name of spouse 2" value={secondperson} onChange={e => setSecondPerson(e.target.value)} required />
					</label>
					<label>
						<StyledFormInput type="email" placeholder="E-mail address" value={email} onChange={e => setEmail(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="tel" placeholder="Phone number" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="date" placeholder="Date of wedding" value={date} onChange={e => setDate(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="time" placeholder="Time of wedding" value={time} onChange={e => setTime(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="text" placeholder="Location of wedding venue" value={location} onChange={e => setLocation(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="text" placeholder="Guest password" value={guestpassword} onChange={e => setGuestpassword(e.target.value)} required /></label>
					<label>
						<StyledComment type="text" placeholder="Comments" value={comment} onChange={e => setComment(e.target.value)} /></label>
					<StyledButton type="submit">Send</StyledButton>
				</form>
			</InnerWrapper>
			<Footer subheading="Congratulations" heading="We're sure you'll have an amazing wedding day!" />
		</OuterWrapper >
	)
}

export default WeddingForm;

export const StyledComment = styled(StyledFormInput)`
 height: 10vh;
`