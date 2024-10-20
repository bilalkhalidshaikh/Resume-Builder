declare var pdfMake: any;
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById(
    "themeSwitchButton"
  ) as HTMLElement;
  const body = document.body as HTMLElement;

  // Section Buttons
  const skillsBtn = document.getElementById("skillsBtn") as HTMLElement;
  const educationBtn = document.getElementById("educationBtn") as HTMLElement;
  const experienceBtn = document.getElementById("experienceBtn") as HTMLElement;
  const contactBtn = document.getElementById("contactBtn") as HTMLElement;
  const createResumeBtnSidebar = document.getElementById(
    "createResumeBtnSidebar"
  ) as HTMLElement;

  // Sections
  const skillsSection = document.getElementById("skillsSection") as HTMLElement;
  const educationSection = document.getElementById(
    "educationSection"
  ) as HTMLElement;
  const experienceSection = document.getElementById(
    "experienceSection"
  ) as HTMLElement;
  const contactSection = document.getElementById(
    "contactSection"
  ) as HTMLElement;
  const resumeFormContainer = document.getElementById(
    "resumeFormContainer"
  ) as HTMLElement;
  const createResumeMessage = document.getElementById(
    "createResumeMessage"
  ) as HTMLElement;
  const sidebar = document.querySelector(".sidebar") as HTMLElement;
  const formtitles = document.querySelector(".form-titles") as HTMLElement;
  const buttons = document.querySelectorAll(
    "button"
  ) as NodeListOf<HTMLButtonElement>;
  const sidebarLinks = document.querySelectorAll(
    ".sidebar ul li a"
  ) as NodeListOf<HTMLElement>;
  const settingsIcon = document.querySelector(
    ".floating-menu i"
  ) as HTMLElement;
  const socialIcons = document.querySelectorAll(
    ".social-links a"
  ) as NodeListOf<HTMLElement>;
  const inputs = document.querySelectorAll(
    "input, textarea"
  ) as NodeListOf<HTMLElement>;
  const sectionTitles = document.querySelectorAll(
    "h2"
  ) as NodeListOf<HTMLElement>;
  const formLabels = document.querySelectorAll(
    "label"
  ) as NodeListOf<HTMLElement>;
  const formTitles = document.querySelectorAll(
    "h2, h3"
  ) as NodeListOf<HTMLElement>;
  const profilePicElement = document.querySelector(
    ".profile-pic img"
  ) as HTMLImageElement;
  const nameDisplay = document.getElementById("nameDisplay") as HTMLElement;
  const titleDisplay = document.getElementById("titleDisplay") as HTMLElement;
  const linkedinLink = document.getElementById("linkedinLink") as HTMLElement;
  const githubLink = document.getElementById("githubLink") as HTMLElement;
  const whatsappLink = document.getElementById("whatsappLink") as HTMLElement;
  const profilePicDisplay = document.getElementById(
    "profilePicDisplay"
  ) as HTMLImageElement;
  const profilePicInput = document.getElementById(
    "profilePicInput"
  ) as HTMLInputElement;

  // Editable sections: Education, Experience, Skills
  const educationList = document.getElementById("educationList") as HTMLElement;
  const experienceTimeline = document.getElementById(
    "experienceTimeline"
  ) as HTMLElement;
  const skillsContainer = document.getElementById(
    "skillsContainer"
  ) as HTMLElement;

  // Original state
  const originalProfilePic = "./src/assets/bilal.jpg"; // Define your original image

  // Enable profile image upload when clicking the image
  profilePicDisplay.addEventListener("click", () => {
    profilePicInput.click();
  });
  // Update profile image on file selection
  profilePicInput.addEventListener("change", function () {
    const file = profilePicInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target?.result) {
          profilePicDisplay.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file); // Convert image to Data URL and display it
    }
  });

  // Event listeners for content editable fields (name, title, social links)
  nameDisplay.addEventListener("blur", updateResume);
  titleDisplay.addEventListener("blur", updateResume);
  linkedinLink.addEventListener("blur", updateResume);
  githubLink.addEventListener("blur", updateResume);
  whatsappLink.addEventListener("blur", updateResume);
  // Event listeners for the education section
  educationList.addEventListener("blur", updateEducation, true); // Capture edits
  experienceTimeline.addEventListener("blur", updateExperience, true); // Capture edits
  skillsContainer.addEventListener("blur", updateSkills, true); // Capture edits

  function updateResume() {
    const updatedName =
      nameDisplay.textContent?.trim() || "Muhammad Bilal Khalid";
    const updatedTitle =
      titleDisplay.textContent?.trim() || "GenAI Web3.0 Developer";
    const updatedLinkedIn =
      linkedinLink.getAttribute("href") || "https://www.linkedin.com";
    const updatedGitHub =
      githubLink.getAttribute("href") || "https://github.com";
    const updatedWhatsApp = whatsappLink.getAttribute("href") || "";

    // Log changes or process them further
    console.log("Updated Name: ", updatedName);
    console.log("Updated Title: ", updatedTitle);
    console.log("Updated LinkedIn: ", updatedLinkedIn);
    console.log("Updated GitHub: ", updatedGitHub);
    console.log("Updated WhatsApp: ", updatedWhatsApp);
  }

  // Update the education section when user finishes editing
  function updateEducation() {
    const educationEntries = Array.from(
      educationList.querySelectorAll("li")
    ).map((li) => li.textContent?.trim() || "");
    console.log("Updated Education: ", educationEntries);
  }

  // Update the experience section when user finishes editing
  function updateExperience() {
    const experienceEntries = Array.from(
      experienceTimeline.querySelectorAll(".timeline-item")
    ).map((item) => ({
      title: item.querySelector("h3")?.textContent?.trim(),
      description: item.querySelector("p")?.textContent?.trim(),
    }));
    console.log("Updated Experience: ", experienceEntries);
  }

  // Update the skills section when user finishes editing
  function updateSkills() {
    const skillEntries = Array.from(
      skillsContainer.querySelectorAll(".skill-btn")
    ).map((button) => button.textContent?.trim() || "");
    console.log("Updated Skills: ", skillEntries);
  }
  // });

  // Additional functionality for other sections like Education, Experience, Skills would follow the same principle
  // });

  let isDarkMode = true;

  // Function to restore original data on refresh
  window.addEventListener("beforeunload", () => {
    if (profilePicElement) profilePicElement.src = originalProfilePic || "";
    (document.querySelector(".profile-details h1") as HTMLElement).textContent =
      "Muhammad Bilal Khalid"; // Reset Name
    (document.querySelector(".profile-details p") as HTMLElement).textContent =
      "GenAI Web3.0 Developer"; // Reset Title
  });

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    sidebar.style.backgroundColor = isDarkMode ? "#f7f7f7" : "#34495e";
    sidebar.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    formtitles.style.color = isDarkMode ? "#f7f7f7" : "#2c3e50";
    sidebarLinks.forEach((link) => {
      link.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
    buttons.forEach((button) => {
      button.style.backgroundColor = isDarkMode ? "#ffffff" : "#34495e";
      button.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
    socialIcons.forEach((icon) => {
      icon.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
    resumeFormContainer.style.backgroundColor = isDarkMode
      ? "#bdc3c7"
      : "#2c3e50";
    inputs.forEach((input) => {
      input.style.backgroundColor = isDarkMode ? "#ffffff" : "#2c3e50";
      input.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
    sectionTitles.forEach((title) => {
      title.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
    formTitles.forEach((title) => {
      title.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
    formLabels.forEach((label) => {
      label.style.color = isDarkMode ? "#2c3e50" : "#ecf0f1";
    });
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
  skillsBtn.addEventListener("click", () => {
    hideAllSections();
    skillsSection.style.display = "block";
  });
  educationBtn.addEventListener("click", () => {
    hideAllSections();
    educationSection.style.display = "block";
  });
  experienceBtn.addEventListener("click", () => {
    hideAllSections();
    experienceSection.style.display = "block";
  });
  contactBtn.addEventListener("click", () => {
    hideAllSections();
    contactSection.style.display = "block";
  });
  createResumeBtnSidebar.addEventListener("click", showResumeForm);

  // Floating Menu Toggle
  const floatingMenu = document.getElementById("floatingMenu") as HTMLElement;
  const menuContent = document.getElementById("menuContent") as HTMLElement;

  floatingMenu.addEventListener("click", () => {
    menuContent.style.display =
      menuContent.style.display === "block" ? "none" : "block";
  });

  // Milestone 3 - Target the Resume Form
  const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
  const downloadButton = document.getElementById(
    "downloadBtn"
  ) as HTMLButtonElement;
  const shareButton = document.getElementById("shareBtn") as HTMLButtonElement;
  const resumeContainer = document.querySelector(
    ".resume-header"
  ) as HTMLElement;

  // Handle form submission
  // Handle form submission
  resumeForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    // Collect form data
    const name = (document.getElementById("nameInput") as HTMLInputElement)
      .value;
    const email = (document.getElementById("emailInput") as HTMLInputElement)
      .value;
    // const profilePic = (document.getElementById("profilePicInput") as HTMLInputElement).files?.[0];
    const profilePic: File | undefined = (
      document.getElementById("profilePicInput") as HTMLInputElement
    ).files?.[0];
    const username = (
      document.getElementById("usernameInput") as HTMLInputElement
    ).value;
    const linkedin = (
      document.getElementById("linkedinInput") as HTMLInputElement
    ).value;
    const github = (document.getElementById("githubInput") as HTMLInputElement)
      .value;
    const whatsapp = (
      document.getElementById("whatsappInput") as HTMLInputElement
    ).value;
    const skills = (
      document.getElementById("skillsInput") as HTMLInputElement
    ).value.split(",");

    const educationFields = document.querySelectorAll(".educationField");
    let educationDetails = "";
    educationFields.forEach((field: Element) => {
      const degree = (
        field.querySelector('[name="degree"]') as HTMLInputElement
      ).value;
      const institution = (
        field.querySelector('[name="institution"]') as HTMLInputElement
      ).value;
      const year = (field.querySelector('[name="year"]') as HTMLInputElement)
        .value;
      educationDetails += `<li>${degree} at ${institution}, ${year}</li>`;
    });

    const experienceFields = document.querySelectorAll(".experienceField");
    let experienceDetails = "";
    experienceFields.forEach((field: Element) => {
      const jobTitle = (
        field.querySelector('[name="jobTitle"]') as HTMLInputElement
      ).value;
      const company = (
        field.querySelector('[name="company"]') as HTMLInputElement
      ).value;
      const years = (field.querySelector('[name="years"]') as HTMLInputElement)
        .value;
      experienceDetails += `<li>${jobTitle} at ${company} (${years})</li>`;
    });

    // After submission, display the buttons for downloading and sharing the resume
    downloadButton.style.display = "inline-block";
    shareButton.style.display = "inline-block";

    // Download Resume Action
    // Handle form submission and generate PDF
    downloadButton.addEventListener("click", () => {
      generatePDF(
        name,
        email,
        skills,
        educationDetails,
        experienceDetails,
        linkedin,
        github,
        whatsapp,
        profilePic
      );
    });

    // Share Resume Action
    // Share Resume Action
    shareButton.addEventListener("click", () => {
      openInNewTab(
        name,
        email,
        username,
        skills,
        educationDetails,
        experienceDetails,
        linkedin,
        github,
        whatsapp,
        profilePic
      );
    });
    clearForm(); // Clear form fields after submission
  });

  // Function to generate PDF with the exact same design and layout as the web version
  // Use pdfmake to generate the PDF
  // Use pdfmake to generate the PDF
  // Declare pdfMake globally to prevent TypeScript errors

  // Ensure image updates properly in both resume generation and PDF download
  function generatePDF(
    name: string,
    email: string,
    skills: string[],
    educationDetails: string,
    experienceDetails: string,
    linkedin: string,
    github: string,
    whatsapp: string,
    profilePic: File | undefined
  ) {
    const defaultImage = "./src/assets/bilal.jpg"; // Default image
    const docDefinition = {
      content: [
        {
          columns: [
            {
              image: profilePic ? '' : defaultImage, // Default image if no profile picture
              width: 100,
            },
            [
              { text: name, fontSize: 20, bold: true, margin: [10, 0] },
              { text: email, margin: [10, 0] },
            ]
          ]
        },
        { text: 'Skills', style: 'header' },
        { ul: skills.map(skill => skill.trim()) },
        { text: 'Education', style: 'header' },
        { ul: [educationDetails] },
        { text: 'Experience', style: 'header' },
        { ul: [experienceDetails] },
        { text: 'Social Links', style: 'header' },
        { ul: [`LinkedIn: ${linkedin}`, `GitHub: ${github}`, `WhatsApp: ${whatsapp}`] }
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] }
      }
    };
  
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageBase64 = e.target?.result as string;
        if (docDefinition.content[0] && 'columns' in docDefinition.content[0]) {
          (docDefinition.content[0] as any).columns[0].image = imageBase64;
        }
        pdfMake.createPdf(docDefinition).download(`${name}-resume.pdf`);
      };
      reader.readAsDataURL(profilePic);
    } else {
      pdfMake.createPdf(docDefinition).download(`${name}-resume.pdf`);
    }
  }
  

  // Function to open the generated resume in a new tab with the same structure and style

  // Open generated resume in a new tab, ensuring the sidebar and image are correct
  function openInNewTab(
    name: string,
    email: string,
    username: string,
    skills: string[],
    educationDetails: string,
    experienceDetails: string,
    linkedin: string,
    github: string,
    whatsapp: string,
    profilePic: File | undefined
  ) {
    const shareLink = `https://bilal-resume-builder.vercel.app/${username}`;
    const defaultImage = "./src/assets/profile.png"; // Default image if no profile picture
    const profilePicUrl = profilePic
      ? URL.createObjectURL(profilePic)
      : defaultImage;
  
    const newWindow = window.open("", "_blank");
    newWindow?.document.write(`
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${name}'s Resume</title>
        <link rel="stylesheet" href="./src/styles/styles.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/vfs_fonts.js"></script>
      </head>
      <body>
        <div class="wrapper">
          <div class="resume-header">
            <div class="profile-info">
              <div class="profile-pic">
                <img src="${profilePicUrl}" alt="Profile Picture" width="100%" />
              </div>
              <div class="profile-details">
                <h1 id="nameDisplay" contenteditable="true">${name}</h1>
                <p id="titleDisplay" contenteditable="true">${username}</p>
                <div class="social-links">
                  <a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                  <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>
                  <a href="${whatsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Sidebar for Navigation -->
          <div class="sidebar">
            <ul>
              <li onclick="showSection('skillsSection')">Skills</li>
              <li onclick="showSection('educationSection')">Education</li>
              <li onclick="showSection('experienceSection')">Experience</li>
              <li onclick="toggleTheme()">Toggle Theme</li>
            </ul>
          </div>
  
          <!-- Main Content -->
          <div class="content">
            <div class="section card glass" id="skillsSection">
              <h2>Skills</h2>
              <ul>${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}</ul>
            </div>
  
            <div class="section card glass" id="educationSection" style="display:none;">
              <h2>Education</h2>
              <ul contenteditable="true">${educationDetails}</ul>
            </div>
  
            <div class="section card glass" id="experienceSection" style="display:none;">
              <h2>Experience</h2>
              <ul contenteditable="true">${experienceDetails}</ul>
            </div>
  
            <div class="section card glass">
              <h2>Social Links</h2>
              <ul>
                <li>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></li>
                <li>GitHub: <a href="${github}" target="_blank">${github}</a></li>
                <li>WhatsApp: <a href="${whatsapp}" target="_blank">${whatsapp}</a></li>
              </ul>
            </div>
          </div>
  
          <!-- Buttons to Download and Share Resume -->
          <div class="resume-buttons">
            <button onclick="downloadPDF()">Download as PDF</button>
            <button onclick="navigator.clipboard.writeText('${shareLink}'); alert('Shareable link copied to clipboard!');">Share Resume</button>
          </div>
        </div>
  
        <script>
          // Sidebar functionality to switch between sections
          function showSection(sectionId) {
            document.getElementById("skillsSection").style.display = "none";
            document.getElementById("educationSection").style.display = "none";
            document.getElementById("experienceSection").style.display = "none";
            document.getElementById(sectionId).style.display = "block";
          }
  
          // Toggle dark and light mode
          function toggleTheme() {
            document.body.classList.toggle('dark-mode');
          }
  
          // Download resume as PDF
          function downloadPDF() {
            const docDefinition = {
              content: [
                {
                  columns: [
                    { image: '${profilePicUrl}', width: 100 },
                    [
                      { text: '${name}', fontSize: 20, bold: true, margin: [10, 0] },
                      { text: '${email}', margin: [10, 0] },
                    ],
                  ],
                },
                { text: 'Skills', style: 'header' },
                { ul: ${JSON.stringify(skills)} },
                { text: 'Education', style: 'header' },
                { ul: [${JSON.stringify(educationDetails)}] },
                { text: 'Experience', style: 'header' },
                { ul: [${JSON.stringify(experienceDetails)}] },
                { text: 'Social Links', style: 'header' },
                { ul: [
                    'LinkedIn: ${linkedin}',
                    'GitHub: ${github}',
                    'WhatsApp: ${whatsapp}'
                  ] }
              ],
              styles: { header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] } }
            };
            pdfMake.createPdf(docDefinition).download('${name}-resume.pdf');
          }
        </script>
      </body>
      </html>
    `);
    newWindow?.document.close();
  }
  

  function clearForm() {
    const formFields = document.querySelectorAll("input, textarea");
    formFields.forEach((field) => {
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
      ) {
        field.value = "";
      }
    });
  }

  function showSkillsSection() {
    hideAllSections();
    skillsSection.style.display = "block";
  }
});
