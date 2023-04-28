import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - inside a Component
  // Thie is array destructuring
const arr = useState(resList);

//const [listOfRestaurants,setListOfRestaurants] = useState(resList);
// TAbove is array destructuring on the fly

const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];


  
  // Normal JS Variable
   let listOfRestrautantsJS = [];

  //Normal JS Variable
  // let listOfRestrautantsJS = [
  //   {
  //     data: {
  //       id: "439202",
  //       name: "Third Wave Coffee",
  //       cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 28,
  //       avgRating: "3.7",
  //     }
  //   },
  //   {
  //     data: {
  //       id: "439203",
  //       name: "Dominos",
  //       cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 28,
  //       avgRating: "4.5",
  //     }
  //   },
  //   {
  //     data: {
  //       id: "439203",
  //       name: "MCD",
  //       cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 28,
  //       avgRating: "4.1",
  //     },
  //   },
  // ]; // empty list trying to loop over emptylist

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
           const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
