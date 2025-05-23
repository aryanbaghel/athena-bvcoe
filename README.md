# ATHENA: Glitch Gallery – Official Website

Welcome to the official repository of **ATHENA**, the Technical and Gaming Society of **Bharati Vidyapeeth College of Engineering (BVCOE)**. This project is a modern, fully responsive, and scalable web platform that showcases our events, achievements, and community spirit.

🌐 **Live Website**: [athena-tech-bvcoe.netlify.app](https://athena-tech-bvcoe.netlify.app)
 **College**: https://bvcoend.ac.in/               ---In Life@BVCOE->Student chapter Cell->TECHNICAL SOCIETY->ATHENA

---

## 📌 Project Overview

ATHENA's online presence is designed to reflect our energy and innovation. The **Glitch Gallery** is a futuristic, interactive, and minimal web application that serves as a central hub for:

- 🎮 Gaming tournaments & leaderboards
- 🧠 Tech symposiums & hackathons
- 📰 Event registrations and updates
- 🏆 Display of society achievements
- 📸 Media gallery of past events

---

## 🧠 Tech Stack

| Technology    | Role                                     |
|---------------|------------------------------------------|
| Vite          | Lightning-fast build tool and dev server |
| TypeScript    | Type-safe JavaScript                     |
| React         | Component-based UI library               |
| Tailwind CSS  | Utility-first CSS for rapid styling      |
| shadcn/ui     | Accessible and customizable UI components|
| PostCSS       | Modern CSS transformations               |

---

## ⚙️ Local Development Setup

> Ensure **Node.js ≥ 18** and **npm** are installed.

```sh
# 1. Clone the repository
git clone <YOUR_REPO_URL>

# 2. Navigate into the directory
cd athena-glitch-gallery

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open http://localhost:5173 to preview the project locally.

🗂 Project Structure
```sh
ATHENA-GLITCH-GALLERY/
├── public/               # Static assets
├── src/                  # Main source code (React + TS)
├── components.json       # Dynamic UI component registry
├── index.html            # Main HTML shell
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite config for build optimization
├── tsconfig.*.json       # TypeScript configurations
├── eslint.config.js      # Linting rules
└── README.md             # Project documentation
```
🔄 Deployment
This project is deployed using Netlify for seamless CI/CD and fast global delivery.

To deploy manually:

Build your project:
```sh
npm run build
```
Upload the dist/ folder to Netlify or any static host of choice.

🔐 Security & Maintenance
Security protocols and best practices are followed as per standard front-end guidelines.
Refer to SECURITY.md for issue reporting and responsible disclosure.
Regular dependency updates are performed to prevent vulnerabilities.


📊 Application Flowchart:
```sh
              ┌───────────────┐
              │   Homepage    │
              └──────┬────────┘
                     │
           ┌─────────▼──────────┐
           │  Event Gallery     │
           └─────────┬──────────┘
                     │
          ┌──────────▼─────────┐
          │ Registration Forms │
          └──────────┬─────────┘
                     │
             ┌───────▼────────┐
             │ Leaderboards   │
             └───────┬────────┘
                     │
            ┌────────▼─────────┐
            │ Past Highlights  │
            └──────────────────┘
```

🌟 Key Features
⚡ Lightning-fast performance with Vite

🎨 Elegant UI powered by Tailwind CSS & shadcn/ui

📱 Mobile-First Design for full responsiveness

🧩 Modular Component Architecture

🛡️ Security Compliance and accessibility-focused

🚀 Continuous Deployment on Netlify
