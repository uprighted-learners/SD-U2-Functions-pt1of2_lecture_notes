//!    Functions
/*
        - block of code that performs a particular task.
        - simplified programs that run a task when invoked.        
*/

//! Declaration
/*
    (1)       (2)
    function  hi()   {
        console.log('HI');
    }
    
    1- Keyword
    2- Name of the function, and parenthesis for parameter

    * DOES get hoisted
*/

function hi() {
    console.log('Hi!');
}

//! Expression
/*
      (1)
    let hey = function hi() {
        console.log('HI');
    }
    
    1- The variable 'hey' is now representative of the function 'hi()'

    * DOES NOT get hoisted
*/

let hey = function hi() {
    console.log('Hi again!')
}

//! Invoking
/*
    function hi() {
        console.log('HI');
    }
    
    (1)
    hi();
    
    1- This is how we call, or 'invoke' our function
*/

hi();
hey();

//? Quick Challenge
/* 
    Create a function that, when invoked, lists out the numbers 1-10
        - hint: How can you cycle through a list of numbers?
*/

function counting() {
    for(i=1; i < 11; i++) {
        console.log(i);
    }
}

counting();