import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png"

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *     - RestaurantCard
 *       - Images
 *       - Name of Res, Star Rating , cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" 
      src={logo}
      />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div> 
      </div>
    )
}

const styleCard = {
  backgroundColor: "#f0f0f0"
}

// react will wrap everything as as an object pass  to the component
//const RestaurantCard = (resName, cuisine) => { // this is destructuring on the fly
//Reusable Card
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
   
    <div className="res-card" style={styleCard}>
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

// Hard coded data
const resList =  [
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "439202",
    name: "Third Wave Coffee",
    uuid: "54dee69d-d3d2-4002-b80e-795391935f43",
    city: "1",
    area: "Kalyan Nagar",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
    cuisines: [
      "Beverages",
      "Bakery",
      "Continental"
      ],
    tags: [
        
      ],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 28,
    minDeliveryTime: 28,
    maxDeliveryTime: 28,
    slaString: "28 MINS",
    lastMileTravel: 3.700000047683716,
    slugs: {
      restaurant: "third-wave-coffee-roasters-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "HEISETASSE BEVERAGES PRIVATE LIMITED/  THIRD WAVE COFFEE ROASTERS No.2116(BMP 12), Ground Floor, 4th Cross,  CMR Road, HRBR Layout, 2nd Block, Kalyan  Nagar, Bangalore, B.B.M.P East,  Karnataka-560043",
    locality: "Hrbr Layout",
    parentId: 274773,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "30% off",
      shortDescriptionList: [
          {
          meta: "30% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "30% off up to ₹75 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "30% OFF",
      shortDescriptionList: [
          {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "30% off up to ₹75 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    ribbon: [
        {
        type: "PROMOTED"
        }
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6524649~p=1~eid=00000187-bd9d-484f-0493-3f46005a0145",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "439202",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      lastMileTravel: 3.700000047683716,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: true,
    avgRating: "4.3",
    totalRatings: 1000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "90018",
    name: "Meghana Foods",
    uuid: "0767b105-9e87-48ba-b142-b22a47116c76",
    city: "1",
    area: "Kalyan Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "fsqyubnn1p1mo57ek4bi",
    cuisines: [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian",
      "Chinese",
      "Seafood"
      ],
    tags: [
        
      ],
    costForTwo: 50000,
    costForTwoString: "₹500 FOR TWO",
    deliveryTime: 29,
    minDeliveryTime: 29,
    maxDeliveryTime: 29,
    slaString: "29 MINS",
    lastMileTravel: 3.9000000953674316,
    slugs: {
      restaurant: "meghana-foods-electronic-city",
      city: "bangalore"
      },
    cityState: "1",
    address: "NO. 524, HK ARCADE, HRBR LAYOUT, 2 ND BLOCK, 5 TH MAIN, RINGROAD, KALYAN NAGAR, BANGALORE-560043",
    locality: "HRBR Layout",
    parentId: 635,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.9 kms",
    hasSurge: false,
    sla: {
      restaurantId: "90018",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      lastMileTravel: 3.9000000953674316,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "4.4",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "54866",
    name: "Savoury Restaurant",
    uuid: "4531f1b1-2500-4ed9-b601-080dd3f46ed4",
    city: "1",
    area: "Kammanahalli/Kalyan Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "304f6209ba1574c78d855538cace7166",
    cuisines: [
      "Arabian",
      "Indian",
      "Chinese",
      "Tandoor",
      "Biryani",
      "Seafood",
      "Kerala"
      ],
    tags: [
        
      ],
    costForTwo: 60000,
    costForTwoString: "₹600 FOR TWO",
    deliveryTime: 32,
    minDeliveryTime: 32,
    maxDeliveryTime: 32,
    slaString: "32 MINS",
    lastMileTravel: 3.700000047683716,
    slugs: {
      restaurant: "savoury-kammanahalli-kammanahallikalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "#183,Kammanahalli Main Road ,Savoury jn,opp St.peter's school,Bangalore-560084",
    locality: "Ramaiah Layout",
    parentId: 179209,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "30% off",
      shortDescriptionList: [
          {
          meta: "30% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "30% off up to ₹75 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "30% OFF",
      shortDescriptionList: [
          {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "30% off up to ₹75 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    ribbon: [
        {
        type: "PROMOTED"
        }
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6560928~p=4~eid=00000187-bd9d-484f-0493-3f47005a0460",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "54866",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      lastMileTravel: 3.700000047683716,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: true,
    avgRating: "4.0",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "70161",
    name: "Imperio Restaurant",
    uuid: "579609b6-73f2-4d8f-a777-20929a10b7b3",
    city: "1",
    area: "Hrbr Layout",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "uz8axstizmuiij9adupe",
    cuisines: [
      "Chinese",
      "South Indian",
      " North Indian",
      "Continental",
      "Desserts",
      "Kerala",
      "Andhra",
      "Beverages",
      "Mughlai",
      "Seafood",
      "Hyderabadi",
      "Pan-Asian",
      "Thai"
      ],
    tags: [
        
      ],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 32,
    minDeliveryTime: 32,
    maxDeliveryTime: 32,
    slaString: "32 MINS",
    lastMileTravel: 3.700000047683716,
    slugs: {
      restaurant: "imperio-restaurant-kalyan-nagar-kammanahallikalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "No.429 1st block hrbr layout kalyan Nagar",
    locality: "1st Block",
    parentId: 5610,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "20% off",
      shortDescriptionList: [
          {
          meta: "20% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "20% off up to ₹50 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "20% OFF",
      shortDescriptionList: [
          {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "20% off up to ₹50 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "70161",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      lastMileTravel: 3.700000047683716,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "4.0",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "460431",
    name: "Burger King",
    uuid: "825bc6f6-a222-4608-b345-1e6644e94447",
    city: "1",
    area: "Gopalan Signature Mall",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
    cuisines: [
      "Burgers",
      "American"
      ],
    tags: [
        
      ],
    costForTwo: 35000,
    costForTwoString: "₹350 FOR TWO",
    deliveryTime: 27,
    minDeliveryTime: 27,
    maxDeliveryTime: 27,
    slaString: "27 MINS",
    lastMileTravel: 3,
    slugs: {
      restaurant: "burger-king-old-madras-road-cv-raman-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "No.6, Gopalan Signature Mall, Shop No.GF-1C, Ground Floor, Old Madras Road, Nagavara Palya, C.V.Raman Nagar, Bangalore, Sarvagna Nagar , B.B.M.P East, Karnataka-560038",
    locality: "Gopalan Signature Mall",
    parentId: 166,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "60% off",
      shortDescriptionList: [
          {
          meta: "60% off | Use STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "60% off up to ₹120 | Use code STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "60% OFF",
      shortDescriptionList: [
          {
          meta: "Use STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "60% off up to ₹120 | Use code STEALDEAL",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3 kms",
    hasSurge: false,
    sla: {
      restaurantId: "460431",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      lastMileTravel: 3,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "4.2",
    totalRatings: 1000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "32743",
    name: "Bangarpet Chats",
    uuid: "aa694681-36c3-4a55-b097-da12f2bbbe35",
    city: "1",
    area: "Ramamurthy Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "wrc5yywbfcy3snz54r3a",
    cuisines: [
      "Chaat",
      "Snacks"
      ],
    tags: [
        
      ],
    costForTwo: 10000,
    costForTwoString: "₹100 FOR TWO",
    deliveryTime: 24,
    minDeliveryTime: 24,
    maxDeliveryTime: 24,
    slaString: "24 MINS",
    lastMileTravel: 3.9000000953674316,
    slugs: {
      restaurant: "chat-point-rammurthy-nagar-ramamurthy-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "kalkere main road ramamurthy nagar,Bangalore 560016",
    locality: "kalkere main road ",
    parentId: 21568,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "20% off",
      shortDescriptionList: [
          {
          meta: "20% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "20% off up to ₹50 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "20% OFF",
      shortDescriptionList: [
          {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "20% off up to ₹50 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    ribbon: [
        {
        type: "PROMOTED"
        }
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6555793~p=7~eid=00000187-bd9d-484f-0493-3f48005a074c",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.9 kms",
    hasSurge: false,
    sla: {
      restaurantId: "32743",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      lastMileTravel: 3.9000000953674316,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: true,
    avgRating: "4.1",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "897",
    name: "Hotel Empire",
    uuid: "0578e973-649f-408c-9fe9-8a951564f720",
    city: "1",
    area: "Kammanahalli",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "etw4uqlzhgjv33ifp87e",
    cuisines: [
      "North Indian",
      "Kebabs",
      "Biryani"
      ],
    tags: [
        
      ],
    costForTwo: 45000,
    costForTwoString: "₹450 FOR TWO",
    deliveryTime: 35,
    minDeliveryTime: 35,
    maxDeliveryTime: 35,
    slaString: "35 MINS",
    lastMileTravel: 3.700000047683716,
    slugs: {
      restaurant: "hotel-empire-nehru-main-road-kammanahallikalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "83, Nehru Main Road,Kammanahalli",
    locality: "",
    parentId: 475,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "10% off",
      shortDescriptionList: [
          {
          meta: "10% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "10% off up to ₹40 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "10% OFF",
      shortDescriptionList: [
          {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "10% off up to ₹40 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "897",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      lastMileTravel: 3.700000047683716,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "4.1",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "66803",
    name: "A2B - Adyar Ananda Bhavan",
    uuid: "3cd5a48d-a9a2-4ebd-8561-63b9005837b2",
    city: "1",
    area: "Ramamurthy Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "pbjjlkvjzlg0lopj3lcd",
    cuisines: [
      "South Indian",
      "North Indian",
      "Sweets",
      "Chinese"
      ],
    tags: [
        
      ],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 27,
    minDeliveryTime: 27,
    maxDeliveryTime: 27,
    slaString: "27 MINS",
    lastMileTravel: 3,
    slugs: {
      restaurant: "a2b-adyar-ananda-bhavan-00-ramamurthy-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "No 128 lotus convention hall raghavendra circle ramamurthy nagar main road bangalore 560049",
    locality: "Raghavendra Circle",
    parentId: 22,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "FLAT100 off",
      shortDescriptionList: [
          {
          meta: "FLAT100 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "FLAT100 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "₹100 OFF",
      shortDescriptionList: [
          {
          meta: "Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "FLAT100 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    ribbon: [
        {
        type: "PROMOTED"
        }
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6558377~p=16~eid=00000187-bd9d-484f-0493-3f4b005a106e",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3 kms",
    hasSurge: false,
    sla: {
      restaurantId: "66803",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      lastMileTravel: 3,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: true,
    avgRating: "4.2",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "178711",
    name: "Paradise Biryani",
    uuid: "28c20b70-c7fd-4b6f-aaf4-e785846dcf3a",
    city: "1",
    area: "KR Puram",
    totalRatingsString: "5000+ ratings",
    cloudinaryImageId: "xppxdnyptbjezi1ihvg6",
    cuisines: [
      "Biryani",
      "Kebabs",
      "North Indian",
      "Hyderabadi"
      ],
    tags: [
        
      ],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 37,
    minDeliveryTime: 37,
    maxDeliveryTime: 37,
    slaString: "37 MINS",
    lastMileTravel: 7.400000095367432,
    slugs: {
      restaurant: "paradise-biryani-thambuchetty-palya-battarahalli",
      city: "bangalore"
      },
    cityState: "1",
    address: "Site No C-7, Sy 42, Khata No 90/1/42, Situated at Ajith Layout, Sonnathamanahalli Village, Thambuchetty Palya, Krishna Rajapuram Hobli, Bangalore East Taluk, Bangalore 560049 :- Company Owned outlet.",
    locality: "Ajith Layout",
    parentId: 700,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "FLAT125 off",
      shortDescriptionList: [
          {
          meta: "FLAT125 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "FLAT125 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "₹125 OFF",
      shortDescriptionList: [
          {
          meta: "Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "FLAT125 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 5800,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 5800,
      message: "",
      title: "Delivery Charge",
      amount: "5800",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 1,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "7.4 kms",
    hasSurge: false,
    sla: {
      restaurantId: "178711",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      lastMileTravel: 7.400000095367432,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "IT_IS_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "3.8",
    totalRatings: 5000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "10854",
    name: "Pizza Hut",
    uuid: "9ac2f772-087a-49bf-9beb-c5c5fcf76a70",
    city: "1",
    area: "Banaswadi",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisines: [
      "Pizzas"
      ],
    tags: [
        
      ],
    costForTwo: 35000,
    costForTwoString: "₹350 FOR TWO",
    deliveryTime: 25,
    minDeliveryTime: 25,
    maxDeliveryTime: 25,
    slaString: "25 MINS",
    lastMileTravel: 1.7999999523162842,
    slugs: {
      restaurant: "pizza-hut-banaswadi-87-banaswadi",
      city: "bangalore"
      },
    cityState: "1",
    address: "Plot No. 06, ,Dodda Banaswadi Road , K R Puram Hobli Banaswadi",
    locality: "Dodda Banaswadi Road",
    parentId: 721,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "30% off",
      shortDescriptionList: [
          {
          meta: "30% off | Use SWIGGYIT",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "30% off up to ₹75 | Use code SWIGGYIT",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "30% OFF",
      shortDescriptionList: [
          {
          meta: "Use SWIGGYIT",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "30% off up to ₹75 | Use code SWIGGYIT",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 2800,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 2800,
      message: "",
      title: "Delivery Charge",
      amount: "2800",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "1.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "10854",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      lastMileTravel: 1.7999999523162842,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "3.8",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "27341",
    name: "Truffles",
    uuid: "8db5ac37-547b-4664-b884-1d33af813451",
    city: "1",
    area: "Kalyan Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
    cuisines: [
      "American",
      "Desserts",
      "Mexican",
      "Continental",
      "Italian"
      ],
    tags: [
        
      ],
    costForTwo: 45000,
    costForTwoString: "₹450 FOR TWO",
    deliveryTime: 34,
    minDeliveryTime: 34,
    maxDeliveryTime: 34,
    slaString: "34 MINS",
    lastMileTravel: 3.700000047683716,
    slugs: {
      restaurant: "truffles-kalyan-nagar-kammanahallikalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "5M-408, Ground Floor, 5th Main,HRBR Layout,2nd Block,Banaswadi, Bangalore 560084",
    locality: "2nd Block - Hrbr Layout",
    parentId: 218065,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "27341",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      lastMileTravel: 3.700000047683716,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "4.4",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "704797",
    name: "KFC",
    uuid: "06db8fe1-743a-46fd-a7a0-c93008f7341a",
    city: "1",
    area: "Horamavu Main Road",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "d1d49a5694149063c00d38f9b17c923c",
    cuisines: [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
      ],
    tags: [
        
      ],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 26,
    minDeliveryTime: 26,
    maxDeliveryTime: 26,
    slaString: "26 MINS",
    lastMileTravel: 2.200000047683716,
    slugs: {
      restaurant: "kfc-banaswadi-ring-road-lingrajapuram",
      city: "bangalore"
      },
    cityState: "1",
    address: "Site N0 34,35,39,40, Horamavu Main Road , Banaswadi Ring Road , Bangalore -560043",
    locality: "Banaswadi Ring Road",
    parentId: 547,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 2800,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 2800,
      message: "",
      title: "Delivery Charge",
      amount: "2800",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "2.2 kms",
    hasSurge: false,
    sla: {
      restaurantId: "704797",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      lastMileTravel: 2.200000047683716,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "--",
    totalRatings: 0,
    new: true
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "129540",
    name: "Sharief Bhai",
    uuid: "deddc630-4994-4294-9b19-dbc53041e60e",
    city: "1",
    area: "Kalyan Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "s4q1emum9eeoihrglt4g",
    cuisines: [
      "Mughlai",
      "Biryani",
      "Arabian",
      "Kebabs",
      "Beverages",
      "Desserts"
      ],
    tags: [
        
      ],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 37,
    minDeliveryTime: 37,
    maxDeliveryTime: 37,
    slaString: "37 MINS",
    lastMileTravel: 4,
    slugs: {
      restaurant: "sharief-bhai-kammanahallikalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "Unit no 1, site no 1-97-3, 5th Main road, 2nd Block, HRBR Layout, Bangalore 560043",
    locality: "2nd Block - Hrbr Layout",
    parentId: 5734,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "40% off",
      shortDescriptionList: [
          {
          meta: "40% off | Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "40% off up to ₹80 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "40% OFF",
      shortDescriptionList: [
          {
          meta: "Use TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "40% off up to ₹80 | Use code TRYNEW",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 4000,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 4000,
      message: "",
      title: "Delivery Charge",
      amount: "4000",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 1,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "4 kms",
    hasSurge: false,
    sla: {
      restaurantId: "129540",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      lastMileTravel: 4,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "IT_IS_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: false,
    avgRating: "4.1",
    totalRatings: 10000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "155539",
    name: "Sreeraj Lassi Bar 1973s",
    uuid: "6dc7ea42-4e03-4be8-8b43-86ab5e6e3afb",
    city: "1",
    area: "Kammanahalli/Kalyan Nagar",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "b2d97facadf6b5a4e4f97e0124269768",
    cuisines: [
      "Desserts",
      "Juices",
      "Ice Cream",
      " Snacks"
      ],
    tags: [
        
      ],
    costForTwo: 25000,
    costForTwoString: "₹250 FOR TWO",
    deliveryTime: 25,
    minDeliveryTime: 25,
    maxDeliveryTime: 25,
    slaString: "25 MINS",
    lastMileTravel: 3.799999952316284,
    slugs: {
      restaurant: "sreeraj-lassi-bar-kammanahallikalyan-nagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "NO 1188, NEW NO. 30, Near Mahabezar, Nehru main road, Kammanahalli, Bangalore - 560084",
    locality: "Kammanahalli/Kalyan Nagar",
    parentId: 418125,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "FLAT100 off",
      shortDescriptionList: [
          {
          meta: "FLAT100 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "FLAT100 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "₹100 OFF",
      shortDescriptionList: [
          {
          meta: "Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "FLAT100 off | Use FLATDEAL",
          discountType: "Flat",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    ribbon: [
        {
        type: "PROMOTED"
        }
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 3400,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 3400,
      message: "",
      title: "Delivery Charge",
      amount: "3400",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6558694~p=22~eid=00000187-bd9d-484f-0493-3f4d005a1677",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
    lastMileTravelString: "3.7 kms",
    hasSurge: false,
    sla: {
      restaurantId: "155539",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      lastMileTravel: 3.799999952316284,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY"
      },
    promoted: true,
    avgRating: "4.2",
    totalRatings: 1000,
    new: false
    },
  subtype: "basic"
  },
  {
  type: "restaurant",
  data: {
    type: "F",
    id: "32603",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    uuid: "8ce1ad82-7221-4e26-a63f-c0e50d268c9e",
    city: "1",
    area: "Indiranagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "mtfco4meitoh97jynjxd",
    cuisines: [
      "American",
      "Snacks",
      "Turkish",
      "Portuguese",
      "Continental"
      ],
    tags: [
        
      ],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 34,
    minDeliveryTime: 34,
    maxDeliveryTime: 34,
    slaString: "34 MINS",
    lastMileTravel: 4.900000095367432,
    slugs: {
      restaurant: "leon-grill-indiranagar-indiranagar",
      city: "bangalore"
      },
    cityState: "1",
    address: "#298, 100ft Rd, Indiranagar, Bangalore-560038",
    locality: "Indiranagar",
    parentId: 371281,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [
        
      ],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
          {
          meta: "50% off | Use SPECIALS",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "50% off up to ₹100 on select items | Use code SPECIALS",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
          {
          meta: "Use SPECIALS",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      descriptionList: [
          {
          meta: "50% off up to ₹100 on select items | Use code SPECIALS",
          discountType: "Percentage",
          operationType: "RESTAURANT"
          }
        ],
      subHeader: "",
      headerType: 0,
      superFreedel: ""
      },
    ribbon: [
        {
        type: "PROMOTED"
        }
      ],
    chain: [
        
      ],
    feeDetails: {
      fees: [
          {
          name: "distance",
          fee: 4000,
          message: ""
          },
          {
          name: "time",
          fee: 0,
          message: ""
          },
          {
          name: "special",
          fee: 0,
          message: ""
          }
        ],
      totalFees: 4000,
      message: "",
      title: "Delivery Charge",
      amount: "4000",
      icon: ""
      },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: ""
      },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6558564~p=25~eid=00000187-bd9d-484f-0493-3f4e005a197b",
    badges: {
      imageBased: [
          
        ],
      textBased: [
          
        ],
      textExtendedBadges: [
          
        ]
      },
   lastMileTravelString: "4.9 kms",
   hasSurge: false,
   sla: {
    restaurantId: "32603",
    deliveryTime: 34,
    minDeliveryTime: 34,
    maxDeliveryTime: 34,
    lastMileTravel: 4.900000095367432,
    lastMileDistance: 0,
    serviceability: "SERVICEABLE",
    rainMode: "NONE",
    longDistance: "NOT_LONG_DISTANCE",
    preferentialService: false,
    iconType: "EMPTY"
      },
  promoted: true,
  avgRating: "4.3",
  totalRatings: 10000,
  new: false
    },
subtype: "basic"
  },
]

const Body = () => {
  return(
  <div className="body">
    <div className="Search">Search</div>
    <div className="res-container">
    { 
// I'm doing a resList of map for each restro I'm rendering the RestaurantCard
  
// for each estro we've to return a restro card and I have to dynamically passen
// restrocard 

// built a reusable restro card component
// resList is an array it will loop over all the restro,for each estro we've to return a restro card
// pass the key resData
// In side my resContainer I have looped over my rest list for each restro I'm returing a piece of jsx.
// it is a function returning a piece of jsx
resList.map((restaurant) => (
      <RestaurantCard key={restaurant.data.id}  resData = {restaurant} />
       ))}
    {/* <RestaurantCard 
    resName="KFC"
    cuisine="Burger, Fast Food"
     /> */}
    
    </div>
    </div>
  )
}

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
