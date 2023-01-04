import React from "react";
import { Link } from "react-router-dom";
import { OuterWrapper, InnerWrapper, StyledCatchPhrase, StyledHeading, StyledSubHeading } from "components/GlobalStyles"

const NotFound = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<StyledCatchPhrase>Oops!</StyledCatchPhrase>
				<StyledHeading>The page you are looking for does not exist.</StyledHeading>
				<StyledSubHeading>Here are some useful links:</StyledSubHeading>
				<Link to="/login">Log in</Link>
				<Link to="/">Home</Link>
				<Link to="/RSVP">RSVP</Link>
			</InnerWrapper>
		</OuterWrapper>
	)
}

export default NotFound;