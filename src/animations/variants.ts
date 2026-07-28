export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -48 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

export const slideInRight = {
  initial: { opacity: 0, x: 48 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};
