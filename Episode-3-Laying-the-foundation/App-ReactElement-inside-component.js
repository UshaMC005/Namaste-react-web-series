import React from "react";
import ReactDOM from "react-dom/client";


// React element inside react element
const elem = <span>React Element</span>
// React Element at the EOD is normal variable
const title =(
    <h1 className="head" tabIndex="3">
      {elem}
        Namaste React using JSX 🚀
    </h1>
)

//JSX expressions must have only one root element it gives error 

// (
//   <div></div>
//   <div></div>
// )

//React Fragment or just empty tag
{/* <React.Fragment> 
  <div></div>
  </React.Fragment> */}
  
// React Functional Component
const HeadingComponent = () => (
  <> 
    <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>;
  </div>
  <div id="container-2"></div>
  </>
  
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 
