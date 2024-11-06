function generateResume() {
    // Get form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const languages = (document.getElementById("languages") as HTMLInputElement).value.split(",");

    // Get profile picture
    const photoInput = document.getElementById("photo") as HTMLInputElement;
    const photoURL = photoInput.files?.[0] ? URL.createObjectURL(photoInput.files[0]) : "";

    // Build the resume preview HTML
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    resumePreview.innerHTML = `
        <div class="left-section">
            ${photoURL ? `<img src="${photoURL}" alt="Profile Picture">` : ""}
            <h2>${name}</h2>
            <p>${jobTitle}</p>
            <h4>Skills</h4>
            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
            <h4>Languages</h4>
            <ul>${languages.map(language => `<li>${language.trim()}</li>`).join("")}</ul>
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
}
