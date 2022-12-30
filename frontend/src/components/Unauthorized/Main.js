import React, { useEffect } from "react";
import Header from "components/Header";
import PageIntro from "components/Unauthorized/PageIntro";

const Main = () => {
	return (
		<>
			<section className="outer-wrapper">
				<section className="inner-wrapper">
					<Header />
					<PageIntro />
				</section>
			</section>
		</>
	)
}

export default Main;