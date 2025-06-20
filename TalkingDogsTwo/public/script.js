// Constructor Function
function Dog(name, show, breed, role, mySound, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function() {
    let talkInfo = this.canTalk
      ? "Yes, I can talk!"
      : "Nope, I’m just your typical barking buddy.";
    return `Hello, my name is ${this.name}. I starred in ${this.show}.<br>
I am a ${this.breed}. My role in the show is: ${this.role}.<br>
When I bark, ${this.mySound}<br>
Can I talk? ${talkInfo}`;
  };
}

// Create two fictional dog objects
const dog1 = new Dog(
  "Brian Griffin",
  "Family Guy",
  "Labrador Retriever",
  "Family dog and anthropomorphic character",
  "I speak fluent English, enjoy martinis, and write novels.",
  true
);

const dog2 = new Dog(
  "Santa's Little Helper",
  "The Simpsons",
  "Greyhound",
  "The family dog, often involved in silly antics",
  "Arf arf!",
  false
);

// Store in an object for easy access
const dogList = {
  "Brian Griffin": dog1,
  "Santa's Little Helper": dog2
};

// Function to display all properties using for...in
function showAllDogs() {
  let output = "";
  for (let name in dogList) {
    output += `<strong>${name}:</strong><br>`;
    for (let prop in dogList[name]) {
      if (typeof dogList[name][prop] !== "function") {
        output += `${prop}: ${dogList[name][prop]}<br>`;
      }
    }
    output += `<hr>`;
  }
  document.getElementById("dogList").innerHTML = output;
}

// Prompt the user to select a dog and show info
function selectDog() {
  let userInput = prompt("Type the name of the dog (e.g., 'Brian Griffin' or 'Santa's Little Helper'):");
  if (dogList[userInput]) {
    document.getElementById("dogInfo").innerHTML = dogList[userInput].myGreeting();
  } else {
    document.getElementById("dogInfo").innerHTML = `<span style="color:red;">Sorry, we don't have a dog by that name.</span>`;
  }
}

// Initial listing of all dogs
showAllDogs();