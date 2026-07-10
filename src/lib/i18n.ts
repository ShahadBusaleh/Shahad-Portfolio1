export type Locale = "en" | "ar";

export const navItems = {
  en: [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  ar: [
    { href: "#home", label: "الرئيسية" },
    { href: "#projects", label: "المشاريع" },
    { href: "#about", label: "عني" },
    { href: "#skills", label: "المهارات" },
    { href: "#contact", label: "تواصل" },
  ],
};

export const ui = {
  en: {
    viewProject: "View on GitHub",
    viewLive: "Live demo",
    about: "About",
    skills: "Skills",
    featuredWork: "Featured Work",
    allProjects: "All Projects",
    getInTouch: "Get in Touch",
    downloadResume: "Resume",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
    sendEmail: "Send Email",
    builtWith: "Built with Next.js & Tailwind CSS",
    categoryLabels: {
      enterprise: "Enterprise",
      ai: "AI Product",
      data: "Data & Analytics",
    },
  },
  ar: {
    viewProject: "عرض على GitHub",
    viewLive: "عرض مباشر",
    about: "عني",
    skills: "المهارات",
    featuredWork: "أبرز الأعمال",
    allProjects: "جميع المشاريع",
    getInTouch: "تواصل معي",
    downloadResume: "السيرة الذاتية",
    experience: "الخبرة",
    education: "التعليم",
    certifications: "الشهادات",
    languages: "اللغات",
    sendEmail: "إرسال بريد",
    builtWith: "مبني بـ Next.js و Tailwind CSS",
    categoryLabels: {
      enterprise: "مؤسسي",
      ai: "منتج ذكاء اصطناعي",
      data: "بيانات وتحليلات",
    },
  },
};
