import profile from "../assets/profile-img.png";
import { motion } from "framer-motion";
import "../App.css";

function Header() {
  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-between items-center gap-6 py-4">
      <div className="flex flex-col items-start justify-center gap-3">
        <div
          id="header-inner"
          className="flex sm:flex-row flex-col items-start sm:items-center sm:justify-center gap-4"
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Aryan Kesharwani
          </motion.h1>
          <motion.a
            href="mailto:work.aryankesharwani04@gmail.com"
            className="btn-hire"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <i className="ri-mail-send-line"></i>
            Hire Me!
          </motion.a>
        </div>

        <motion.p
          className="text-sm font-medium text-[var(--text-200)] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-Stack Developer | Software Engineer | AWS | MERN | Microservices | Cloud | Docker | Jenkins | CI/CD | Linux | System Design
        </motion.p>

        <motion.div
          className="flex items-center gap-2 text-[var(--primary-300)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <i className="ri-map-pin-2-line text-lg"></i>
          <span className="text-sm font-medium">Kanpur, India</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://www.linkedin.com/in/aryankesharwani04/" className="social-icon" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/aryankesharwani04" className="social-icon" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill"></i>
          </a>
          <a href="mailto:work.aryankesharwani04@gmail.com" className="social-icon" aria-label="Email" title="Email">
            <i className="ri-mail-add-line"></i>
          </a>
          <a href="tel:+917007730147" className="social-icon" aria-label="Phone" title="Phone">
            <i className="ri-phone-line"></i>
          </a>
          <a href="https://aryankesharwani04.vercel.app" className="social-icon" aria-label="Portfolio" title="Portfolio" target="_blank" rel="noopener noreferrer">
            <i className="ri-global-line"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1SxGPo-BXV09kAu3Xxgj_7a4IUDFWvQDB/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hire !py-1.5 !px-3 !text-xs"
            aria-label="View Resume"
            title="View Resume"
          >
            <i className="ri-eye-line"></i>
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="float-anim min-w-[100px] z-10 w-32 sm:w-44"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="profile-ring">
          <img src={profile} alt="Aryan Kesharwani" />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
