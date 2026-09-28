/**
 * Project case studies.
 *
 * Content policy: every claim below must be defensible in an interview.
 * No invented metrics, no invented users. "Outcomes" describe what the
 * system does, not numbers that were never measured. When you have real
 * numbers (users, latency, hours saved), add them with a source.
 *
 * Set demoUrl / githubUrl to real links when available; null hides the
 * button instead of shipping a broken link.
 */
export const projects = [
  {
    id: 'modelforge',
    title: 'ModelForge',
    tagline:
      'Machine learning platform for training, comparing, and serving regression and classification models.',
    problem:
      'Notebook-based ML work is easy to start and hard to keep: no shared place to preprocess data, compare algorithms, and hand a trained model to an application. Every new experiment was another .ipynb and another ad-hoc pickle file.',
    role: 'Full-stack design and build — data pipeline, training and evaluation workflow, model serving API, and dashboard.',
    solution:
      'A platform for experimenting with and evaluating multiple regression and classification algorithms in one pipeline: data preprocessing, feature engineering, model training, performance comparison, and model serialization. Trained models are then served for real-time single and batched predictions behind an authenticated API, with regression and classification notebooks — house-price prediction and SMS spam classification — as the worked examples.',
    architecture: [
      'Python 3.12 + FastAPI backend with scikit-learn pipelines and serialized PKL models',
      'Jupyter Notebook training workflow with pandas / NumPy preprocessing and evaluation',
      'React dashboard over JWT access/refresh auth with admin, developer, and viewer roles',
      'SQLAlchemy models on PostgreSQL, SQLite for zero-dependency local runs',
      'npm workspace monorepo sharing TypeScript contracts across web and mobile clients',
    ],
    decisions: [
      'Serialize whole scikit-learn Pipelines rather than bare estimators, so preprocessing travels with the model and inference can never silently drift from training.',
      'Compare candidates on held-out metrics per algorithm type instead of a single leaderboard, since regression and classification error are not comparable numbers.',
      'JWT access/refresh rotation with bcrypt hashing keeps the prediction API from becoming an open inference endpoint.',
    ],
    outcome:
      'ML experiments moved from scattered notebooks into a repeatable pipeline that ends in a deployed, authenticated prediction service.',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'pandas', 'Jupyter', 'PostgreSQL', 'Docker'],
    featured: true,
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'turumba',
    title: 'Turumba Ad Manager',
    tagline:
      'Telegram Mini App for advertising operations — scheduling, conflict detection, analytics, and bot notifications.',
    problem:
      'The team planned and tracked ad campaigns across scattered channels — spreadsheets, chat threads, and manual copy-paste into Telegram. Nobody could tell what was scheduled, who owned it, or whether it had actually been posted.',
    role: 'Full-stack design and build — data model, API, UI, and bot integration.',
    solution:
      'A single workspace where advertisements are created, edited, and scheduled across multiple Telegram channels on a shared calendar, with conflict detection that flags clashing placements before they are published. Roles decide who can draft, approve, and post; a Telegram bot mirrors assignments, reminders, and expiries so the team works where it already is. Revenue and channel-performance analytics roll up into Excel reports delivered straight to admin DMs.',
    architecture: [
      'React + Vite Mini App running inside Telegram, built as an npm workspace monorepo',
      'Node.js + Express API over PostgreSQL via Prisma',
      'Telegram Bot API service for commands, inline buttons, and notifications',
      'Revenue and channel analytics with monthly/annual .xlsx report generation',
    ],
    decisions: [
      'Prisma + PostgreSQL over MongoDB because campaign, schedule, and role relations are deeply relational and needed enforced integrity.',
      'Bot notifications run as an isolated service, so a Telegram outage degrades gracefully instead of blocking the app.',
      'Scheduling is validated against channel slots and existing bookings at write time, so conflicts surface before a post goes out rather than in a report afterwards.',
    ],
    outcome:
      'Campaign planning moved out of spreadsheets into one shared system with a clear approval path, automated Telegram sync, and revenue reporting.',
    tags: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Telegram Bot API'],
    featured: true,
    demoUrl: null,
    githubUrl: "https://github.com/samuelmitiku393/Turumba.git",
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    tagline: 'Full-stack LMS with role-based flows for students, teachers, and administrators.',
    problem:
      'Course material, assignments, and administration lived in separate tools, so learners and staff had no single place to work and no shared notion of who was allowed to do what.',
    role: 'Full Stack Web Developer at INSA — frontend, backend, database, and API layers.',
    solution:
      'A full-stack Learning Management System supporting online learning and academic management workflows, with frontend interfaces, backend services, database integration, and role-based functionality wired together into an integrated academic management MVP.',
    architecture: [
      'Responsive web frontend for course and academic workflows',
      'Backend services and REST APIs for LMS domain logic',
      'Relational database for users, courses, and roles',
      'Role-based access control for students, teachers, and administrators',
    ],
    decisions: [
      'Modeled permissions as roles on the server rather than hiding UI in the client, so each of the three user types gets a genuinely different API surface.',
    ],
    outcome:
      'Shipped an integrated MVP covering the student, teacher, and administrator paths end to end.',
    tags: ['JavaScript', 'REST APIs', 'SQL', 'Role-based access'],
    featured: false,
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'merkeb',
    title: 'Merkeb ERP Mini App',
    tagline:
      'Existing ERP functionality brought into Telegram as a native-feeling Mini App with verified identities.',
    problem:
      'Staff already used an internal ERP, but access meant logging in through a browser each time. Telegram was where people actually were, and the business wanted ERP actions reachable from there without weakening authentication.',
    role: 'Built the Telegram integration layer and the Mini App UI on top of the existing ERP backend.',
    solution:
      "A Telegram Mini App that authenticates users through Telegram's initData payload, verifies it server-side with HMAC-SHA256, and maps each Telegram identity to its ERP account. The app respects Telegram's theme variables so it matches each user's client appearance.",
    architecture: [
      "React Mini App served inside Telegram's WebApp sandbox",
      'HMAC-SHA256 verification of Telegram initData on every session',
      'Express API bridging Telegram identities to ERP records',
    ],
    decisions: [
      'Never trust client-sent user IDs: the initData signature is verified on the server before any ERP data is returned.',
      "Bind colors and layout to Telegram SDK theme params instead of hard-coding a theme, so the app feels native on every client.",
    ],
    outcome:
      'ERP tasks became reachable from inside Telegram with the same identity guarantees as the web login flow.',
    tags: ['React', 'Express', 'Telegram WebApp SDK', 'HMAC-SHA256'],
    featured: true,
    demoUrl: null,
    githubUrl: "https://github.com/samuelmitiku393/Merkeb-Erp.git",
  },
  {
    id: 'sport-433',
    title: '4-3-3 Sport Ethiopia',
    tagline: 'Sports news portal and media platform for Ethiopian football coverage.',
    problem:
      'A sports media brand needed a fast, responsive portal for news and content that could stand up to traffic spikes around match days.',
    role: 'Frontend build with Redux Toolkit for content state and API caching.',
    solution:
      'A Vite-powered React portal with a Redux Toolkit data layer for normalized content fetching and caching, plus a responsive reading experience tuned for mobile-first audiences.',
    architecture: [
      'React + Vite SPA',
      'Redux Toolkit Query for content fetching and cache invalidation',
      'REST API consumed from the editorial backend',
    ],
    decisions: [
      'Redux Toolkit over ad-hoc fetch state: a news portal lives and dies by cache hit rates and refetch behavior, and RTK Query gives both for free.',
    ],
    outcome:
      'A production news portal serving Ethiopian sports content with fast navigation and a mobile-first layout.',
    tags: ['React', 'Redux Toolkit', 'Vite', 'REST APIs'],
    featured: false,
    demoUrl: null,
    githubUrl: "https://github.com/samuelmitiku393/Net433.git",
  },
];
