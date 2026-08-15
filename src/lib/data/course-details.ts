type Bi = { ar: string; en: string };

export type CourseDetail = {
  overview: Bi;
  targetAudience: Bi[];
  objectives: Bi[];
  modules: Bi[];
};

export const courseDetails: Record<number, CourseDetail> = {
  3439: {
    overview: {
      ar: "تتزايد أهمية المشتريات المستدامة مع تصاعد الضغوط البيئية والتنظيمية على المؤسسات في جميع القطاعات. تقدم هذه الدورة إطاراً عملياً لدمج معايير الاستدامة في دورة المشتريات الكاملة، من اختيار الموردين إلى تقييم الأداء، بما يوازن بين الكفاءة التشغيلية والمسؤولية البيئية والاجتماعية.",
      en: "Sustainable procurement is becoming a core requirement as environmental and regulatory pressure grows across every sector. This course gives a practical framework for embedding sustainability criteria across the full procurement cycle — from supplier selection to performance evaluation — balancing operational efficiency with environmental and social responsibility.",
    },
    targetAudience: [
      { ar: "مسؤولو ومديرو المشتريات والتوريد", en: "Procurement and supply chain managers" },
      { ar: "فرق إدارة العقود والموردين", en: "Contract and supplier management teams" },
      { ar: "مسؤولو الاستدامة والمسؤولية المؤسسية", en: "Sustainability and CSR officers" },
    ],
    objectives: [
      { ar: "دمج معايير الاستدامة في سياسات المشتريات", en: "Embed sustainability criteria into procurement policy" },
      { ar: "تقييم الموردين وفق معايير بيئية واجتماعية", en: "Evaluate suppliers against environmental and social criteria" },
      { ar: "قياس أثر المشتريات المستدامة على الأداء المؤسسي", en: "Measure the institutional impact of sustainable procurement" },
    ],
    modules: [
      { ar: "أساسيات المشتريات المستدامة", en: "Fundamentals of Sustainable Procurement" },
      { ar: "معايير اختيار وتقييم الموردين", en: "Supplier Selection & Evaluation Criteria" },
      { ar: "إدارة المخاطر في سلسلة التوريد", en: "Supply Chain Risk Management" },
      { ar: "معايير ESG وتطبيقاتها العملية", en: "ESG Standards in Practice" },
      { ar: "قياس الأثر وإعداد التقارير", en: "Impact Measurement & Reporting" },
    ],
  },
  1006: {
    overview: {
      ar: "دورة تأسيسية تمنح المشاركين الأدوات والمنهجيات العملية لإدارة المشاريع من التخطيط إلى التسليم، وفق أفضل الممارسات الدولية، مع التركيز على التطبيق العملي عبر دراسات حالة واقعية.",
      en: "A foundational course equipping participants with practical tools and methodologies for managing projects from initiation through delivery, aligned with international best practice and grounded in real case studies.",
    },
    targetAudience: [
      { ar: "مديرو ومنسقو المشاريع الجدد", en: "New and aspiring project managers" },
      { ar: "قادة الفرق التنفيذية", en: "Team leads and delivery coordinators" },
      { ar: "الموظفون المكلفون بمشاريع داخلية", en: "Staff assigned to internal project initiatives" },
    ],
    objectives: [
      { ar: "تطبيق دورة حياة المشروع من البداية للتسليم", en: "Apply the full project lifecycle from initiation to closure" },
      { ar: "إعداد خطط عمل وجداول زمنية واقعية", en: "Build realistic work plans and schedules" },
      { ar: "إدارة المخاطر والتغييرات أثناء التنفيذ", en: "Manage risk and change throughout execution" },
    ],
    modules: [
      { ar: "مبادئ إدارة المشاريع الحديثة", en: "Principles of Modern Project Management" },
      { ar: "تحديد النطاق والأهداف", en: "Scope & Objective Definition" },
      { ar: "التخطيط الزمني والموازنة", en: "Scheduling & Budgeting" },
      { ar: "إدارة المخاطر والمشتريات", en: "Risk & Procurement Management" },
      { ar: "المتابعة والإغلاق الفعّال للمشروع", en: "Monitoring & Effective Project Closure" },
    ],
  },
  3348: {
    overview: {
      ar: "برنامج احترافي مكثف يؤهل المشاركين لقيادة أنظمة الحوكمة وإدارة المخاطر والالتزام داخل مؤسساتهم، بما يتوافق مع أحدث الأطر الدولية ومتطلبات الجهات الرقابية.",
      en: "An intensive professional programme equipping participants to lead governance, risk and compliance functions within their organisations, aligned with current international frameworks and regulatory expectations.",
    },
    targetAudience: [
      { ar: "مسؤولو الحوكمة والامتثال", en: "Governance and compliance officers" },
      { ar: "مديرو إدارة المخاطر المؤسسية", en: "Enterprise risk management leads" },
      { ar: "أعضاء مجالس الإدارة ولجان التدقيق", en: "Board members and audit committee members" },
    ],
    objectives: [
      { ar: "بناء إطار حوكمة مؤسسي متكامل", en: "Build an integrated institutional governance framework" },
      { ar: "تصميم برنامج امتثال فعّال", en: "Design an effective compliance programme" },
      { ar: "تقييم ومعالجة المخاطر المؤسسية الحرجة", en: "Assess and mitigate critical enterprise risk" },
    ],
    modules: [
      { ar: "أطر الحوكمة الدولية", en: "International Governance Frameworks" },
      { ar: "بناء وظيفة الامتثال المؤسسي", en: "Building the Compliance Function" },
      { ar: "إدارة المخاطر المؤسسية الشاملة (ERM)", en: "Enterprise Risk Management (ERM)" },
      { ar: "دور مجلس الإدارة في الحوكمة", en: "The Board's Role in Governance" },
      { ar: "مكافحة الفساد والاحتيال المؤسسي", en: "Anti-Corruption & Fraud Prevention" },
      { ar: "التقارير الرقابية والإفصاح", en: "Regulatory Reporting & Disclosure" },
    ],
  },
  3718: {
    overview: {
      ar: "دورة متقدمة تركز على تحليل وتحسين أساليب العمل وإجراءاته داخل فرق العمل، بهدف رفع الكفاءة التشغيلية وتقليل الهدر وتحسين تجربة الموظف والعميل على حد سواء.",
      en: "An advanced course focused on analysing and improving working methods and team processes, aimed at raising operational efficiency, reducing waste, and improving both employee and customer experience.",
    },
    targetAudience: [
      { ar: "مديرو العمليات وتحسين الأداء", en: "Operations and performance-improvement managers" },
      { ar: "قادة فرق العمل متعددة الوظائف", en: "Cross-functional team leaders" },
      { ar: "مسؤولو التميز المؤسسي", en: "Institutional excellence officers" },
    ],
    objectives: [
      { ar: "تحليل إجراءات العمل الحالية وتحديد الفجوات", en: "Analyse current workflows and identify gaps" },
      { ar: "إعادة تصميم العمليات لرفع الكفاءة", en: "Redesign processes to raise efficiency" },
      { ar: "قيادة التغيير داخل فرق العمل", en: "Lead change management within teams" },
    ],
    modules: [
      { ar: "تحليل سير العمل ورسم خرائط العمليات", en: "Workflow Analysis & Process Mapping" },
      { ar: "منهجيات تحسين الأداء المستمر", en: "Continuous Improvement Methodologies" },
      { ar: "إدارة التغيير داخل فرق العمل", en: "Change Management Within Teams" },
      { ar: "قياس مؤشرات الأداء التشغيلي", en: "Operational KPI Measurement" },
    ],
  },
  3699: {
    overview: {
      ar: "رحلة تدريبية متخصصة لإعداد أمناء سر مجالس الإدارة، تغطي الجوانب القانونية والإجرائية والحوكمية للدور، وتؤهل المشاركين للتعامل باحترافية مع مجلس الإدارة والمساهمين والجهات الرقابية.",
      en: "A specialised training journey preparing board secretaries for the role's legal, procedural and governance dimensions — equipping participants to work professionally with the board, shareholders and regulators.",
    },
    targetAudience: [
      { ar: "أمناء سر مجالس الإدارة الحاليون والمرشحون", en: "Current and aspiring board secretaries" },
      { ar: "المستشارون القانونيون للشركات", en: "Corporate legal advisors" },
      { ar: "مسؤولو الحوكمة المؤسسية", en: "Corporate governance officers" },
    ],
    objectives: [
      { ar: "فهم الإطار القانوني لدور أمين سر المجلس", en: "Understand the legal framework of the board secretary role" },
      { ar: "إدارة اجتماعات المجلس ومحاضرها باحترافية", en: "Professionally manage board meetings and minutes" },
      { ar: "ضمان الامتثال لمتطلبات الإفصاح والحوكمة", en: "Ensure compliance with disclosure and governance requirements" },
    ],
    modules: [
      { ar: "الإطار القانوني لدور أمين سر المجلس", en: "Legal Framework of the Board Secretary Role" },
      { ar: "تنظيم وإدارة اجتماعات مجلس الإدارة", en: "Organising & Managing Board Meetings" },
      { ar: "إعداد محاضر الاجتماعات والقرارات", en: "Minute-Taking & Resolution Drafting" },
      { ar: "العلاقة بين المجلس والمساهمين", en: "Board–Shareholder Relations" },
    ],
  },
  3592: {
    overview: {
      ar: "برنامج قيادي متقدم يزود القادة بأدوات الاستشراف الاستراتيجي والقيادة التحويلية اللازمة لتوجيه مؤسساتهم عبر بيئات الأعمال المتغيرة وغير المؤكدة.",
      en: "An advanced leadership programme equipping leaders with strategic-foresight and transformational-leadership tools needed to steer their organisations through uncertain, fast-changing business environments.",
    },
    targetAudience: [
      { ar: "القيادات التنفيذية العليا", en: "Senior executive leadership" },
      { ar: "مديرو التخطيط الاستراتيجي", en: "Strategic planning directors" },
      { ar: "القادة المرشحون لأدوار تنفيذية أعلى", en: "Leaders preparing for higher executive roles" },
    ],
    objectives: [
      { ar: "تطبيق أدوات الاستشراف الاستراتيجي", en: "Apply strategic foresight tools" },
      { ar: "قيادة التحول المؤسسي بثقة", en: "Lead institutional transformation with confidence" },
      { ar: "بناء ثقافة تنظيمية مرنة وقابلة للتكيف", en: "Build a resilient, adaptive organisational culture" },
    ],
    modules: [
      { ar: "أساسيات القيادة التحويلية", en: "Foundations of Transformational Leadership" },
      { ar: "أدوات الاستشراف الاستراتيجي", en: "Strategic Foresight Tools" },
      { ar: "قيادة التغيير في البيئات المتقلبة", en: "Leading Change in Volatile Environments" },
      { ar: "بناء المرونة المؤسسية", en: "Building Organisational Resilience" },
    ],
  },
};

export function getFeeTiers(price: number) {
  return [
    { label: { ar: "عدد المشتركين: 1", en: "Number of subscribers: 1" }, price },
    { label: { ar: "عدد المشتركين: 2-3", en: "Number of subscribers: 2–3" }, price: Math.round((price * 0.8) / 10) * 10 },
    { label: { ar: "عدد المشتركين: +3", en: "Number of subscribers: 3+" }, price: Math.round((price * 0.62) / 10) * 10 },
  ];
}
