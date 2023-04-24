
    // React.createElement is the core job of the React that creates just a h1 html element in react
// {} is the place where we give the attributes to the class
    // const heading = React.createElement("h1", {}, "Hello world from react!");
    
    const heading = React.createElement("h1", {
        id: "heading", xyz: "abc"
    }, "Hello world from react!"
    );

    console.log(heading);
    // heading is object
    
    // creating the root inside the react
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

//    render method takes a object converting the object and put it into the h1 tag
    //puting heading inside it
