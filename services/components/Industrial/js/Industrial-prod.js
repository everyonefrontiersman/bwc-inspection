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
        "page_title": "Inspection of general industrial products, solid and non-solid, and textiles - BWC",
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

        // --- نصوص صفحة المنتجات الصناعية ---
        "ind_title": "Inspection of general industrial products, solid and non-solid, and textiles",
        "ind_desc": "Inspection of solid and non-solid industrial products and textiles such as:",
        "ind_li_1": "Maintenance tools and equipment.",
        "ind_li_2": "Inspection and examination of cars, trucks, and their spare parts.",
        "ind_li_3": "Heavy equipment and their spare parts.",
        "ind_li_4": "Inspection of security and military devices and equipment.",
        "ind_li_5": "Inspection and examination of cars, trucks, and their spare parts.",
        "ind_li_6": "Inspection and examination of laboratory equipment and supplies.",
        "ind_li_7": "Advertising products, gifts, and haberdashery.",
        "ind_li_8": "Inspection services on production lines and monitoring them, including packaging materials and equipment.",
        "ind_li_9": "Shoes and leather products.",
        "ind_li_10": "Fabrics and ready-made textiles.",
        "ind_li_11": "Bags of all kinds.",
        "ind_li_12": "Electrical and electronic products, lighting equipment, home and garden products, and their accessories.",
        "ind_li_13": "General materials including (fertilizers and cleaning materials), home and office furniture.",
        "ind_li_14": "Industrial and construction equipment.",
        "ind_li_15": "Sports equipment.",
        "ind_li_16": "Toys and children's supplies.",
        "ind_li_17": "Paper products, stationery, and office supplies."
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