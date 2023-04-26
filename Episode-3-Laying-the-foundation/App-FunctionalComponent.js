import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object)  (react.render receive the object and convert) => HTMLElement(render)
// Usha is here (usually we can write not reender here)  will replaced by heading

// Below is the core of React this is not the good way its not user friendly.

// This is how we create a react element using react
// JSX => React.createElement => ReactElement -> Js Object -> HTML Elemnt(render)
// thats how browser parses your code
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// JSX(Is just a syntax) This is how we create a areact element using jsx
//Something known as Javascript syntax which is easier to create react elements

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
const jsxHeadingmultipleline = <h1 id="heading">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>;
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// like this we render the react element

root.render(<HeadingComponent />); // this is how we render the normal functionality component
