// change.js - Utility module Version 2.2
/**
 * Added configurable locale support,
 * extensible status registry,
 * and stronger session ID generation.
 */

// Internal status registry (extensible)
const statusRegistry = {
  success: "✅ SYSTEM_READY",
  error: "❌ SYSTEM_FAILURE",
  pending: "⏳ SYSTEM_INITIALIZING",
  warning: "⚠️ SYSTEM_UNSTABLE"
};

// Timestamp formatter with configurable locale
const formatTimestamp = (date = new Date(), locale = "en-GB") => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) {
    throw new Error("Invalid date provided to formatTimestamp()");
  }

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  return parsedDate.toLocaleTimeString(locale, options);
};

// Extensible status handler
const getStatusMessage = (status = "") => {
  if (typeof status !== "string") {
    return "INVALID_STATUS_TYPE";
  }

  return statusRegistry[status.toLowerCase()] || "UNKNOWN_STATE";
};

// Allow dynamic status registration (NEW)
const registerStatus = (key, message) => {
  if (!key || typeof key !== "string") {
    throw new Error("Status key must be a string");
  }

  statusRegistry[key.toLowerCase()] = message;
};

// Stronger Session ID using crypto if available
const generateSessionID = () => {
  const randomPart =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID().split("-")[0]
      : Math.random().toString(36).slice(2, 11);

  return `SID-${randomPart.toUpperCase()}`;
};

module.exports = Object.freeze({
  formatTimestamp,
  getStatusMessage,
  registerStatus,
  generateSessionID
});