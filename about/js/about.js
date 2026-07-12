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

// language switcher
const translations = {
    "ar": {}, 
    "en": {
        "page_title": "About Us - BWC Pre-Shipment Inspection",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_contact": "Contact Us",
        "lang_btn": "English",
        
        "landing_title": "About Us",
        "landing_desc": "BWC Pre-Shipment Inspection Company, because we are committed to quality with high efficiency across all fields, and we care for our clients and seek their satisfaction.",
        
        "slider_title": "About Us",
        "slider_desc": "BWC Pre-Shipment Inspection is a leading Egyptian company in providing inspection, conformity, and certification services according to international and local standards. The company was established by the hands and expertise of our cadres, which spans many years of competence in providing inspection and conformity services promptly, with utmost accuracy, and strict confidentiality guaranteed to you, as we act as an impartial third party. The company provides solutions to facilitate trade and make the supply chain safer and more efficient for our clients, in accordance with the best practices applied globally and locally.",
        
        "choose_header": "Choosing us means you get a unique experience and unparalleled expertise according to the highest standards of quality and integrity.",
        "choose_title": "Why Choose Us",
        "choose_desc": "1- Our technical expertise coupled with the superior quality of our services and our ability to anticipate our clients' needs.<br>\n                        2- Rapid response to all tasks in record time, with utmost accuracy, and extensive experience in all fields.<br>\n                        3- Global coverage of laboratories.<br>\n                        4- Certificates and accreditations recognized locally and internationally.",
        
        "vision_title": "Company Vision",
        "vision_desc": "We seek to provide professional services according to the highest quality standards recognized locally and globally. We strive to be known as an impartial third party, the most reliable and customer-focused provider of testing, inspection, and verification services in our local and international markets. We want to be renowned for the quality of our services and our ability to use technical expertise and creativity to anticipate our clients' needs. We measure ourselves by the value we add through our ability and willingness to step forward in providing solutions to our clients.",
        
        "goals_title": "Our Goals",
        "goals_desc": "(Expansion.. Quality… Continuous Development).\n                        <br>\n                        <br>\n                        We seek to expand our geographical network, broaden the scope of our technical capabilities and skills, and provide our services in most continents of the world. We keep pace with everything new to develop our team by observing the strictest recruitment and training standards in order to retain our customers and provide the best services with quality and efficiency. We aspire to reach excellence and be the first choice in the world of inspection and conformity locally and globally.",
        
        "mission_title": "Our Mission",
        "mission_desc": "We pledge to provide the highest levels of quality and efficiency and offer highly competitive services based on modern technology and experience according to the highest applied international standards.",

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