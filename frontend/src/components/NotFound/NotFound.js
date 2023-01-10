import React from "react";
import { Link } from "react-router-dom";
import { InnerWrapper, OuterWrapper, StyledCatchPhrase, StyledSubHeading } from "styles/GlobalStyles"
import { Headings } from "components/Headings/Headings";
import heroimg from "../../assets/images/timeline_flowersandring.jpg";
import styled from "styled-components/macro";


const NotFound = () => {
	return (
		<StyledNotFound>
			<InnerWrapper>
				<StyledCatchPhrase>Oops!</StyledCatchPhrase>
				<Headings subheading="Error 404" heading="The page you are looking for does not exist" />
				<Link to="/"><StyledSubHeading>Click here to sign up / log in</StyledSubHeading></Link>
			</InnerWrapper>
		</StyledNotFound>
	)
}

export default NotFound;

export const StyledNotFound = styled(OuterWrapper)`
background-image: radial-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, .1)), url(${heroimg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`
