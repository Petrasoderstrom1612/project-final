import React from "react";
import { StyledDiv } from "../Unauthorized/PageIntro";
import Header from "../Navbar";
import Button from "../Button";
import infinity from "assets/icons/icon_infinity.svg";
import { OuterWrapper, InnerWrapper, StyledButton } from "components/GlobalStyles"

const WeddingForm = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<Header />
				<StyledDiv>
					<h3>Wedding form</h3>
					<h2>Fill in the following form below in order to create your dreamy website.</h2>
					<div className="img-div"><img src={infinity} className="infinity" /></div>
					<form className="wedding-form">
						<label>Information about the Wedding Couple<br/><br/>
							<input className="wedding-input" type="text" placeholder="Person 1 First Name" />
						</label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Person 1 Last Name" />
						</label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Person 2 First Name" />
						</label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Person 2 Last Name" />
						</label><br /><br />
						<label>
							<input className="wedding-input" type="text" placeholder="Your e-mail" /></label><br /><br />
							<label>Wedding Info<br/><br/>							
							<input className="wedding-input" type="date" placeholder="Date of the Wedding"/></label><br /><br />
							<label>
							<input className="wedding-input" type="time" placeholder="Time of the Wedding"/></label><br /><br />
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