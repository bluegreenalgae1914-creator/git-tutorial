// change.js - Utility module for Git practice
/**
 * Simple utility to format strings or numbers
 * This helps us practice multi-file commits!
 */

const formatTimestamp = (date) => {
  return new Date(date).toTimeString().split(' ')[0];
};

const getStatusMessage = (status) => {
  const statuses = {
    success: "✅ Operation Successful",
    error: "❌ Error Detected",
    pending: "⏳ Processing..."
  };
  return statuses[status] || "Unknown Status";
};

module.exports = { formatTimestamp, getStatusMessage };