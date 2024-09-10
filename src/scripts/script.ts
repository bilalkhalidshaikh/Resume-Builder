document.addEventListener("DOMContentLoaded", function () {

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
    const formtitles = document.querySelector('.form-titles') as HTMLElement; 
    const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a') as NodeListOf<HTMLElement>;
    const settingsIcon = document.querySelector('.floating-menu i') as HTMLElement;
    const socialIcons = document.querySelectorAll('.social-links a') as NodeListOf<HTMLElement>;
    const inputs = document.querySelectorAll('input, textarea') as NodeListOf<HTMLElement>;
    const sectionTitles = document.querySelectorAll('h2') as NodeListOf<HTMLElement>;
    const formLabels = document.querySelectorAll('label') as NodeListOf<HTMLElement>;
    const formTitles = document.querySelectorAll('h2, h3') as NodeListOf<HTMLElement>;
    const profilePicElement = document.querySelector(
        ".profile-pic img"
      ) as HTMLImageElement;
    // Original state
    const originalProfilePic = './src/assets/bilal.jpg'; // Define your original image
    let isDarkMode = true;

    // Function to restore original data on refresh
    window.addEventListener("beforeunload", () => {
        if (profilePicElement) profilePicElement.src = originalProfilePic || "";
        (document.querySelector(".profile-details h1") as HTMLElement).textContent = 'Muhammad Bilal Khalid'; // Reset Name
        (document.querySelector(".profile-details p") as HTMLElement).textContent = 'GenAI Web3.0 Developer'; // Reset Title
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
    const floatingMenu = document.getElementById("floatingMenu") as HTMLElement;
    const menuContent = document.getElementById("menuContent") as HTMLElement;

    floatingMenu.addEventListener("click", () => {
        menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });

    // Milestone 3 - Target the Resume Form
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;

    // Handle form submission
    resumeForm.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        const name = (document.getElementById("nameInput") as HTMLInputElement).value;
        const email = (document.getElementById("emailInput") as HTMLInputElement).value;

        if (!name || !email) {
            alert("Please fill in all required fields.");
            return;
        }

        const educationFields = document.querySelectorAll(".educationField");
        let educationDetails = "";
        educationFields.forEach((field: Element) => {
            const degree = (field.querySelector('[name="degree"]') as HTMLInputElement).value;
            const institution = (field.querySelector('[name="institution"]') as HTMLInputElement).value;
            const year = (field.querySelector('[name="year"]') as HTMLInputElement).value;
            educationDetails += `<li>${degree} at ${institution}, ${year}</li>`;
        });

        const experienceFields = document.querySelectorAll(".experienceField");
        let experienceDetails = "";
        experienceFields.forEach((field: Element) => {
            const jobTitle = (field.querySelector('[name="jobTitle"]') as HTMLInputElement).value;
            const company = (field.querySelector('[name="company"]') as HTMLInputElement).value;
            const years = (field.querySelector('[name="years"]') as HTMLInputElement).value;
            experienceDetails += `<li>${jobTitle} at ${company} (${years})</li>`;
        });

        const skills = (document.getElementById("skillsInput") as HTMLInputElement).value.split(",");

        // Dynamically update the resume section
        const nameElement = document.querySelector(".profile-details h1") as HTMLElement;
        const emailElement = document.querySelector(".profile-details p") as HTMLElement;
        const educationElement = document.querySelector("#educationSection ul") as HTMLElement;
        const experienceElement = document.querySelector("#experienceSection .timeline") as HTMLElement;
        const skillsElement = document.querySelector(".skill-container") as HTMLElement;
        const profilePicElement = document.querySelector(".profile-pic img") as HTMLImageElement;

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
