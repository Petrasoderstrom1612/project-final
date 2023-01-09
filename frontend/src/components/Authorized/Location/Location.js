import React from "react";
import LocationStructure from "components/Authorized/Location/LocationStructure";
import Footer from 'components/Footer/Footer';
import Header from "components/HeaderNav/Header";
import { InnerWrapper } from "styles/GlobalStyles";

const Location = () => {
	return (
		<InnerWrapper>
      <Header />
			<LocationStructure />
			<Footer />
		</InnerWrapper>
	)
}

export default Location;