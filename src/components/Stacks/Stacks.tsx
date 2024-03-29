import { useRef } from "react";
import { motion } from "framer-motion";
import * as icons from '../../utils/stacksHandler'; 

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        delayChildren: 1.2,
        staggerChildren: 0.8
      }
    }
};

const item = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
    },
    whileHover: { 
        scale: 1.3    
    },
    whileTap: {
        scale: 0.9    
    },
};

export const Stacks = () => {
    const constraintsRef = useRef(null);

    const stacks = [
        {
            name: "Python",
            image: icons.python,
        },
        {
            name: "Flask",
            image: icons.flask,
        },
        {
            name: "FastAPI",
            image: icons.fastapi,
        },
        {
            name: "JavaScript",
            image: icons.javascript,
        },
        {
            name: "TypeScript",
            image: icons.typescript,
        },
        {
            name: "NodeJS",
            image: icons.node,
        },
        {
            name: "React",
            image: icons.react,
        },
        {
            name: "Styled Components",
            image: icons.styled,
        },
        {
            name: "Tailwind",
            image: icons.tailwind,
        },
        {
            name: "Linux",
            image: icons.linux,
        },
        {
            name: "GitHub",
            image: icons.github,
        },
        {
            name: "PostgreSQL",
            image: icons.postgresql,
        }
    ]

    return (
        <motion.div className="w-full" ref={constraintsRef}>
            <motion.div className="grid grid-cols-3 place-content-center place-items-center overflow-hidden py-8 bg-[rgba(255,_255,_255,_0.2)] rounded-[30px] gap-y-10" 
            variants={container} initial="hidden" animate="visible">
                {stacks.map((stack, stackIndex) => (
                    <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl overflow-hidden p-1.5 col-span-1"
                    variants={item} key={stackIndex}
                    whileHover={item.whileHover} whileTap={item.whileTap}>
                        <img src={stack.image} alt={stack.name} draggable="false"/>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>

    );
};
