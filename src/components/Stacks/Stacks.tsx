import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion"

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
    hidden: { opacity: 0 },
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

    return (
        <motion.div className="w-full" ref={constraintsRef}>

            <motion.div className="flex flex-col place-content-center place-items-center overflow-hidden py-8 bg-[rgba(255,_255,_255,_0.2)] rounded-[30px] gap-10" 
            variants={container} initial="hidden" animate="visible">

                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl" 
                drag dragConstraints={constraintsRef} variants={item} 
                whileHover={item.whileHover}  whileTap={item.whileTap} dragSnapToOrigin/>

                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl" 
                drag dragConstraints={constraintsRef} variants={item} 
                whileHover={item.whileHover}  whileTap={item.whileTap} dragSnapToOrigin/>
                
                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl" 
                drag dragConstraints={constraintsRef} variants={item} 
                whileHover={item.whileHover}  whileTap={item.whileTap} dragSnapToOrigin/>
                
                <motion.div className="w-[50px] h-[50px] bg-[white] rounded-2xl" 
                drag dragConstraints={constraintsRef} variants={item} 
                whileHover={item.whileHover}  whileTap={item.whileTap} dragSnapToOrigin/>

            </motion.div>

        </motion.div>

    );
};
