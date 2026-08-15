export type GroupKey =
  | "management"
  | "finance-banking"
  | "media-pr"
  | "it-comms"
  | "environment-urban"
  | "healthcare"
  | "ai"
  | "energy"
  | "safety"
  | "engineering";

export const groups: Record<GroupKey, { ar: string; en: string; tone: "navy" | "gold" | "burgundy" }> = {
  management: { ar: "الإدارة", en: "Management", tone: "navy" },
  "finance-banking": { ar: "المحاسبة والمالية والبنوك", en: "Finance & Banking", tone: "gold" },
  "media-pr": { ar: "الإعلام والعلاقات العامة", en: "Media & PR", tone: "burgundy" },
  "it-comms": { ar: "الاتصالات وتكنولوجيا المعلومات", en: "IT & Communications", tone: "navy" },
  "environment-urban": { ar: "البيئة والتخطيط العمراني", en: "Environment & Urban Planning", tone: "gold" },
  healthcare: { ar: "الرعاية الصحية", en: "Healthcare", tone: "burgundy" },
  ai: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence", tone: "navy" },
  energy: { ar: "الطاقة والكهرباء", en: "Energy & Power", tone: "gold" },
  safety: { ar: "الأمن والسلامة المهنية", en: "Health, Safety & Security", tone: "burgundy" },
  engineering: { ar: "الهندسة والصيانة", en: "Engineering & Maintenance", tone: "navy" },
};

export const groupBySlug: Record<string, GroupKey> = {
  "project-management": "management",
  "professional-masters": "management",
  "mini-diploma": "management",
  "short-masters": "management",
  "leadership-development": "management",
  accounting: "finance-banking",
  "hr-training": "management",
  "contracts-legal": "management",
  "medical-education": "healthcare",
  "procurement-warehousing": "management",
  "strategic-planning": "management",
  "tqm-excellence": "management",
  "customer-service-marketing": "media-pr",
  "secretarial-archiving": "management",
  "audit-governance": "finance-banking",
  "maintenance-operations": "engineering",
  "safety-security": "safety",
  "oil-gas": "energy",
  telecom: "it-comms",
  "management-sciences": "management",
  "investment-banking": "finance-banking",
  "protocol-hospitality": "media-pr",
  "sales-management": "management",
  "engineering-management": "engineering",
  "environment-municipalities": "environment-urban",
  "educational-administration": "management",
  "retail-trade": "management",
  "risk-management": "finance-banking",
  "international-relations": "media-pr",
  "press-media": "media-pr",
  "public-relations": "media-pr",
  "healthcare-hospital-management": "healthcare",
  "office-management": "management",
  "it-programming": "it-comms",
  "management-project-skills": "management",
  "renewable-energy": "energy",
  "graphic-design": "it-comms",
  "urban-planning": "environment-urban",
  "programming-languages": "it-comms",
  "electrical-operations": "energy",
  cybersecurity: "it-comms",
  epidemiology: "healthcare",
  "medicine-healthcare": "healthcare",
  "financial-reporting-audit": "finance-banking",
  "healthcare-policy": "healthcare",
  "ai-strategic-planning": "ai",
  "medical-quality-safety": "healthcare",
  "healthcare-office-management": "healthcare",
  "healthcare-risk-management": "healthcare",
  "ai-admin-secretarial": "ai",
  "healthcare-retail-management": "healthcare",
  "ai-customer-service": "ai",
  "civil-construction": "engineering",
  "logistics-supply-chain": "management",
  "hospitality-tourism": "media-pr",
  "product-management": "management",
  "shipping-maritime-ports": "engineering",
  "facilities-management": "engineering",
};

export function getGroup(slug: string) {
  const key = groupBySlug[slug] ?? "management";
  return { key, ...groups[key] };
}

export const groupOrder: GroupKey[] = [
  "management",
  "finance-banking",
  "media-pr",
  "it-comms",
  "environment-urban",
  "healthcare",
  "ai",
  "energy",
  "safety",
  "engineering",
];

export function getSlugsForGroup(key: GroupKey) {
  return Object.entries(groupBySlug)
    .filter(([, g]) => g === key)
    .map(([slug]) => slug);
}
