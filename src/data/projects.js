export const projects = [
    {
        id: 11,
        title: "Atlas Workflow Automation",
        does: "Multi-tenant workflow automation platform currently in active development with Laravel, React, and PostgreSQL.",
        solved: "Establishing authenticated workspace isolation and database foundations before adding workflow execution.",
        category: "AI Workflow",
        eyebrow: "In active development",
        problem: "Teams need repeatable business automations where each organization's workflows, documents, and execution records stay strictly scoped to its own workspace.",
        solution: "Developing a multi-tenant web application in Laravel 13, Inertia.js, React, and PostgreSQL, starting with authentication and workspace boundaries before implementing the visual builder and execution engine.",
        tech: ["Laravel", "React", "TypeScript", "Inertia.js", "PostgreSQL", "Docker"],
        live: "",
        github: "https://github.com/ShafnyHadhy/atlas-workflow-automation",
        details: `**Implemented foundation:**
- Configured the Laravel 13, Inertia.js, and React (TypeScript) application backed by PostgreSQL in Docker Compose.
- Set up authentication along with two-factor authentication and passkey schema support.
- Built workspace creation, active-workspace selection, and route-level access checks through workspace.access middleware.

**Planned next:**
- Workflow definitions, a React Flow visual node editor, queued execution workers, execution history, and AI/OCR nodes.`
    },
    {
        id: 12,
        title: "Solar Link Co-op",
        does: "Mobile app for coordinating shared community solar assets, energy allocations, and maintenance tickets.",
        solved: "Co-op managers, solar owners, households, and technicians needed distinct role-based workflows in one app.",
        category: "Mobile App",
        eyebrow: "Community energy",
        problem: "Shared solar co-operatives involve multiple participant roles that require separate views and permissions across asset tracking, energy offers, allocation requests, and fault reporting.",
        solution: "Built an Expo and React Native application with Expo Router, Clerk authentication, Zustand state management, and a PostgreSQL schema managed via Drizzle ORM.",
        tech: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Drizzle ORM"],
        live: "",
        github: "https://github.com/ShafnyHadhy/solar-link-co-op-app",
        details: `**Implemented features:**
- Modeled four role workflows (manager, solar owner, household, technician) in PostgreSQL using enum-constrained Drizzle ORM schemas for assets, offers, requests, tickets, and notifications.
- Integrated Clerk authentication with secure token storage and file-based navigation via Expo Router.
- Added automated test scripts covering auth and roles, per-role workflows, input validations, and database integrity.`
    },
    {
        id: 13,
        title: "Invoice Reader",
        does: "Web application that extracts structured fields from uploaded invoice images using the Google Gemini API.",
        solved: "Replaces manual line-by-line data entry when saving invoice details as transactions.",
        category: "AI Workflow",
        eyebrow: "Document extraction",
        problem: "Invoice details often arrive as document images that someone has to read and re-type into accounting or tracking logs by hand.",
        solution: "Built a Laravel and React application where users upload an invoice file, inspect fields extracted through the Gemini API, and save the confirmed record to MySQL.",
        tech: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS", "Gemini API"],
        live: "",
        github: "https://github.com/ShafnyHadhy/invoice-reader-laravel",
        details: `**What I built:**
- Implemented invoice upload handling and a dedicated GeminiInvoiceExtractor service in Laravel to parse structured invoice data.
- Built a React review flow via Inertia.js so extracted fields can be checked before saving.
- Persisted confirmed entries as structured MySQL transactions displayed in a dashboard view.`
    },
    {
        id: 10,
        title: "Job Board SaaS API",
        does: "Multi-role job board REST API with PostgreSQL full-text search, Redis caching, and Docker Compose.",
        solved: "Built to practice relational modeling, query indexing, caching, rate limiting, and structured request logging.",
        category: "Web App",
        eyebrow: "Backend API",
        problem: "Job boards combine public filtered listings, separate employer and applicant permissions, duplicate-application checks, and rate protection on auth and submission endpoints.",
        solution: "Developed a Node.js and Express REST API backed by PostgreSQL and Prisma, adding Redis for query caching and route-specific rate limits alongside JWT and Google OAuth authentication.",
        tech: ["Node.js", "Express", "JavaScript", "PostgreSQL", "Prisma", "Redis", "Docker", "JWT", "Google OAuth"],
        live: "https://jobboard-api-navy.vercel.app/",
        github: "https://github.com/ShafnyHadhy/jobboard-api",
        details: `**Implementation details:**
- Modeled Users, Companies, Jobs, Applications, and Notifications in PostgreSQL via Prisma 7, enforcing one application per user per job with a database unique constraint.
- Implemented JWT authentication (bcryptjs), Google OAuth 2.0 callback login, and middleware separating EMPLOYER and JOBSEEKER permissions.
- Added PostgreSQL tsvector full-text search with a GIN index and composite indexes on job status and company queries.
- Added Redis cache-aside on GET /api/jobs (5-minute TTL with write invalidation) and sliding-window rate limits on auth and application routes.
- Added structured JSON request logs capturing method, path, status, latency, request ID, and user context, packaged with a Dockerfile and Docker Compose.`
    },
    {
        id: 1,
        title: "CareBridge",
        does: "Microservices healthcare web application routing patient, doctor, appointment, and telemedicine services via an API gateway.",
        solved: "Separates healthcare domain workflows into independent Express services behind one client entry point.",
        category: "Web App",
        eyebrow: "Team project",
        problem: "Healthcare portals span distinct domains—patient profiles, doctor availability, bookings, video consultations, and payments—that quickly tangle together inside a single monolith.",
        solution: "Structured the backend as independent Node.js and Express services behind an Express API gateway, backed by MongoDB and packaged with Docker Compose.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Tailwind CSS"],
        live: "",
        github: "https://github.com/ShafnyHadhy/health_care_appointment-microservices.git",
        details: `**Architecture & services:**
- Connected a React (Vite) frontend to an Express API gateway proxying requests to services for auth, patients, doctors, appointments, notifications, payments, admin, telemedicine, and symptom checking.
- Configured shared MongoDB persistence and individual service Dockerfiles inside a unified docker-compose.yml setup.
- Implemented role-based workflows across patients, doctors, and administrators for booking appointments, managing prescriptions, and handling consultation payments.`
    },
    {
        id: 2,
        title: "FinFlow",
        does: "Personal finance dashboard for tracking income and expenses with automated transaction categorization.",
        solved: "Replaces manual spreadsheet entry with structured category charts and automated n8n workflows.",
        category: "Web App",
        eyebrow: "Finance tracker",
        problem: "Tracking personal income and expenses across categories requires repetitive manual entry when transactions and bank updates live in separate tools.",
        solution: "Built a React and TypeScript dashboard backed by Laravel and MySQL, using n8n workflows to categorize transactions and trigger alerts.",
        tech: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "n8n"],
        live: "",
        github: "https://github.com/riyajkm/f-tracker",
        details: `**What was built:**
- Implemented responsive income and expense views in React, TypeScript, and Tailwind CSS with chart-based spending breakdowns.
- Built REST endpoints and relational models in Laravel (Eloquent ORM) and MySQL.
- Connected n8n workflows to automate transaction categorization and notification rules.`
    },
    {
        id: 3,
        title: "Revolve",
        does: "Product lifecycle app for tracking owned items, requesting repairs, and finding certified recyclers.",
        solved: "Connects product owners with repair and recycling service providers through one request workflow.",
        screenshot: "/work/revolve.webp",
        category: "Web App",
        eyebrow: "Service platform",
        problem: "Product owners rarely have one place to keep warranty or service history and connect with nearby repair shops or certified recyclers.",
        solution: "Built the React frontend and Express/MongoDB workflows for ReVolve, supporting OTP-verified accounts, service request forms, provider dashboards, and Google Maps provider lookup.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Maps API"],
        live: "https://revolve-af.vercel.app/",
        github: "https://github.com/ShafnyHadhy/AF-frontend-react",
        details: `**What was built:**
- Implemented user registration, login, and OTP verification along with role-based dashboards for customers, service providers, and admins.
- Built product lifecycle views and request forms to submit and track repair or recycling jobs.
- Integrated the Google Maps API for location selection and nearby service provider discovery.`
    },
    {
        id: 4,
        title: "CocoSmart",
        does: "Team-built coconut plantation management web app covering inventory, marketplace orders, and finance tracking.",
        solved: "Moves plantation product listings, orders, and financial records out of manual paper logs.",
        screenshot: "/work/cocosmart.webp",
        category: "Web App",
        eyebrow: "Team project",
        problem: "Tracking plantation inventory, customer orders, and expenses on paper logs makes reconciling sales and stock levels slow and error-prone.",
        solution: "Led a team project building a MERN-based plantation management web application, where I implemented user authentication, the B2B/B2C marketplace, and the finance module.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        live: "https://cocosmart.vercel.app/",
        github: "https://github.com/ShafnyHadhy/cocosmart-frontend",
        details: `**My contribution (Team Lead):**
- Coordinated system architecture, database schema alignment, and GitHub pull request integration across team modules.
- Built user authentication and backend validation connected to RESTful APIs.
- Developed the B2B/B2C marketplace catalog and order flows alongside the plantation finance tracking module.`
    },
    {
        id: 5,
        title: "BillOut",
        does: "PHP and MySQL web app for organizing recurring bills, payment statuses, and upcoming event reminders.",
        solved: "Keeps recurring payment schedules and event due dates in one structured database.",
        category: "Web App",
        eyebrow: "Academic project",
        problem: "Tracking recurring utility bills and scheduled obligations manually makes it easy to miss upcoming due dates.",
        solution: "Built a server-rendered PHP and MySQL web application with user authentication and CRUD workflows for bills and event reminders.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
        live: "",
        github: "https://github.com/ShafnyHadhy/online-bill-and-event-reminder",
        details: `**What I built:**
- Implemented server-side request handling and session-based user authentication in PHP.
- Designed a normalized MySQL schema for user accounts, recurring bills, and event schedules.
- Built responsive pages and forms using HTML, CSS, and Bootstrap.`
    },
    {
        id: 6,
        title: "iBank",
        does: "Java MVC online banking web application for managing accounts, fund transfers, bill payments, and offers.",
        solved: "Models core customer banking and admin workflows using Java Servlets, JSP, and MySQL.",
        category: "Web App",
        eyebrow: "Academic project",
        problem: "Academic banking coursework project modeling account management, fund transfers, bill payments, and administrative maintenance inside a structured MVC architecture.",
        solution: "Built a Java web application with JSP views, Servlet controllers, and MySQL persistence covering customer transactions and admin management.",
        tech: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS", "Bootstrap"],
        live: "",
        github: "https://github.com/ShafnyHadhy/online-banking-system",
        details: `**What I built:**
- Separated business logic, routing, and presentation using the MVC pattern with Java Servlets and JSP.
- Implemented user management, accounts, fund transfers, bill payments, bill categories, and promotional offers backed by MySQL.
- Built separate session views for regular banking users and administrators.`
    },
    {
        id: 7,
        title: "Taskify",
        does: "Server-rendered task and category manager built with Laravel, Blade templates, and MySQL.",
        solved: "Organizes user tasks by category and status with separate user and admin dashboards.",
        category: "Web App",
        eyebrow: "Web application",
        problem: "Needed a straightforward task tracker with user authentication, categorized task ownership, and an administrative overview.",
        solution: "Built a Laravel application using Eloquent ORM, resource controllers, Blade views, and MySQL to manage categories and tasks.",
        tech: ["Laravel", "Blade", "MySQL"],
        live: "",
        github: "https://github.com/ShafnyHadhy/task-management-laravel",
        details: `**What I built:**
- Set up Laravel authentication, profile editing, and role-protected user and admin dashboards.
- Implemented RESTful resource controllers for tasks and categories using Eloquent relationships in MySQL.
- Built server-rendered views using Blade templates and Tailwind CSS.`
    },
    {
        id: 8,
        title: "Mindly",
        does: "Native Android personal wellness app built in Kotlin with mood charts, habit lists, and scheduled reminders.",
        solved: "Stores wellness entries locally on device and visualizes trends without an external backend.",
        category: "Mobile App",
        eyebrow: "Android app",
        problem: "Personal wellness trackers need fast local logging, visual mood summaries, and background reminders that continue working offline.",
        solution: "Built a native Android app in Kotlin using XML layouts, RecyclerView lists, local Gson persistence, MPAndroidChart visualizations, and WorkManager reminders.",
        tech: ["Kotlin", "XML", "Android Studio", "RecyclerView", "WorkManager", "MPAndroidChart"],
        live: "",
        github: "https://github.com/ShafnyHadhy/mindly-personal-wellness-app",
        details: `**What I built:**
- Implemented multi-screen navigation with Android Fragments, Navigation component, and Material UI components.
- Saved user logs locally on device using Gson serialization and displayed mood trends with MPAndroidChart.
- Scheduled background reminder notifications using Android WorkManager.`
    },
    {
        id: 9,
        title: "TrekkieMate",
        does: "Android travel planner interface translated from Figma prototypes into native Kotlin and XML screens.",
        solved: "Organizes trip itineraries and destination cards into a clearer mobile navigation flow.",
        category: "Mobile App",
        eyebrow: "Android UI",
        problem: "Travel planning screens often crowd itinerary details, destination previews, and actions onto a small mobile viewport.",
        solution: "Designed the mobile flows in Figma and implemented the Android interface in Kotlin using XML layouts, ConstraintLayout, and Material Design components.",
        tech: ["Figma", "Kotlin", "XML", "Android Studio", "Material Design"],
        live: "",
        github: "https://github.com/ShafnyHadhy/trekkieMate-travel-app",
        details: `**What I built:**
- Designed wireframes and high-fidelity mobile screens in Figma before writing Android layouts.
- Implemented responsive XML screens in Android Studio with ConstraintLayout, Material components, and Kotlin navigation.`
    }
];

export const categories = ["All", "AI Workflow", "Web App", "Mobile App"];
