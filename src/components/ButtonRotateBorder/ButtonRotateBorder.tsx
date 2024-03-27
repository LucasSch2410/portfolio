import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const item = {
    hidden: { y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  };

export function ButtonRotateBorder({ children }: ButtonProps) {
    return (
      <motion.button className="relative inline-flex overflow-hidden rounded-xl p-px"
      variants={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
        <span className="subpixel-antialiased inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-neutral-950
         px-4 py-2 text-sm font-bold text-gray-50 backdrop-blur-3xl hover:bg-white hover:text-black">
        { children }
        </span>
      </motion.button>
    );
  }