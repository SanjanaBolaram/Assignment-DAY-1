// Question1
 
// Various methods in console fucntion 

// console.log() method
console.log('hello')
console.log(1)g
console.log(true)
console.log(1,2,3) //array
console.log({a:1,b:2}) //object

//console.error() method
console.error(this is an error) /*error message highlighted with red colour*/

//console.warn() method
console.warn(this is a warning) /*warning message highlighted with yellow colour*/

//console.clear() method
console.clear(); //Used to clear the console

// console.time() and console.timeEnd() method
//example
console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); // calling fun(); 
 fun2(); // calling fun2(); 
console.timeEnd('abc'); 

//console.table() method
console.table({'a':1, 'b':2});

// console.count() method 
for (let i=0;i<5;i++)
{ 
    console.count(i); 
} 

/* used to count the number that the function hit by this counting method.*/ 