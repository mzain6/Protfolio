import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wrench,
  GraduationCap,
  Award
} from "lucide-react";

export const contactInfo = {
  name: "Muhammad Zain Farrukh",
  title: "AI & Machine Learning Engineer",
  email: "mz2456654@gmail.com",
  phone: "+92 321-8832033",
  location: "Lahore, Pakistan",
  github: "mzain6",
  linkedin: "mzain6"
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/mzain6" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mzain6" },
  { label: "Email", href: "mailto:mz2456654@gmail.com" },
  { label: "Phone", href: "tel:+923218832033" }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["YOLOv5/v8", "Computer Vision", "OpenCV", "Scikit-learn", "PyTorch", "SVM", "Random Forest", "LSTM", "Transformers", "NLP", "TF-IDF", "Diffusion Models"]
  },
  {
    title: "Data & ML Ops",
    icon: Cpu,
    skills: ["Pandas", "NumPy", "Matplotlib", "Feature Engineering", "Data Preprocessing", "Model Evaluation", "Hyperparameter Tuning", "CUDA"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["FastAPI", "Django REST Framework", "Flask", "REST API Design", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "Automation & LLMs",
    icon: Bot,
    skills: ["n8n", "Open-source GPT Models", "LLM Integration", "Webhooks", "JSON Pipelines", "Android Accessibility Service", "ADB"]
  },
  {
    title: "Cloud & Tools",
    icon: Terminal,
    skills: ["AWS (Cloud Foundations)", "Git", "Docker (basic)", "VS Code", "UML"]
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C++", "Dart", "Java", "C", "TypeScript", "JavaScript"]
  },
  {
    title: "Frontend / Mobile",
    icon: Globe2,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Flutter"]
  }
];

export const projects = [
  {
    title: "Crypto Sentry",
    description:
      "Full-stack crypto monitoring platform supporting email/password and Google OAuth, live CoinGecko ingestion, watchlist management, flash-movement alerts, and custom dashboarding.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "CoinGecko API", "Framer Motion", "Resend"],
    codeHref: "https://github.com/mzain6/Crypto-Sentry",
    liveHref: "https://crypto-sentry-mikz.vercel.app",
    icon: ShieldCheck
  },
  {
    title: "Spotify Automation Bot",
    description:
      "End-to-end Android automation system controlling multiple Android devices from a React dashboard with real-time WebSocket command dispatch and independent per-device result tracking.",
    tech: ["FastAPI", "WebSocket", "SQLite", "React", "ADB", "Java", "Android Accessibility"],
    codeHref: "https://github.com/mzain6/Spotify-Automation",
    liveHref: "#",
    icon: Smartphone
  },
  {
    title: "Multi-Stream PPE Detection",
    description:
      "Production computer vision system processing 50 concurrent RTSP streams at 40 FPS on GPU infrastructure for active construction sites in KSA and Bahrain.",
    tech: ["YOLOv8", "YOLOv5", "OpenCV", "RTSP", "Python", "GPU Inference"],
    codeHref: "https://github.com/mzain6/PPE-Detection",
    liveHref: "#",
    icon: Cpu
  },
  {
    title: "Upwork Job Monitor Bot",
    description:
      "Asynchronous Python Discord bot monitoring Upwork's internal GraphQL API for real-time job discovery, bypassing Cloudflare anti-bot protections with curl_cffi and SeleniumBase.",
    tech: ["Python", "asyncio", "curl_cffi", "SeleniumBase", "SQLite", "Discord API"],
    codeHref: "https://github.com/mzain6/Discord-Bot",
    liveHref: "#",
    icon: Network
  },
  {
    title: "HillSafe AI",
    description:
      "Collaborative landslide and disaster prediction and management platform with a Flutter mobile frontend, Django REST Framework backend, and real-time geospatial hazard alerts.",
    tech: ["Flutter", "Django", "Firebase", "PostgreSQL", "Machine Learning", "REST APIs"],
    codeHref: "https://github.com/syedhasht/HillSafe-Ai",
    liveHref: "#",
    icon: Layers3
  },
  {
    title: "Tutor LLM RAG Application",
    description:
      "RAG-based tutoring assistant enabling syllabus upload and contextual Q&A using Ollama (Llama 3.2), local embeddings, and ChromaDB vector search.",
    tech: ["ChromaDB", "Ollama", "FastAPI", "React", "Vite", "LLM", "RAG"],
    codeHref: "https://github.com/mzain6/Tutor-LLM",
    liveHref: "#",
    icon: BrainCircuit
  },
  {
    title: "n8n Workflow Automation",
    description:
      "AI-powered automation pipelines for lead capture, appointment scheduling, CRM updates, and customer support using n8n node systems.",
    tech: ["n8n", "Webhooks", "JSON", "REST APIs"],
    codeHref: "#",
    liveHref: "#",
    icon: Bot
  },
  {
    title: "Diabetes Prediction System",
    description:
      "Machine learning classification model built on SVM achieving 80% accuracy for early diabetes risk prediction using clinical features.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "SVM"],
    codeHref: "https://github.com/mzain6/sugar-sense-react",
    liveHref: "#",
    icon: Wrench
  },
  {
    title: "Fake News Detection",
    description:
      "NLP text classification model designed for identifying potentially misleading news content utilizing TF-IDF vectorisation and supervised classifiers.",
    tech: ["NLP", "Python", "Scikit-learn", "TF-IDF", "Random Forest"],
    codeHref: "https://github.com/mzain6/Fake-News-detection-using-NLP",
    liveHref: "#",
    icon: GitBranch
  }
];

export const experience = [
  {
    role: "Automation Engineer Intern",
    company: "Bitbash",
    duration: "Apr 2026 - Jun 2026",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed an asynchronous Python Discord bot monitoring Upwork's internal GraphQL API for keyword-specific jobs in real time, using asyncio, curl_cffi, and SeleniumBase to bypass Cloudflare anti-bot protections.",
      "Built Crypto Sentry, a full-stack cryptocurrency monitoring platform (Next.js, PostgreSQL, Prisma, Auth.js) with live CoinGecko ingestion, watchlist management, flash-movement alerts, and dark terminal-style dashboard.",
      "Developed Spotify Automation Bot - end-to-end Android automation via Java Accessibility Service, FastAPI WebSocket backend, and React dashboard for remote multi-device Spotify control.",
      "Implemented SQLite-based persistence and dynamically routed formatted job alerts to dedicated Discord channels."
    ]
  },
  {
    role: "AI/ML Engineer (Freelance)",
    company: "PPE Detection System",
    duration: "2026",
    location: "Remote",
    bullets: [
      "Engineered a production-grade PPE detection system using YOLOv8, handling 50 concurrent RTSP streams at 40 FPS on GPU infrastructure - deployed at active construction sites in Dammam (KSA) and Bahrain.",
      "Trained custom YOLOv5/YOLOv8 models on annotated safety datasets using transfer learning; benchmarked variants for speed-accuracy trade-offs and optimised GPU inference for real-time multi-stream processing."
    ]
  },
  {
    role: "React Developer",
    company: "DevSaga",
    duration: "Sep 2023 - Mar 2024",
    location: "Lahore, Pakistan",
    bullets: [
      "Built reusable UI component libraries in React.js (ES6+) integrated with REST APIs, reducing frontend development time.",
      "Optimised component lifecycle and state management, improving rendering performance and reducing UI latency.",
      "Participated in full agile sprint cycles - planning, development, code review, and deployment - using Git."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Central Punjab",
    location: "Lahore, Pakistan",
    duration: "Oct 2022 - Present (Final Semester)"
  }
];

export const certifications = [
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI / Coursera",
    link: "https://coursera.org/share/c4830b495925a7d76cc868ad99ba6b80",
    icon: Award
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services",
    link: "https://credly.com/badges/c2a82fbc-dc6e-4bad-a1e5-9407db9c3f65/public_url",
    icon: GraduationCap
  }
];

export const stats = [
  { label: "RTSP CAMERAS DEPLOYED", value: "50" },
  { label: "STREAM SPEED / THROUGHPUT", value: "40 FPS" },
  { label: "SYSTEM EXPERIENCE CYCLE", value: "~1 Year" }
];
