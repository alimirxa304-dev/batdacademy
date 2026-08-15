export type City = {
  slug: string;
  ar: string;
  en: string;
  country: { ar: string; en: string };
  image?: string;
  featured?: boolean;
};

export const cities: City[] = [
  { slug: "london", ar: "لندن", en: "London", country: { ar: "المملكة المتحدة", en: "United Kingdom" }, image: "/images/photos/1728753070.jpg", featured: true },
  { slug: "manchester", ar: "مانشستر", en: "Manchester", country: { ar: "المملكة المتحدة", en: "United Kingdom" }, image: "/images/cities/manchester.webp", featured: true },
  { slug: "zurich", ar: "زيورخ", en: "Zurich", country: { ar: "سويسرا", en: "Switzerland" }, image: "/images/cities/zurich.webp", featured: true },
  { slug: "geneva", ar: "جنيف", en: "Geneva", country: { ar: "سويسرا", en: "Switzerland" }, image: "/images/cities/geneva.webp", featured: true },
  { slug: "tokyo", ar: "طوكيو", en: "Tokyo", country: { ar: "اليابان", en: "Japan" }, image: "/images/cities/tokyo.webp", featured: true },
  { slug: "singapore", ar: "سنغافورة", en: "Singapore", country: { ar: "سنغافورة", en: "Singapore" }, image: "/images/cities/singapore.webp", featured: true },
  { slug: "washington", ar: "واشنطن", en: "Washington DC", country: { ar: "الولايات المتحدة", en: "United States" } },
  { slug: "new-york", ar: "نيويورك", en: "New York", country: { ar: "الولايات المتحدة", en: "United States" }, image: "/images/cities/newyork.webp", featured: true },
  { slug: "toronto", ar: "تورونتو", en: "Toronto", country: { ar: "كندا", en: "Canada" } },
  { slug: "beijing", ar: "بيكين", en: "Beijing", country: { ar: "الصين", en: "China" } },
  { slug: "jakarta", ar: "جاكرتا", en: "Jakarta", country: { ar: "إندونيسيا", en: "Indonesia" } },
  { slug: "madrid", ar: "مدريد", en: "Madrid", country: { ar: "إسبانيا", en: "Spain" } },
  { slug: "barcelona", ar: "برشلونة", en: "Barcelona", country: { ar: "إسبانيا", en: "Spain" } },
  { slug: "lisbon", ar: "لشبونة", en: "Lisbon", country: { ar: "البرتغال", en: "Portugal" } },
  { slug: "rome", ar: "روما", en: "Rome", country: { ar: "إيطاليا", en: "Italy" } },
  { slug: "milan", ar: "ميلانو", en: "Milan", country: { ar: "إيطاليا", en: "Italy" } },
  { slug: "berlin", ar: "برلين", en: "Berlin", country: { ar: "ألمانيا", en: "Germany" } },
  { slug: "brussels", ar: "بروكسل", en: "Brussels", country: { ar: "بلجيكا", en: "Belgium" } },
  { slug: "budapest", ar: "بودابست", en: "Budapest", country: { ar: "المجر", en: "Hungary" } },
  { slug: "los-angeles", ar: "لوس أنجلس", en: "Los Angeles", country: { ar: "الولايات المتحدة", en: "United States" } },
  { slug: "prague", ar: "براغ", en: "Prague", country: { ar: "التشيك", en: "Czechia" } },
  { slug: "vienna", ar: "فيينا", en: "Vienna", country: { ar: "النمسا", en: "Austria" } },
  { slug: "stockholm", ar: "ستوكهولم", en: "Stockholm", country: { ar: "السويد", en: "Sweden" } },
  { slug: "paris", ar: "باريس", en: "Paris", country: { ar: "فرنسا", en: "France" } },
  { slug: "dusseldorf", ar: "دوسلدورف", en: "Düsseldorf", country: { ar: "ألمانيا", en: "Germany" } },
  { slug: "athens", ar: "أثينا", en: "Athens", country: { ar: "اليونان", en: "Greece" } },
  { slug: "amsterdam", ar: "أمستردام", en: "Amsterdam", country: { ar: "هولندا", en: "Netherlands" } },
  { slug: "copenhagen", ar: "كوبنهاجن", en: "Copenhagen", country: { ar: "الدنمارك", en: "Denmark" } },
  { slug: "dubai", ar: "دبي", en: "Dubai", country: { ar: "الإمارات", en: "UAE" }, image: "/images/photos/1728666238.jpeg", featured: true },
  { slug: "amman", ar: "عمان", en: "Amman", country: { ar: "الأردن", en: "Jordan" } },
  { slug: "casablanca", ar: "الدار البيضاء", en: "Casablanca", country: { ar: "المغرب", en: "Morocco" } },
  { slug: "marrakech", ar: "مراكش", en: "Marrakech", country: { ar: "المغرب", en: "Morocco" } },
  { slug: "agadir", ar: "أغادير", en: "Agadir", country: { ar: "المغرب", en: "Morocco" } },
  { slug: "tangier", ar: "طنجة", en: "Tangier", country: { ar: "المغرب", en: "Morocco" } },
  { slug: "tunis", ar: "تونس", en: "Tunis", country: { ar: "تونس", en: "Tunisia" } },
  { slug: "cairo", ar: "القاهرة", en: "Cairo", country: { ar: "مصر", en: "Egypt" } },
  { slug: "sharm-el-sheikh", ar: "شرم الشيخ", en: "Sharm El Sheikh", country: { ar: "مصر", en: "Egypt" } },
  { slug: "kuala-lumpur", ar: "كوالالمبور", en: "Kuala Lumpur", country: { ar: "ماليزيا", en: "Malaysia" } },
  { slug: "ankara", ar: "أنقرة", en: "Ankara", country: { ar: "تركيا", en: "Turkey" } },
  { slug: "istanbul", ar: "اسطنبول", en: "Istanbul", country: { ar: "تركيا", en: "Turkey" } },
  { slug: "jeddah", ar: "جدة", en: "Jeddah", country: { ar: "السعودية", en: "Saudi Arabia" } },
  { slug: "bangor", ar: "شمال ويلز، بانجور", en: "Bangor, North Wales", country: { ar: "المملكة المتحدة", en: "United Kingdom" } },
  { slug: "malaga", ar: "ملقا", en: "Málaga", country: { ar: "إسبانيا", en: "Spain" } },
  { slug: "munich", ar: "ميونخ", en: "Munich", country: { ar: "ألمانيا", en: "Germany" } },
  { slug: "sheffield", ar: "شفيلد", en: "Sheffield", country: { ar: "المملكة المتحدة", en: "United Kingdom" } },
  { slug: "abu-dhabi", ar: "أبوظبي", en: "Abu Dhabi", country: { ar: "الإمارات", en: "UAE" } },
  { slug: "oxford", ar: "أكسفورد", en: "Oxford", country: { ar: "المملكة المتحدة", en: "United Kingdom" } },
  { slug: "phuket", ar: "بوكيت", en: "Phuket", country: { ar: "تايلاند", en: "Thailand" } },
  { slug: "muscat", ar: "مسقط", en: "Muscat", country: { ar: "عُمان", en: "Oman" } },
  { slug: "riyadh", ar: "الرياض", en: "Riyadh", country: { ar: "السعودية", en: "Saudi Arabia" } },
  { slug: "doha", ar: "الدوحة", en: "Doha", country: { ar: "قطر", en: "Qatar" } },
  { slug: "dammam", ar: "الدمام", en: "Dammam", country: { ar: "السعودية", en: "Saudi Arabia" } },
];

export const featuredCities = cities.filter((c) => c.image);

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
