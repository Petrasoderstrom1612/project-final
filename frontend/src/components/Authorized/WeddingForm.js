import React from "react";
import { StyledDiv } from "../Unauthorized/PageIntro";
import Header from "../Header";
import Button from "../Button";
import infinity from "assets/icons/icon_infinity.svg";
import { OuterWrapper, InnerWrapper } from "components/GlobalStyles"

const WeddingForm = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<Header />
					<StyledDiv>
				<h3>Wedding form</h3>
				<h2>Fill in the following form below in order to create your dreamy website.</h2>
				<div className="img-div"><img src={infinity} className="infinity"/></div>
			   <form className="RSVP-form">
				<label>
				  <input className="RSVP-input" type="text" placeholder="Your First Name"/>
				  </label><br/><br/>
				  <label>
				  <input className="RSVP-input" type="text" placeholder="Your Last Name"/>
				  </label><br/><br/>
				  <label>
				  <input className="RSVP-input" type="text" placeholder="Your e-mail"/></label><br/><br/>
				  <label> Attending?</label><br></br>
				  <input type="radio" id="attending" name="attending" value="Yes" />
				  <label for="attending">Yes, I'll be there</label>
				  <input type="radio" id="not-attending" name="attending" value="No" />
				  <label for="not-attending">Sorry, I can't come</label><br/><br/>
		
				<label> Accommodation</label><br/>
				  <input type="radio" id="accommodation-help" name="accommodation" value="accommodation-help" />
				  <label for="accommodation-help">I need help finding accommodation</label>
				  <input type="radio" id="accommodation-done" name="accommodation" value="accommodation-done" />
				  <label for="accommodation-done">I already have accommodation</label><br/><br/>
		
				  <select className="RSVP-input" name="food-restrictions" id="food-restrictions">
				  <option value="" disabled selected>Food Restrictions</option>
				  <option value="Gluten Free">Gluten Free</option>
				  <option value="Lactose Free">Lactose Free</option>
				  <option value="Vegetarian">Vegetarian</option>
				  <option value="Vegan">Vegan</option>
				  <option value="Other">Other. Please specify below</option>
		</select>
				  <label>
				  <input className="RSVP-input message" type="text" placeholder="Any additional information you would like to add?"/></label><br/><br/>
			   <div className="button-div"><Button buttonText={"Send"}/></div>
				</form>
			</StyledDiv>
			</InnerWrapper>
			</OuterWrapper>
		)}

export default WeddingForm;