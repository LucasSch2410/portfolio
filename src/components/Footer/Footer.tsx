import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

export function Footer() {

    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }

    }, [isInView]);

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
            },
        },
    };

    return (
        <motion.footer ref={ref} className="max-w-5xl mx-auto py-10 px-10 md:px-0" initial="hidden" animate={controls} variants={{
            visible: {
                transition:
                {
                    staggerChildren: 0.25
                }
            },
            hidden: {}
        }}>
            <motion.div className=" bg-neutral-900 border border-neutral-700 rounded-xl" variants={defaultAnimations}>
                <div className="p-4">
                    <h3 className="text-2xl font-medium whitespace-nowrap text-neutral-100">Contato e redes sociais</h3>
                    <p className="text-neutral-400 mt-2">Algumas das minhas redes sociais e formas de contato.</p>
                </div>
                <div className="h-[1px] bg-neutral-700"></div>
                <div className="p-4">

                </div>
            </motion.div>
        </motion.footer>
    )
}