## starting the project in dev mode
"start": "parcel index.html"

## run the script in dev mode
### _Syntax_
```sh
npm run start === npm start
```

## run the script in production mode
### _Syntax_
```sh
npm run build 
```

## Note
- Just like dom elements we have react elements 
- React element at the end of the day is object
- when we render to dom that becomes html element

## What are dom elements?
- div , table, tr, id etc..

## React Element
### _Syntax_
```sh
const heading = React.createElement("h1", 
{ id: "heading" },
"Namaste React 🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```
## JSX
- Something known as Javascript syntax which is easier to create react elements
- JSX is different React is different
- JSX is a convention where we can merge HTML and JS together.
- JSX is not html in javascript it is HTML or XML like syntax JSX is a different syntax

## Are we writing code for Machines or Human
- Code is for Human first and then for machines.

## JSX is it a valid JavaScript why also not
- JavaScript is a code where js engine can understands.
- JS engine can understand ES6
- It is not a valid pure javascript browser can't understand.
- Parcel is doing the job behind the scenes. even before it goes to
  the js engine the code is transpiled before it reaches the JavaScript engine.
- Transpiled means converted.
- Is it parcel is doing the things for you No . parcel is like a manager.
- parcel installs the babel (minister) that transpiles the code.
- babel job is to transpiles/ convert the jsx code into a react element.
- Amazing power of JSX
within the curly brackets you can write any javascript inside it.
it comes out as an html.
{100+100}

- JSX expressions must have only one root element it gives error,
cannot put two divs. the soultions to this react fragments.
-React Fragment is one parent behaves as an empty tag.

- What makes React code or webapps readable
Because of JSX

## React Functional Component
### _Syntax_
```sh
 <> or <React.Fragment>
const HeadingComponent = () => (
  <> 
    <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>;
  </div>
  <div id="container-2"></div>
  </> 
```

- JSX will prevent us from cross site scripting attacks by sanitizing the data
- that means if some user can run javascript inside you app they can get the access to cookies , localstorage etc
- Nobody can use the data prevents malicious attack.
### _Syntax_
```sh
const data = api.getData();
const HeadingComponent2 (){
 return (
    {data}
<h1 className="heading">Namaste React Functional Component</h1>;
 );
}
  
```

- JSX at the eod is react element who converts it  its babel
- JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)


- If jsx is in single line 
- multiple lines wrap it with paranthesis
### _Syntax_
```sh
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>

const jsxHeadingmultipleline =(<h1 id="heading">
Namaste React using JSX 🚀
</h1>) 
```

## Babel
- Transpiler / JavaScript compiler
- babel  is a transpiles/ convert the jsx code into a react element.
- EOD babel is peice of code, node library also package npm package.
- Babel is a beast parcel is manager of babel.
- Another imp package after parcel.


## React Element
- Two ways of creating the component, Everything in react component
1. Function Component (Just a normal JS function which returns some JSX)(Function which return a JSX element is called FC)
2. Class Component


## Function Component

- Function Component (Just a normal JS function which returns some JSX) (Function which return a JSX element is called FC)
- Not only it returns react element but it returns a nested jsx element or mutiple JSX elements.
- Start the component name with Capital
- we can also use normal functions, Its not mandatory to use arrow functions

## Arrow functions
1. Is a newer way , arrow functions is the industry standard everywhere
we use arrow functions.



### _Syntax_
```sh
const HeadingComponent2 (){
 return (
<h1 className="heading">Namaste React Functional Component</h1>;
 );
}
  
```

### _Syntax_
```sh
   const HeadingComponent2 = () => {
   return <h1 className="heading">Namaste React Functional Component
   </h1>;
 };
```

## another syntax without return same as above
### _Syntax_
```sh
  const HeadingComponent2 = () => (
  <h1 className='heading'>Namaste React Functional Component</h1>
  )
```

## Component Composition
Component inside component is called component composition
