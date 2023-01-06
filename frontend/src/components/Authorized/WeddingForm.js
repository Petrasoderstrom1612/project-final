import React, { useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { StyledDiv } from "../Unauthorized/PageIntro";
import Navbar from "../Navbar/Navbar";
import weddings from "reducers/weddings";
import Button from "../Button";
import infinity from "assets/icons/icon_infinity.svg";
import { OuterWrapper, InnerWrapper, StyledButton } from "styles/GlobalStyles"

const WeddingForm = () => {
	const [firstperson, setFirstPerson] = useState("");
	const [secondperson, setSecondPerson] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	/* 	const navigate = useNavigate(); */

	const onFormSubmit = (event) => {
		event.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ firstperson: firstperson, secondperson: secondperson, email: email })
		}
		fetch(API_URL)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					batch(() => {
						dispatch(weddings.actions.setFirstPerson(data.response.firstperson));
						dispatch(weddings.actions.setSecondPerson(data.response.secondperson));
						dispatch(weddings.actions.setEmail(data.response.email));
						dispatch(rsvps.actions.setAttending(data.response.attending));
						dispatch(weddings.actions.setError(null));
					});
				} else {
					batch(() => {
						dispatch(weddings.actions.setFirstPerson(null));
						dispatch(weddings.actions.setSecondPerson(null));
						dispatch(weddings.actions.setEmail(null));
						dispatch(weddings.actions.setAttending(null));
						dispatch(weddings.actions.setError(data.response));
						Swal.fire(weddings.response)
					});
				}
			})
	}
	return (
		<OuterWrapper>
			<InnerWrapper>
				<StyledDiv>
					<h3>Wedding form</h3>
					<h2>Fill in the form below in order to create your dreamy website</h2>
					<div className="img-div"><img src={infinity} className="infinity" /></div>
					<form className="wedding-form">
						<label>Information about the Wedding Couple<br /><br />
							<input id="FirstpersonFirstname" className="wedding-input" type="text" placeholder="Person 1 First Name" value={firstperson} onChange={e => setFirstPerson(e.target.value)} />
						</label><br /><br />
						<label>
							<input id="FirstpersonLasttname" className="wedding-input" type="text" placeholder="Person 1 Last Name" />
						</label><br /><br />
						<label>
							<input id="SecondpersonFirstname" className="wedding-input" type="text" placeholder="Person 2 First Name" value={secondperson} onChange={e => setSecondPerson(e.target.value)} />
						</label><br /><br />
						<label>
							<input id="SecondpersonLastname" className="wedding-input" type="text" placeholder="Person 2 Last Name" />
						</label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Your e-mail" value={email} onChange={e => setEmail(e.target.value)} /></label><br /><br />
						<label>Wedding Info<br /><br />
							<input className="wedding-input" type="date" /></label><br /><br />
						<label>
							<input className="wedding-input" type="time" /></label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Location of the Wedding Ceremony" /></label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Location of the Wedding Party" /></label><br /><br />
						<label>
							<input className="wedding-input message" type="text" placeholder="Add some information about the location" /></label><br /><br />
						<StyledButton type="submit">Send</StyledButton>
					</form>
				</StyledDiv>
			</InnerWrapper>
		</OuterWrapper>
	)
}

export default WeddingForm;