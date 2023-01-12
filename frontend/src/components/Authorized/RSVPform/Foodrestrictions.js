// ! Not in use

import React from "react";
import { StyledFormSelect } from "styles/GlobalStyles"

const FoodRestrictions = () => {
    return (
        <StyledFormSelect name="food-restrictions" id="food-restrictions" defaultValue='default' onChange={e => setFoodrestrictions(e.target.value)}>
            <option value="default">Food Restrictions</option>
            <option value="Gluten Free">Gluten free</option>
            <option value="Lactose Free">Lactose free</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Other">Other - please specify below</option>
        </StyledFormSelect>
    )
}

export default FoodRestrictions