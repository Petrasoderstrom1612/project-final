// ! Not in use
import React from "react";
import { StyledRadioButton, StyledRadioContainer } from "styles/GlobalStyles";

const Attendance = () => {
    return (
        <StyledRadioContainer>
            <div>
                <StyledRadioButton type="radio" id="attendance" name="attendance" onChange={e => setAttendance(e.target.value)} />
                <label>Yes, I will join you</label>
            </div>
            <div>
                <StyledRadioButton type="radio" id="attendance" name="attendance" onChange={e => setAttendance(e.target.value)} />
                <label>No, I will not</label>
            </div>
        </StyledRadioContainer>
    )
}

export default Attendance

