let peanuts = [ "Schroeder", "Sally", "Snoopy", "Charlie", "Lucy", "Linus" ]

peanuts.forEach((character) => {
  if (character.charAt(0) == "S") {
    console.log("My name starts with an S for super!");
  } else{
    console.log("I’m still pretty special too!");
  }
});
