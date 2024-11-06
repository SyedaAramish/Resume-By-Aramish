// script.ts

interface UserProfile {
    name: string;
    title: string;
    about: string;
    contact: {
        phone: string;
        email: string;
        website: string;
        address: string;
    };
    skills: string[];
    education: string[];
    workExperience: Array<{
        position: string;
        company: string;
        years: string;
        duties: string[];
    }>;
}

const loadProfile = (profile: UserProfile) => {
    document.querySelector("h1")!.textContent = profile.name;
    document.querySelector("h3")!.textContent = profile.title;
    document.querySelector(".about-me p")!.textContent = profile.about;
    // Populate other sections similarly...
};

const sampleProfile: UserProfile = {
    name: "Henrietta Mitchell",
    title: "Graphic Designer",
    about: "Innovative graphic designer with 5+ years of experience...",
    contact: {
        phone: "+123 456 7890",
        email: "henrietta@example.com",
        website: "www.henrietta.com",
        address: "123 Street, City, Country"
    },
    skills: ["Photoshop", "Illustrator", "InDesign", "UI/UX Design", "Sketch", "Wireframing"],
    education: [
        "2000 - 2004: XYZ School of Design",
        "2005 - 2009: University of Fashion, Degree in Design"
    ],
    workExperience: [
        {
            position: "Senior Graphic Designer",
            company: "ABC Company",
            years: "2018 - Present",
            duties: ["Leading the design team", "Developing brand identities"]
        },
        {
            position: "Graphic Designer",
            company: "XYZ Agency",
            years: "2013 - 2018",
            duties: ["Created digital assets", "Collaborated with marketing"]
        }
    ]
};

loadProfile(sampleProfile);
