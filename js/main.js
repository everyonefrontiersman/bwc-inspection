const btn_menu = document.querySelector(".btn_menu");
const close_menu = document.querySelector(".btn_close");
const nav = document.querySelector("nav");

function openMenu() {
    if (!nav || document.querySelector(".overlay")) return;
    const over = document.createElement("div");
    over.className = "overlay";
    over.addEventListener("click", closeMenu);
    const container = document.querySelector("header .container");
    if (container) container.appendChild(over);
    nav.style.right = "0";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (!nav) return;
    nav.style.right = "-500px";
    document.body.style.overflowY = "scroll";
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        setTimeout(() => overlay.remove(), 100);
    }
}

if (btn_menu) btn_menu.addEventListener("click", openMenu);
if (close_menu) close_menu.addEventListener("click", closeMenu);

document.addEventListener("DOMContentLoaded", function () {
    const sliderRow = document.getElementById("slider-row");
    const slides = document.querySelectorAll(".slide");
    if (!sliderRow || slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 3000;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        sliderRow.style.transform = `translateX(${-currentSlide * 100}%)`;
    }

    setInterval(nextSlide, slideInterval);
});

const translations = {
    "ar": {}, 
    "en": {
        "title": "BWC Pre-Shipment Inspection",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_contact": "Contact Us",
        "lang_btn": "العربية",
        
        "hero_title": "BWC Pre-Shipment Inspection Company",
        "hero_desc": "Quality control, product assurance, and compliance with local and international standards require commodity monitoring",
        "read_more": "Read More",
        "square_text": "Partner with us today for independent and reliable inspection",
        
        "intro_title": "Introduction",
        "intro_desc": "Quality control, product assurance, and compliance with local and international standards require commodity monitoring, which demands highly competent expertise to protect your interests and minimize risks. Partner with us today for independent and reliable inspection. BWC for Inspection and Conformity is the leading company in Egypt in the field of inspection, testing, conformity, quality control assurance, and providing technical advice and support to its clients to issue certificates of conformity for all commodities. It provides its services to the public and private sectors in the field of inspection.",
        
        "slider_desc1": "BWC is one of the most trusted companies in the world of auditing and quality control. We have provided our services and cooperated with many companies to reduce risks and costs by providing efficient services in the fields of quality control and assurance. We hold the ISO 9001:2015 quality certificate, along with our expertise in various industrial fields. We offer our clients in the Middle East tailored services and solutions for quality control and assurance that suit the nature of the requirements of different companies, ensuring that the company's client is confident that their products conform to special specifications and reducing the risks of poor product quality.",
        "slider_desc2": "BWC for Inspection and Verification also deals with accredited external laboratories that hold the ISO 17025 international standard accreditation certificate according to the International Laboratory Accreditation Cooperation",
        
        "ethics_title": "Business Ethics and Compliance",
        "ethics_desc": "Integrity and business ethics are fundamental to the way we conduct our business and are a key element of how we build our company. The principles of the document and the associated rules and procedures apply to all our activities and include standards of technical and professional conduct in the following areas:",
        "ethics_1": "Ethical marketing",
        "ethics_2": "Fair competition",
        "ethics_3": "Confidentiality and data protection",
        "ethics_4": "High professionalism",
        "ethics_5": "Team competence",
        "ethics_6": "Speed of achievement",
        "ethics_7": "High-quality services",
        "ethics_8": "Impartiality",
        "ethics_9": "Integrity",
        
        "quality_title": "Quality Policy",
        "quality_desc": "The company carries out inspection and quality assurance operations based on:",
        "quality_1": "Commitment to professional, legal, and regulatory requirements.",
        "quality_2": "Using approved Egyptian standard specifications or locally approved international specifications according to the National Center for Standardization and Metrology.",
        "quality_3": "Contractual conditions, specifications, and standards between the two parties.",
        "quality_4": "Continuous development and training of human resources and keeping pace with modern technical developments to provide the best inspection and quality control services to satisfy our clients and facilitate our employees to perform their tasks quickly and with high efficiency.",
        "quality_5": "Conducting all necessary tests and analyses to ensure quality under locally and internationally approved standard conditions.",
        "quality_6": "Commitment to impartiality, independence of judgments, the integrity of our relationship with all parties, and the confidentiality of information for each client.",
        
        "footer_1": "Commitment",
        "footer_2": "Accuracy",
        "footer_3": "Quality",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo – Nasr City",
        "footer_copyright": "© BWC All rights reserved 2026"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let currentLanguage = localStorage.getItem("siteLang") || "ar";

    translations["ar"] = translations["ar"] || {}; 
    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        translations["ar"][key] = element.innerHTML;
    });

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("siteLang", lang);

        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;

        elements.forEach(element => {
            const translationKey = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][translationKey]) {
                element.innerHTML = translations[lang][translationKey];
            }
        });
    }

    setLanguage(currentLanguage);

    const langSwitchBtn = document.getElementById("lang-switch");
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            const newLang = currentLanguage === "ar" ? "en" : "ar";
            setLanguage(newLang);
        });
    }
});