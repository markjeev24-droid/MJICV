/* =========================================================
   ARIA V0.3
   Advanced Resume & Information Assistant
   Profile: Mark Jeev Ines
========================================================= */


/* =========================================================
   PROFILE DATABASE
========================================================= */

const profile = {

    name: "Mark Jeev Ines",

    title: "Computer Engineer",

    about: {

        title: "ABOUT ME",

        description:
            "Computer Engineer with experience in IT support, networking, document processing, customer service, and technical operations. Quick to learn, dependable, and committed to continuous improvement.",

        cards: [

            {
                title: "PROFESSIONAL PROFILE",

                text:
                    "Can adjust to the environment that is given in myself"
            },

            {
                title: "TECHNICAL FOUNDATION",

                text:
                    "Experienced with computer hardware, PC assembly, network troubleshooting, router and switch configuration, LAN/WAN, TCP/IP, VLAN, subnetting, and Cisco Packet Tracer."
            },

            {
                title: "WORK APPROACH",

                text:
                    "Dependable and adaptable, with experience working in both technical and fast-paced operational environments while maintaining accuracy and following established procedures."
            },

            {
                title: "PROFESSIONAL GOAL",

                text:
                    "Continue developing as a technology professional while gaining deeper experience in networking, systems, infrastructure, software, and emerging technologies."
            }

        ]

    },


    /* =====================================================
        EXPERIENCE
    ===================================================== */

    experience: {

        title: "EXPERIENCE",

        description:
            "Professional experience spanning IT, networking, systems support, document processing, and customer service.",

        jobs: [

            {
                company: "IOPEX",

                location: "BGC, Taguig City",

                position: "Document Specialist",

                date: "April 2026",

                responsibilities: [

                    "Skilled in document processing, file organization, and maintaining accurate records while ensuring smooth daily operations.",

                    "Worked efficiently in fast-paced environments by following procedures carefully to minimize errors and prevent workflow downtime."

                ]

            },

            {
                company: "Zhiyuan Enterprise Group Inc.",

                location: "BGC, Taguig City",

                position: "Network Engineer — OJT",

                date: "February 2026",

                responsibilities: [

                    "Assisted in network infrastructure deployment, cable management, and hardware configuration.",

                    "Supported VLAN, IP configuration, and network security implementation.",

                    "Performed system testing, troubleshooting, and connectivity support.",

                    "Assisted with Windows Server 2022 migration and NAS LDAP integration."

                ]

            },

            {
                company: "Burger King",

                location: "McKinley Park",

                position: "Service Crew",

                date: "April 2024",

                responsibilities: [

                    "Worked efficiently in a fast-paced environment and maintained smooth front-end operations.",

                    "Followed established procedures to maintain service efficiency and prevent operational downtime."

                ]

            },

            {
                company: "Multiple Aire Services Specialist Corp.",

                location: "Bangkal, Makati City",

                position: "IT Support / System Administrator",

                date: "March 2024",

                responsibilities: [

                    "Provided technical support by diagnosing and resolving hardware, software, and system-related issues to minimize downtime.",

                    "Managed and maintained the company's network infrastructure, ensuring reliable connectivity and optimal performance across departments.",

                    "Performed preventive maintenance, troubleshooting, and repair of computer hardware, peripherals, and network equipment.",

                    "Assisted employees with technical concerns, system configurations, software installations, and account management."

                ]

            },

            {
                company: "Pambansang Litson Restaurant Inc.",

                location: "Makati Avenue",

                position: "Service Crew",

                date: "July 2023",

                responsibilities: [

                    "Developed teamwork and workflow efficiency in a fast-paced operational environment.",

                    "Improved speed, accuracy, and coordination through daily customer service operations."

                ]

            }

        ]

    },


    /* =====================================================
        EDUCATION
    ===================================================== */

    education: {

        title: "EDUCATION",

        description:
            "Academic background in Computer Engineering and STEM.",

        schools: [

            {
                school: "STI Global City",

                degree: "Bachelor of Science in Computer Engineering",

                year: "Graduated 2026",

                description:
                    "Developed a technical foundation in computer engineering, networking, hardware, programming, and computer systems."
            },

            {
                school: "STI Pasay-EDSA",

                degree: "STEM — Senior High School",

                year: "Graduated 2022",

                description:
                    "Completed the Science, Technology, Engineering and Mathematics strand."
            }

        ]

    },


    /* =====================================================
        SKILLS
    ===================================================== */

    skills: {

        title: "SKILLS",

        description:
            "Technical competencies developed through academic work, professional experience, and hands-on projects.",

        categories: [

            {
                name: "NETWORKING",

                skills: [

                    ["Router & Switch Configuration", 85],

                    ["Network Troubleshooting", 88],

                    ["LAN / WAN", 82],

                    ["TCP/IP", 82],

                    ["VLAN", 80],

                    ["Subnetting", 78]

                ]

            },

            {
                name: "HARDWARE & SYSTEMS",

                skills: [

                    ["Computer Hardware", 88],

                    ["PC Assembly", 90],

                    ["Hardware Troubleshooting", 88],

                    ["System Administration", 72]

                ]

            },

            {
                name: "TOOLS",

                skills: [

                    ["Cisco Packet Tracer", 85],

                    ["Network Diagnostic Tools", 78],

                    ["Windows Systems", 82]

                ]

            }

        ]

    },


    /* =====================================================
        PROJECTS
    ===================================================== */

    projects: {

        title: "PROJECTS",

        description:
            "Selected academic and technical projects.",

        projects: [

            {
                name: "Project Z-Link",

                fullName:
                    "Enterprise Network & Systems Infrastructure Deployment",

                status:
                    "FINAL ORAL DEFENSE",

                description:
                    "An enterprise networking and infrastructure project focused on designing, configuring, testing, and documenting a structured network environment.",

                overview:
                    "Project Z-Link focused on the development of an enterprise network environment using Cisco networking concepts. The project covered network architecture, device configuration, IP addressing, VLAN implementation, connectivity testing, and infrastructure documentation.",

                architecture:
                    "The network architecture was designed around interconnected routers and switches with structured IP addressing and segmented network environments.",

                development:
                    "The system was designed and tested using Cisco Packet Tracer. Network configurations were progressively implemented and verified through connectivity and troubleshooting procedures.",

                results:
                    "The completed network demonstrated functional connectivity between configured devices and validated the planned network architecture.",

                future:
                    "Future development could include additional redundancy, advanced network monitoring, improved security policies, and physical hardware implementation.",

                technologies: [
                    "Cisco Packet Tracer",
                    "Networking",
                    "Enterprise Infrastructure",
                    "Network Configuration",
                    "IP Addressing",
                    "VLAN"
                ]

            },

            {
                name: "ChloroMate3",

                fullName:
                    "Autonomous Pool Monitoring & Maintenance Prototype",

                status:
                    "ENGINEERING PROJECT",

                description:
                    "A third-generation autonomous floating pool device designed to monitor water conditions and assist with automated pool maintenance.",

                overview:
                    "ChloroMate3 is an autonomous floating pool-monitoring prototype designed to combine water-quality sensing, autonomous movement, chlorine dispensing, and remote control into a single robotic platform.",

                architecture:
                    "The system combines ESP32 microcontrollers, Arduino control, water-quality sensors, ultrasonic navigation sensors, motor drivers, DC propulsion motors, a chlorine pump, and BLE communication. The system is divided into sensing, navigation, propulsion, chemical dispensing, and user-control subsystems.",

                development:
                    "Development involved mechanical prototyping, embedded programming, sensor integration, motor-control testing, autonomous navigation development, BLE communication, and Flutter application development.",

                results:
                    "The prototype successfully integrates water monitoring, autonomous movement, motor control, BLE communication, and automated chlorine dispensing into a single floating platform.",

                future:
                    "Future improvements include improved autonomous navigation, more advanced water-quality prediction, better chemical dosing control, improved waterproofing, longer battery operation, and expanded mobile application functionality.",

                technologies: [
                    "ESP32",
                    "Arduino",
                    "BLE",
                    "Flutter",
                    "pH Sensor",
                    "Turbidity Sensor",
                    "Ultrasonic Sensors",
                    "BTS7960",
                    "DC Motors",
                    "Embedded Systems"
                ]

            }

        ]

    },


    /* =====================================================
        CERTIFICATES
    ===================================================== */

    certificates: {

        title: "CERTIFICATES",

        description:
            "Certificates and documented training achievements.",

        certificates: [

            {
                name:
                    "College Fair and Symposium",

                year:
                    "2025 – 2026"

            },

            {
                name:
                    "OJT Certificate of Completion",

                year:
                    "2026"

            },

            {
                name:
                    "PC Assembly and Disassembly",

                year:
                    "Completed"

            }

        ]

    },


    /* =====================================================
        CONTACT
    ===================================================== */

    contact: {

        title: "CONTACT",

        description:
            "Interested in working together, discussing a project, or connecting professionally?",

        cards: [

            {
                title: "EMAIL",

                text:
                    "markjeev24@gmail.com"
            },

            {
                title: "PHONE",

                text:
                    "+63 916 216 6138"
            },

            {
                title: "LOCATION",

                text:
                    "Metro Manila, Philippines"
            },

            {
                title: "LINKEDIN",

                text:
                    "Not specified"
            },

            {
                title: "GITHUB",

                text:
                    "Not specified"
            }

        ]

    }

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const landingScreen = document.getElementById("landingScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const infoScreen = document.getElementById("infoScreen");
const beginButton = document.getElementById("beginButton");
const backButton = document.getElementById("backButton");
const ariaGreeting = document.getElementById("ariaGreeting");
const ariaMessage = document.getElementById("ariaMessage");
const infoContent = document.getElementById("infoContent");


/* =========================================================
   SCREEN CONTROL
========================================================= */

function showScreen(screen) {

    if (!screen) return;

    landingScreen.classList.remove("active");
    dashboardScreen.classList.remove("active");
    infoScreen.classList.remove("active");

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

if (beginButton) {
    beginButton.addEventListener("click", function () {
        showScreen(dashboardScreen);
        if (ariaGreeting) ariaGreeting.textContent = `Welcome, I'm ARIA.`;
        if (ariaMessage) ariaMessage.textContent = `How would you like to explore Mark's professional profile?`;
    });
}

if (backButton) {
    backButton.addEventListener("click", function () {
        showScreen(dashboardScreen);
        if (ariaGreeting) ariaGreeting.textContent = "Welcome back.";
        if (ariaMessage) ariaMessage.textContent = "Select another profile module whenever you're ready.";
    });
}

/* Navigation Event Delegation */
document.addEventListener("click", function (event) {

    const navCard = event.target.closest(".nav-card");
    if (!navCard) return;

    const section = navCard.dataset.section;
    if (!section) return;

    openSection(section);

});

/* Escape Key Navigation */
document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        infoScreen &&
        infoScreen.classList.contains("active")
    ) {
        showScreen(dashboardScreen);
    }

});


