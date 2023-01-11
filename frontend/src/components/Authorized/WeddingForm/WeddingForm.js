import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import styled from "styled-components/macro"

import weddings from "reducers/weddingdata";
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
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [location, setLocation] = useState("");
	const [comment, setComment] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const goToUniqueWeddingPage = () => {
		navigate("/weddingform/guestpassword/:guestpassword")
	}

	const onFormSubmit = (event) => {
		event.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ firstperson: firstperson, secondperson: secondperson, email: email, date: date, time: time, location: location, comment: comment })
		}
		fetch(API_URL)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					batch(() => {
						dispatch(weddings.actions.setFirstPerson(data.response.firstperson));
						dispatch(weddings.actions.setSecondPerson(data.response.secondperson));
						dispatch(weddings.actions.setEmail(data.response.email));
						dispatch(weddings.actions.setDate(data.response.date));
						dispatch(weddings.actions.setTime(data.response.time));
						dispatch(weddings.actions.setLocation(data.response.location));
						dispatch(weddings.actions.setComment(data.response.comment));
						dispatch(weddings.actions.setError(null));
					});
				} else {
					batch(() => {
						dispatch(weddings.actions.setFirstPerson(null));
						dispatch(weddings.actions.setSecondPerson(null));
						dispatch(weddings.actions.setEmail(null));
						dispatch(weddings.actions.setDate(null));
						dispatch(weddings.actions.setTime(null));
						dispatch(weddings.actions.setLocation(null));
						dispatch(weddings.actions.setComment(null));
						dispatch(weddings.actions.setError(data.response));
						Swal.fire(weddings.response)
					});
				}
			})
	}
	return (
		<OuterWrapper>
			<StyledHeader>
				<StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase>
			</StyledHeader >
			<InnerWrapper>
				<Headings subheading="Wedding form" heading="Generate your dreamy website here" />
				<form onSubmit={onFormSubmit}>
					<StyledSubHeading>Information about your wedding</StyledSubHeading>
					<label>
						<StyledFormInput id="Firstperson" type="text" placeholder="Name of spouse 1" value={firstperson} onChange={e => setFirstPerson(e.target.value)} required />
					</label>
					<label>
						<StyledFormInput id="Secondperson" type="text" placeholder="Name of spouse 2" value={secondperson} onChange={e => setSecondPerson(e.target.value)} required />
					</label>
					<label>
						<StyledFormInput type="email" placeholder="E-mail address" value={email} onChange={e => setEmail(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="date" value={date} onChange={e => setDate(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="time" value={time} onChange={e => setTime(e.target.value)} required /></label>
					<label>
						<StyledFormInput type="text" placeholder="Location of wedding venue" value={location} onChange={e => setLocation(e.target.value)} required /></label>
					<label>
						<StyledComment type="text" placeholder="Comments" value={comment} onChange={e => setComment(e.target.value)} /></label>
					<StyledButton type="submit" onClick={() => goToUniqueWeddingPage()}>Send</StyledButton>
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