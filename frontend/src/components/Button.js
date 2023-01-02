import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import styled from "styled-components/macro";


const Button = (props) => {

    return (
        <button className="submit-button" type="submit" value="Submit">{props.buttonText}</button>
    )
}

export default Button;
