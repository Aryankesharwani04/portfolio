import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = true }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="media pb-4">
            <div className="flex items-center justify-between">
                <h1 className="section-heading !mb-0">{title}</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="collapse-toggle"
                    aria-label={isOpen ? "Collapse section" : "Expand section"}
                >
                    <span>{isOpen ? "See less" : "See more"}</span>
                    <motion.i
                        className={`ri-arrow-${isOpen ? "up" : "down"}-s-line`}
                        key={isOpen ? "up" : "down"}
                        initial={{ rotate: isOpen ? 180 : -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                </button>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="pt-4">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default CollapsibleSection;
