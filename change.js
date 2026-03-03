// change.js - Utility module Version 2.0
/**
 * Enhanced utility module with improved formatting
 * and error handling.
 */

const formatTimestamp = (date) => {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  return new Date(date).toLocaleTimeString('en-GB', options);
};

const getStatusMessage = (status) => {
  const statuses = {
    success: "✅ SYSTEM_READY",
    error: "❌ SYSTEM_FAILURE",
    pending: "⏳ SYSTEM_INITIALIZING",
    warning: "⚠️ SYSTEM_UNSTABLE" // New status added
  };
  return statuses[status.toLowerCase()] || "UNKNOWN_STATE";
};

// New Utility Function
const generateSessionID = () => {
  return `SID-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

module.exports = {
  formatTimestamp,
  getStatusMessage,
  generateSessionID
};