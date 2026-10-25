export type ProjectCategory = 'Full Stack' | 'Cloud and DevOps' | 'AI and Machine Learning' | 'IoT'

export type ProjectStatus = 'Completed' | 'In Development' | 'Research & Prototype' | 'Hardware Concept'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  categoryLabel: string
  description: string
  detailedDescription?: string[]
  technologies: string[]
  status: ProjectStatus
  displayNote?: string
  iconType?: 'cloud' | 'building' | 'database' | 'box' | 'brain' | 'cpu'
  icon?: string
  /**
   * Leave empty ("") when no repository is published.
   * Provide a full URL (e.g., "https://github.com/username/repo") to enable the GitHub button.
   */
  githubUrl?: string
  /**
   * Leave empty ("") when no live deployment is available.
   * Provide a full URL (e.g., "https://demo.example.com") to enable the Live Demo button.
   */
  liveDemoUrl?: string
  /**
   * Optional external link to architecture diagram or documentation.
   */
  architectureUrl?: string
  highlights: string[]
}

/**
 * Centralized Project Configuration
 * 
 * Order of presentation:
 * 1. AI CloudOps Assistant (Backend / Cloud / AI)
 * 2. Hostel Management System (Full Stack / DevOps)
 * 3. Restaurant Management System (Full Stack / Database)
 * 4. Smart E-Yantra Digital Twin (IoT / 3D Simulation)
 * 5. Startup Profit Predictor (ML / Data Science)
 * 6. IoT Forest Fire Detection & Alarm (IoT / Embedded Systems)
 *
 * To add a GitHub repository or Live Demo URL later, simply paste the URL into
 * the respective `githubUrl` or `liveDemoUrl` field below.
 */
