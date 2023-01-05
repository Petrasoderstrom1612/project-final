import React, { useEffect } from "react";
//import Header from "components/Navbar";
import PageIntro from "components/Unauthorized/PageIntro";
import Login from 'components/Login';
import Footer from 'components/Footer'

const Main = () => {
	return (
		<>
			<section className="outer-wrapper">
				<section className="inner-wrapper">
					{/* <Header /> */}
					<Login />
					<PageIntro />
					<Footer />
				</section>
			</section>
		</>
	)
}

export default Main;