"use client";

import { useLanguage } from "./LanguageProvider";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/** Set to true to show the Experience column again. */
const SHOW_EXPERIENCE = false;

const experience = [
  {
    en: {
      role: "Software Engineer | Tamheer Trainee",
      company: "Khalifa A. Algosaibi Group",
      period: "Dec 2025 – Jun 2026",
      points: [
        "Deployed AI Meeting Assistant into enterprise IT portal with YARP, Entra ID SSO, and Microsoft Graph",
        "Built IT equipment management system from scratch — digitizing issuance and return workflows",
        "Automated reporting and streamlined IT operations across systems",
      ],
    },
    ar: {
      role: "مهندسة برمجيات | متدربة تمهير",
      company: "مجموعة خليفة أ. القصيبي",
      period: "ديسمبر 2025 – يونيو 2026",
      points: [
        "نشر مساعد الاجتماعات الذكي في بوابة IT المؤسسية مع YARP و Entra ID و Microsoft Graph",
        "بناء نظام إدارة معدات IT من الصفر لرقمنة عمليات الصرف والإرجاع",
        "أتمتة التقارير وتبسيط عمليات IT عبر الأنظمة",
      ],
    },
  },
  {
    en: {
      role: "Full Stack Developer | Trainee & Volunteer",
      company: "IAU — Deanship of Scientific Research & Innovation",
      period: "Aug 2025 – Jan 2026",
      points: [
        "Fixed backend logic and enhanced ASP.NET Core MVC features",
        "Implemented Arabic–English localization with .resx and culture middleware",
        "Optimized database queries using EF Core and LINQ",
      ],
    },
    ar: {
      role: "مطورة Full Stack | متدربة وتطوع",
      company: "جامعة الإمام عبدالرحمن بن فيصل — عمادة البحث العلمي والابتكار",
      period: "أغسطس 2025 – يناير 2026",
      points: [
        "إصلاح منطق الخلفية وتحسين ميزات ASP.NET Core MVC",
        "تنفيذ تعريب عربي–إنجليزي عبر .resx و culture middleware",
        "تحسين استعلامات قاعدة البيانات عبر EF Core و LINQ",
      ],
    },
  },
  {
    en: {
      role: "IT Trainee | COOP Program",
      company: "GAC — Dammam",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Analyzed 10 months of IT ticket data and built Tableau dashboards",
        "Delivered strategic recommendations for resource planning",
        "Wiped and prepared laptops with secure wiping tools when employees left the company",
        "Installed and configured software for new employees as part of onboarding",
        "Resolved daily IT support tickets alongside the supervisor",
      ],
    },
    ar: {
      role: "متدربة IT | برنامج تعاوني",
      company: "GAC — الدمام",
      period: "يونيو 2025 – أغسطس 2025",
      points: [
        "تحليل 10 أشهر من بيانات تذاكر IT وبناء لوحات Tableau",
        "تقديم توصيات استراتيجية لتخطيط الموارد",
        "مسح وإعداد أجهزة اللابتوب بأدوات المسح الآمن عند مغادرة الموظفين",
        "تثبيت وإعداد البرامج للموظفين الجدد ضمن عملية التعيين",
        "حل تذاكر دعم IT اليومية بالتعاون مع المشرف",
      ],
    },
  },
];

const education = {
  en: "B.S. in Computer Information Systems — Imam Abdulrahman Bin Faisal University (Aug 2020 – Aug 2025)",
  ar: "بكالوريوس نظم المعلومات الحاسوبية — جامعة الإمام عبدالرحمن بن فيصل (أغسطس 2020 – أغسطس 2025)",
};

const certifications = [
  "Azure AI Fundamentals — Microsoft",
  "Prerequisite Courses of Artificial Intelligence, Python Basics — Coursera",
  "ChatGPT Prompt Engineering for Developers — DeepLearning.AI",
  "Chatbot Development with IBM Watson Assistant — IBM SkillsBuild",
  "Code Generation & Optimization Using IBM Granite — IBM SkillsBuild",
  "Vibe Coding 101 with Replit — DeepLearning.AI",
  "Vibe Coding with Cursor AI — Coursera",
  "Git Essentials — Satr Platform",
  "Software Security Testing — IPA-Ethrai",
  "Data Analysis Essentials — Cisco Networking Academy (NetAcad)",
];

export function About() {
  const { locale } = useLanguage();
  const t = ui[locale];

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-teal-dark sm:text-4xl">
            {t.about}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-teal" />
        </Reveal>

        <div
          className={
            SHOW_EXPERIENCE
              ? "grid gap-12 lg:grid-cols-2"
              : "mx-auto max-w-2xl space-y-8"
          }
        >
          {SHOW_EXPERIENCE && (
            <Reveal>
              <h3 className="mb-6 text-xl font-bold text-brand-teal-dark">
                {t.experience}
              </h3>
              <div className="space-y-8">
                {experience.map((item) => {
                  const data = item[locale];
                  return (
                    <div
                      key={data.company}
                      className="border-s-2 border-brand-teal ps-5"
                    >
                      <p className="font-semibold text-brand-teal-dark">
                        {data.role}
                      </p>
                      <p className="text-sm text-brand-teal">{data.company}</p>
                      <p className="mb-3 text-xs text-zinc-500">{data.period}</p>
                      <ul className="space-y-1.5">
                        {data.points.map((point) => (
                          <li
                            key={point}
                            className="text-sm text-zinc-600 before:me-2 before:text-brand-teal before:content-['•']"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}

          <Reveal className="space-y-8" delay={80}>
            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.education}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {locale === "en" ? education.en : education.ar}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.certifications}
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-zinc-600 before:me-2 before:text-brand-teal before:content-['•']"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-teal-dark">
                {t.languages}
              </h3>
              <p className="text-sm text-zinc-600">
                {locale === "en"
                  ? "Arabic (Native) · English (Professional)"
                  : "العربية (لغة أم) · الإنجليزية (احترافية)"}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
