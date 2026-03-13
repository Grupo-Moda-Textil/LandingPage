import type { Variants } from 'framer-motion';

export const motionVariants: Record<string, Variants> | any = {
  // --- Mask Text Reveal ---
  maskContainer: {
    initial: {},
    whileInView: { 
      transition: { 
        staggerChildren: 0.15 
      } 
    },
    viewport: { once: false, amount: 0.3 }
  },
  maskItem: {
    initial: { y: '120%' },
    whileInView: { 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 70, 
        damping: 15, 
        mass: 1 
      } 
    }
  },

  revealText: {
    initial: { y: '100%' },
    whileInView: { y: 0 },
    transition: { type: 'spring', bounce: 0, duration: 1 }
  },
  
  // --- Organic Spring Fades ---
  fadeInUpSpring: {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 80, 
        damping: 20 
      } 
    },
    viewport: { once: false, amount: 0.2 }
  },

  zoomInSpring: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      } 
    },
    viewport: { once: false, amount: 0.3 }
  },

  // --- Advanced Stagger (3D Flip) ---
  staggerCardsContainer: {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: false, amount: 0.3 }
  },
  
  staggerCardItem: {
    initial: { opacity: 0, y: 40, rotateX: 20, rotateY: 20, scale: 0.9 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        mass: 1.2
      } 
    }
  }
};
