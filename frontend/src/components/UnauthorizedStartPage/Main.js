import React from "react";
import PageIntro from "components/UnauthorizedStartPage/PageIntro";
import Login from 'components/RegLog/Login';
import Footer from 'components/Footer/Footer';
import { StyledHeader } from "components/HeaderNav/Header";
import { StyledCatchPhrase } from "styles/GlobalStyles";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";

const Main = () => {
	return (
		<OuterWrapper>
			<StyledHeader>
				<StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase>
			</StyledHeader >
			<InnerWrapper>
				<Login />
				<PageIntro />
			</InnerWrapper>
			<Footer />
		</OuterWrapper>
	)
}

export default Main;
