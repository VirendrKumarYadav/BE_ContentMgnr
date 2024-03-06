<!-- this is readme.md file for my package  -->
# calculator
1. install the the basic package
2. use redline command and configure is methods
3. configure the best way to download the package


### Install
     npm install vire_cal
     cd vire_cal
     npm start

or

    npm install -g vire_cal
    node-calc

### API

When starting calculator, it starts a node repl with all of the following properties set as properties of the `GLOBAL` object.
All Math properties are replaced with `Math.(prop)` so you can write `var f = func('f(x) = sin(x)')` instead of `var f = func('f(x) = Math.sin(x)')`

#### func

const sum = (a, b) => a + b;

const minus = (a, b) => a + b;

const multiply = (a, b) =>  a + b;

const divide = (a, b) => a + b;
  
