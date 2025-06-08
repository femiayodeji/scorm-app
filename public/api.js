const userCourseData = localStorage.getItem("scormProgress");
const scormData = JSON.parse(userCourseData) || {};

window.API = {
    LMSInitialize: function () {
        console.log("SCORM Initialized");
        return "true";
    },
    LMSSetValue: function (key, value) {
        console.log("SetValue:", key, value);
        scormData[key] = value;
        const userUserCourseData = JSON.stringify(scormData);
        localStorage.setItem("scormProgress", userUserCourseData);
        return "true";
    },
    LMSGetValue: function (key) {
        const value = scormData[key] || "";
        console.log("GetValue:", key, value);
        return value;
    },
    LMSCommit: function () {
        console.log("SCORM Commit");
        const userUserCourseData = JSON.stringify(scormData);
        localStorage.setItem("scormProgress", userUserCourseData);
        return "true";
    },
    LMSFinish: function () {
        console.log("SCORM Finish");
        return "true";
    },
    LMSGetLastError: () => "0",
    LMSGetErrorString: () => "No error",
    LMSGetDiagnostic: () => "No diagnostics",
};
