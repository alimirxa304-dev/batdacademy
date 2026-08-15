export type Course = {
  id: number;
  ar: string;
  en: string;
  citySlug: string;
  specializationSlug: string;
  date: string;
  price: number;
  durationDays: number;
  image: string;
  confirmed?: boolean;
};

export const upcomingCourses: Course[] = [
  {
    id: 3439,
    ar: "دورة تدريبية في المشتريات المستدامة للمهنيين",
    en: "Sustainable Procurement for Professionals",
    citySlug: "london",
    specializationSlug: "procurement-warehousing",
    date: "2026-08-24",
    price: 5760,
    durationDays: 5,
    image: "/images/photos/1786450030.webp",
    confirmed: true,
  },
  {
    id: 1006,
    ar: "دورة في كيفية إدارة المشاريع",
    en: "Fundamentals of Project Management",
    citySlug: "riyadh",
    specializationSlug: "project-management",
    date: "2026-09-07",
    price: 4180,
    durationDays: 5,
    image: "/images/photos/1786454689.webp",
    confirmed: true,
  },
  {
    id: 3348,
    ar: "البرنامج الاحترافي في الحوكمة وإدارة المخاطر والالتزام",
    en: "Professional Programme in Governance, Risk & Compliance",
    citySlug: "amsterdam",
    specializationSlug: "audit-governance",
    date: "2026-09-07",
    price: 13140,
    durationDays: 10,
    image: "/images/photos/1581409163.webp",
    confirmed: true,
  },
  {
    id: 3718,
    ar: "تطوير أساليب العمل وتحسين إجراءات العمل وعمليات فرق العمل – المستوى المتقدم",
    en: "Advanced Workflow Development & Team Process Improvement",
    citySlug: "london",
    specializationSlug: "management-project-skills",
    date: "2026-09-28",
    price: 7220,
    durationDays: 5,
    image: "/images/photos/1786452583.webp",
    confirmed: true,
  },
  {
    id: 3699,
    ar: "رحلة محترف الحوكمة: دور أمين سر مجلس الإدارة",
    en: "The Governance Professional's Journey: The Board Secretary Role",
    citySlug: "london",
    specializationSlug: "audit-governance",
    date: "2026-10-05",
    price: 4560,
    durationDays: 5,
    image: "/images/photos/1786450030.webp",
    confirmed: true,
  },
  {
    id: 3592,
    ar: "القيادة التحويلية والاستشراف الاستراتيجي: أدوات للقادة في البيئات المتغيرة",
    en: "Transformational Leadership & Strategic Foresight for Changing Environments",
    citySlug: "doha",
    specializationSlug: "strategic-planning",
    date: "2026-11-02",
    price: 4440,
    durationDays: 5,
    image: "/images/photos/1786454689.webp",
    confirmed: true,
  },
];
