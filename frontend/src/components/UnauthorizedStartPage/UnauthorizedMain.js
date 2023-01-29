import React from "react";
import PageIntro from "components/UnauthorizedStartPage/Intro/PageIntro";
import Login from 'components/UnauthorizedStartPage/RegLog/Login';
import { Footer } from "components/Reusable/Footer/Footer";

import { StyledHeader } from "components/Authorized/HeaderNav/Header";
import { StyledCatchPhrase } from "styles/GlobalStyles";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";

const Main = () => {
	return (
		<OuterWrapper>
			<StyledHeader tabIndex="0">
				<StyledCatchPhrase tabIndex="0">Blissful Beginnings</StyledCatchPhrase>
				<Login />
			</StyledHeader >
			<InnerWrapper>
				<PageIntro tabIndex="0"/>
			</InnerWrapper>
			<Footer tabIndex="0" subheading="Congratulations" heading="We're sure you'll have an amazing wedding day!" />
		</OuterWrapper>
	)
}

export default Main;
