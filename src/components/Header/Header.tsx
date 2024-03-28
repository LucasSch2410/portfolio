import { AnimatedTabs } from "../AnimatedTabs/AnimatedTabs";
import { motion } from "framer-motion";

export function Header() {
    return (
        <header className="">
            <div className="max-w-5xl mx-auto px-10 md:px-0">
                <div className="flex text-neutral-100">
                    <div className="flex align-middle justify-center">
                        <motion.h1 initial="hidden" animate="visible"><span className="text-[50px] mr-1 font-medium">S</span>chroeder</motion.h1>
                    </div>
                    <AnimatedTabs/>
                </div>
            </div>
            <div className="h-[1px] bg-neutral-800"></div>
        </header>
    )
}