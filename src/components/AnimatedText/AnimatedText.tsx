import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
};

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

export const AnimatedText = ({
    text,
    el: Wrapper = "p",
    className,
    once,
    animation = defaultAnimations,
}: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (isInView) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [isInView]);

    return (
        <Wrapper className={className}>
            <span className="sr-only">{textArray.join(" ")}</span>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: {
                        transition:
                        {
                            staggerChildren: 0.05
                        }
                    },
                    hidden: {},
                }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className="block mt-5" key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span className="inline-block" key={`${word}-${wordIndex}`}>
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        className="inline-block"
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
