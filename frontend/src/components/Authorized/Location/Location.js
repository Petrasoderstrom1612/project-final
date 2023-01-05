import React, { useEffect } from "react";
// import Header from "components/Navbar";
import LocationStructure from "components/Authorized/Location/LocationStructure";
import Footer from 'components/Footer'

const Location = () => {
	return (
		<>
			<section className="outer-wrapper">
				<section className="inner-wrapper">
					{/* <Header /> */}
					<LocationStructure /> 
					<Footer />
				</section>
			</section>
		</>
	)
}

export default Location;