# Gradient Portfolio

A modern, responsive developer portfolio website built to showcase my skills, projects, certifications, achievements, and professional journey.

🔗 **Live Demo:** [tejasvi-portfolio.vercel.app](https://tejasvi-portfolio.vercel.app)

## Features

- Responsive, mobile-friendly layout
- Modern gradient and glassmorphism-inspired interface
- Smooth scroll animations powered by Framer Motion
- Interactive project filtering by technology and category
- Project cards with live-demo and source-code links
- Skills, achievements, certifications, and resume sections
- Contact section for professional outreach
- In-browser resume/PDF preview

## Featured Projects

- **Forever E-Commerce Web Application** — MERN-stack e-commerce platform with JWT authentication, product listings, cart, and order management.
- **Intelligent CPU Scheduler System** — Simulator for FCFS, Round Robin, SJF, and Priority scheduling algorithms with Gantt charts and performance metrics.
- **Art Critique Bot** — AI-powered artwork analysis tool using GPT-4, Streamlit, Python, and Docker.
- **Car Rental System** — Java Spring Boot backend application for vehicle, customer, and rental booking management.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI, Lucide Icons
- **Forms:** React Hook Form, Zod
- **PDF Preview:** React PDF
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm

### Installation

```bash
git clone https://github.com/tejasvijain09/Gradient-Portfolio.git
cd Gradient-Portfolio
pnpm install
```

### Run Locally

```bash
pnpm --filter @workspace/portfolio dev
```

The application will be available at the local URL shown in your terminal.

### Production Build

```bash
pnpm build
```

## Project Structure

```text
Gradient-Portfolio/
├── artifacts/
│   └── portfolio/
│       ├── public/           # Images, certificates, and static assets
│       └── src/
│           ├── components/   # Portfolio sections and reusable UI
│           ├── pages/        # Application pages
│           └── App.tsx
├── lib/                      # Shared API and utility packages
└── package.json
```

## Author

**Tejasvi Jain**

- GitHub: [@tejasvijain09](https://github.com/tejasvijain09)
- LinkedIn: [tejasvi-2005y](https://www.linkedin.com/in/tejasvi-2005y/)
- Portfolio: [tejasvi-portfolio.vercel.app](https://tejasvi-portfolio.vercel.app)

## License

This project is available under the MIT License.
