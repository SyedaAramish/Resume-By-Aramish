function generateResume() {
    // Retrieve user input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim());
    const languages = (document.getElementById("languages") as HTMLInputElement).value.split(",").map(language => language.trim());

    // Handle profile picture
    const photoInput = document.getElementById("photo") as HTMLInputElement;
    const photoURL = photoInput.files?.[0] ? URL.createObjectURL(photoInput.files[0]) : "";

    // Generate the resume preview HTML
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    resumePreview.innerHTML = `
        <div class="left-section">
            ${photoURL ? `<img src="${photoURL}" alt="Profile Picture">` : ""}
            <h2>${name}</h2>
            <p>${jobTitle}</p>
            <h4>Skills</h4>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
            <h4>Languages</h4>
            <ul>${languages.map(language => `<li>${language}</li>`).join("")}</ul>
        </div>
        <div class="right-section">
            <h2>About Me</h2>
            <p>${about}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
        </div>
    `;

    // Generate shareable link with the username as identifier
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
    const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
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
function updateSocialMediaLinks(shareableURL: string) {
    const facebookShare = document.getElementById("facebook-share") as HTMLAnchorElement;
    const twitterShare = document.getElementById("twitter-share") as HTMLAnchorElement;
    const linkedinShare = document.getElementById("linkedin-share") as HTMLAnchorElement;

    facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableURL)}`;
    twitterShare.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareableURL)}&text=Check out my resume!`;
    linkedinShare.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareableURL)}&title=My Resume`;
}

// Event listener for the PDF download button
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
downloadPdfButton.addEventListener('click', downloadPDF);
