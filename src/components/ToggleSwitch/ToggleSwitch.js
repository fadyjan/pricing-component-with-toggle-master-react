import React ,{useContext , useState} from 'react'
import "./ToggleSwitch.css"

import {PricePlan} from "../../App"




const ToggleSwitch = () => {
    const [checkState, setCheckState] = useState(true)
    const Plan = useContext(PricePlan)
    const onChangeHandler = (e)=>{
        if (e.target.checked) {
            Plan.PriceHanler("Monthly")
            setCheckState(true)

        } else {
            setCheckState(false)

            Plan.PriceHanler("Annually")
        }
    }
  return (
    <div id="ToggleContainer">
    <label>Annually</label>
    <input type="checkbox" checked={checkState} id="switch" onChange={onChangeHandler}/><label id="LabelToggle" for="switch">Toggle</label>
    <label>Monthly</label>
  </div>
  )
}

export default ToggleSwitch