console.log("SCORM API loaded!");
window.API = {
    LMSInitialize: function () {
      console.log("LMSInitialize");
      return "true";
    },
    LMSFinish: function () {
      console.log("LMSFinish");
      return "true";
    },
    LMSGetValue: function (key) {
      console.log("LMSGetValue:", key);
      return "";
    },
    LMSSetValue: function (key, value) {
      console.log("LMSSetValue:", key, value);
      return "true";
    },
    LMSCommit: function () {
      console.log("LMSCommit");
      return "true";
    },
    LMSGetLastError: function () {
      return "0";
    },
    LMSGetErrorString: function () {
      return "No error";
    },
    LMSGetDiagnostic: function () {
      return "No diagnostics";
    }
  };