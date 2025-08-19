// main.js
// Scripts de traducción, animación y menú móvil para el portafolio

// Traducciones
const translations = {
  es: {
    title: "Oscar Ricardo Marchena Chaves - Desarrollador de Software",
    nav: ["Sobre Mí", "Experiencia", "Habilidades", "Contacto", "Contratar"],
    download: "Descargar CV",
    cv: "assets/Curriculum vitae - Oscar Marchena Chaves_ES.pdf",
    langBtn: "EN",
    hero: {
      name: "Oscar Ricardo Marchena Chaves",
      desc: "Desarrollador de Software con más de 9 años de experiencia creando soluciones de alto impacto y liderando equipos técnicos.",
      expBtn: "Ver Experiencia",
      contactBtn: "Contactarme",
    },
    about: {
      title: "Sobre Mí",
      p1: "Originario de Guanacaste, Costa Rica, soy un profesional del desarrollo de software con una sólida trayectoria de más de 9 años. Mi experiencia abarca el ciclo completo de desarrollo de aplicaciones, especializándome en la implementación de soluciones que optimizan procesos y mejoran la eficiencia.",
      p2: "He liderado equipos tanto de back-end como de front-end, siempre con el objetivo de entregar productos de alta calidad, escalables y robustos. Me apasiona resolver problemas complejos y utilizar la tecnología para crear un impacto positivo, incluyendo la exploración de herramientas de inteligencia artificial para potenciar la productividad en el desarrollo.",
    },
    exp: {
      title: "Experiencia Profesional",
      jobs: [
        {
          date: "Nov 2020 – Actualidad",
          title: "Especialista de Aplicaciones Java",
          company: "Scotiabank",
          bullets: [
            "Lideré el desarrollo de componentes que redujeron tiempos de gestión en un 70%.",
            "Diseñé una herramienta para contratos legales dinámicos, aumentando la eficiencia en un 200%.",
            "Aporté soluciones pioneras con IA para agilizar el desarrollo.",
          ],
        },
        {
          date: "Ago 2019 – Nov 2021",
          title: "Desarrollador FullStack - Tech Lead",
          company: "Novacomp",
          bullets: [
            "Implementé soluciones de outsourcing en al menos 3 proyectos de alto impacto.",
            "Facilité la comunicación entre clientes y equipos de desarrollo.",
          ],
        },
        {
          date: "Feb 2018 – Ago 2019",
          title: "Desarrollador FullStack Sr",
          company: "Bac | Credomatic",
          bullets: [
            "Mejoré la productividad en un 500% con cargas masivas para facturación electrónica.",
            "Desarrollé un producto de encuestas dinámicas para RRHH.",
          ],
        },
        {
          date: "Enero 2017 – Febrero 2018",
          title: "Desarrollador FullStack",
          company: "Novacomp",
          bullets: [
            "Implemente soluciones a los clientes bajo la modalidad de outsourcing, mediante requerimientos técnicos.",
            "Trabajé en al menos 2 proyectos de migración de proyectos a tecnologías nuevas.",
          ],
        },
        {
          date: "Enero 2015 – Enero 2017",
          title: "Desarrollador FullStack",
          company: "Datafactory CR",
          bullets: [],
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      list: [
        { title: "Back End", desc: "Java, C#, NodeJS, Next.JS" },
        {
          title: "Front End",
          desc: "React.JS, CSS, Bootstrap, HTML, Javascript",
        },
        {
          title: "Bases de Datos",
          desc: "SQL Server, DB2, MySQL, Oracle",
        },
        { title: "DevOps", desc: "CI/CD, Azure" },
        {
          title: "Inteligencia Artificial",
          desc: "Integración de herramientas, Copilot",
        },
        { title: "Documentación", desc: "Jira, BitBucket, Confluence" },
      ],
    },
    contact: {
      title: "Hablemos",
      desc: "Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      namePh: "Tu Nombre",
      emailPh: "Tu Correo Electrónico",
      messagePh: "Tu Mensaje",
      send: "Enviar Mensaje",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      location: "Guanacaste, Costa Rica",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    title: "Oscar Ricardo Marchena Chaves - Software Developer",
    nav: ["About Me", "Experience", "Skills", "Contact", "Hire Me"],
    download: "Download CV",
    cv: "assets/Curriculum vitae - Oscar Marchena Chaves_EN.pdf",
    langBtn: "ES",
    hero: {
      name: "Oscar Ricardo Marchena Chaves",
      desc: "Software Developer with over 9 years of experience creating high-impact solutions and leading technical teams.",
      expBtn: "See Experience",
      contactBtn: "Contact Me",
    },
    about: {
      title: "About Me",
      p1: "Originally from Guanacaste, Costa Rica, I am a software development professional with a solid track record of over 9 years. My experience covers the full application development cycle, specializing in implementing solutions that optimize processes and improve efficiency.",
      p2: "I have led both back-end and front-end teams, always aiming to deliver high-quality, scalable, and robust products. I am passionate about solving complex problems and using technology to create a positive impact, including exploring AI tools to boost productivity in development.",
    },
    exp: {
      title: "Professional Experience",
      jobs: [
        {
          date: "Nov 2020 – Present",
          title: "Java Applications Specialist",
          company: "Scotiabank",
          bullets: [
            "Led the development of components that reduced management times by 70%.",
            "Designed a tool for dynamic legal contracts, increasing efficiency by 200%.",
            "Provided pioneering AI solutions to speed up development.",
          ],
        },
        {
          date: "Aug 2019 – Nov 2021",
          title: "FullStack Developer - Tech Lead",
          company: "Novacomp",
          bullets: [
            "Implemented outsourcing solutions in at least 3 high-impact projects.",
            "Facilitated communication between clients and development teams.",
          ],
        },
        {
          date: "Feb 2018 – Aug 2019",
          title: "Sr FullStack Developer",
          company: "Bac | Credomatic",
          bullets: [
            "Improved productivity by 500% with massive loads for electronic invoicing.",
            "Developed a dynamic survey product for HR.",
          ],
        },
        {
          date: "Jan 2017 – Feb 2018",
          title: "FullStack Developer",
          company: "Novacomp",
          bullets: [
            "Implemented client solutions under outsourcing, based on technical requirements.",
            "Worked on at least 2 projects migrating to new technologies.",
          ],
        },
        {
          date: "Jan 2015 – Jan 2017",
          title: "FullStack Developer",
          company: "Datafactory CR",
          bullets: [],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      list: [
        { title: "Back End", desc: "Java, C#, NodeJS, Next.JS" },
        {
          title: "Front End",
          desc: "React.JS, CSS, Bootstrap, HTML, Javascript",
        },
        { title: "Databases", desc: "SQL Server, DB2, MySQL, Oracle" },
        { title: "DevOps", desc: "CI/CD, Azure" },
        {
          title: "Artificial Intelligence",
          desc: "Tool integration, Copilot",
        },
        { title: "Documentation", desc: "Jira, BitBucket, Confluence" },
      ],
    },
    contact: {
      title: "Let's Talk",
      desc: "I am available for new opportunities and collaborations. Feel free to contact me.",
      name: "Name",
      email: "Email",
      message: "Message",
      namePh: "Your Name",
      emailPh: "Your Email",
      messagePh: "Your Message",
      send: "Send Message",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Guanacaste, Costa Rica",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

let currentLang = localStorage.getItem("lang") || "es";
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  // Navbar
  document.getElementById("title-text").innerText = translations[lang].title;
  document.getElementById("nav-about").innerText = translations[lang].nav[0];
  document.getElementById("nav-exp").innerText = translations[lang].nav[1];
  document.getElementById("nav-skills").innerText = translations[lang].nav[2];
  document.getElementById("nav-contact").innerText = translations[lang].nav[3];
  document.getElementById("nav-hire").innerText = translations[lang].nav[4];
  document.getElementById("mnav-about").innerText = translations[lang].nav[0];
  document.getElementById("mnav-exp").innerText = translations[lang].nav[1];
  document.getElementById("mnav-skills").innerText = translations[lang].nav[2];
  document.getElementById("mnav-contact").innerText = translations[lang].nav[3];
  document.getElementById("mnav-hire").innerText = translations[lang].nav[4];
  document.getElementById("lang-toggle").innerText = translations[lang].langBtn;
  document.documentElement.lang = lang;
  // Hero
  document.querySelector("#inicio h1").innerText = translations[lang].hero.name;
  document.querySelector("#inicio p").innerText = translations[lang].hero.desc;
  document.querySelectorAll("#inicio a")[0].innerText =
    translations[lang].hero.expBtn;
  document.querySelectorAll("#inicio a")[1].innerText =
    translations[lang].hero.contactBtn;
  // About
  document.querySelector("#sobre-mi h2").innerText =
    translations[lang].about.title;
  document.querySelectorAll("#sobre-mi p")[0].innerText =
    translations[lang].about.p1;
  document.querySelectorAll("#sobre-mi p")[1].innerText =
    translations[lang].about.p2;
  // Experiencia
  document.querySelector("#experiencia h2").innerText =
    translations[lang].exp.title;
  const jobs = translations[lang].exp.jobs;
  document
    .querySelectorAll("#experiencia .text-sm.font-semibold.text-blue-600")
    .forEach((el, i) => (el.innerText = jobs[i].date));
  document
    .querySelectorAll("#experiencia .text-xl.font-bold.mt-1")
    .forEach((el, i) => (el.innerText = jobs[i].title));
  document
    .querySelectorAll("#experiencia .text-gray-500.mb-3")
    .forEach((el, i) => (el.innerText = jobs[i].company));
  document.querySelectorAll("#experiencia ul.list-disc").forEach((ul, i) => {
    ul.innerHTML = jobs[i].bullets.map((b) => `<li>${b}</li>`).join("");
  });
  // Skills
  document.querySelector("#habilidades h2").innerText =
    translations[lang].skills.title;
  document
    .querySelectorAll("#habilidades h3")
    .forEach(
      (el, i) => (el.innerText = translations[lang].skills.list[i].title)
    );
  document
    .querySelectorAll("#habilidades p.text-gray-600.text-sm")
    .forEach(
      (el, i) => (el.innerText = translations[lang].skills.list[i].desc)
    );
  // Contacto
  document.querySelector("#contacto h2").innerText =
    translations[lang].contact.title;
  document.querySelector("#contacto p.mt-4").innerText =
    translations[lang].contact.desc;
  document.querySelector("input#name").placeholder =
    translations[lang].contact.namePh;
  document.querySelector("input#email").placeholder =
    translations[lang].contact.emailPh;
  document.querySelector("textarea#message").placeholder =
    translations[lang].contact.messagePh;
  document.querySelector("button[type='submit']").innerText =
    translations[lang].contact.send;
  document.querySelectorAll("#contacto h3.font-semibold")[0].innerText =
    translations[lang].contact.emailLabel;
  document.querySelectorAll("#contacto h3.font-semibold")[1].innerText =
    translations[lang].contact.phoneLabel;
  document.querySelectorAll("#contacto h3.font-semibold")[2].innerText =
    translations[lang].contact.locationLabel;
  document.querySelectorAll("#contacto p.text-gray-600")[1].innerText =
    translations[lang].contact.location;
  // CV
  document.getElementById("cv-download").innerText =
    translations[lang].download;
  document.getElementById("cv-download").href = translations[lang].cv;
  // Footer
  document.querySelector(
    "footer p"
  ).innerHTML = `&copy; 2025 Oscar Ricardo Marchena Chaves. ${translations[lang].footer.rights}`;
}

document.getElementById("lang-toggle").addEventListener("click", function () {
  setLang(currentLang === "es" ? "en" : "es");
});
// Inicializar idioma
setLang(currentLang);

// Script para el menú móvil
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Script para la animación de aparición de secciones
const sections = document.querySelectorAll(".section-fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
