const toggleButton = document.getElementById('themeSwitchButton') as HTMLElement;
const body = document.body as HTMLElement;

// Section Buttons
const skillsBtn = document.getElementById('skillsBtn') as HTMLElement;
const educationBtn = document.getElementById('educationBtn') as HTMLElement;
const experienceBtn = document.getElementById('experienceBtn') as HTMLElement;
const contactBtn = document.getElementById('contactBtn') as HTMLElement;
const createResumeBtnSidebar = document.getElementById('createResumeBtnSidebar') as HTMLElement;

// Sections
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const educationSection = document.getElementById('educationSection') as HTMLElement;
const experienceSection = document.getElementById('experienceSection') as HTMLElement;
const contactSection = document.getElementById('contactSection') as HTMLElement;
const resumeFormContainer = document.getElementById('resumeFormContainer') as HTMLElement;
const createResumeMessage = document.getElementById('createResumeMessage') as HTMLElement;
const sidebar = document.querySelector('.sidebar') as HTMLElement;
const formTitles = document.querySelector('.form-titles') as HTMLElement;
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const sidebarLinks = document.querySelectorAll('.sidebar ul li a') as NodeListOf<HTMLElement>;
const settingsIcon = document.querySelector('.floating-menu i') as HTMLElement;
const socialIcons = document.querySelectorAll('.social-links a') as NodeListOf<HTMLElement>;
const inputs = document.querySelectorAll('input, textarea') as NodeListOf<HTMLElement>;
const sectionTitles = document.querySelectorAll('h2') as NodeListOf<HTMLElement>;
const formLabels = document.querySelectorAll('label') as NodeListOf<HTMLElement>;
const formHeadings = document.querySelectorAll('h2, h3') as NodeListOf<HTMLElement>;

// Toggle Dark Mode
let isDarkMode = true;

toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');

  sidebar.style.backgroundColor = isDarkMode ? '#f7f7f7' : '#34495e';
  sidebar.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  formTitles.style.color = isDarkMode ? '#2c3e50' : '#eee';  
  
  sidebarLinks.forEach(link => {
    link.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });

  buttons.forEach(button => {
    button.style.backgroundColor = isDarkMode ? '#ffffff' : '#34495e';
    button.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });

  socialIcons.forEach(icon => {
    icon.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });
  
  resumeFormContainer.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';

  inputs.forEach(input => {
    input.style.backgroundColor = isDarkMode ? '#ffffff' : '#2c3e50';
    input.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });

  sectionTitles.forEach(title => {
    title.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });

  formHeadings.forEach(title => {
    title.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });

  formLabels.forEach(label => {
    label.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';
  });

  settingsIcon.style.color = isDarkMode ? '#2c3e50' : '#ecf0f1';

  toggleButton.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
  isDarkMode = !isDarkMode;
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
  resumeFormContainer.style.display = 'none'; 
}

// Toggle Sections
skillsBtn.addEventListener('click', () => {
  hideAllSections();
  skillsSection.style.display = 'block';
});

educationBtn.addEventListener('click', () => {
  hideAllSections();
  educationSection.style.display = 'block';
});

experienceBtn.addEventListener('click', () => {
  hideAllSections();
  experienceSection.style.display = 'block';
});

contactBtn.addEventListener('click', () => {
  hideAllSections();
  contactSection.style.display = 'block';
});

// Show resume form from the sidebar
createResumeBtnSidebar.addEventListener('click', showResumeForm);

// Floating Menu Toggle
const floatingMenu = document.getElementById('floatingMenu') as HTMLElement;
const menuContent = document.getElementById('menuContent') as HTMLElement;

floatingMenu.addEventListener('click', () => {
  menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});

// Milestone 3 - Target the Resume Form
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;

resumeForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();

  const name = (document.getElementById('nameInput') as HTMLInputElement).value;
  const email = (document.getElementById('emailInput') as HTMLInputElement).value;

  const educationFields = document.querySelectorAll('.educationField');
  let educationDetails = '';
  educationFields.forEach((field: Element) => {
    const degree = (field.querySelector('[name="degree"]') as HTMLInputElement).value;
    const institution = (field.querySelector('[name="institution"]') as HTMLInputElement).value;
    const year = (field.querySelector('[name="year"]') as HTMLInputElement).value;
    educationDetails += `<li>${degree} at ${institution}, ${year}</li>`;
  });

  const experienceFields = document.querySelectorAll('.experienceField');
  let experienceDetails = '';
  experienceFields.forEach((field: Element) => {
    const jobTitle = (field.querySelector('[name="jobTitle"]') as HTMLInputElement).value;
    const company = (field.querySelector('[name="company"]') as HTMLInputElement).value;
    const years = (field.querySelector('[name="years"]') as HTMLInputElement).value;
    experienceDetails += `<li>${jobTitle} at ${company} (${years})</li>`;
  });

  const skills = (document.getElementById('skillsInput') as HTMLInputElement).value.split(',');

  const nameElement = document.querySelector('.profile-details h1') as HTMLElement;
  const emailElement = document.querySelector('.profile-details p') as HTMLElement;
  const educationElement = document.querySelector('#educationSection ul') as HTMLElement;
  const experienceElement = document.querySelector('#experienceSection .timeline') as HTMLElement;
  const skillsElement = document.querySelector('.skill-container') as HTMLElement;

  nameElement.textContent = name;
  emailElement.textContent = email;
  educationElement.innerHTML = educationDetails;
  experienceElement.innerHTML = experienceDetails;
  skillsElement.innerHTML = skills.map(skill => `<button class="skill-btn">${skill.trim()}</button>`).join('');
});

// Add more education fields
const addEducationBtn = document.getElementById('addEducation') as HTMLElement;
addEducationBtn.addEventListener('click', function () {
  const educationFields = document.getElementById('educationFields') as HTMLElement;
  const newEducationField = document.createElement('div');
  newEducationField.classList.add('educationField');
  newEducationField.innerHTML = `
    <input type="text" placeholder="Degree" name="degree" required />
    <input type="text" placeholder="Institution" name="institution" required />
    <input type="text" placeholder="Year" name="year" required />
  `;
  educationFields.appendChild(newEducationField);
});

// Add more experience fields
const addExperienceBtn = document.getElementById('addExperience') as HTMLElement;
addExperienceBtn.addEventListener('click', function () {
  const experienceFields = document.getElementById('experienceFields') as HTMLElement;
  const newExperienceField = document.createElement('div');
  newExperienceField.classList.add('experienceField');
  newExperienceField.innerHTML = `
    <input type="text" placeholder="Job Title" name="jobTitle" required />
    <input type="text" placeholder="Company" name="company" required />
    <input type="text" placeholder="Years" name="years" required />
  `;
  experienceFields.appendChild(newExperienceField);
});
