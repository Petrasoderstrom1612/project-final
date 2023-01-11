import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import weddings from "reducers/weddingdata";
import Swal from "sweetalert2";
import { StyledHeader } from "components/Authorized/HeaderNav/Header";
import { OuterWrapper, StyledCatchPhrase } from "styles/GlobalStyles";
import { InnerWrapper, StyledButton } from "styles/GlobalStyles";
import { Headings } from "components/Reusable/Headings/Headings";
import { API_URL } from "utils/utils";;
import { Footer } from "components/Reusable/Footer/Footer";

const WeddingForm = () => {
	const [firstperson, setFirstPerson] = useState("");
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
						dispatch(weddings.actions.setError(null));
					});
				} else {
					batch(() => {
						dispatch(weddings.actions.setFirstPerson(null));
						dispatch(weddings.actions.setSecondPerson(null));
						dispatch(weddings.actions.setEmail(null));
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
				<Headings subheading="Wedding form" heading="Add your information below to generate your dreamy website" />
				<form className="wedding-form" onSubmit={onFormSubmit}>
					<label>Information about the Wedding Couple
						<input id="Firstperson" className="wedding-input" type="text" placeholder="Firstperson" value={firstperson} onChange={e => setFirstPerson(e.target.value)} />
					</label>
					<StyledButton type="submit" onClick={() => goToUniqueWeddingPage()}>Send</StyledButton>
				</form>
			</InnerWrapper>
			<Footer subheading="Congratulations" heading="We're sure you'll have an amazing wedding day!" />
		</OuterWrapper>
	)
}

export default WeddingForm;
{/* <label>
					<input id="Secondperson" className="wedding-input" type="text" placeholder="Secondperson" value={secondperson} onChange={e => setSecondPerson(e.target.value)} />
				</label>
				<label>
					<input className="wedding-input" type="text" placeholder="Your e-mail" value={email} onChange={e => setEmail(e.target.value)} /></label> 
				 <label>Wedding Info
					<input className="wedding-input" type="date" /></label>
				<label>
					<input className="wedding-input" type="time" /></label>
				<label>
					<input className="wedding-input" type="text" placeholder="Location of the Wedding Ceremony" /></label>
				<label>
					<input className="wedding-input" type="text" placeholder="Location of the Wedding Party" /></label>
				<label>
					<input className="wedding-input message" type="text" placeholder="Add some information about the location" /></label> */}