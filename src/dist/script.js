"use strict";
var toggleButton = document.getElementById('themeSwitchButton');
var body = document.body;
// Section Buttons
var skillsBtn = document.getElementById('skillsBtn');
var educationBtn = document.getElementById('educationBtn');
var experienceBtn = document.getElementById('experienceBtn');
var contactBtn = document.getElementById('contactBtn');
// Sections
var skillsSection = document.getElementById('skillsSection');
var educationSection = document.getElementById('educationSection');
var experienceSection = document.getElementById('experienceSection');
var contactSection = document.getElementById('contactSection');
// Toggle Dark Mode
var isDarkMode = true;
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
// Toggle Sections
skillsBtn.addEventListener('click', function () { return showSection(skillsSection); });
educationBtn.addEventListener('click', function () { return showSection(educationSection); });
experienceBtn.addEventListener('click', function () { return showSection(experienceSection); });
contactBtn.addEventListener('click', function () { return showSection(contactSection); });
function showSection(section) {
    skillsSection.style.display = 'none';
    educationSection.style.display = 'none';
    experienceSection.style.display = 'none';
    contactSection.style.display = 'none';
    section.style.display = 'block';
}
// Floating Menu Toggle
var floatingMenu = document.getElementById('floatingMenu');
var menuContent = document.getElementById('menuContent');
floatingMenu.addEventListener('click', function () {
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});
