import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "nl" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  nl: {
    "nav.home": "Home",
    "nav.services": "Diensten",
    "nav.projects": "Projecten",
    "nav.about": "Over ons",
    "nav.contact": "Contact",
    "nav.discord": "Discord",
    "nav.lang": "Taal",
    "nav.menu": "Menu openen",

    "hero.eyebrow": "Modern software studio",
    "hero.title": "Moderne software, goed gebouwd.",
    "hero.subtitle":
      "ForgeByte ontwikkelt moderne websites, automatiseringen, Discord bots en custom software met strakke UI, betrouwbare prestaties en sterke gebruikerservaring.",
    "hero.cta.services": "Bekijk diensten",
    "hero.cta.discord": "Join Discord",

    "services.eyebrow": "Wat we doen",
    "services.title": "Diensten gebouwd op kwaliteit",
    "services.subtitle":
      "Van concept tot implementatie — we leveren software die werkt zoals bedoeld.",
    "services.web.title": "Website ontwikkeling",
    "services.web.desc": "Moderne, snelle en SEO-vriendelijke websites op maat gebouwd.",
    "services.bot.title": "Discord bot development",
    "services.bot.desc": "Krachtige bots met custom commands, moderatie en integraties.",
    "services.custom.title": "Custom software",
    "services.custom.desc": "Op maat gemaakte software die exact past bij jouw workflow.",
    "services.auto.title": "Automatisering",
    "services.auto.desc": "Bespaar tijd met betrouwbare scripts en automatiseringsflows.",
    "services.backend.title": "Backend systemen",
    "services.backend.desc": "Schaalbare API's, databases en cloud-architectuur.",
    "services.uiux.title": "UI/UX design",
    "services.uiux.desc": "Strakke, toegankelijke interfaces die converteren.",

    "why.eyebrow": "Waarom ForgeByte",
    "why.title": "Gebouwd op vertrouwen en vakmanschap",
    "why.subtitle":
      "We combineren moderne technologie met heldere communicatie en professionele uitvoering.",
    "why.ui": "Strakke UI/UX",
    "why.uiDesc": "Doordachte interfaces met focus op gebruiksgemak.",
    "why.reliable": "Betrouwbare software",
    "why.reliableDesc": "Geteste, schaalbare code die niet stuk gaat.",
    "why.comm": "Snelle communicatie",
    "why.commDesc": "Korte lijnen, duidelijke updates, geen ruis.",
    "why.custom": "Maatwerk oplossingen",
    "why.customDesc": "Elke regel code is afgestemd op jouw doel.",
    "why.modern": "Moderne technologie",
    "why.modernDesc": "Een stack die toekomstbestendig is.",
    "why.workflow": "Professionele workflow",
    "why.workflowDesc": "Versiebeheer, reviews en gestructureerde levering.",

    "projects.eyebrow": "Werk",
    "projects.title": "Geselecteerde projecten",
    "projects.subtitle": "Een blik op recent werk en open-source projecten.",
    "projects.viewGithub": "Bekijk op GitHub",
    "projects.p1.title": "Atlas Dashboard",
    "projects.p1.desc": "Realtime analytics dashboard met SSR en edge data.",
    "projects.p2.title": "Bolt Bot",
    "projects.p2.desc": "Discord bot met moderatie, tickets en custom commands.",
    "projects.p3.title": "Flow Automate",
    "projects.p3.desc": "Workflow automation engine met visuele node editor.",
    "projects.p4.title": "Forge CMS",
    "projects.p4.desc": "Headless CMS gebouwd voor developers, niet voor managers.",

    "who.eyebrow": "Het team",
    "who.title": "Wie zijn wij?",
    "who.subtitle": "De founders achter ForgeByte.",
    "who.expand": "Meer info",
    "who.collapse": "Minder",
    "who.skills": "Skills",
    "who.tech": "Technologieën",
    "who.interests": "Interesses",
    "who.style": "Werkwijze",
    "who.personality": "Persoonlijkheid",

    "founder.milan.role": "Co-founder & Full-stack Developer",
    "founder.milan.short": "Bouwt schaalbare backend systemen en strakke frontends.",
    "founder.milan.long":
      "Milan houdt van diepe technische vraagstukken en het bouwen van robuuste systemen. Hij combineert strakke architectuur met oog voor detail in de UI.",
    "founder.milan.skills": "Architectuur, API design, performance optimization, DevOps",
    "founder.milan.tech": "TypeScript, Node.js, PostgreSQL, Docker, AWS",
    "founder.milan.interests": "Open source, system design, lo-fi productiviteit",
    "founder.milan.style": "Gestructureerd, iteratief, met focus op lange termijn",
    "founder.milan.personality": "Rustig, analytisch en betrouwbaar",

    "founder.tijn.role": "Co-founder & Product Engineer",
    "founder.tijn.short": "Verbindt design, product en code tot één geheel.",
    "founder.tijn.long":
      "Tijn werkt op het snijvlak van design en engineering. Hij vertaalt ideeën naar concrete producten en zorgt dat alles intuïtief aanvoelt.",
    "founder.tijn.skills": "Product design, frontend, UX, prototyping",
    "founder.tijn.tech": "React, TanStack, Tailwind, Figma, Framer",
    "founder.tijn.interests": "Design systems, typografie, indie SaaS",
    "founder.tijn.style": "Snel itereren, vroeg shippen, scherp verfijnen",
    "founder.tijn.personality": "Creatief, energiek en pragmatisch",

    "about.eyebrow": "Over ForgeByte",
    "about.title": "Een moderne software studio",
    "about.p1":
      "ForgeByte is een moderne software startup gericht op het bouwen van kwalitatieve digitale oplossingen. We combineren strak design, betrouwbare technologie en heldere communicatie om software te leveren die werkt zoals bedoeld.",
    "about.p2":
      "We hechten waarde aan professionaliteit, kwaliteit en moderne ontwikkelpraktijken — terwijl we een creatieve en plezierige werkcultuur behouden.",

    "contact.eyebrow": "Neem contact op",
    "contact.title": "Laten we iets goeds bouwen",
    "contact.subtitle": "Een vraag of project? We horen graag van je.",
    "contact.copy": "Kopieer",
    "contact.copied": "Gekopieerd",
    "contact.open": "Open",
    "contact.email": "E-mail",
    "contact.github": "GitHub",
    "contact.discord": "Discord",

    "footer.tagline": "Moderne software, goed gebouwd.",
    "footer.legal": "Bedrijfsgegevens",
    "footer.kvk": "KVK",
    "footer.btw": "BTW",
    "footer.soon": "Binnenkort",
    "footer.rights": "Alle rechten voorbehouden.",
    "footer.nav": "Navigatie",
    "footer.connect": "Connect",

    "cookie.title": "We respecteren je privacy",
    "cookie.desc":
      "We gebruiken cookies om de site te verbeteren en analytics te draaien. Jij bepaalt wat we mogen gebruiken.",
    "cookie.accept": "Accepteren",
    "cookie.reject": "Weigeren",
    "cookie.prefs": "Voorkeuren",
    "cookie.save": "Opslaan",
    "cookie.essential": "Essentieel",
    "cookie.essentialDesc": "Noodzakelijk voor de werking van de site.",
    "cookie.analytics": "Analytics",
    "cookie.analyticsDesc": "Anoniem inzicht in gebruik.",
    "cookie.marketing": "Marketing",
    "cookie.marketingDesc": "Voor gerichte communicatie.",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.discord": "Discord",
    "nav.lang": "Language",
    "nav.menu": "Open menu",

    "hero.eyebrow": "Modern software studio",
    "hero.title": "Modern software solutions built properly.",
    "hero.subtitle":
      "ForgeByte develops modern websites, automation tools, Discord bots and custom software solutions with clean UI, reliable performance and strong user experience.",
    "hero.cta.services": "View Services",
    "hero.cta.discord": "Join Discord",

    "services.eyebrow": "What we do",
    "services.title": "Services built on quality",
    "services.subtitle":
      "From concept to deployment — we ship software that works exactly as intended.",
    "services.web.title": "Website Development",
    "services.web.desc": "Modern, fast and SEO-friendly websites tailored to your brand.",
    "services.bot.title": "Discord Bot Development",
    "services.bot.desc": "Powerful bots with custom commands, moderation and integrations.",
    "services.custom.title": "Custom Software",
    "services.custom.desc": "Bespoke software shaped exactly to your workflow.",
    "services.auto.title": "Automation Solutions",
    "services.auto.desc": "Save hours with reliable scripts and automation flows.",
    "services.backend.title": "Backend Systems",
    "services.backend.desc": "Scalable APIs, databases and cloud architecture.",
    "services.uiux.title": "UI/UX Design",
    "services.uiux.desc": "Clean, accessible interfaces that convert.",

    "why.eyebrow": "Why ForgeByte",
    "why.title": "Built on trust and craft",
    "why.subtitle":
      "We pair modern technology with clear communication and professional delivery.",
    "why.ui": "Clean UI/UX",
    "why.uiDesc": "Thoughtful interfaces focused on usability.",
    "why.reliable": "Reliable software",
    "why.reliableDesc": "Tested, scalable code that doesn't break.",
    "why.comm": "Fast communication",
    "why.commDesc": "Short lines, clear updates, no noise.",
    "why.custom": "Custom solutions",
    "why.customDesc": "Every line tailored to your goal.",
    "why.modern": "Modern technologies",
    "why.modernDesc": "A stack that's future-proof.",
    "why.workflow": "Professional workflow",
    "why.workflowDesc": "Version control, reviews, structured delivery.",

    "projects.eyebrow": "Work",
    "projects.title": "Selected projects",
    "projects.subtitle": "A look at recent work and open-source projects.",
    "projects.viewGithub": "View on GitHub",
    "projects.p1.title": "Atlas Dashboard",
    "projects.p1.desc": "Realtime analytics dashboard with SSR and edge data.",
    "projects.p2.title": "Bolt Bot",
    "projects.p2.desc": "Discord bot with moderation, tickets and custom commands.",
    "projects.p3.title": "Flow Automate",
    "projects.p3.desc": "Workflow automation engine with a visual node editor.",
    "projects.p4.title": "Forge CMS",
    "projects.p4.desc": "Headless CMS built for developers, not managers.",

    "who.eyebrow": "The team",
    "who.title": "Who are we?",
    "who.subtitle": "The founders behind ForgeByte.",
    "who.expand": "More info",
    "who.collapse": "Less",
    "who.skills": "Skills",
    "who.tech": "Technologies",
    "who.interests": "Interests",
    "who.style": "Work style",
    "who.personality": "Personality",

    "founder.milan.role": "Co-founder & Full-stack Developer",
    "founder.milan.short": "Builds scalable backend systems and clean frontends.",
    "founder.milan.long":
      "Milan loves deep technical problems and building robust systems. He pairs strict architecture with attention to UI detail.",
    "founder.milan.skills": "Architecture, API design, performance optimization, DevOps",
    "founder.milan.tech": "TypeScript, Node.js, PostgreSQL, Docker, AWS",
    "founder.milan.interests": "Open source, system design, lo-fi productivity",
    "founder.milan.style": "Structured, iterative, with a long-term focus",
    "founder.milan.personality": "Calm, analytical and dependable",

    "founder.tijn.role": "Co-founder & Product Engineer",
    "founder.tijn.short": "Connects design, product and code into one whole.",
    "founder.tijn.long":
      "Tijn works at the intersection of design and engineering. He turns ideas into shippable products and makes sure everything feels intuitive.",
    "founder.tijn.skills": "Product design, frontend, UX, prototyping",
    "founder.tijn.tech": "React, TanStack, Tailwind, Figma, Framer",
    "founder.tijn.interests": "Design systems, typography, indie SaaS",
    "founder.tijn.style": "Fast iteration, early shipping, sharp polishing",
    "founder.tijn.personality": "Creative, energetic and pragmatic",

    "about.eyebrow": "About ForgeByte",
    "about.title": "A modern software studio",
    "about.p1":
      "ForgeByte is a modern software startup focused on building high-quality digital solutions. We combine clean design, reliable technology and strong communication to deliver software that works exactly as intended.",
    "about.p2":
      "We value professionalism, quality and modern development practices while keeping a creative and enjoyable work culture.",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Let's build something great",
    "contact.subtitle": "Have a question or a project? We'd love to hear from you.",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.open": "Open",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.discord": "Discord",

    "footer.tagline": "Modern software, built properly.",
    "footer.legal": "Company details",
    "footer.kvk": "KVK",
    "footer.btw": "VAT",
    "footer.soon": "Coming soon",
    "footer.rights": "All rights reserved.",
    "footer.nav": "Navigation",
    "footer.connect": "Connect",

    "cookie.title": "We respect your privacy",
    "cookie.desc":
      "We use cookies to improve the site and run analytics. You decide what we may use.",
    "cookie.accept": "Accept",
    "cookie.reject": "Reject",
    "cookie.prefs": "Preferences",
    "cookie.save": "Save",
    "cookie.essential": "Essential",
    "cookie.essentialDesc": "Required for the site to function.",
    "cookie.analytics": "Analytics",
    "cookie.analyticsDesc": "Anonymous usage insight.",
    "cookie.marketing": "Marketing",
    "cookie.marketingDesc": "For targeted communication.",
  },
};

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("fb_lang") as Lang | null;
      if (stored === "nl" || stored === "en") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("fb_lang", l);
    } catch {}
  };

  const t = (key: string) => translations[lang][key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
