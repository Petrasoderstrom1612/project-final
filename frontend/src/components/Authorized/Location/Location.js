import React from "react";

import LocationStructure from "components/Authorized/Location/LocationStructure";
import { Footer } from 'components/Reusable/Footer/Footer';
import Header from "components/Authorized/HeaderNav/Header";

import { OuterWrapper } from "styles/GlobalStyles";

const Location = () => {
	return (
		<OuterWrapper>
			<Header tabIndex="0"/>
			<LocationStructure tabIndex="0"/>
			<Footer tabIndex="0" subheading="Blissful beginnings" heading="Please, take a moment and respond to our invitation" footerButton="RSVP" />
		</OuterWrapper>
	)
}

export default Location;