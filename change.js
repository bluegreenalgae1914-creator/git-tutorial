// change.js - Utility module Version 3.0 (Universal: Browser + Node)

/**
 * Features:
 * - Configurable locale support
 * - Extensible status registry
 * - Strong session ID generation (Node + Browser)
 * - Universal module support (Node + Browser)
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    // Node / CommonJS
    module.exports = factory();
  } else {
    // Browser (window)
    root.ChangeUtils = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

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
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
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

  // Allow dynamic status registration
  const registerStatus = (key, message) => {
    if (!key || typeof key !== "string") {
      throw new Error("Status key must be a string");
    }

    statusRegistry[key.toLowerCase()] = message;
  };

  // Secure random string generator (Node + Browser)
  const secureRandomString = () => {
    // Browser crypto
    if (typeof crypto !== "undefined") {
      if (crypto.randomUUID) {
        return crypto.randomUUID().split("-")[0];
      }

      if (crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0].toString(36);
      }
    }

    // Node crypto
    try {
      const nodeCrypto = require?.("crypto");
      if (nodeCrypto?.randomUUID) {
        return nodeCrypto.randomUUID().split("-")[0];
      }
      return nodeCrypto.randomBytes(8).toString("hex");
    } catch {
      // Fallback (least secure)
      return Math.random().toString(36).slice(2, 11);
    }
  };

  // Session ID generator
  const generateSessionID = () => {
    const randomPart = secureRandomString();
    return `SID-${randomPart.toUpperCase()}`;
  };

  // Public API
  return Object.freeze({
    formatTimestamp,
    getStatusMessage,
    registerStatus,
    generateSessionID
  });
});