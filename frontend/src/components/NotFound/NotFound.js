import React from "react";
import { Link } from "react-router-dom";
import { InnerWrapper, StyledCatchPhrase } from "styles/GlobalStyles"
import { Headings } from "components/Headings/Headings";

const NotFound = () => {
	return (
		<InnerWrapper>
			<StyledCatchPhrase>Oops!</StyledCatchPhrase>
			<Headings subheading="The page you are looking for does not exist" heading="Here are some links for guidance" />
			<Link to="/login">Log in</Link>
			<Link to="/">Home</Link>
			<Link to="/RSVP">RSVP</Link>
		</InnerWrapper>
	)
}

export default NotFound;