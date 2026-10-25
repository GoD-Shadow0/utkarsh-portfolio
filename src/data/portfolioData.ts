export type { Project, ProjectCategory, ProjectStatus } from './projects'
export { PROJECTS } from './projects'

export interface SkillCategory {
  id: string
  name: string
  accent: 'violet' | 'cyan' | 'magenta' | 'emerald' | 'amber' | 'blue' | 'indigo'
  description: string
  skills: {
    name: string
    level?: 'Proficient' | 'Intermediate' | 'Foundational'
    tag?: string
  }[]
}

export interface ExploringTopic {
  title: string
  category: string
  description: string
  status: string
  focusItems: string[]
}

export const PERSONAL_INFO = {
  name: 'Utkarsh Raj',
  title: 'Full Stack Developer | Cloud & DevOps Enthusiast | AI/ML Explorer',
  tagline: 'Building Digital Experiences. Exploring Intelligent Systems.',
  availability: 'Available for Opportunities',
  email: 'utkarsh.raj9544@gmail.com',
  linkedin: 'https://www.linkedin.com/in/utkarsh-raj-3387392b2',
  github: 'https://github.com/GoD-Shadow0',
  resumeUrl: 'https://drive.google.com/file/d/1ZCRcNZkjmTYhWF4NTZdZpqeFfEji7mXA/view?usp=sharing',
  location: 'Chennai, India',
  education: {
    institution: 'SRM Institute of Science and Technology, Chennai',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    status: 'Final Year Student',
    highlights: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Cloud Computing & Distributed Systems',
      'Operating Systems & Networks',
      'Machine Learning & AI Foundations'
    ]
  },
  bioParagraphs: [
    'I am Utkarsh Raj, a final-year Computer Science Engineering student at SRM Institute of Science and Technology, Chennai. I enjoy building scalable web applications, exploring cloud technologies, and developing intelligent solutions using AI and machine learning.',
    'My technical interests include full-stack development, backend engineering, cloud infrastructure, DevOps automation, and generative AI. I enjoy solving practical problems, experimenting with new technologies, and continuously improving my development skills.',
    'I aim to build reliable, efficient, and visually engaging digital experiences while expanding my knowledge of modern software engineering and cloud-native technologies.'
  ],
  corePillars: [
    {
      title: 'Full Stack Engineering',
      description: 'Building robust, responsive frontends paired with performant RESTful backends, secure auth pipelines, and optimized relational databases.',
      icon: 'code'
    },
    {
      title: 'Cloud & DevOps Automation',
      description: 'Exploring multi-cloud infrastructure (AWS, GCP, Azure), containerization with Docker, IaC with Terraform, and CI/CD automation.',
      icon: 'cloud'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Applying data science pipelines, feature engineering, and predictive algorithms while actively exploring LLMs and modern generative workflows.',
      icon: 'brain'
    }
  ],
  stats: [
    { label: 'Academic Standing', value: 'Final Year CSE' },
    { label: 'Campus', value: 'SRM IST Chennai' },
    { label: 'Featured Projects', value: '6 Completed/Prototyped' },
    { label: 'Core Tech Domains', value: '7 Disciplines' }
  ]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    accent: 'violet',
    description: 'Foundational languages for systems programming, backend services, scripting, and data analysis.',
    skills: [
      { name: 'C++', level: 'Proficient', tag: 'Data Structures & Algorithms' },
      { name: 'Python', level: 'Proficient', tag: 'ML, Scripting & Backend' },
      { name: 'JavaScript', level: 'Proficient', tag: 'Modern ES6+ & Async' },
      { name: 'SQL', level: 'Proficient', tag: 'Relational Queries & Optimization' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    accent: 'cyan',
    description: 'Crafting responsive, high-performance user interfaces with clean styling and reactive components.',
    skills: [
      { name: 'React.js', level: 'Proficient', tag: 'Hooks, Context, State' },
      { name: 'Vite', level: 'Proficient', tag: 'Modern Build Tooling' },
      { name: 'HTML5', level: 'Proficient', tag: 'Semantic Web' },
      { name: 'CSS3', level: 'Proficient', tag: 'Flexbox, Grid, Animations' },
      { name: 'Tailwind CSS', level: 'Proficient', tag: 'Utility-first Styling' },
      { name: 'Bootstrap', level: 'Intermediate', tag: 'Component Grid' },
      { name: 'Responsive Web Design', level: 'Proficient', tag: 'Mobile-first UX' },
      { name: 'JavaScript', level: 'Proficient', tag: 'DOM & Events' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    accent: 'magenta',
    description: 'Architecting scalable server architectures, secure auth guards, and RESTful service layers.',
    skills: [
      { name: 'Node.js', level: 'Proficient', tag: 'Event-driven Runtime' },
      { name: 'Express.js', level: 'Proficient', tag: 'RESTful Middleware' },
      { name: 'NestJS', level: 'Intermediate', tag: 'Enterprise Modular TypeScript' },
      { name: 'REST API Development', level: 'Proficient', tag: 'Standardized Endpoints' },
      { name: 'JWT Authentication', level: 'Proficient', tag: 'Stateless Token Security' },
      { name: 'bcrypt Password Hashing', level: 'Proficient', tag: 'Cryptographic Protection' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & ORM',
    accent: 'emerald',
    description: 'Relational data modeling, cloud database instances, and type-safe database abstraction layers.',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', tag: 'ACID Relational Engine' },
      { name: 'MySQL', level: 'Proficient', tag: 'Structured Data Storage' },
      { name: 'Supabase', level: 'Intermediate', tag: 'Cloud Backend-as-a-Service' },
      { name: 'Neon PostgreSQL', level: 'Intermediate', tag: 'Serverless Cloud DB' },
      { name: 'Prisma ORM', level: 'Proficient', tag: 'Schema Migrations & Types' },
      { name: 'Sequelize ORM', level: 'Intermediate', tag: 'Node.js Object Mapping' }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    accent: 'blue',
    description: 'Infrastructure provisioning, containerization, and modern version control workflows.',
    skills: [
      { name: 'Docker', level: 'Intermediate', tag: 'Containerization' },
      { name: 'Docker Compose', level: 'Intermediate', tag: 'Multi-container Orch.' },
      { name: 'Terraform', level: 'Foundational', tag: 'Infrastructure as Code' },
      { name: 'AWS Fundamentals', level: 'Foundational', tag: 'S3, EC2, IAM, VPC' },
      { name: 'GCP Fundamentals', level: 'Foundational', tag: 'Compute & Cloud Run' },
      { name: 'Azure Fundamentals', level: 'Foundational', tag: 'Virtual Machines & Storage' },
      { name: 'Git & GitHub', level: 'Proficient', tag: 'Version Control & PRs' },
      { name: 'Linux & CLI Tools', level: 'Proficient', tag: 'Shell, SSH, Package Mgmt' }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI, ML & Data Science',
    accent: 'amber',
    description: 'Exploratory data analysis, statistical preprocessing, predictive models, and GenAI exploration.',
    skills: [
      { name: 'Generative AI Fundamentals', level: 'Intermediate', tag: 'Prompting & LLM Architectures' },
      { name: 'Machine Learning', level: 'Intermediate', tag: 'Supervised Algorithms' },
      { name: 'NumPy', level: 'Proficient', tag: 'N-dimensional Arrays' },
      { name: 'Pandas', level: 'Proficient', tag: 'DataFrames & Data Wrangling' },
      { name: 'Scikit-learn', level: 'Intermediate', tag: 'Pipelines & Model Evaluation' },
      { name: 'Matplotlib', level: 'Proficient', tag: 'Statistical Visualizations' },
      { name: 'Data Preprocessing', level: 'Proficient', tag: 'Imputation & Scaling' },
      { name: 'Model Training & Eval', level: 'Intermediate', tag: 'Cross-validation & Metrics' }
    ]
  },
  {
    id: 'tools',
    name: 'Development Tools',
    accent: 'indigo',
    description: 'Day-to-day developer environment, API testing clients, and interactive environments.',
    skills: [
      { name: 'Visual Studio Code', level: 'Proficient', tag: 'Primary IDE' },
      { name: 'Postman', level: 'Proficient', tag: 'API Testing & Collections' },
      { name: 'MySQL Workbench', level: 'Proficient', tag: 'Schema Visualizer' },
      { name: 'Jupyter Notebook', level: 'Proficient', tag: 'Data Science Experiments' },
      { name: 'GitHub', level: 'Proficient', tag: 'Collaboration & Repos' }
    ]
  }
]

export const EXPLORING_TOPICS: ExploringTopic[] = [
  {
    title: 'Generative AI & LLMs',
    category: 'Artificial Intelligence',
    description: 'Investigating prompt engineering techniques, agentic frameworks, retrieval-augmented generation (RAG), and model fine-tuning.',
    status: 'Active Deep Dive',
    focusItems: ['Retrieval Augmented Generation', 'Agentic Workflows', 'Prompt Optimization', 'Local Model Quantization']
  },
  {
    title: 'Cloud-Native Architecture',
    category: 'Cloud Engineering',
    description: 'Deepening knowledge of microservices decoupling, serverless computing, API gateways, and multi-region resilience patterns.',
    status: 'Architectural Exploration',
    focusItems: ['Serverless Functions', 'Event-Driven Architectures', 'AWS & GCP Service Mesh', 'High Availability Design']
  },
  {
    title: 'DevOps & CI/CD Automation',
    category: 'Infrastructure',
    description: 'Mastering automated test runners, container orchestration, GitHub Actions pipelines, and immutable infrastructure with Terraform.',
    status: 'Continuous Practice',
    focusItems: ['GitHub Actions Workflows', 'Multi-stage Docker Builds', 'Terraform Modules', 'Monitoring & Observability']
  },
  {
    title: 'Backend System Design',
    category: 'Software Engineering',
    description: 'Studying distributed caching strategies (Redis), database indexing optimization, connection pooling, and message queuing.',
    status: 'Core Mastery',
    focusItems: ['Database Index Tuning', 'Caching Strategies', 'Asynchronous Queues', 'Horizontal Scaling']
  },
  {
    title: 'Machine Learning Applications',
    category: 'Applied AI',
    description: 'Translating research models into production inference endpoints with optimized latency, monitoring drift, and evaluation metrics.',
    status: 'Experimental Prototyping',
    focusItems: ['Model Deployment APIs', 'Feature Stores', 'Drift Monitoring', 'Edge Inference']
  }
]
