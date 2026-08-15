export type NavChild = { key: string; href: string };
export type NavItem = { key: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { key: "home", href: "" },
  {
    key: "about",
    href: "/about",
    children: [
      { key: "aboutOverview", href: "/about" },
      { key: "vision", href: "/about/vision" },
      { key: "services", href: "/about/services" },
      { key: "scopeOfWork", href: "/about/scope-of-work" },
      { key: "staff", href: "/about/staff" },
      { key: "advisoryBoard", href: "/about/advisory-board" },
    ],
  },
  { key: "courses", href: "/courses" },
  { key: "diplomas", href: "/diplomas" },
  { key: "masters", href: "/masters" },
  { key: "cities", href: "/cities" },
  { key: "consultations", href: "/consultations" },
  { key: "contact", href: "/contact" },
];
