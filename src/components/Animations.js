export const fade = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 2},
    }
};

export const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

export const spin = {
    animate: {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }
}

export const titleAnim = {
    hidden: {y: 200},
    show: {
        y:0,
        transition: {duration: 0.5, ease: "easeOut"},
    },
};

export const photoAnim = {
    hidden: {scale: 1.5, opacity:0},
    show:{
        scale: 1,
        opacity:1,
        transition: {ease: 'easeOut', duration:0.75},
    }
};

export const lineAnim = {
    hidden: {width: '0%'},
    show: {
        width: '100%',
        transition: {duration: 1},
    }
};

export const scrollReveal = {
    hidden: {opacity: 0, scale: 1.2},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }
}


export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerchildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1,
        }
    }
};

export const aboutPageAnimation = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 2},
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
};