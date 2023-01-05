import React from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { API_URL } from "utils/utils";
import rsvps from "reducers/rsvps";
import { StyledDiv } from "./Unauthorized/PageIntro";
import Header from "./Header";
import Button from "./Button";
import infinity from "assets/icons/icon.svg";
import MapLocation from "./MapLocation";



const RSVP = ( /* {buttonText} */) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [attending, setAttending] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  /* 	const navigate = useNavigate(); */

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ lastname: lastname, firstname: firstname, email: email, attending: attending })
    }
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(rsvps.actions.setFirstName(data.response.firstname));
            dispatch(rsvps.actions.setLastName(data.response.lastname));
            dispatch(rsvps.actions.setEmail(data.response.email));
            dispatch(rsvps.actions.setAttending(data.response.attending));
            dispatch(rsvps.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(rsvps.actions.setFirstName(null));
            dispatch(rsvps.actions.setUserId(null));
            dispatch(rsvps.actions.setEmail(null));
            dispatch(rsvp.actions.setAttending(null));
            dispatch(rsvps.actions.setError(data.response));
            Swal.fire(rsvps.response)
          });
        }
      })
  }
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <MapLocation />
        <Header />
        <StyledDiv><div>
          <h3>RSVP</h3>
          <h2>Will you attend to our special day?</h2>
          <div className="img-div"><img src={infinity} className="infinity" /></div>
          <form className="RSVP-form" onSubmit={onFormSubmit}>
            <label>
              <input id="firstname" className="RSVP-input" type="text" placeholder="Your First Name" value={firstname}/>
            </label><br /><br />
            <label>
              <input id="lastname" className="RSVP-input" type="text" placeholder="Your Last Name" value={lastname} />
            </label><br /><br />
            <label>
              <input id="email" className="RSVP-input" type="text" placeholder="Your e-mail" value={email} /></label><br /><br />
            <label> Attenting?</label><br></br>
            <input type="radio" id="attending" name="attending" checked={attending === true} />
            <label for="attending">Yes, I'll be there</label>
            <input type="radio" id="not-attending" name="attending" checked={attending === false} />
            <label for="not-attending">Sorry, I can't come</label><br /><br />
            
            <label> Accommodation</label><br />
            <input type="radio" id="accommodation-help" name="accommodation" value="accommodation-help" />
            <label for="accommodation-help">I need help finding accommodation</label>
            <input type="radio" id="accommodation-done" name="accommodation" value="accommodation-done" />
            <label for="accommodation-done">I already have accommodation</label><br /><br />

            <select className="RSVP-input" name="food-restrictions" id="food-restrictions">
              <option value="" disabled selected>Food Restrictions</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Lactose Free">Lactose Free</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Other">Other. Please specify below</option>

            </select>
            <label>
              <input className="RSVP-input message" type="text" placeholder="Any Additional Information You would like to add?" /></label><br /><br />
            <div className="button-div"><Button buttonText={"Send"} /></div>
          </form>
        </div></StyledDiv>

      </section>
    </section>)
};

export default RSVP;
