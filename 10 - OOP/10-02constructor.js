// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name,tech){
    this.name = name;
    this.tech = tech;
    this.introduction = () =>{
        console.log(`Hello my name is ${this.name} and I enjoy ${this.tech}`)
    }
}
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const rob = new Developer("Robert", "Good looks")
const alli = new Developer("Rob","eagle eyes")
// TODO: Call the 'introduction()' method on the new object
rob.introduction()
alli.introduction()
