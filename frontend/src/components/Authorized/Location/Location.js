import React from "react";
import LocationStructure from "components/Authorized/Location/LocationStructure";
import { Footer } from 'components/Footer/Footer';
import Header from "components/HeaderNav/Header";
import { OuterWrapper } from "styles/GlobalStyles";

const Location = () => {
	return (
		<OuterWrapper>
			<Header />
			<LocationStructure />
			<Footer subheading="Subheading" heading="Please, take a moment and respond to our invitation" footerButton="RSVP" />
		</OuterWrapper>
	)
}

export default Location;