import React, { useEffect } from "react";
//import Header from "components/Navbar";
import PageIntro from "components/Unauthorized/PageIntro";
import Login from 'components/RegLog/Login';
import Footer from 'components/Footer/Footer'
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";

const Main = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<Login />
				<PageIntro />
				<Footer />
			</InnerWrapper>
		</OuterWrapper>
	)
}

export default Main;