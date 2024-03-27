import { ButtonRotateBorder } from "../../components/ButtonRotateBorder/ButtonRotateBorder"
import { Stacks } from "../../components/Stacks/Stacks"
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

const title = {
    initial: { opacity: 0, x: -220 },
    animate: { 
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 160,
            damping: 20        
        }
    }
}


export default function Home() {
    return (
        <>
            <main>
                <section className="mx-auto flex max-w-5xl flex-col justify-start gap-4 overflow py-8 xl:px-0">
                    <div className="flex flex-col gap-6 md:max-w-3xl">
                        <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" 
                        variants={title} initial="initial" animate="animate" >
                            Lucas Schroeder -- Full-Stack Developer
                        </motion.h1>
                        <div className="flex flex-col gap-6 md:max-w-2xl">
                            <motion.h2 className="text-lg font-medium text-[#c0c0c0]"
                            variants={title} initial="initial" animate="animate">
                                <span>Focado no Back-End.</span>
                            </motion.h2>
                            
                            <motion.div className="flex flex-col w-full gap-4 md:flex-row lg:flex-row mt-2" 
                            variants={container} initial="hidden" animate="visible">
                                <ButtonRotateBorder>
                                    <a className="w-full" title="Github" href="http://github.com/lucassch2410" target="_blank">
                                        <span className="subpixel-antialiased">Github</span>
                                    </a>
                                </ButtonRotateBorder>

                                <ButtonRotateBorder>
                                    <a className="w-full" title="Linkedin" href="https://www.linkedin.com/in/schroederdev" target="_blank">
                                        <span>Linkedin</span>
                                    </a>
                                </ButtonRotateBorder>

                                <ButtonRotateBorder>
                                    <a className="w-full" title="Redes sociais" href="http://github.com/lucassch2410" target="_blank">
                                        <span>WhatsApp</span>
                                    </a>
                                </ButtonRotateBorder>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto flex max-w-5xl flex-col my-8 xl:px-0">
                    <Stacks/>
                </section>
            </main>
        </>

    )
}
