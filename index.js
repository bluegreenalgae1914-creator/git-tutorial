// Version 1.2: Added configuration and multi-language support
const config = {
  projectName: "Git Practice Lab",
  version: "1.2.0",
  language: "EN"
};

const today = new Date().toLocaleDateString();

function greetUser(name, lang = "EN") {
  const greetings = {
    EN: "Welcome",
    ES: "Bienvenido",
    FR: "Bienvenue"
  };
  const greet = greetings[lang] || greetings.EN;
  return `${greet} to the ${config.projectName}, ${name}!`;
}

console.log(`--- Session Started: ${today} ---`);
console.log(greetUser("Developer", config.language));
console.log(`Status: Active | Version: ${config.version}`);