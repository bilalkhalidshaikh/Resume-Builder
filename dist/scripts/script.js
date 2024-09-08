"use strict";
// Grab all buttons and sections
var toggleEducationButton = document.getElementById('toggle-education');
var toggleSkillsButton = document.getElementById('toggle-skills');
var toggleExperienceButton = document.getElementById('toggle-experience');
var educationSection = document.getElementById('education-section');
var skillsSection = document.getElementById('skills-section');
var experienceSection = document.getElementById('experience-section');
// Toggle visibility of sections
function toggleVisibility(section) {
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
}
// Add event listeners to buttons
if (toggleEducationButton && educationSection) {
    toggleEducationButton.addEventListener('click', function () { return toggleVisibility(educationSection); });
}
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener('click', function () { return toggleVisibility(skillsSection); });
}
if (toggleExperienceButton && experienceSection) {
    toggleExperienceButton.addEventListener('click', function () { return toggleVisibility(experienceSection); });
}
