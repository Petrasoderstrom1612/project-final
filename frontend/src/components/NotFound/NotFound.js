import React from "react";
import { Link } from "react-router-dom";
import { InnerWrapper, OuterWrapper, StyledCatchPhrase, StyledSubHeading } from "styles/GlobalStyles"
import { Headings } from "components/Headings/Headings";
import heroimg from "../../assets/images/hero-img-rings.jpg";
import styled from "styled-components/macro";


const NotFound = () => {
	return (
		<StyledNotFound>
			<InnerWrapper>
				<StyledCatchPhrase>Oops!</StyledCatchPhrase>
				<Headings subheading="The page you are looking for does not exist" heading="Follow the link below to sign up or log in" />
				{/* 			<Link to="/login"><StyledSubHeading>Log in</StyledSubHeading></Link>
 */}			<Link to="/"><StyledSubHeading>Home</StyledSubHeading></Link>
			</InnerWrapper>
		</StyledNotFound>
	)
}

export default NotFound;

export const StyledNotFound = styled(OuterWrapper)`
background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, .1)), url(${heroimg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
`
