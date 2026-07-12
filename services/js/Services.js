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

// 1. قاموس الترجمة الخاص بصفحة الخدمات فقط
const translations = {
    "ar": {
        "page_title": "خدمات التفتيش - شركة بي دبليو سي للفحص والتفتيش ما قبل الشحن",
        "nav_home": "الصفحة الرئيسية",
        "nav_about": "من نحن",
        "nav_services": "خدمات التفتيش",
        "nav_contact": "تواصل معنا",
        "lang_btn": "English",
        
        "header_services": "خدمات التفتيش",
        "bwc_services": "خدمات شركة بي دبليو سي",
        "bwc_subtitle": "ندفع بكم نحو خيارات آمنة...",
        
        "service_1": "التفتيش على الأغذية والأعلاف",
        "service_2": "التفتيش على الأدوية والمستلزمات الطبية",
        "service_3": "التفتيش على المنتجات النفطية",
        "service_4": "التفتيش على المنتجات الصناعية العامة الصلبة وغير الصلبة والمنسوجات",
        "service_5": "التفتيش والمطابقة على مواد البناء وتتبع مراحله",
        "service_6": "خدمات التدريب والتأهيل والاستشارات",
        "service_7": "خدمات التفتيش التي تقدمها الشركة على خطوط الإنتاج",
        
        "footer_1": "إلتزام",
        "footer_2": "دقة",
        "footer_3": "جودة",
        "footer_contact": "تواصل معنا",
        "footer_address": "القاهرة – مدينة نصر – عقار رقم 26 شقة رقم 4 – الدور الرابع – شارع نبيل خليل",
        "footer_copyright": "© بي دبليو سي جميع الحقوق محفوظة 2026"
    },
    "en": {
        "page_title": "Inspection Services - BWC Pre-Shipment Inspection",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_contact": "Contact Us",
        "lang_btn": "العربية",
        
        "header_services": "Inspection Services",
        "bwc_services": "BWC Company Services",
        "bwc_subtitle": "Guiding you toward safer choices...",
        
        "service_1": "Food and feed inspection",
        "service_2": "Inspection of medicines and medical supplies",
        "service_3": "Inspection of petroleum products",
        "service_4": "Inspection of general industrial products, solid and non-solid, and textiles",
        "service_5": "Inspection and conformity of building materials and tracking its stages",
        "service_6": "Training, qualification, and consulting services",
        "service_7": "Inspection services provided by the company on production lines",
        
        "footer_1": "Commitment",
        "footer_2": "Accuracy",
        "footer_3": "Quality",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo - Nasr City - Building No. 26, Apartment 4 - Fourth Floor - Nabil Khalil Street",
        "footer_copyright": "© BWC All rights reserved 2021-2026"
    }
};

// 2. كود التشغيل (الماكينة)
document.addEventListener("DOMContentLoaded", () => {
    let currentLanguage = localStorage.getItem("siteLang") || "ar";

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("siteLang", lang);

        // تغيير اتجاه الصفحة
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;

        // ترجمة العناصر
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(element => {
            const translationKey = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][translationKey]) {
                element.textContent = translations[lang][translationKey];
            }
        });
    }

    // تشغيل اللغة عند التحميل
    setLanguage(currentLanguage);

    // تفعيل زر التبديل
    const langSwitchBtn = document.getElementById("lang-switch");
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            const newLang = currentLanguage === "ar" ? "en" : "ar";
            setLanguage(newLang);
        });
    }
});