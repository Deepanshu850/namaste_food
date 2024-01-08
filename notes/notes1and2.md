# React Notes video 1 and 2

## React.createElement

* js object which takes 3 argument 1.html tag attributr 3.value

## root.render(parentID) this will replace the div id root not appended in root

### not just react making our app faster lot of pakages also require to make your app faster

* npm is not stand for node pakage manager ,npm manage pakages
* pakage.json is confrigation for npm (npm init)
* Dependency our project depend on lot of pakages they are called dependency
* most important pakage is bundler for our project
* 1 webpack, 2 parcel,3 vite these are bundler we are using parcel create-react-app behind scence using webpack bundle

#### npm

* Install parcel using npm (npm i -D parcel)
* D stand for dev dependency install in such a way support development mode
* ^ caret -- for minor upgrade automatically
* ~ tilde -- for major upgrage automatically
* package_lock  keep the record of extact package is install
* package_lock keeps the has of excact version of all the dependency
* node_module have all the code of dependency
* Pacel also have dependency .those dependency also have their dependency
* how many package.json in our project all pakages have package.json
* these is called transitive dependency
* thing we can regenerate not put on git like nodemodule
*cdn link is not a good way to install react due to network cost

## Job of Parcel (parcel)--parcel is a beast

* npx parcel index.html

* Dev Build
* Local Server
* Hmr = hot module replacement
* file watching algo - written in c++
* caching- faster build
* Image optimization
* minification
* Bundling
* Compressing
* consistent hasing
* code splitting
* differential buldling- support older browser differnt bundle for diffent brownser
* Error handling
* tree shaking - remove unused code
* Different dev and prod build  --npm parcel build index.html
