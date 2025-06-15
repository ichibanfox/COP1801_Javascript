// Constructor
function MyDog(name, show, breed, role, mySound, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function() {
    return `Hello, my name is ${this.name}. I starred in ${this.show}.<br>
I am a ${this.breed}. My role in the show is: ${this.role}.<br>
When I bark, ${this.mySound}<br>
Can I talk? ${this.canTalk ? "Absolutely!" : "Nope."}`;
  };
}

// Create the object
const myDogConst = new MyDog(
  "Brian Griffin",
  "Family Guy",
  "Labrador Retriever",
  "Family dog and anthropomorphic character",
  "I speak fluent English, enjoy martinis, and write novels.",
  true
);

// Function to display dog info
function showDogInfo() {
  document.getElementById("output").innerHTML = myDogConst.myGreeting();
}