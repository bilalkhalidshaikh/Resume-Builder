"use strict";
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
// Toggle Dark Mode
var isDarkMode = true;
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
// Show Create Resume form and hide all other sections
function showResumeForm() {
    hideAllSections();
    resumeFormContainer.style.display = 'block';
    createResumeMessage.style.display = 'none';
}
// Function to hide all sections (Skills, Education, Experience, Contact)
function hideAllSections() {
    skillsSection.style.display = 'none';
    educationSection.style.display = 'none';
    experienceSection.style.display = 'none';
    contactSection.style.display = 'none';
    resumeFormContainer.style.display = 'none'; // Hide form
}
// Toggle Sections
skillsBtn.addEventListener('click', function () {
    hideAllSections();
    skillsSection.style.display = 'block';
});
educationBtn.addEventListener('click', function () {
    hideAllSections();
    educationSection.style.display = 'block';
});
experienceBtn.addEventListener('click', function () {
    hideAllSections();
    experienceSection.style.display = 'block';
});
contactBtn.addEventListener('click', function () {
    hideAllSections();
    contactSection.style.display = 'block';
});
// Show resume form from the sidebar
createResumeBtnSidebar.addEventListener('click', showResumeForm);
// Floating Menu Toggle
var floatingMenu = document.getElementById('floatingMenu');
var menuContent = document.getElementById('menuContent');
floatingMenu.addEventListener('click', function () {
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});
// Milestone 3 - Target the Resume Form
var resumeForm = document.getElementById('resumeForm');
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Grab the input values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    // Fetch education details
    var educationFields = document.querySelectorAll('.educationField');
    var educationDetails = "";
    educationFields.forEach(function (field) {
        var degree = field.querySelector('[name="degree"]').value;
        var institution = field.querySelector('[name="institution"]').value;
        var year = field.querySelector('[name="year"]').value;
        educationDetails += "<li>".concat(degree, " at ").concat(institution, ", ").concat(year, "</li>");
    });
    // Fetch experience details
    var experienceFields = document.querySelectorAll('.experienceField');
    var experienceDetails = "";
    experienceFields.forEach(function (field) {
        var jobTitle = field.querySelector('[name="jobTitle"]').value;
        var company = field.querySelector('[name="company"]').value;
        var years = field.querySelector('[name="years"]').value;
        experienceDetails += "<li>".concat(jobTitle, " at ").concat(company, " (").concat(years, ")</li>");
    });
    // Fetch skills
    var skills = document.getElementById('skillsInput').value.split(',');
    // Dynamically update the resume section
    var nameElement = document.querySelector('.profile-details h1');
    var emailElement = document.querySelector('.profile-details p');
    var educationElement = document.querySelector('#educationSection ul');
    var experienceElement = document.querySelector('#experienceSection .timeline');
    var skillsElement = document.querySelector('.skill-container');
    // Update resume fields
    nameElement.textContent = name;
    emailElement.textContent = email;
    educationElement.innerHTML = educationDetails;
    experienceElement.innerHTML = experienceDetails;
    skillsElement.innerHTML = skills.map(function (skill) { return "<button class=\"skill-btn\">".concat(skill.trim(), "</button>"); }).join('');
});
// Add more education fields
var addEducationBtn = document.getElementById('addEducation');
addEducationBtn.addEventListener('click', function () {
    var educationFields = document.getElementById('educationFields');
    educationFields.innerHTML += "\n    <div class=\"educationField\">\n      <input type=\"text\" placeholder=\"Degree\" name=\"degree\" required />\n      <input type=\"text\" placeholder=\"Institution\" name=\"institution\" required />\n      <input type=\"text\" placeholder=\"Year\" name=\"year\" required />\n    </div>\n  ";
});
// Add more experience fields
var addExperienceBtn = document.getElementById('addExperience');
addExperienceBtn.addEventListener('click', function () {
    var experienceFields = document.getElementById('experienceFields');
    experienceFields.innerHTML += "\n    <div class=\"experienceField\">\n      <input type=\"text\" placeholder=\"Job Title\" name=\"jobTitle\" required />\n      <input type=\"text\" placeholder=\"Company\" name=\"company\" required />\n      <input type=\"text\" placeholder=\"Years\" name=\"years\" required />\n    </div>\n  ";
});
