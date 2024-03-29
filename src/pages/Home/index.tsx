import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { ButtonRotateBorder } from "../../components/ButtonRotateBorder/ButtonRotateBorder"
import { Stacks } from "../../components/Stacks/Stacks"
import { motion, useAnimation, useInView } from "framer-motion"
import { GithubLogo, LinkedinLogo, WhatsappLogo, Copy } from "@phosphor-icons/react";
import { CardRevealedPointer } from "../../components/CardRevealedPointer/CardRevealedPointer";
import { useEffect, useRef } from "react";

export default function Home() {
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
            link: "http://github.com/lucassch2410",
            logo: GithubLogo
        },
        {
            title: "Linkedin",
            link: "https://www.linkedin.com/in/schroederdev",
            logo: LinkedinLogo
        },
        {
            title: "WhatsApp",
            link: "https://wa.me/5547988139924",
            logo: WhatsappLogo
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

                            <motion.div className="flex flex-col w-full gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row mt-2"
                                variants={container} initial="hidden" animate="visible">

                                {social.map((item, itemIndex) => (
                                    <ButtonRotateBorder key={itemIndex}>
                                        <a className="flex gap-2 items-center px-4 py-2" title={item.title} href={item.link} target="_blank">
                                            <span className="subpixel-antialiased">{item.title}</span>
                                            <item.logo size={18}/>
                                        </a>
                                    </ButtonRotateBorder>
                                ))}

                                <ButtonRotateBorder copyEmail>
                                    <div className="flex gap-2 justify-center items-center px-4 py-2">
                                        <span>E-mail</span>
                                        <Copy size={16} />
                                    </div>
                                </ButtonRotateBorder>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto flex flex-col lg:flex-row max-w-5xl my-8 px-10 md:px-0 gap-10 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <Stacks />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <AnimatedText once text={["Meu nome é Lucas Schroeder.", "Sou um desenvolvedor web com dois anos de experiência e estou cursando o último semestre da faculdade de Análise e Desenvolvimento de sistemas.",
                            "Tenho sólidos conhecimentos em desenvolvimentos de aplicações web usando JavaScript, TypeScript, NodeJS e React.",
                            "Estudando Python e Java no momento."]}
                            el="h1" className="text-lg font-medium text-[#c0c0c0] px-5" />
                    </div>
                </section>

                <motion.section className="mx-auto flex max-w-5xl flex-col justify-start py-8 px-10 md:px-0" ref={ref} initial="hidden" animate={controls} variants={{                    
                    visible: {
                        transition:
                        {
                            staggerChildren: 0.25
                        }
                        },
                        hidden: {}
                    }}>

                    <div className="flex flex-col sm:flex-row gap-10">
                        <motion.div className="w-full sm:w-1/3" variants={defaultAnimations}>
                            <CardRevealedPointer title={"Faculdade"}>
                                Estou cursando Análise e Desenvolvimento de Sistemas na Anhanguera. No momento, estou focando os meus estudos em estrutura de dados e algoritmos,
                                junto com Python e Java. Como o meu desejo é trabalhar com Data Science, já me inscrevi em matérias extra curriculares de Análise de Dados com Python e
                                no programa de Iniciação Científica.
                            </CardRevealedPointer>
                        </motion.div>
                        <motion.div className="w-full sm:w-2/3" variants={defaultAnimations}>
                            <CardRevealedPointer title={"Python"}>
                                Uso Python na maioria dos meus projetos. Por ser uma linguagem versátil, simples e coerente, é a mais usada no meu dia a dia para trabalhos simples. Scrap,
                                API RESTful e manipulação de imagens são alguns dos meus projetos recentes, bem como Machine Learning e sistemas de busca e aprendizado para jogos simples como
                                Tic-Tac-Toe. Frameworks e bibliotecas como FASTApi, Flask, pandas e Pillow foram extremamente necessárias na minha jornada como programador.
                            </CardRevealedPointer>
                        </motion.div>
                    </div>
                    <motion.div className="mt-10" variants={defaultAnimations}>
                        <CardRevealedPointer title={"Desenvolvimento Web"}>
                            Trabalho com desenvolvimento web a cerca de dois anos, criando páginas para produtos em um grande webcommerce, hotsites e anúncios de novos produtos para milhares/milhões de pessoas. Meus interesses me lançaram para as 
                            partes mais profundas dos códigos. Criar algoritmos complexos são tão prazerosos como o visual bonito de uma página. Me vi interessado em usar NodeJS e TypeScript para me aperfeiçoar, 
                            bem como construir sistemas completos com banco de dados PostgreSQL ou SQLite. Desenvolver ambas as partes me fez ter uma ideia completa de como as peças se encaixam e como tudo
                            funciona como um conjunto para entregar uma experiência para o consumidor.
                        </CardRevealedPointer>
                    </motion.div>
                </motion.section>
            </main>
        </>
    )
}
