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
    "ar": {}, 
    "en": {
        "page_title": "Inspection Services Provided on Production Lines - BWC",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_contact": "Contact Us",
        "lang_btn": "العربية",
        
        "prod_title": "Inspection services provided by the company on production lines",
        "prod_desc": "The company provides training and qualification services to public and private entities, according to a renewed and well-studied plan, in which we offer all our expertise to determine the most appropriate needs and training programs for our clients, in accordance with the requirements of the local and global labor market, to provide you with the following training services according to locally and internationally recognized standards",
        "prod_li_1": "1- Pre-Production Inspection (TPT): Assisting in the selection of raw materials with standard specifications and high quality, used in the manufacturing process and before the production process.",
        "prod_li_2": "2- During Production Inspection (DPT/DUPRO): Monitoring the product and maintaining production quality and compliance with standard specifications through early detection of production errors and correcting them. We also verify semi-finished or finished goods when at least 40% of the order is produced.",
        "prod_li_3": "3- Final Random Inspection (FRT): Inspection of final products when at least 80% of the order is packed for export by: taking random samples to verify product quality. Supervising the loading of cargo containers (LS). We ensure the order is complete, safely loaded into the shipping container, and documented.",
        "prod_li_4": "4- Non-Destructive Testing (NDT) Inspection: Our inspectors perform various tests on the industrial product, and the type of testing depends on the product type, as each product has a different testing method.",
        
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