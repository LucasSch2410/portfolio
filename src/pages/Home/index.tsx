import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { ButtonRotateBorder } from "../../components/ButtonRotateBorder/ButtonRotateBorder"
import { Stacks } from "../../components/Stacks/Stacks"
import { motion } from "framer-motion"
import { Copy } from "@phosphor-icons/react";

export default function Home() {
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

    const social = [
        {
            title: "GitHub",
            link: "http://github.com/lucassch2410"
        },
        {
            title: "Linkedin",
            link: "https://www.linkedin.com/in/schroederdev"
        },
        {
            title: "WhatsApp",
            link: "https://wa.me/5547988139924"
        }
    ]
    
    return (
        <>
            <main>
                <section className="mx-auto flex max-w-5xl flex-col justify-start gap-4 overflow py-8 px-10 md:px-0">
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
                                {social.map((item, itemIndex) => (
                                    <ButtonRotateBorder key={itemIndex}>
                                        <a className="w-full" title={item.title} href={item.link} target="_blank">
                                            <span className="subpixel-antialiased">{item.title}</span>
                                        </a>
                                    </ButtonRotateBorder>
                                ))}

                                <ButtonRotateBorder copyEmail>
                                    <div className="flex gap-2 justify-center items-center">
                                        <span>E-mail</span>
                                        <Copy size={16}/>
                                    </div>
                                </ButtonRotateBorder>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto flex flex-col lg:flex-row max-w-5xl my-8 px-10 md:px-0 gap-20">
                    <div className="w-full lg:w-1/2">
                        <Stacks/>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <AnimatedText once text={["Meu nome é Lucas Schroeder.", "Sou um desenvolvedor web com dois anos de experiência e estou cursando o último semestre da faculdade de Análise e Desenvolvimento de sistemas.",
                         "Tenho sólidos conhecimentos em desenvolvimentos de aplicações web usando JavaScript, TypeScript, NodeJS e React.",
                         "Estudando Python e Java no momento."]} 
                        el="h1" className="text-lg font-medium text-[#c0c0c0] px-5" />

                    </div>


                </section>

                <section className="mx-auto flex max-w-5xl flex-col my-8 px-10 md:px-0">

                </section>
            </main>
        </>

    ) 
}
