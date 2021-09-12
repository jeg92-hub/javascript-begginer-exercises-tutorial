function changeLuckyNumber(per,pos,number){
    if(per.lucky_numbers!=='undefined' && per.lucky_numbers.length>0){
        if(per.lucky_numbers[pos]!=='undefined'){
            per.lucky_numbers[pos] = number;
        }
    }   
}

var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

changeLuckyNumber(person,3,33);

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

function createPerson(name = '',lastname = '',age = 0,gender='',lucky_numbers = [],significant_other = null){
    var newPerson = {
        name:name,
        lastname:lastname,
        age:age,
        gender:gender,
        lucky_numbers:lucky_numbers,
        significant_other: significant_other
    }

    return newPerson;
}

family.members.push(createPerson('Jimmy','Doe',13,'male',[1,2,3,4]))

function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
    for(var key in anArray){
    var member = anArray[key];
    if(member.lucky_numbers!=='undefined' && member.lucky_numbers.length>0){
        //console.log(member)
        sumOfAllLuckyNumbers += member.lucky_numbers.reduce((a, b) => a + b, 0);
        //console.log(sumOfAllLuckyNumbers)
    }
  };
    // ...
  return parseInt(sumOfAllLuckyNumbers);
}

//Enter all your code here:


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 