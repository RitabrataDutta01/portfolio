export const projects = [
  {
    id: 'crucible',
    title: 'Crucible',
    tagline: 'AI-Powered DAST Vulnerability Scanner',
    category: 'security',
    shortDesc: 'Multi-engine web vulnerability scanner with statistical SQLi detection, context-aware XSS analysis, and LLM-driven remediation reports.',
    description: `Crucible is a modular Dynamic Application Security Testing (DAST) framework that crawls target web applications, extracts attack surfaces, and runs multi-vector security tests — all with a statistical validation layer that dramatically reduces false positives.

Unlike traditional scanners that fire fixed payloads and grep responses, Crucible establishes behavioral baselines for each target before deciding anything is anomalous. Response-time jitter analysis for time-based SQLi, context detection before XSS payload selection, and UUID-tagged blind XSS callbacks make it a genuinely different approach to automation in security testing.`,
    techStack: ['Python', 'Flask', 'BeautifulSoup4', 'Threading', 'Gemini API', 'HTML/CSS/JS'],
    features: [
      'BFS site crawler with authenticated session state',
      'Statistical time-based SQLi detection with baseline jitter analysis',
      'Context-aware reflected XSS (body, attribute, script-block breakout)',
      'Blind XSS via UUID-tagged callback endpoints',
      'AI-assisted remediation reports via Gemini API',
      'Decoupled engine architecture (crawl → detect → report → remediate)',
    ],
    githubUrl: 'https://github.com/RitabrataDutta01/Crucible',
    downloadUrl: 'https://github.com/RitabrataDutta01/Crucible/releases/tag/v1.0.0',
    screenshot: null,
    stars: 1,
  },
  {
    id: 'vibeforge',
    title: 'VibeForge',
    tagline: 'Django HR Management System',
    category: 'web',
    shortDesc: 'Full-stack HRMS with employee management, attendance tracking, payroll, and leave approvals — built for a hackathon.',
    description: `VibeForge is a comprehensive HR Management System built during a hackathon by a team of four. It features dual dashboards for HR administrators and employees, covering the full employee lifecycle from onboarding to payroll.

The system includes role-specific views, attendance tracking with visual reports, a leave approval workflow, employee search, and dashboard analytics — all powered by Django's ORM with a SQLite backend.`,
    techStack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'HR dashboard with employee management and analytics',
      'Employee dashboard for attendance, leave, and payroll views',
      'Attendance tracking system',
      'Leave approval workflow',
      'Payroll management',
      'Employee search functionality',
      'User authentication and role-based access',
    ],
    githubUrl: 'https://github.com/RitabrataDutta01/VibeForge',
    downloadUrl: null,
    screenshot: null,
    stars: 2,
  },
  {
    id: 'breakpoint',
    title: 'Breakpoint — Sentinel',
    tagline: 'AI-Powered Workplace Simulation Platform',
    category: 'web',
    shortDesc: 'An AI-driven adaptive interviewer that simulates high-pressure professional conversations using a dynamic mood engine. Built for VibeForge 1.0 Hackathon.',
    description: `Sentinel is an AI-powered workplace simulation platform designed to prepare users for high-stakes professional conversations. Unlike traditional interview tools that ask predefined questions, Sentinel simulates realistic workplace interactions by dynamically adapting its behavior based on user responses.

Built for the VibeForge 1.0 Hackathon, the platform features a dynamic mood-engine AI interviewer that evaluates responses in real-time and shifts between emotional states (professional, skeptical, hostile, supportive, etc.) on a 1-10 scale. It supports 15+ scenarios including hostile termination, technical defense, PR crisis, and salary negotiation.

I built the entire Flask backend — API routes, AI engine integration (Groq/Llama 3.3-70b), Supabase database and auth, spaCy-based NLP pipeline, scikit-learn toxicity model, and PDF report generation via WeasyPrint.`,
    techStack: ['Python', 'Flask', 'PostgreSQL', 'Groq/Llama', 'spaCy', 'scikit-learn', 'Supabase'],
    features: [
      'Dynamic mood-engine AI interviewer (1-10 scale)',
      '15+ scenarios: hostile termination, PR crisis, technical defense, salary negotiation',
      'Real-time adaptive responses based on answer quality',
      'Detailed evaluation reports with PDF export via WeasyPrint',
      'Supabase authentication + PostgreSQL database',
      'spaCy NLP pipeline for response analysis',
      'scikit-learn toxicity detection model',
      'Built for VibeForge 1.0 Hackathon (63 commits)',
    ],
    githubUrl: 'https://github.com/Aditya0850/Breakpoint',
    demoUrl: 'https://breakpoint-sgxh.onrender.com',
    downloadUrl: null,
    screenshot: null,
    stars: 0,
  },
  {
    id: 'neetcode',
    title: 'NeetCode Submissions',
    tagline: 'DSA & Coding Interview Practice',
    category: 'dsa',
    shortDesc: 'Automatically synced solutions to NeetCode.io problems — covering data structures, algorithms, and Python coding interviews.',
    description: `This repository is automatically populated from NeetCode.io via their GitHub Sync feature. Every solution I submit on NeetCode is pushed here, organized by topic folder and problem ID.

Currently features solutions in Python across Data Structures & Algorithms and Python Coding Interviews tracks — covering arrays, binary search, two-pointer techniques, trees, graphs, dynamic programming, and more.`,
    techStack: ['Python'],
    features: [
      'Auto-synced from NeetCode.io',
      'Organized by topic and problem ID',
      'Multiple submissions per problem tracked',
      'Covers DSA and Python tracks',
    ],
    githubUrl: 'https://github.com/RitabrataDutta01/neetcode-submissions',
    downloadUrl: null,
    screenshot: null,
    stars: 0,
  },
  {
    id: 'eda-projects',
    title: 'EDA Projects',
    tagline: 'Exploratory Data Analysis & Machine Learning',
    category: 'ml',
    shortDesc: 'Jupyter notebooks exploring India GDP trends, ML job markets, and linear regression — from scratch and with scikit-learn.',
    description: `A collection of exploratory data analysis notebooks that dive into real-world datasets. Includes a custom linear regression implementation built from scratch (compared against scikit-learn), analysis of India's GDP trends over time, and an exploration of machine learning job roles, salaries, and demand across the United States.

Each notebook emphasizes visual storytelling through matplotlib and seaborn, with clear insights drawn from the data.`,
    techStack: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn'],
    features: [
      'India GDP analysis over time',
      'Linear regression from scratch vs scikit-learn',
      'ML job market analysis (roles, salary, demand in US)',
      'Multivariate analysis on India GDP',
      'Real-world open datasets',
    ],
    githubUrl: 'https://github.com/RitabrataDutta01/EDA-Projects',
    downloadUrl: null,
    screenshot: null,
    stars: 0,
  },
  {
    id: 'python-apps',
    title: 'Python Desktop Applications',
    tagline: 'Tkinter Tools Collection',
    category: 'desktop',
    shortDesc: 'A suite of Python desktop apps: PDF converter, weather app, expense tracker, to-do list, logbook, and WhatsApp-GDrive automation.',
    description: `A collection of Python desktop applications built with Tkinter, showcasing progression from simple utilities to more complex database-backed applications. Includes:

PDF Tools — Convert between Word, PDF, Excel, PPT, and images. Built initially with Tkinter then ported to Flask.
Weather App — Queries weather.com API for current temperature and 3-day forecast with a clean Tkinter GUI.
Expense Tracker — SQLite-backed expense tracking with graph visualization (day-by-day and single-day modes).
To-Do List — Simple task manager with double-click-to-complete.
Logbook — Daily journal with user profiles, separate professional/personal logs, and date/keyword search.
wp-gdrive-bot — Automates daily Google Drive folder creation and WhatsApp link sharing via pywhatkit.`,
    techStack: ['Python', 'Tkinter', 'SQLite', 'Flask', 'pywhatkit', 'Google Drive API'],
    features: [
      '8 PDF conversion tools (Word, Excel, PPT, Image ↔ PDF)',
      'Weather app with 3-day forecast & weather.com API',
      'Expense tracker with SQLite and graph visualization',
      'Logbook with user profiles, auth, and search',
      'WhatsApp + Google Drive daily automation',
      'All distributed as standalone .exe files',
    ],
    githubUrl: 'https://github.com/RitabrataDutta01/First-github-repo',
    downloadUrl: 'https://github.com/RitabrataDutta01/Projects',
    screenshot: null,
    stars: 1,
  },
  {
    id: 'flask-pdf-tool',
    title: 'Flask PDF Tool',
    tagline: 'Web-based PDF Converter',
    category: 'web',
    shortDesc: 'Flask web application providing PDF conversion tools — the web version of the Tkinter PDF tools.',
    description: `A Flask-based web application that brings the PDF conversion toolkit to the browser. Supports converting between Word, PDF, Excel, PowerPoint, and image formats. Built with a devcontainer setup for reproducible development environments.

This is the web evolution of the original Tkinter-based PDF tools, demonstrating the same functionality delivered through a browser interface.`,
    techStack: ['Python', 'Flask', 'HTML', 'CSS'],
    features: [
      'Web-based PDF conversions',
      'Support for Word, Excel, PPT, Image formats',
      'Devcontainer for reproducible development',
      'Flask server with static frontend',
    ],
    githubUrl: 'https://github.com/RitabrataDutta01/webapp',
    downloadUrl: null,
    screenshot: null,
    stars: 0,
  },
]

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'security', label: 'Security' },
  { id: 'web', label: 'Full-Stack Web' },
  { id: 'desktop', label: 'Desktop Apps' },
  { id: 'ml', label: 'ML / Data' },
  { id: 'dsa', label: 'DSA' },
]

export const skills = [
  { name: 'Python', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'Go', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Flask', category: 'framework' },
  { name: 'Django', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'Tkinter', category: 'framework' },
  { name: 'BeautifulSoup', category: 'tool' },
  { name: 'SQLite', category: 'database' },
  { name: 'Pandas', category: 'ml' },
  { name: 'scikit-learn', category: 'ml' },
  { name: 'Gemini API', category: 'ai' },
  { name: 'Groq', category: 'ai' },
  { name: 'spaCy', category: 'ml' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Supabase', category: 'database' },

  { name: 'Git', category: 'tool' },
]
