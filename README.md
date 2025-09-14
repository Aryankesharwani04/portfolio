# portfolio

https://aryankesharwani04.vercel.app

## About

This is the personal portfolio website of **Aryan Kesharwani**, a passionate Full‑Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). The site showcases Aryan’s skills, projects, and provides a way to get in touch.

Live Demo: https://aryandev-mocha.vercel.app

---

## Features

- **Home**: Introduction and a brief bio
- **Projects**: Showcase of key projects with descriptions and links
- **Contact**: Interactive contact form that sends emails directly to Aryan’s inbox
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark & Light Mode**: Toggle between themes (if implemented)

---

## Tech Stack

| Frontend               | Backend                  | DevOps & Tools        |
|------------------------|--------------------------|-----------------------|
| React.js (Vite)        | Node.js & Express.js     | Git & GitHub          |
| TypeScript             | Nodemailer (email SMTP)  | Vercel (frontend)     |
| Tailwind CSS           | dotenv (env management)  | VS Code               |

---

## Project Structure

```
portfolio/
├─ src/              # React source code
│   ├─ components/   # Reusable components (Mail.tsx, Project.tsx, etc.)
│   ├─ App.css        # CSS variables & global styles
│   └─ main.tsx       # Application entry point
├─ backend/          # Express.js mail server
│   ├─ routes/
│   │   └─ send.ts   # Contact form email logic
│   ├─ .env          # Environment variables (ignored by Git)
│   └─ index.js      # Server entry point
├─ public/           # Static assets
├─ .gitignore
├─ package.json
└─ README.md
```

---

## Getting Started

### Prerequisites

- Node.js v14+ and npm
- A Gmail account with an App Password for SMTP

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Aryankesharwani04/portfolio.git
   cd portfolio
   ```

2. **Frontend setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend setup**
   ```bash
   cd backend
   npm install
   # create .env with:
   # EMAIL_USER=your@gmail.com
   # EMAIL_PASS=your_app_password
   npm run dev
   ```

4. **Open in browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api/send

---

## Contact

Have questions or want to work together? Reach out:

- 📧 Email: work.aryankesharwani04@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/aryankesharwani04

---

## License

This project is licensed under the MIT License.