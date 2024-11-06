function generateResume() {
    var _a;
    // Retrieve user input values
    var name = document.getElementById("name").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var about = document.getElementById("about").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); });
    var languages = document.getElementById("languages").value.split(",").map(function (language) { return language.trim(); });
    // Handle profile picture
    var photoInput = document.getElementById("photo");
    var photoURL = ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(photoInput.files[0]) : "";
    // Generate the resume preview HTML
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = "\n        <div class=\"left-section\">\n            ".concat(photoURL ? "<img src=\"".concat(photoURL, "\" alt=\"Profile Picture\">") : "", "\n            <h2>").concat(name, "</h2>\n            <p>").concat(jobTitle, "</p>\n            <h4>Skills</h4>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n            <h4>Languages</h4>\n            <ul>").concat(languages.map(function (language) { return "<li>".concat(language, "</li>"); }).join(""), "</ul>\n        </div>\n        <div class=\"right-section\">\n            <h2>About Me</h2>\n            <p>").concat(about, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n        </div>\n    ");
    // Generate shareable link with the username as identifier
    var username = document.getElementById("username").value;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    var shareableLinkContainer = document.getElementById("shareable-link-container");
    var shareableLinkElement = document.getElementById("shareable-link");
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    // Update social media share links
    updateSocialMediaLinks(shareableURL);
}
// Function to download the resume as PDF using the browser's print functionality
function downloadPDF() {
    window.print(); // Opens the print dialog to allow saving as PDF
}
// Update social media links with the generated URL
function updateSocialMediaLinks(shareableURL) {
    var facebookShare = document.getElementById("facebook-share");
    var twitterShare = document.getElementById("twitter-share");
    var linkedinShare = document.getElementById("linkedin-share");
    facebookShare.href = "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(shareableURL));
    twitterShare.href = "https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(shareableURL), "&text=Check out my resume!");
    linkedinShare.href = "https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(shareableURL), "&title=My Resume");
}
// Event listener for the PDF download button
var downloadPdfButton = document.getElementById('download-pdf');
downloadPdfButton.addEventListener('click', downloadPDF);
