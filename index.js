// Version 1.1: Added a timestamp for better logging
const projectName = "Git Practice Lab";
const version = "1.0.0";
const today = new Date().toLocaleDateString();

function greetUser(name) {
  return `Welcome to the ${projectName}, ${name}!`;
}

console.log(`System Initialized on ${today}...`);
console.log(greetUser("Developer"));
console.log(`Current Version: ${version}`);