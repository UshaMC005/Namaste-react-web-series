# When you create a create react app it will automatically give you production ready app.

behind the scenes use webpack and babel

Now you can create a own production ready app. we need lot of other packages to make production ready app.


## What is npm?
npm does not stands for node package manager.
npm does not have full form
npm manages packages.
npm basically standard repositories for all the packages.
npm take care of version of the packages


## what is package .json?
npm init and creates package.json
Is a configuration for npm

## What is bundlers?
1. Most important package is bundler.
2. Our whole code needs to be minified/clean/bundled/    casched/compressed.
3. packages your app so that it can be pushed to productions
4. we're using parcel end of the day all bundlers all does the same job. easy to configure

## parcel is a bundler does
1. Chunking , minification we do it in a development phase so its dev dependencies

ex: webpack, parcel.

### _Syntax_
```sh
npm install -D parcel 
```
-D - dev dependies

## Two types of dependencies
1. Dev dependencies
it is generally required for development phase
2. Normal dependencies
Used in production environment also

## caret and tild
^ parcel will automatically update to higher/minor version.
~ install the major versions

## Difference between package.json and package-lock. json
lock.json: keeps the track of exact version of the package or dependencies that has been installed.
package.json: keeps the track of the approx version.

## What is transitive dependency
parcel has its own dependencies like babel, browserlist, etc. so it installs other packages also.

## How parcel manages all the dependencies?
it has its own package.json it is maintaining its own dependencies known as transitive dependencies.

## Node modules is a collection of dependencies.
## Should I push all the dependencies to git and productions
ans is no

## Should I push package.json and package.lock to git and productions
ans is yes, we can recreate the node modules by giving

### _Syntax_
```sh
npm install  
```
What ever you can regenerate on server don't put it on github.com

To ignite parcel to ignite our app

### _Syntax_
```sh
npx parcel index.html
```
### Parcel
idex.html source file of html,parcel has created server for us our app is running and hosted our app to the local host port 1234
1. npx : executing the package
2. npm : calling the command of npm (install package)
3. Parcel automatically reloads

- Dev Build
- Local Server
- Automatically reload i,e HMR - Hot Module Replacement
  (parcel uses the file watching algorithm that is written in C++)
- Parcel is caching - Faster Builds
- Image Optimization 
- Minification 
- Bundling
- Compress
- Consistent Hashing 
- Code Splitting
- Differential Bundling - Support older browsers by giving different bundles for different types of app like mobile, internet explorer etc, module fallbacks.
- Diagonstic (Beautiful error)
- Error Handling
- Https 
- Tree Shaking (In a whole code 100's of functions in the code we use 4 to 5 functions the parcel will remove unused code )
- Has Lazy mode.

-- Parcel is fast performant 

## How do we create a prod build
### _Syntax_
```sh
npx parcel build index.html
```
- you'll face the error while building  then remove the main:"App.js" in the package.json file.
- build file will be in dist folder


## What makes your react app faster?
Just not react lot of the libraries and dependencies to make it production ready applications

## Why cdn links is not the preferred way to bring the react and react dom to the project?
 1. Another way to get react into your app is npm
 2. if we use cdn it makes network call to unpkg.com suppose if already all the react in my node modules its easy to call react
 3. React is hosted over npm also.
 4. Version keeps changes that time we change the  cdn link
 
### _Syntax_
```sh
npm install react
```
### _Syntax_
```sh
npm install react-dom
```
- normal dependency

### _Syntax_
```sh
<script type="module" src="./App.js"></script>
```

## BrowserList
makes app works with all the versions of browser
