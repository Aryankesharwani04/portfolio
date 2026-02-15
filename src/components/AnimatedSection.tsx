import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'fade';

interface AnimatedSectionProps {
    children: ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    className?: string;
    id?: string;
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

const AnimatedSection = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    className = '',
    id,
}: AnimatedSectionProps) => {
    return (
        <motion.div
            id={id}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1] as const,
            }}
            variants={variants[variant]}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
