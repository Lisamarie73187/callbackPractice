/* In this repo your job is to write functions to make each 
//function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and WHAT YOU SHOULD WRITE is the sayHi function that makes the code above work: 
    
   var sayHi = function(str, cb){
    cb(str);
   }
    
*/


// 1. Write a function called first that takes in two parameters, 
//an array and a callback function, then invokes the callback 
//function, passing in the first element in the array as 
//it's argument.  (see the sayHi function on line 12 for reference)


 function first(arr,cb){
    cb(arr[0]);
 }


  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
  return firstName;
});




// 2. Write a function called last that 
//takes in an array and a callback function, 
//then invokes the callback, passing 
//in the last element in the array as the argument.

function last(arr,cb){
  cb(arr.pop());
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});



// 3. Write a function called multiply that takes in three parameters: 
//two numbers and a callback function.  
//Invoke the callback, passing in the product of the 
//two numbers multiplied as the argument. 

function multiply(num1,num2,cb1){
  var product = num1 * num2
  cb1(product)
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that takes in three parameters: an array, 
//a name and a callback.  First, check if the name exists in the array. 
// If it does, invoke the callback with true as the argument. 
// If the name does not exist, invoke the callback with false as the argument.

function contains(array,name,cb){
  for(i = 0; i < array.length; i++){
    if(array[i] === name){
      cb(true)
    }else{cb(false)}
  }
}



contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes in an array and a 
//callback function.
// Remove any duplicate values from the array, 
//and invoke the callback with the modified array as an argument.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];



function uniq(myArray,cb){
var uniqArr = []
uniqArr = myArray.filter( (e,i,newArray) => newArray.indexOf(e) == i )
return cb(uniqArr)
}






// console.log()
// uniq(names, function(uniqArr){
//   console.log('The new names array with all the duplicate items removed is ', uniqArr);
// // });


// 6. Write a function called each that takes in an array of 
//names and a callback function. For each name in the array, 
//invoke the callback and pass in the name and the name's 
//index as arguments.

function each(arrayOfNames,cb){
  for(var i = 0; i < arrayOfNames.length; i++){
    cb(arrayOfNames[i], [i])
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that takes in 
//three parameters: an array of objects (users), an id 
//and a callback, and searches for the user with a matching id.
// When the correct user object is found, 
//invoke the callback with the user object as an argument.

function getUserById (arrayOfObj,id,cb){
  for( var i = 0; i < arrayOfObj.length; i++){
    if(arrayOfObj[i] === '16t'){
      cb(users)
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

// getUserById(users, '16t', function(user){
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
// });


