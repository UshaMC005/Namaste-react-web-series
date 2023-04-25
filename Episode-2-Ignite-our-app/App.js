import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent"}, [
    React.createElement("div",
    { id: "child"},
    React.createElement("h1", {} , "This is namaste react 🚀 "),
    React.createElement("h2", {} , "Iam an h1 tag")
    ),
    React.createElement("div",
    { id: "child2"},
    React.createElement("h1", {} , "Iam an h1 tag"),
    React.createElement("h2", {} , "Iam an h1 tag")
    )
    
    ]);
    
    // we use jsx to overcome this tidious job
    
    console.log(parent); // object
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    
