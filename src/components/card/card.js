import React,{useContext} from "react";
import './card.css'
import {PricePlan} from "../../App"
const Card = (props) => {
  const Plan = useContext(PricePlan)
  console.log(Plan.pricePlan)
  return (
    <div className="CardContainer" id={props.record.PlanName}>
      <div className="InnerWrapperClass" id={"InnerWrapper"+props.record.PlanName}>
      <h2>{props.record.PlanName}</h2>
      <div class="price-container">
        <span class="price-month" id={"Price" +props.record.PlanName}>{"$"+props.record.Price[Plan.pricePlan]}</span>
      </div>
      <p>{props.record.Storage+" Storage"}</p>
      <p>{props.record.UserAllowed+" Users Allowed"}</p>
      <p class="last-child">{"Send up to "+props.record.SendUp}</p>
      <button className="card-button" id={"Btn" +props.record.PlanName}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
