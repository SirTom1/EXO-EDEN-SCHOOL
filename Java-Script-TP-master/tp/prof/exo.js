let people = ["Greg", "Mary", "Devon", "James"];

for(let i = 0 ; i < people.length ; i++){
  console.log(people[i]);
}

people.shift(); 
console.log(people);


people.pop(); 
console.log(people);

people.unshift("Matt");
console.log(people);

people.push('Tom');
console.log(people);


for(let i = 0 ; i < people.length ; i++){
        console.log(people[i]);

  	if(people[i] === "Mary"){
    break;
  }
}
console.log(people.slice(2));

console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));


people = ["Greg", "Mary", "Devon", "James"]

people.splice(2,1, "elisabeth", "artie")
console.log(people)




let withBob = people.concat('Bob')

console.log(withBob)