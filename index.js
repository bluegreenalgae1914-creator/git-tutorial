// Version 1.3: Integrated utility module and session tracking (refined)

const {
  formatTimestamp,
  getStatusMessage,
  generateSessionID
} = require('./change.js');

const projectName = "Git Practice Lab";
const version = "1.3.0";

const sessionID = generateSessionID();

function greetUser(name = "User") {
  return `Welcome to the ${projectName}, ${name}!`;
}

// Improved structured logger (dynamic timestamp per log)
function logMessage(message, type = "INFO") {
  const timestamp = formatTimestamp();
  const safeType = typeof type === "string" ? type.toUpperCase() : "INFO";

  console.log(`[${safeType}] [${timestamp}] [${sessionID}] ${message}`);
}

// System Logs
logMessage("System Boot Sequence Started", "system");
logMessage(getStatusMessage("success"), "status");
logMessage(greetUser("Developer"), "user");
logMessage(`Build Version: v${version}`, "build");