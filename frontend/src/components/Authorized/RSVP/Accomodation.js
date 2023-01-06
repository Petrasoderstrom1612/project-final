import React from "react";

const Accommodation = () => {
    return (
        <>
            <h5>Accommodation</h5>
            <input type="radio" id="accommodation-help" name="accommodation" value="accommodation-help" />
            <label for="accommodation-help">I need help finding accommodation</label>
            <input type="radio" id="accommodation-done" name="accommodation" value="accommodation-done" />
            <label for="accommodation-done">I already have accommodation</label>
        </>
    )
}

export default Accommodation