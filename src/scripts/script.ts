const toggleButton = document.getElementById('themeSwitchButton') as HTMLElement;
const body = document.body;

// Section Buttons
const skillsBtn = document.getElementById('skillsBtn') as HTMLElement;
const educationBtn = document.getElementById('educationBtn') as HTMLElement;
const experienceBtn = document.getElementById('experienceBtn') as HTMLElement;
const contactBtn = document.getElementById('contactBtn') as HTMLElement;

// Sections
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const educationSection = document.getElementById('educationSection') as HTMLElement;
const experienceSection = document.getElementById('experienceSection') as HTMLElement;
const contactSection = document.getElementById('contactSection') as HTMLElement;

// Toggle Dark Mode
let isDarkMode = true;

toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Toggle Sections
skillsBtn.addEventListener('click', () => showSection(skillsSection));
educationBtn.addEventListener('click', () => showSection(educationSection));
experienceBtn.addEventListener('click', () => showSection(experienceSection));
contactBtn.addEventListener('click', () => showSection(contactSection));

function showSection(section: HTMLElement) {
  skillsSection.style.display = 'none';
  educationSection.style.display = 'none';
  experienceSection.style.display = 'none';
  contactSection.style.display = 'none';
  section.style.display = 'block';
}

// Floating Menu Toggle
const floatingMenu = document.getElementById('floatingMenu') as HTMLElement;
const menuContent = document.getElementById('menuContent') as HTMLElement;

floatingMenu.addEventListener('click', () => {
  menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});
