## What is ES6

ES6 (or ECMAScript 2015) refers to the second major revision to the JavaScript programming language that occured in 2015. This revision included a host of new features and syntax that were quickly adopted and now are considered best practices in contemporary JavaScript. 

These features include but are not limited to:
* let & const declarative keywords
* arrow functions
* spread operator
* destructuring syntax
* For of loops

The important thing to remember is that even though these new features fast became commonplace that doesn't mean you don't need to know staples of pre-2015 JavaScript. Like any language, these principles build on top of one another. 

In this section, we will be discussing a few of the most important new features.

### Arrow Functions

Pre-2015, if you wanted to create and store a function in your program, you would most likely do it in a few standard ways:

```javascript
// function declaration
function add(x, y){
    return x + y;
}
```
```javascript
// function expression
var add = function(x, y){
    return x + y;
};
```
```javascript
var object = {
    add: function(x, y){
        return x + y;
    }
};
```

Long story short, developers got tired having to create to functions this way, and they wanted a simpler, shorter syntax (having to write function EVERY time, yuck!). That's where arrow functions come in. Fundamentally, arrow functions are just a shorter way to write functions. Here is how you would create the three functions above in a post-ES6 way:

```javascript
const add = (x, y) => {
    return x + y;
};
```
```javascript
const object = {
    add: (x, y) => {
        return x + y;
    }
};
```

The first thing you might notice is that there is no function declaration equivalent. That is because anytime you want to name or declare a function using the arrow function syntax, it either needs to be a function expression or a method attached to an object. 

The second thing you'll probably notice is that arrow functions don't feature the `function` keyword. The basis of all arrow functions is this structure: `(param) => {}`

Like any other function, you can create an arrow function that has no parameters, or multiple parameters. But there is one more feature to arrow functions that really excited developers. If you create an arrow function that only requires a single expression to execute, then you can remove the curly braces from your function code block and the return keyword.

Take a look here. This is the original `add` function written with the arrow function syntax.
```javascript
const add = (x, y) => {
    return x + y;
};
```

When this function is invoked, it takes in two parameters and returns the result of adding those parametes together. That return statement - `return x + y` - is a single expression. Because this function only requires one expression, it can be re-written to this:
```javascript
const add = (x, y) => x + y;

console.log(add(2, 4)); // => 6
```

As you can see, there are no curly braces and no return keyword. You need to remember though that in this case there is still an **"implicit"** return. This means that whenever you do this type of arrow function, the result of single expression is always returned even if there is no explicit return keyword.

Finally, if you are creating an arrow function that only takes in one parameter, you can actually remove the parenthesis around the parameter. For example:
```javascript
const greetPerson = name => `Hello, ${name}!`;

conosle.log(greetPerson('Alex')); // => "Hello, Alex!"
```

### Destructuring

Destructuring refers to a new syntax that allows developer to more easily create variables from the data contained in objects in arrays. Let's use an example we introduced the README.md file for the loops section. Take another at this object:
```javascript
const user1 = {
    firstName: 'Alex',
    lastName: 'Aaron',
    age: 37,
    phone: '111-222-3333',
    email: 'alex@operationspark.org',
    emergencyContact: {
        name: 'Stephanie Cooper',
        relationship: 'Wife',
        phone: '888-777-6666'
    },
    purchases: [
        {
            item: 'Rear Window Bluray',
            date: '12/10/2023',
            price: 20.99
        },
        {
            item: 'Wired earbuds',
            date: '2/05/2024/',
            price: 16.99
        }
    ]
};
```
What if we had to create a function that took in an object like this as an argument. And let's say the purpose of this function was to return a string of the object's first and last names as a fullName. We could do something like this...
```javascript
const getFullName = (object) => {
    return `${object.firstName} ${object.lastName}`;
}
```