/* =========================================================
   OPEN & RENDER SECTION
========================================================= */

function openSection(section) {

    console.log("Opening section:", section);

    // Pass the actual DOM element reference instead of a string
    showScreen(infoScreen);

    renderSection(section);

}

function renderSection(sectionKey) {

    if (!infoContent) {
        console.error("infoContent element not found.");
        return;
    }

    const data = profile[sectionKey];

    if (!data) {
        infoContent.innerHTML = `
            <div class="section-intro">
                <div class="section-label">ARIA ERROR</div>
                <h2>SECTION NOT FOUND</h2>
                <p>The requested profile section could not be loaded.</p>
            </div>
        `;
        console.error("Unknown section key:", sectionKey);
        return;
    }

    let html = `
        <div class="section-intro">
            <div class="section-label">${data.title || "PROFILE MODULE"}</div>
            <h2>${data.title || ""}</h2>
            <p>${data.description || ""}</p>
        </div>
    `;

    // Render section content according to module structure
    if (sectionKey === "experience") {
        html += `<div class="experience-list">`;
        data.jobs.forEach(job => {
            html += `
                <article class="experience-card">
                    <div class="experience-date">${job.date}</div>
                    <div class="experience-content">
                        <div class="experience-position">${job.position}</div>
                        <h3>${job.company}</h3>
                        <div class="experience-location">${job.location}</div>
                        <ul>
            `;
            job.responsibilities.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += `
                        </ul>
                    </div>
                </article>
            `;
        });
        html += `</div>`;
    } 
    else if (sectionKey === "education") {
        html += `<div class="info-grid">`;
        data.schools.forEach(school => {
            html += `
                <article class="info-card">
                    <div class="info-label">${school.year}</div>
                    <h3>${school.school}</h3>
                    <p><strong>${school.degree}</strong></p>
                    <p>${school.description}</p>
                </article>
            `;
        });
        html += `</div>`;
    } 
    else if (sectionKey === "skills") {
        html += `<div class="skills-container">`;
        data.categories.forEach(category => {
            html += `
                <div class="skill-category">
                    <div class="skill-category-title">${category.name}</div>
            `;
            category.skills.forEach(skill => {
                html += `
                    <div class="skill">
                        <div class="skill-header">
                            <span>${skill[0]}</span>
                            <span>${skill[1]}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--skill:${skill[1]}%"></div>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        });
        html += `</div>`;
    } 
    else if (sectionKey === "projects") {
        html += `<div class="info-grid">`;
        data.projects.forEach(project => {
            html += `
                <article class="project-card">
                    <div class="project-status">${project.status}</div>
                    <h3>${project.name}</h3>
                    <div class="project-full-name">${project.fullName}</div>
                    <p>${project.description}</p>
                    <div class="tech-list">
            `;
            project.technologies.forEach(tech => {
                html += `<span class="tech">${tech}</span>`;
            });
            html += `
                    </div>
                </article>
            `;
        });
        html += `</div>`;
    } 
    else if (sectionKey === "certificates") {
        html += `<div class="info-grid">`;
        data.certificates.forEach(cert => {
            html += `
                <article class="info-card">
                    <div class="info-label">${cert.year}</div>
                    <h3>${cert.name}</h3>
                </article>
            `;
        });
        html += `</div>`;
    } 
    else if (data.cards) {
        // Standard card section layout (e.g. About, Contact)
        html += `<div class="info-grid">`;
        data.cards.forEach(card => {
            html += `
                <article class="info-card">
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                </article>
            `;
        });
        html += `</div>`;
    }

    infoContent.innerHTML = html;

}


/* =========================================================
   LIVE CLOCK
========================================================= */

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const status = document.querySelector(".system-status");

    if (status) {
        status.innerHTML = `
            <span class="status-dot"></span>
            SYSTEM ONLINE
            <span style="margin-left:12px;">${time}</span>
        `;
    }

}

setInterval(updateClock, 1000);
updateClock();


/* =========================================================
   STARTUP MESSAGE
========================================================= */

console.log("ARIA V0.3 — Profile system initialized.");
console.log("Profile loaded:", profile.name);
