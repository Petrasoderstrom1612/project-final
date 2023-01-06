import React from "react";
import LocationStructure from "components/Authorized/Location/LocationStructure";
import Footer from 'components/Footer/Footer'
import { InnerWrapper } from "styles/GlobalStyles";

const Location = () => {
	return (
		<InnerWrapper>
			<LocationStructure />
			<Footer />
		</InnerWrapper>
	)
}

export default Location;