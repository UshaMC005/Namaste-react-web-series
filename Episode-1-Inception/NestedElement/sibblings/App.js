/**
 * <div id="parent">
 * <div id="child">
 * <h1> I am h1 tag</h1>
 * <h1> I am h1 tag</h1>
 * </div>
 * <div id="child2">
 * <h1> I am h1 tag</h1>
 * <h1> I am h1 tag</h1>
 * </div>
 * </div>
 * 
 *  
 * 
 */

//ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement("div", { id: "parent"}, [
React.createElement("div",
{ id: "child"},
React.createElement("h1", {} , "Iam an h1 tag"),
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
