export type ProjectCategory = "enterprise" | "ai" | "data";

export type Project = {
  id: string;
  title: string;
  titleAr: string;
  role: string;
  roleAr: string;
  description: string;
  descriptionAr: string;
  highlights: string[];
  highlightsAr: string[];
  stack: string[];
  category: ProjectCategory;
  featured: boolean;
  github?: string;
  live?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "mom",
    title: "AI Meeting Assistant (MOM)",
    titleAr: "مساعد الاجتماعات الذكي",
    role: "Enterprise Integration & Full-Stack Delivery",
    roleAr: "تكامل مؤسسي وتطوير Full Stack",
    description:
      "Enterprise web app for recording meetings, live transcription, AI summaries, formal Minutes of Meeting documents, PDF export, and Microsoft Graph email — integrated into a corporate IT portal with Entra ID SSO via YARP reverse proxy.",
    descriptionAr:
      "تطبيق مؤسسي لتسجيل الاجتماعات والنسخ المباشر والملخصات بالذكاء الاصطناعي ومحاضر الاجتماعات الرسمية وتصدير PDF والبريد عبر Microsoft Graph — مدمج في بوابة IT مع تسجيل دخول موحد عبر YARP.",
    highlights: [
      "Two-server Windows architecture: ASP.NET portal + Next.js/FastAPI MOM stack",
      "SSO without second login — YARP injects X-User headers from Entra ID",
      "Local LM Studio summarization with browser-side transcription path",
      "Production troubleshooting: 502 gateway, transcript persistence, template routing",
    ],
    highlightsAr: [
      "بنية Windows ثنائية الخوادم: بوابة ASP.NET + Next.js/FastAPI",
      "تسجيل دخول موحد بدون تسجيل ثانٍ عبر YARP و Entra ID",
      "تلخيص محلي عبر LM Studio مع مسار نسخ في المتصفح",
      "حل مشاكل إنتاج: 502، حفظ النصوص، مسارات القوالب",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "ASP.NET",
      "YARP",
      "LM Studio",
      "SQLite",
      "MS Graph",
    ],
    category: "enterprise",
    featured: true,
    github: "https://github.com/ShahadBusaleh/AI-MeetingAssistantSystem",
    badge: "Production",
  },
  {
    id: "travel-in",
    title: "Travel-In — AI Travel Concierge",
    titleAr: "Travel-In — مساعد السفر الذكي",
    role: "Full Stack Developer & AI System Designer",
    roleAr: "مطورة Full Stack ومصممة نظام ذكاء اصطناعي",
    description:
      "1st Place AI travel concierge at Rkiza V-Camp 2026. Generates personalized, editable itineraries with Google Gemini AI, and integrates real-time flight and hotel APIs for dynamic pricing and booking.",
    descriptionAr:
      "المركز الأول في Rkiza V-Camp 2026. منصة سفر ذكية تولّد خططاً قابلة للتعديل عبر Google Gemini AI، مع تكامل واجهات طيران وفنادق حية للتسعير والحجز.",
    highlights: [
      "1st Place — Rkiza V-Camp 2026; production-grade platform shipped in 7 days",
      "Google Gemini AI itinerary generation with Prisma + PostgreSQL",
      "Integrated real-time flight and hotel APIs; Clerk auth and rate limiting",
      "Team project — architecture, deployment, and performance optimization shared with teammates",
    ],
    highlightsAr: [
      "المركز الأول — Rkiza V-Camp 2026؛ منصة إنتاجية خلال 7 أيام",
      "توليد خطط سفر عبر Google Gemini مع Prisma و PostgreSQL",
      "تكامل واجهات طيران وفنادق حية؛ مصادقة Clerk وتحديد معدل الطلبات",
      "مشروع جماعي — البنية والنشر وتحسين الأداء بمشاركة الفريق",
    ],
    stack: ["Next.js", "Google Gemini AI", "Prisma", "PostgreSQL", "Clerk"],
    category: "ai",
    featured: true,
    live: "https://travelin.blog/",
    badge: "1st Place",
  },
  {
    id: "equipment",
    title: "IT Equipment Management System",
    titleAr: "نظام إدارة معدات IT",
    role: "Full Stack Developer",
    roleAr: "مطورة Full Stack",
    description:
      "Enterprise-grade web app that digitizes IT equipment issuance through a multi-step approval workflow (Preparer → Issuer → Receiver), with Microsoft Graph email notifications, bilingual PDF generation, and Microsoft-based authentication.",
    descriptionAr:
      "تطبيق مؤسسي لرقمنة صرف معدات IT عبر سير موافقات متعدد الخطوات (مُعِدّ → مُصدِر → مُستلِم)، مع إشعارات بريد Microsoft Graph وتوليد PDF ثنائي اللغة ومصادقة Microsoft.",
    highlights: [
      "Multi-role workflow: Preparer → Issuer → Receiver with role-based access control",
      "Microsoft Graph API for automated email notifications; cookie-based Microsoft authentication",
      "Bilingual English/Arabic PDF generation with QuestPDF; deployed on private IIS",
    ],
    highlightsAr: [
      "سير عمل متعدد الأدوار: مُعِدّ → مُصدِر → مُستلِم مع صلاحيات حسب الدور",
      "Microsoft Graph لإشعارات البريد؛ مصادقة Microsoft عبر ملفات تعريف الارتباط",
      "توليد PDF بالعربي والإنجليزي عبر QuestPDF؛ نشر على IIS خاص",
    ],
    stack: [
      "ASP.NET Core MVC",
      "EF Core",
      "SQL Server",
      "Microsoft Graph",
      "QuestPDF",
      "Bootstrap",
      "IIS",
    ],
    category: "enterprise",
    featured: true,
    github: "https://github.com/ShahadBusaleh/IT-EquipmentSystem",
    badge: "Enterprise",
  },
  {
    id: "research-mission",
    title: "Research Mission Facilitation System",
    titleAr: "نظام تسهيل المهام البحثية",
    role: "Full Stack Developer | Trainee & Volunteer",
    roleAr: "مطورة Full Stack | متدربة وتطوع",
    description:
      "Institutional ASP.NET Core MVC platform for research facilitation requests — multi-stage scientific and ethical review, role-based dashboards, bilingual Arabic–English UI, and automated poster generation.",
    descriptionAr:
      "منصة مؤسسية بـ ASP.NET Core MVC لطلبات تسهيل البحث — مراجعة علمية وأخلاقية متعددة المراحل، لوحات حسب الدور، واجهة عربية–إنجليزية، وتوليد ملصقات آلي.",
    highlights: [
      "Full Arabic–English localization using .resx files and culture middleware",
      "Fixed backend logic and optimized EF Core / LINQ queries for search and workflow state",
      "Enhanced Razor views and multi-role workflow handling for academic users",
    ],
    highlightsAr: [
      "تعريب كامل عربي–إنجليزي عبر ملفات .resx و culture middleware",
      "إصلاح منطق الخلفية وتحسين استعلامات EF Core / LINQ للبحث وحالة سير العمل",
      "تحسين واجهات Razor ومعالجة سير العمل متعدد الأدوار للمستخدمين الأكاديميين",
    ],
    stack: [
      "ASP.NET Core MVC",
      "EF Core",
      "LINQ",
      "SQL Server",
      "Bootstrap",
      "Razor",
    ],
    category: "enterprise",
    featured: false,
  },
  {
    id: "ai-writing",
    title: "AI Writing Platform",
    titleAr: "منصة الكتابة بالذكاء الاصطناعي",
    role: "Full Stack Developer",
    roleAr: "مطورة Full Stack",
    description:
      "AI-powered platform for content generation, grammar correction, and creative idea enhancement — connecting writers and readers in a shared community.",
    descriptionAr:
      "منصة مدعومة بالذكاء الاصطناعي لتوليد المحتوى وتصحيح القواعد وتعزيز الأفكار — تربط الكُتّاب والقراء في مجتمع مشترك.",
    highlights: [
      "OpenAI API integration for grammar and content enhancement",
      "End-to-end publishing and user interaction system",
      "ASP.NET Core backend with community features",
    ],
    highlightsAr: [
      "تكامل OpenAI API للقواعد وتحسين المحتوى",
      "نظام نشر وتفاعل مستخدمين متكامل",
      "خلفية ASP.NET Core مع ميزات مجتمعية",
    ],
    stack: ["ASP.NET Core", "OpenAI API", "C#", "SQL"],
    category: "ai",
    featured: false,
  },
  {
    id: "ticket-analytics",
    title: "IT Ticket Data Analysis",
    titleAr: "تحليل بيانات تذاكر IT",
    role: "IT Trainee — COOP",
    roleAr: "متدربة IT",
    description:
      "Analyzed 10 months of IT support ticket data to identify peak periods, seasonal trends, and category relationships — delivering strategic recommendations via interactive Tableau dashboards.",
    descriptionAr:
      "تحليل 10 أشهر من بيانات تذاكر الدعم الفني لتحديد فترات الذروة والاتجاهات الموسمية — مع توصيات استراتيجية عبر لوحات Tableau تفاعلية.",
    highlights: [
      "Data cleaning: mixed time formats and inconsistent categorization",
      "Interactive Tableau dashboards for resource planning",
      "Strategic recommendations presented to IT operations",
    ],
    highlightsAr: [
      "تنظيف بيانات: صيغ زمنية مختلطة وتصنيفات غير متسقة",
      "لوحات Tableau تفاعلية لتخطيط الموارد",
      "توصيات استراتيجية لعمليات IT",
    ],
    stack: ["Tableau", "Excel", "Python", "Data Analysis"],
    category: "data",
    featured: false,
  },
];

export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: [
    "Python",
    "C#",
    "Java",
    "PHP",
    "C++",
    "ASP.NET Core",
    "Node.js",
    "FastAPI",
    "REST APIs",
  ],
  ai: [
    "OpenAI API",
    "Google Gemini AI",
    "LM Studio",
    "Prompt Engineering",
    "LangChain (in progress)",
    "RAG (in progress)",
  ],
  cloud: [
    "Microsoft Azure",
    "Git",
    "GitHub",
    "PowerShell",
    "IIS",
    "Clerk Auth",
    "MS Graph",
  ],
  data: ["SQL", "Tableau", "Power BI", "Pandas", "EF Core"],
};
