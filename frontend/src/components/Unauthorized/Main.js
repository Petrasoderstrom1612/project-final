import React, { useEffect } from "react";
import Header from "components/Header";
import PageIntro from "components/Unauthorized/PageIntro";
import Login from 'components/Login';

const Main = () => {
	return (
		<>
			<section className="outer-wrapper">
				<section className="inner-wrapper">
					<Header />
					<Login />
					<PageIntro />
				</section>
			</section>
		</>
	)
}

export default Main;