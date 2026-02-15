import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollSpy from '../hooks/useScrollSpy';

const sections = [
    { id: 'header', label: 'Home', icon: 'ri-home-4-line' },
    { id: 'about', label: 'About', icon: 'ri-user-line' },
    { id: 'experience', label: 'Experience', icon: 'ri-briefcase-line' },
    { id: 'skills', label: 'Skills', icon: 'ri-code-s-slash-line' },
    { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
    { id: 'achievements', label: 'Achievements', icon: 'ri-trophy-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-mail-line' },
    { id: 'education', label: 'Education', icon: 'ri-graduation-cap-line' },
];

const sectionIds = sections.map((s) => s.id);

function Sidebar() {
    const activeId = useScrollSpy(sectionIds, 80);
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMobileOpen(false);
    };

    return (
        <>
            {/* Desktop sidebar */}
            <nav className="sidebar-desktop">
                <div className="sidebar-inner">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className={`sidebar-dot-btn ${activeId === section.id ? 'active' : ''}`}
                            aria-label={section.label}
                        >
                            <span className="sidebar-dot">
                                <i className={section.icon}></i>
                            </span>
                            <span className="sidebar-label">{section.label}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile fab */}
            <button
                className="mobile-nav-fab"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
            >
                <i className="ri-compass-3-line"></i>
            </button>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="mobile-nav-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            className="mobile-nav-panel"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <div className="mobile-nav-header">
                                <span className="mobile-nav-title">Navigate</span>
                                <button
                                    className="mobile-nav-close"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Close navigation"
                                >
                                    <i className="ri-close-line"></i>
                                </button>
                            </div>
                            <div className="mobile-nav-links">
                                {sections.map((section, i) => (
                                    <motion.button
                                        key={section.id}
                                        onClick={() => scrollTo(section.id)}
                                        className={`mobile-nav-link ${activeId === section.id ? 'active' : ''}`}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i }}
                                    >
                                        <i className={section.icon}></i>
                                        <span>{section.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Sidebar;
