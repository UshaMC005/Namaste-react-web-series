import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => {
    return (<h1 className="head" tabIndex="3">
        Namaste React Using JSX 🚀
    </h1>)
}



// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {Title()} // call the functions inside it
    {/* Component inside component is called component composition */}
    <Title />
    {/* or  one and the same*/}
    <Title></Title> 
    <h1 className="heading">Namaste React Functional Component</h1>;
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 
