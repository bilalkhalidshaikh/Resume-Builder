"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('themeSwitchButton');
    const body = document.body;
    // Section Buttons
    const skillsBtn = document.getElementById('skillsBtn');
    const educationBtn = document.getElementById('educationBtn');
    const experienceBtn = document.getElementById('experienceBtn');
    const contactBtn = document.getElementById('contactBtn');
    const createResumeBtnSidebar = document.getElementById('createResumeBtnSidebar');
    // Sections
    const skillsSection = document.getElementById('skillsSection');
    const educationSection = document.getElementById('educationSection');
    const experienceSection = document.getElementById('experienceSection');
    const contactSection = document.getElementById('contactSection');
    const resumeFormContainer = document.getElementById('resumeFormContainer');
    const createResumeMessage = document.getElementById('createResumeMessage');
    const sidebar = document.querySelector('.sidebar');
    const formtitles = document.querySelector('.form-titles');
    const buttons = document.querySelectorAll('button');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    const settingsIcon = document.querySelector('.floating-menu i');
    const socialIcons = document.querySelectorAll('.social-links a');
    const inputs = document.querySelectorAll('input, textarea');
    const sectionTitles = document.querySelectorAll('h2');
    const formLabels = document.querySelectorAll('label');
    const formTitles = document.querySelectorAll('h2, h3');
    const profilePicElement = document.querySelector(".profile-pic img");
    const nameDisplay = document.getElementById('nameDisplay');
    const titleDisplay = document.getElementById('titleDisplay');
    const linkedinLink = document.getElementById('linkedinLink');
    const githubLink = document.getElementById('githubLink');
    const whatsappLink = document.getElementById('whatsappLink');
    const profilePicDisplay = document.getElementById('profilePicDisplay');
    const profilePicInput = document.getElementById('profilePicInput');
    // Editable sections: Education, Experience, Skills
    const educationList = document.getElementById('educationList');
    const experienceTimeline = document.getElementById('experienceTimeline');
    const skillsContainer = document.getElementById('skillsContainer');
    // Original state
    const originalProfilePic = './src/assets/bilal.jpg'; // Define your original image
    // Enable profile image upload when clicking the image
    profilePicDisplay.addEventListener('click', () => {
        profilePicInput.click();
    });
    // Update profile image on file selection
    profilePicInput.addEventListener('change', function () {
        var _a;
        const file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    profilePicDisplay.src = e.target.result;
                }
            };
            reader.readAsDataURL(file); // Convert image to Data URL and display it
        }
    });
    // Event listeners for content editable fields (name, title, social links)
    nameDisplay.addEventListener('blur', updateResume);
    titleDisplay.addEventListener('blur', updateResume);
    linkedinLink.addEventListener('blur', updateResume);
    githubLink.addEventListener('blur', updateResume);
    whatsappLink.addEventListener('blur', updateResume);
    // Event listeners for the education section
    educationList.addEventListener('blur', updateEducation, true); // Capture edits
    experienceTimeline.addEventListener('blur', updateExperience, true); // Capture edits
    skillsContainer.addEventListener('blur', updateSkills, true); // Capture edits
    function updateResume() {
        var _a, _b;
        const updatedName = ((_a = nameDisplay.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || 'Muhammad Bilal Khalid';
        const updatedTitle = ((_b = titleDisplay.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || 'GenAI Web3.0 Developer';
        const updatedLinkedIn = linkedinLink.getAttribute('href') || 'https://www.linkedin.com';
        const updatedGitHub = githubLink.getAttribute('href') || 'https://github.com';
        const updatedWhatsApp = whatsappLink.getAttribute('href') || '';
        // Log changes or process them further
        console.log("Updated Name: ", updatedName);
        console.log("Updated Title: ", updatedTitle);
        console.log("Updated LinkedIn: ", updatedLinkedIn);
        console.log("Updated GitHub: ", updatedGitHub);
        console.log("Updated WhatsApp: ", updatedWhatsApp);
    }
    // Update the education section when user finishes editing
    function updateEducation() {
        const educationEntries = Array.from(educationList.querySelectorAll('li')).map(li => { var _a; return ((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''; });
        console.log("Updated Education: ", educationEntries);
    }
    // Update the experience section when user finishes editing
    function updateExperience() {
        const experienceEntries = Array.from(experienceTimeline.querySelectorAll('.timeline-item')).map(item => {
            var _a, _b, _c, _d;
            return ({
                title: (_b = (_a = item.querySelector('h3')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim(),
                description: (_d = (_c = item.querySelector('p')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()
            });
        });
        console.log("Updated Experience: ", experienceEntries);
    }
    // Update the skills section when user finishes editing
    function updateSkills() {
        const skillEntries = Array.from(skillsContainer.querySelectorAll('.skill-btn')).map(button => { var _a; return ((_a = button.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''; });
        console.log("Updated Skills: ", skillEntries);
    }
    // });
    // Additional functionality for other sections like Education, Experience, Skills would follow the same principle
    // });
    let isDarkMode = true;
    // Function to restore original data on refresh
    window.addEventListener("beforeunload", () => {
        if (profilePicElement)
            profilePicElement.src = originalProfilePic || "";
        document.querySelector(".profile-details h1").textContent = 'Muhammad Bilal Khalid'; // Reset Name
        document.querySelector(".profile-details p").textContent = 'GenAI Web3.0 Developer'; // Reset Title
    });
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        sidebar.style.backgroundColor = isDarkMode ? "#f7f7f7" : "#34495e";
        sidebar.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
        formtitles.style.color = isDarkMode ? "#f7f7f7" : "#2c3e50";
        sidebarLinks.forEach((link) => { link.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        buttons.forEach((button) => {
            button.style.backgroundColor = isDarkMode ? "#ffffff" : "#34495e";
            button.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
        });
        socialIcons.forEach((icon) => { icon.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        resumeFormContainer.style.backgroundColor = isDarkMode ? "#bdc3c7" : "#2c3e50";
        inputs.forEach((input) => {
            input.style.backgroundColor = isDarkMode ? "#ffffff" : "#2c3e50";
            input.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
        });
        sectionTitles.forEach((title) => { title.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        formTitles.forEach((title) => { title.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        formLabels.forEach((label) => { label.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        settingsIcon.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
        toggleButton.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
        isDarkMode = !isDarkMode;
    });
    // Show Create Resume form and hide all other sections
    function showResumeForm() {
        hideAllSections();
        resumeFormContainer.style.display = "block";
        createResumeMessage.style.display = "none";
    }
    // Function to hide all sections (Skills, Education, Experience, Contact)
    function hideAllSections() {
        skillsSection.style.display = "none";
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        contactSection.style.display = "none";
        resumeFormContainer.style.display = "none"; // Hide form
    }
    // Toggle Sections
    skillsBtn.addEventListener("click", () => { hideAllSections(); skillsSection.style.display = "block"; });
    educationBtn.addEventListener("click", () => { hideAllSections(); educationSection.style.display = "block"; });
    experienceBtn.addEventListener("click", () => { hideAllSections(); experienceSection.style.display = "block"; });
    contactBtn.addEventListener("click", () => { hideAllSections(); contactSection.style.display = "block"; });
    createResumeBtnSidebar.addEventListener("click", showResumeForm);
    // Floating Menu Toggle
    const floatingMenu = document.getElementById("floatingMenu");
    const menuContent = document.getElementById("menuContent");
    floatingMenu.addEventListener("click", () => {
        menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });
    // Milestone 3 - Target the Resume Form
    const resumeForm = document.getElementById("resumeForm");
    // Handle form submission
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        if (!name || !email) {
            alert("Please fill in all required fields.");
            return;
        }
        const educationFields = document.querySelectorAll(".educationField");
        let educationDetails = "";
        educationFields.forEach((field) => {
            const degree = field.querySelector('[name="degree"]').value;
            const institution = field.querySelector('[name="institution"]').value;
            const year = field.querySelector('[name="year"]').value;
            educationDetails += `<li>${degree} at ${institution}, ${year}</li>`;
        });
        const experienceFields = document.querySelectorAll(".experienceField");
        let experienceDetails = "";
        experienceFields.forEach((field) => {
            const jobTitle = field.querySelector('[name="jobTitle"]').value;
            const company = field.querySelector('[name="company"]').value;
            const years = field.querySelector('[name="years"]').value;
            experienceDetails += `<li>${jobTitle} at ${company} (${years})</li>`;
        });
        const skills = document.getElementById("skillsInput").value.split(",");
        // Dynamically update the resume section
        const nameElement = document.querySelector(".profile-details h1");
        const emailElement = document.querySelector(".profile-details p");
        const educationElement = document.querySelector("#educationSection ul");
        const experienceElement = document.querySelector("#experienceSection .timeline");
        const skillsElement = document.querySelector(".skill-container");
        const profilePicElement = document.querySelector(".profile-pic img");
        // Update resume fields
        nameElement.textContent = name;
        emailElement.textContent = email;
        educationElement.innerHTML = educationDetails;
        experienceElement.innerHTML = experienceDetails;
        skillsElement.innerHTML = skills.map((skill) => `<button class="skill-btn">${skill.trim()}</button>`).join("");
        profilePicElement.src = "./src/assets/profile.png"; // Update profile image as per your request
        clearForm(); // Clear form fields after submission
        showSkillsSection(); // Show Skills section after resume is generated
        window.scrollTo(0, 0); // Scroll to top after submission
    });
    function clearForm() {
        const formFields = document.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
                field.value = '';
            }
        });
    }
    function showSkillsSection() {
        hideAllSections();
        skillsSection.style.display = 'block';
    }
});
