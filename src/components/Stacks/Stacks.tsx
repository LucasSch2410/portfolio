import { useRef } from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            delayChildren: 0.8,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const Stacks = () => {
    const constraintsRef = useRef(null);

    return (
        <motion.div className="w-full" ref={constraintsRef}>
            <motion.div className="py-8 place-content-center place-items-center overflow-hidden flex flex-col 
        bg-[rgba(255,_255,_255,_0.2)] rounded-[30px]" variants={container} initial="hidden" animate="visible">
                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl hover:cursor-grab" drag dragConstraints={constraintsRef} variants={item} />
                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl hover:cursor-grab" drag dragConstraints={constraintsRef} variants={item} />
                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl hover:cursor-grab" drag dragConstraints={constraintsRef} variants={item} />
                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl hover:cursor-grab" drag dragConstraints={constraintsRef} variants={item} />
            </motion.div>
        </motion.div>

    );
};
