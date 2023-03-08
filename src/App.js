import { useState, createContext } from "react";
import "./App.css";
import Card from "./components/card/card";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
export const PricePlan = createContext("Monthly");

function App() {

  const [pricePlan, setPricePlan] = useState("Monthly")

  const PriceHanler = (Currentstate)=>{
    setPricePlan(Currentstate)
  }
  const Data = [
    {
      PlanName: "Basic",
      Price: {"Monthly":"19.99" , "Annually":"199.99"},
      Storage: "500 GB",
      UserAllowed: "2",
      SendUp: "3 GB",
    },
    {
      PlanName: "Professional",
      Price:{"Monthly":"24.99" , "Annually":"249.99"} ,
      Storage: "1 TB",
      UserAllowed: "5",
      SendUp: "10 GB",
    },
    {
      PlanName: "Master",
      Price:{"Monthly":"39.99" , "Annually":"399.99"} ,
      Storage: "2 TB",
      UserAllowed: "10",
      SendUp: "20 GB",
    },
  ];
  return (
    <PricePlan.Provider value={{pricePlan , PriceHanler}}>
      <div className="App">
        <h1>Our Pricing</h1>
        <ToggleSwitch  ></ToggleSwitch>
        <div id="MainContainer">
          {Data.map((record) => {
            return <Card record={record}></Card>;
          })}
        </div>
      </div>
    </PricePlan.Provider>
  );
}

export default App;
