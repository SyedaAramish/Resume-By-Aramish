function generateResume() {
    var _a;
    // Get form data
    var name = document.getElementById("name").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var about = document.getElementById("about").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value.split(",");
    var languages = document.getElementById("languages").value.split(",");
    // Get profile picture
    var photoInput = document.getElementById("photo");
    var photoURL = ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(photoInput.files[0]) : "";
    // Build the resume preview HTML with editable content
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = "\n        <div class=\"left-section\">\n            ".concat(photoURL ? "<img src=\"".concat(photoURL, "\" alt=\"Profile Picture\">") : "", "\n            <h2 contenteditable=\"true\">").concat(name, "</h2>\n            <p contenteditable=\"true\">").concat(jobTitle, "</p>\n            <h4>Skills</h4>\n            <ul>").concat(skills.map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(""), "</ul>\n            <h4>Languages</h4>\n            <ul>").concat(languages.map(function (language) { return "<li contenteditable=\"true\">".concat(language.trim(), "</li>"); }).join(""), "</ul>\n        </div>\n        <div class=\"right-section\">\n            <h2>About Me</h2>\n            <p contenteditable=\"true\">").concat(about, "</p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n        </div>\n    ");
}
