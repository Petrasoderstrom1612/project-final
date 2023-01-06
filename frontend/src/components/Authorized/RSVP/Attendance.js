import React from "react";

const Attendance = () => {
    return (
        <>
            <h5>Will you be able to join our special day?</h5>
            <input type="radio" id="attending" name="attending" onChange={e => setAttending(e.target.value)} />
            <label for="attending">Yes</label>
            <input type="radio" id="not-attending" name="attending" onChange={e => setAttending(e.target.value)} />
            <label for="not-attending">No</label>
        </>
    )
}

export default Attendance