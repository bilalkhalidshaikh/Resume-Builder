"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('themeSwitchButton');
    var body = document.body;
    // Section Buttons
    var skillsBtn = document.getElementById('skillsBtn');
    var educationBtn = document.getElementById('educationBtn');
    var experienceBtn = document.getElementById('experienceBtn');
    var contactBtn = document.getElementById('contactBtn');
    var createResumeBtnSidebar = document.getElementById('createResumeBtnSidebar');
    // Sections
    var skillsSection = document.getElementById('skillsSection');
    var educationSection = document.getElementById('educationSection');
    var experienceSection = document.getElementById('experienceSection');
    var contactSection = document.getElementById('contactSection');
    var resumeFormContainer = document.getElementById('resumeFormContainer');
    var createResumeMessage = document.getElementById('createResumeMessage');
    var sidebar = document.querySelector('.sidebar');
    var formtitles = document.querySelector('.form-titles');
    var buttons = document.querySelectorAll('button');
    var sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    var settingsIcon = document.querySelector('.floating-menu i');
    var socialIcons = document.querySelectorAll('.social-links a');
    var inputs = document.querySelectorAll('input, textarea');
    var sectionTitles = document.querySelectorAll('h2');
    var formLabels = document.querySelectorAll('label');
    var formTitles = document.querySelectorAll('h2, h3');
    var profilePicElement = document.querySelector(".profile-pic img");
    // Original state
    var originalProfilePic = './src/assets/bilal.jpg'; // Define your original image
    var isDarkMode = true;
    // Function to restore original data on refresh
    window.addEventListener("beforeunload", function () {
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
        sidebarLinks.forEach(function (link) { link.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        buttons.forEach(function (button) {
            button.style.backgroundColor = isDarkMode ? "#ffffff" : "#34495e";
            button.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
        });
        socialIcons.forEach(function (icon) { icon.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        resumeFormContainer.style.backgroundColor = isDarkMode ? "#bdc3c7" : "#2c3e50";
        inputs.forEach(function (input) {
            input.style.backgroundColor = isDarkMode ? "#ffffff" : "#2c3e50";
            input.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
        });
        sectionTitles.forEach(function (title) { title.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        formTitles.forEach(function (title) { title.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
        formLabels.forEach(function (label) { label.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1"; });
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
    skillsBtn.addEventListener("click", function () { hideAllSections(); skillsSection.style.display = "block"; });
    educationBtn.addEventListener("click", function () { hideAllSections(); educationSection.style.display = "block"; });
    experienceBtn.addEventListener("click", function () { hideAllSections(); experienceSection.style.display = "block"; });
    contactBtn.addEventListener("click", function () { hideAllSections(); contactSection.style.display = "block"; });
    createResumeBtnSidebar.addEventListener("click", showResumeForm);
    // Floating Menu Toggle
    var floatingMenu = document.getElementById("floatingMenu");
    var menuContent = document.getElementById("menuContent");
    floatingMenu.addEventListener("click", function () {
        menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });
    // Milestone 3 - Target the Resume Form
    var resumeForm = document.getElementById("resumeForm");
    // Handle form submission
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("nameInput").value;
        var email = document.getElementById("emailInput").value;
        if (!name || !email) {
            alert("Please fill in all required fields.");
            return;
        }
        var educationFields = document.querySelectorAll(".educationField");
        var educationDetails = "";
        educationFields.forEach(function (field) {
            var degree = field.querySelector('[name="degree"]').value;
            var institution = field.querySelector('[name="institution"]').value;
            var year = field.querySelector('[name="year"]').value;
            educationDetails += "<li>".concat(degree, " at ").concat(institution, ", ").concat(year, "</li>");
        });
        var experienceFields = document.querySelectorAll(".experienceField");
        var experienceDetails = "";
        experienceFields.forEach(function (field) {
            var jobTitle = field.querySelector('[name="jobTitle"]').value;
            var company = field.querySelector('[name="company"]').value;
            var years = field.querySelector('[name="years"]').value;
            experienceDetails += "<li>".concat(jobTitle, " at ").concat(company, " (").concat(years, ")</li>");
        });
        var skills = document.getElementById("skillsInput").value.split(",");
        // Dynamically update the resume section
        var nameElement = document.querySelector(".profile-details h1");
        var emailElement = document.querySelector(".profile-details p");
        var educationElement = document.querySelector("#educationSection ul");
        var experienceElement = document.querySelector("#experienceSection .timeline");
        var skillsElement = document.querySelector(".skill-container");
        var profilePicElement = document.querySelector(".profile-pic img");
        // Update resume fields
        nameElement.textContent = name;
        emailElement.textContent = email;
        educationElement.innerHTML = educationDetails;
        experienceElement.innerHTML = experienceDetails;
        skillsElement.innerHTML = skills.map(function (skill) { return "<button class=\"skill-btn\">".concat(skill.trim(), "</button>"); }).join("");
        profilePicElement.src = "./src/assets/profile.png"; // Update profile image as per your request
        clearForm(); // Clear form fields after submission
        showSkillsSection(); // Show Skills section after resume is generated
        window.scrollTo(0, 0); // Scroll to top after submission
    });
    function clearForm() {
        var formFields = document.querySelectorAll('input, textarea');
        formFields.forEach(function (field) {
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
