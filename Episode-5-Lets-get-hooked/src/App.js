import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";




const styleCard = {
  backgroundColor: "#f0f0f0"
}

// react will wrap everything as as an object pass  to the component
//const RestaurantCard = (resName, cuisine) => { // this is destructuring on the fly
//Reusable Card






const AppLayout = () => {
   return (
    <div className="app">
      <Header />
      <Body />

    </div>
   )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 
