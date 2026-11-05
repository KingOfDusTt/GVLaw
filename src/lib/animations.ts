import { Variants } from "framer-motion";

// Custom easing για σοβαρή, editorial αίσθηση (Expo Out)
export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE_EDITORIAL,
      delay,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const subtleScaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: EASE_EDITORIAL,
    },
  },
};

export const lineDrawVariant: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.85,
      ease: EASE_EDITORIAL,
    },
  },
};

export const modalOverlayVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export const drawerSlideVariant: Variants = {
  hidden: { x: "100%", opacity: 0.5 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_EDITORIAL },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: EASE_EDITORIAL },
  },
};