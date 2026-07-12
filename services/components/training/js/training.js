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


const translations = {
    "ar": {}, // الكود هيسحب العربي أوتوماتيك من الـ HTML
    "en": {
        "page_title": "Training, Qualification, and Consulting Services - BWC",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_contact": "Contact Us",
        "lang_btn": "العربية",
        
        "train_title": "Training, Qualification, and Consulting Services",
        "train_desc": "The company provides training and qualification services to public and private entities, according to a renewed and well-studied plan, in which we offer all our expertise to determine the most appropriate needs and training programs for our clients, in accordance with the requirements of the local and global labor market, to provide you with the following training services according to locally and internationally recognized standards",
        "train_li_1": "Quality Management Systems ISO 9001",
        "train_li_2": "Food Safety Management Systems ISO 22000",
        "train_li_3": "Environmental Management Systems ISO 14001",
        "train_li_4": "General criteria for the operation of various types of bodies performing inspection ISO 17020",
        "train_li_5": "General requirements for the competence of testing and calibration laboratories ISO 17025",
        "train_li_6": "Occupational Health and Safety Management System ISO 45001 - Halal System Implementation",
        
        "footer_1": "Commitment",
        "footer_2": "Accuracy",
        "footer_3": "Quality",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo - Nasr City",
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