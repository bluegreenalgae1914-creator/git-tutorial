// Version 2.0: Modular Architecture Integration
const { formatTimestamp, getStatusMessage } = require('./change.js');

const config = {
  projectName: "Git Practice Lab",
  version: "2.0.0",
  language: "EN"
};

const sessionTime = formatTimestamp(new Date());

function greetUser(name, lang = config.language) {
  const greetings = {
    EN: "Welcome",
    ES: "Bienvenido",
    FR: "Bienvenue",
    DE: "Willkommen" // Added German support
  };
  const greet = greetings[lang] || greetings.EN;
  return `${greet} to the ${config.projectName}, ${name}!`;
}

console.log(`>>> [SYSTEM LOG] ${sessionTime}`);
console.log(getStatusMessage('success'));
console.log(greetUser("Lead Developer"));
console.log(`Build: v${config.version}`);