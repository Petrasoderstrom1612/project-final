// ! Not in use
import React from "react";
import { StyledSubHeading, StyledRadioContainer, StyledRadioButton } from "styles/GlobalStyles";
const accommodation = ({ accommodation, setAccommodation }) => {
    return (
        <section>
            <StyledSubHeading>Accommodation</StyledSubHeading>
            <StyledRadioContainer>
                <div>
                    <StyledRadioButton type="radio" id="accommodation-help" name="accommodation" value={accommodation} onChange={e => setAccommodation(e.target.value)} />
                    <label>I need accommodation</label>
                </div>
                <div>
                    <StyledRadioButton type="radio" id="accommodation-done" name="accommodation" value={accommodation} onChange={e => setAccommodation(e.target.value)} />
                    <label>I have accommodation</label>
                </div>
            </StyledRadioContainer>
        </section>
    )
}

export default Accommodation