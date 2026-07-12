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
    "ar": {}, // سيتم سحب النصوص العربية أوتوماتيكياً من الـ HTML
    "en": {
        // --- نصوص مشتركة (الناف بار والفوتر) ---
        "page_title": "Inspection Services - BWC Pre-Shipment Inspection",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_contact": "Contact Us",
        "lang_btn": "العربية",
        "footer_1": "Commitment",
        "footer_2": "Accuracy",
        "footer_3": "Quality",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo - Nasr City - Building No. 26, Apartment 4 - Fourth Floor - Nabil Khalil Street",
        "footer_copyright": "© BWC All rights reserved 2021-2026",

        // --- نصوص صفحة الأغذية والأعلاف ---
        "food_title": "Inspection of Food and Feed",
        "food_desc": "The company provides inspection services for food, feed, and raw materials used in their manufacture, and ensures their compliance with documentary contractual specifications and international standards, including the inspection of:",
        "food_li_1": "Agricultural products and grains",
        "food_li_2": "Feed and animal food of all kinds",
        "food_li_3": "Live livestock inspection",
        "food_li_4": "Meat and its derivatives",
        "food_li_5": "Dairy products and their derivatives",
        "food_li_6": "Vegetables and fruits",
        "food_li_7": "Canned food products of all kinds",
        "food_li_8": "Vegetable oils, fats, and their derivatives"
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
