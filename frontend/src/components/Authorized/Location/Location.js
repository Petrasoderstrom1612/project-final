import React from "react";
import LocationStructure from "components/Authorized/Location/LocationStructure";
import Footer from 'components/Footer/Footer'
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";

const Location = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<LocationStructure />
				<Footer />
			</InnerWrapper>
		</OuterWrapper>
	)
}

export default Location;