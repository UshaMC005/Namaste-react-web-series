import React from 'react';

const RestaurantCard = (props) => {
    const { resData } = props;
    //destructuring
    const {cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    } = resData?.data;
    console.log(props)
    return(
     
      <div className="res-card">
        <img
         className="res-logo" 
         alt="res-logo"
         src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
           resData.data.cloudinaryImageId
          }
        />
        <h3 style={{backgroundColor: "#f0f0f0f0"}}>{name}</h3>
        {/* <h4>{props.cuisine}</h4> */}
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>${costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  
  }

  export default RestaurantCard;