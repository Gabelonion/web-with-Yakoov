//Array, it can contain any type of variable
var array = new Array();
array[0] = "Name";
array[1] = 21 ;
array[2] = function(name){
  console.log("Hello "+name);
};
array[3] = {course : "HTML, CSS and JS"};

console.log(array[2](array[0]));
//Array with another notation, it can also store new values
var arrayTwo = [1, 2, 3];
//We can reference our array's length with the following instruction
console.log(arrayTwo.length);

//An special for for the arrays is the following
for(var step in arrayTwo){
  console.log("Number "+step+ " is :"+arrayTwo[step]);
}
//Also this works for arrays containing objects, if we see the console
// we can see that step takes the name of the object (four) and the value(four)
arrayTwo.four = "four";
for(var step in arrayTwo){
  console.log("Number "+step+ " is :"+arrayTwo[step]);
}