export const PROJECTS: Project[] = [
  {
    id: 'ai-cloudops-assistant',
    title: 'AI CloudOps Assistant',
    category: 'Cloud and DevOps',
    categoryLabel: 'AI, Backend & CloudOps',
    iconType: 'cloud',
    icon: 'cloud',
    status: 'In Development',
    displayNote: 'Backend architecture and authentication are built; AI-powered diagnostic and cloud metric monitoring features are in active development.',
    description:
      'An AI-assisted cloud operations platform designed to explore how intelligent systems can help developers understand, monitor, and manage cloud infrastructure more efficiently.',
    detailedDescription: [
      'Engineered a high-performance backend using NestJS, TypeScript, Prisma ORM, and PostgreSQL hosted on Neon serverless database.',
      'Implemented an enterprise-grade authentication pipeline including bcrypt password hashing, JWT token issuance, and protected endpoint guards.',
      'Designed a modular system architecture prepared for AI-powered troubleshooting, automated infrastructure telemetry analysis, and cloud resource recommendations.'
    ],
    technologies: ['NestJS', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Neon', 'JWT', 'bcrypt', 'REST APIs'],
    highlights: [
      'Modular NestJS architecture with dependency injection',
      'Stateless JWT auth with secure bcrypt credential salting',
      'Database migrations and typed queries via Prisma ORM',
      'Extensible pipeline for LLM-based incident triaging'
    ],
    githubUrl: '',
    liveDemoUrl: '',
    architectureUrl: ''
  },
  {
    id: 'hostel-management',
    title: 'Hostel Management System',
    category: 'Full Stack',
    categoryLabel: 'Full Stack & Infrastructure Automation',
    iconType: 'building',
    icon: 'building',
    status: 'Completed',
    displayNote: 'Full-stack platform with containerized services. Infrastructure automation scripts (Docker, Ansible, Terraform) are configured for single-instance AWS EC2 deployment.',
    description:
      'A full stack administrative platform designed to digitize hostel operations, including automated student enrollment, dynamic room allocation, and secure fee tracking.',
    detailedDescription: [
      'Developed a responsive React.js frontend built with Vite, featuring dedicated administrative dashboards for student records, room allocation, check-ins, and fee tracking.',
      'Engineered an Express.js REST API with SQLite database persistence and secure JWT-based role authentication to separate administrator and student workflows.',
      'Configured multi-container orchestration with Docker Compose (Nginx frontend, Node backend, Prometheus metrics), supplemented with Terraform AWS EC2 provisioning and Ansible automation playbooks.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'Docker', 'Ansible', 'Terraform', 'JWT Authentication', 'SQLite'],
    highlights: [
      'Modular React dashboard managing students, room allocations, and fee receipts',
      'JWT authentication middleware protecting administrative endpoints',
      'Multi-container Docker Compose architecture with Nginx frontend and Express API',
      'Infrastructure-as-Code Terraform configuration and Ansible provisioning playbooks'
    ],
    githubUrl: '',
    liveDemoUrl: '',
    architectureUrl: ''
  },
  {
    id: 'restaurant-management-system',
    title: 'Restaurant Management System',
    category: 'Full Stack',
    categoryLabel: 'Full Stack & Database Engineering',
    iconType: 'database',
    icon: 'database',
    status: 'Completed',
    description:
      'A database-driven restaurant operations application designed to streamline customer orders, menu pricing, staff coordination, and inventory management.',
    detailedDescription: [
      'Designed a normalized relational database schema across 8 entities: customers, staff, menu items, orders, order details, inventory, reservations, and suppliers.',
      'Built a responsive web interface communicating with Express.js REST endpoints to execute transactional orders and live inventory tracking.',
      'Demonstrated data integrity constraints, foreign key cascades, and real-time operational workflows.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
    highlights: [
      '8-Entity relational model with strict referential integrity',
      'Atomic order placement & inventory decrement routines',
      'Staff schedule and table reservation booking management',
      'REST API design for decoupled frontend-backend communication'
    ],
    githubUrl: '',
    liveDemoUrl: '',
    architectureUrl: ''
  },
  {
    id: 'smart-e-yantra-digital-twin',
    title: 'Smart E-Yantra Digital Twin',
    category: 'IoT',
    categoryLabel: 'IoT and Digital Twin',
    iconType: 'box',
    icon: 'box',
    status: 'Research & Prototype',
    displayNote: 'Virtual 3D laboratory environment and sensor control interface developed in Unity 3D with simulated microcontroller endpoints as a research prototype.',
    description:
      'Developed a high-fidelity 3D digital twin of the university E-Yantra robotics laboratory using Unity 3D, enabling interactive virtual laboratory access for remote students.',
    detailedDescription: [
      'Engineered an interactive 3D digital twin of the university E-Yantra robotics laboratory inside Unity 3D, providing virtual access for remote students to explore lab apparatus.',
      'Integrated IoT microcontroller endpoints with the virtual environment to support remote telemetry monitoring and simulated hardware control.',
      'Implemented real-time bidirectional controls for ambient laboratory lighting, climate control fans, and smart door access solenoids.'
    ],
    technologies: ['Unity 3D', 'C#', 'IoT Sensors', 'Remote Lab Simulation'],
    highlights: [
      'High-fidelity 3D interactive laboratory environment rendered in Unity 3D',
      'Microcontroller sensor data telemetry bridge for real-time virtual twin synchronization',
      'Interactive remote control interfaces for ambient laboratory lighting, climate fans, and door solenoids',
      'Virtual lab simulation environment designed for remote robotics student access'
    ],
    githubUrl: '',
    liveDemoUrl: '',
    architectureUrl: ''
  },
  {
    id: 'startup-profit-predictor',
    title: 'Startup Profit Predictor',
    category: 'AI and Machine Learning',
    categoryLabel: 'Machine Learning & Data Science',
    iconType: 'brain',
    icon: 'brain',
    status: 'Research & Prototype',
    displayNote: 'Trained using a synthetic benchmark dataset to demonstrate end-to-end regression pipelines. Predictions are for educational demonstration.',
    description:
      'A predictive machine learning project that analyzes business expenditure metrics (R&D, Administration, Marketing, Region) to estimate startup profitability.',
    detailedDescription: [
      'Engineered an end-to-end data pipeline in Python with Pandas and NumPy for missing value handling, categorical encoding, and feature scaling.',
      'Trained and evaluated regression algorithms using Scikit-learn, comparing performance across MSE, RMSE, and R² benchmarks.',
      'Generated exploratory data visualizations with Matplotlib to assess feature correlations and predictive variance.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    highlights: [
      'Comprehensive EDA identifying collinearity between R&D and profit',
      'One-Hot Encoding for categorical geographical parameters',
      'Cross-validated regression models evaluated with R² metric',
      'Interactive Jupyter Notebook documentation for reproducible experiments'
    ],
    githubUrl: '',
    liveDemoUrl: '',
    architectureUrl: ''
  },
  {
    id: 'iot-forest-fire-detection',
    title: 'IoT Forest Fire Detection & Alarm',
    category: 'IoT',
    categoryLabel: 'IoT & Embedded Systems',
    iconType: 'cpu',
    icon: 'cpu',
    status: 'Hardware Concept',
    displayNote: 'Sensor detection and local acoustic alarm validated; wireless ESP8266 telemetry transmission is currently in concept & testing.',
    description:
      'An IoT-based forest fire detection hardware prototype designed to detect infrared flame signatures and trigger immediate local warning signals.',
    detailedDescription: [
      'Configured an Arduino ATmega328P microcontroller interfaced with a high-sensitivity KY-026 flame sensor module.',
      'Implemented real-time sensor polling and interrupt logic to trigger high-decibel local buzzer alarms upon optical flame detection.',
      'Architected the expansion integration with an ESP8266 Wi-Fi module for remote telemetry broadcasting to central monitoring stations.'
    ],
    technologies: ['Arduino', 'Embedded C/C++', 'KY-026 Flame Sensor', 'ESP8266', 'IoT'],
    highlights: [
      'Analog and digital threshold tuning on KY-026 phototransistor',
      'Low-latency hardware interrupt response for immediate warning',
      'Battery-powered portable circuit design for field deployment',
      'ESP8266 Wi-Fi bridge architecture for wireless alerts'
    ],
    githubUrl: '',
    liveDemoUrl: '',
    architectureUrl: ''
  }
]
