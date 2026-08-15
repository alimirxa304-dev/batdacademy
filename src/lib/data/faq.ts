export type FaqItem = { q: { ar: string; en: string }; a: { ar: string; en: string } };
export type FaqGroup = { title: { ar: string; en: string }; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    title: { ar: "أسئلة عامة", en: "General Questions" },
    items: [
      {
        q: { ar: "ما هي الأكاديمية البريطانية للتدريب والتطوير؟", en: "What is the British Academy for Training and Development?" },
        a: {
          ar: "الأكاديمية البريطانية للتدريب والتطوير (BATD) هي مؤسسة تدريبية رائدة تقدم دورات مهنية في مختلف القطاعات، بما في ذلك الإدارة والقيادة والموارد البشرية والمالية والتسويق وغيرها.",
          en: "The British Academy for Training and Development (BATD) is a leading training institution delivering professional courses across sectors including management, leadership, HR, finance, marketing and more.",
        },
      },
      {
        q: { ar: "أين تقع الأكاديمية؟", en: "Where is the Academy located?" },
        a: {
          ar: "لدينا تواجد في العديد من المدن حول العالم، بما في ذلك لندن ومانشستر ودبي والرياض ونيويورك، وتُعقد برامجنا التدريبية في مواقع متميزة داخل هذه المدن.",
          en: "We deliver programmes in cities across the world including London, Manchester, Dubai, Riyadh and New York, hosted at premium training venues in each location.",
        },
      },
      {
        q: { ar: "ما هي أنواع الدورات التي تقدمونها؟", en: "What types of courses do you offer?" },
        a: {
          ar: "نقدم مجموعة واسعة من الدورات في الإدارة والقيادة، الموارد البشرية، المالية والمحاسبة، التسويق الرقمي، مكافحة غسل الأموال والامتثال، العقود والمشتريات، التدريب الطبي والصحي، وإدارة المشاريع.",
          en: "We offer a broad range of courses in management and leadership, HR, finance and accounting, digital marketing, AML and compliance, contracts and procurement, medical and healthcare training, and project management.",
        },
      },
      {
        q: { ar: "ما الذي يميز الأكاديمية البريطانية عن غيرها؟", en: "What sets the British Academy apart?" },
        a: {
          ar: "مدربون خبراء ذوو خبرة عملية حقيقية، برامج معترف بها في مختلف الصناعات، دورات تُعقد في أماكن تدريب متميزة حول العالم، وحلول تدريبية مخصصة للعملاء من الشركات.",
          en: "Expert trainers with genuine field experience, industry-recognised programmes, courses hosted at premium venues worldwide, and bespoke training solutions for corporate clients.",
        },
      },
    ],
  },
  {
    title: { ar: "التسجيل والالتحاق", en: "Registration & Enrolment" },
    items: [
      {
        q: { ar: "كيف يمكنني التسجيل في دورة تدريبية؟", en: "How do I register for a course?" },
        a: {
          ar: "يمكنك التسجيل من خلال زيارة صفحة التسجيل، اختيار الدورة المطلوبة، وملء نموذج التسجيل. كما يمكنك التواصل مع فريق الدعم للحصول على المساعدة.",
          en: "You can register by visiting the registration page, selecting your desired course and completing the registration form — or contact our support team for assistance.",
        },
      },
      {
        q: { ar: "هل تقدمون برامج تدريبية للشركات؟", en: "Do you offer corporate training programmes?" },
        a: {
          ar: "نعم، نقدم حلول تدريبية مخصصة للشركات وفقاً لاحتياجاتها، ويمكن تقديم هذه البرامج في مقر الشركة أو في أحد مراكزنا التدريبية.",
          en: "Yes — we design bespoke training solutions for organisations, delivered either on-site at your company or at one of our training centres.",
        },
      },
      {
        q: { ar: "هل تقدمون شهادات بعد انتهاء الدورة؟", en: "Do you provide certificates on completion?" },
        a: {
          ar: "نعم، يحصل المشاركون على شهادة إتمام من الأكاديمية البريطانية للتدريب والتطوير عند اجتياز الدورة بنجاح.",
          en: "Yes — participants receive a certificate of completion from the British Academy upon successfully finishing the course.",
        },
      },
    ],
  },
  {
    title: { ar: "الرسوم والدفع", en: "Fees & Payment" },
    items: [
      {
        q: { ar: "ما هي طرق الدفع التي تقبلونها؟", en: "What payment methods do you accept?" },
        a: {
          ar: "نقبل بطاقات الائتمان/الخصم، التحويلات المصرفية، PayPal، والفوترة للشركات لبرامج التدريب الممولة من الشركات.",
          en: "We accept credit/debit cards, bank transfers, PayPal, and corporate invoicing for company-funded training.",
        },
      },
      {
        q: { ar: "هل تقدمون خصومات على التسجيلات الجماعية؟", en: "Do you offer group discounts?" },
        a: {
          ar: "نعم، نقدم خصومات على التسجيلات الجماعية. يُرجى التواصل معنا لمعرفة تفاصيل الخصومات الخاصة بالمجموعات والشركات.",
          en: "Yes — we offer discounts for group registrations. Contact us for details on group and corporate pricing.",
        },
      },
    ],
  },
  {
    title: { ar: "طرق التدريب والمواد الدراسية", en: "Delivery & Course Materials" },
    items: [
      {
        q: { ar: "أين تُعقد الجلسات التدريبية؟", en: "Where are training sessions held?" },
        a: {
          ar: "تُعقد دوراتنا في أماكن متميزة في مختلف المدن حول العالم، بما في ذلك الفنادق ومراكز المؤتمرات والمكاتب التجارية.",
          en: "Our courses are hosted at premium venues in cities worldwide, including hotels, conference centres and business offices.",
        },
      },
      {
        q: { ar: "ما هي اللغات التي يتم تقديم الدورات بها؟", en: "What languages are courses delivered in?" },
        a: {
          ar: "يتم تقديم معظم دوراتنا باللغة العربية والإنجليزية، كما نوفر التدريب بلغات أخرى مثل الفرنسية عند الطلب.",
          en: "Most of our courses are delivered in Arabic and English, with additional languages such as French available on request.",
        },
      },
    ],
  },
];
