import React, { useState, useEffect } from "react"
import { StyledDiv } from "../Unauthorized/PageIntro";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { API_URL } from "utils/utils";
import weddings from "reducers/weddings";
import infinity from "assets/icons/icon_infinity.svg";
import { OuterWrapper, InnerWrapper, StyledButton } from "components/GlobalStyles"
import { useDispatch, useSelector, batch } from "react-redux";


const RSVP = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector((store) => store.user.accessToken);

    useEffect(() => {
        if (accessToken) {
            navigate("/weddingform");
        }
    }, [accessToken])

    const onFormSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstname: firstname, lastname: lastname, email: email })
        }
        fetch(API_URL(mode), options)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    batch(() => {
                        dispatch(weddings.actions.setFirstName(data.response.firstname));
                        dispatch(weddings.actions.setLastName(data.response.lastname));
                        dispatch(weddings.actions.setEmail(data.response.email));
                        dispatch(user.actions.setAccessToken(data.response.accessToken));
                        dispatch(weddings.actions.setError(null));
                    });
                } else {
                    batch(() => {
                        dispatch(weddings.actions.setFirstName(null));
                        dispatch(weddings.actions.setLastName(null));
                        dispatch(weddings.actions.setEmail(null));
                        dispatch(user.actions.setAccessToken(null));
                        dispatch(weddings.actions.setError(data.response));
                        Swal.fire(data.response)
                    });
                }
            })
    }
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <StyledDiv>
                    <h3>RSVP</h3>
                    <h2>Will you attend to our special day?</h2>
                    <div className="img-div"><img src={infinity} className="infinity" /></div>
                    <form className="RSVP-form" onSubmit={onFormSubmit}>
                        <label>
                            <input onChange={e => setFirstName(e.target.value)} id="firstname" className="RSVP-input" type="text" placeholder="Your First Name" />
                        </label><br /><br />
                        <label>
                            <input onChange={e => setLastName(e.target.value)} id="lastname" className="RSVP-input" type="text" placeholder="Your Last Name" />
                        </label><br /><br />
                        <label>
                            <input onChange={e => setEmail(e.target.value)} id="email" className="RSVP-input" type="text" placeholder="Your e-mail" /></label><br /><br />
                        <label> Attending?</label><br></br>
                        <input type="radio" id="attending" name="attending" value="Yes" />
                        <label for="attending">Yes, I'll be there</label>
                        <input type="radio" id="not-attending" name="attending" value="No" />
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
                            <input className="RSVP-input message" type="text" placeholder="Any additional information you would like to add?" /></label><br /><br />
                        <StyledButton type="submit">Send</StyledButton>

                        {/*      <Button buttonText={"Send"}/></div> */}
                    </form>
                </StyledDiv>
            </InnerWrapper>
        </OuterWrapper>
    )
}

export default RSVP;

