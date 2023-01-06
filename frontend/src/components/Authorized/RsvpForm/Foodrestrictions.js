import React from "react";

const FoodRestrictions = () => {
    return (
        <select className="RSVP-input" name="food-restrictions" id="food-restrictions">
            <option value="" disabled selected>Food Restrictions</option>
            <option value="Gluten Free">Gluten free</option>
            <option value="Lactose Free">Lactose free</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Other">Other - please specify below</option>
        </select>
    )
}

export default FoodRestrictions