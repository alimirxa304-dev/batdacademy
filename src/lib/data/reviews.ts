// Placeholder review content — the Academy has no published client testimonials
// in the source material yet. Attribution intentionally stays generic (programme
// context only, no invented names or companies) until real quotes are supplied.
// Swap the `quote` and `context` fields with real testimonials when available.

export type Review = {
  quote: { ar: string; en: string };
  context: { ar: string; en: string };
};

export const reviews: Review[] = [
  {
    quote: {
      ar: "دورة منظمة وعملية بشكل ملحوظ، واستطعت تطبيق ما تعلمته في عملي مباشرة بعد انتهاء البرنامج.",
      en: "A genuinely well-structured, practical course — I was able to apply what I learned at work immediately after the programme.",
    },
    context: { ar: "برنامج إدارة المشاريع", en: "Project Management Programme" },
  },
  {
    quote: {
      ar: "المدربون على قدر عالٍ من الخبرة، والمحتوى يجمع بين العمق الأكاديمي والتطبيق الواقعي.",
      en: "The trainers were highly experienced, and the content struck a good balance between academic depth and real-world application.",
    },
    context: { ar: "برنامج القيادة وتطوير الذات", en: "Leadership & Self-Development Programme" },
  },
  {
    quote: {
      ar: "تجربة تدريبية احترافية من التسجيل وحتى نهاية البرنامج، مع متابعة جيدة من فريق الأكاديمية.",
      en: "A professional experience from registration through to the end of the programme, with good follow-up from the Academy's team.",
    },
    context: { ar: "دورات الموارد البشرية والتدريب", en: "Human Resources & Training Course" },
  },
  {
    quote: {
      ar: "محتوى محدث يواكب أحدث الممارسات في المجال، ومواد تدريبية واضحة ومفيدة.",
      en: "Up-to-date content that reflects the latest practice in the field, with clear and genuinely useful training materials.",
    },
    context: { ar: "دورات المحاسبة", en: "Accounting Course" },
  },
  {
    quote: {
      ar: "بيئة تدريبية احترافية ومجموعة متدربين متنوعة أضافت الكثير للنقاش والتطبيق العملي.",
      en: "A professional training environment, and a diverse group of participants that added a lot to the discussion and hands-on work.",
    },
    context: { ar: "دورات التخطيط الاستراتيجي", en: "Strategic Planning Course" },
  },
];
