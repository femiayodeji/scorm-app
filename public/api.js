console.log("SCORM API loaded!");
const progressStore = {}; // You can replace this with a POST call to your server
window.API = {
    LMSInitialize: function () {
      console.log("[SCORM] LMSInitialize");
      return "true";
    },
    LMSFinish: function () {
      console.log("[SCORM] LMSFinish");
      return "true";
    },
    LMSGetValue: function (key) {
      console.log(`[SCORM] LMSGetValue: ${key}`);
      return progressStore[key] || "";
    },
    LMSSetValue: function (key, value) {
      console.log(`[SCORM] LMSSetValue: ${key} = ${value}`);
      progressStore[key] = value;
      // Optional: send progress to server

      return "true";
    },
    LMSCommit: function () {
      console.log("[SCORM] LMSCommit", progressStore);
      return "true";
    },
    LMSGetLastError: () => "0",
    LMSGetErrorString: () => "No error",
    LMSGetDiagnostic: () => "No diagnostic"    
  };