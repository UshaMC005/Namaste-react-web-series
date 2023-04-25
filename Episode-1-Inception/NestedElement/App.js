/**
 * <div id="parent">
 * <div id="child">
 *    <h1></h1>
 * </div>
 * </div>
 * 
 *  
 * 
 */

//ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement("div",
{ id: "parent"},
React.createElement("div",
{ id: "child"},
React.createElement("h1", {} , "Iam an h1 tag")
)
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
