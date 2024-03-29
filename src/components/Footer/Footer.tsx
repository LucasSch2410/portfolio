import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import * as icons from "../../utils/tinyIconHandler"

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

    const socialIcons = [
        {
            url: "https://github.com/lucasSch2410/",
            icon: icons.github
        },        
        {
            url: "https://www.linkedin.com/in/schroederdev/",
            icon: icons.linkedin
        },       
        {
            url: "mailto:lucasschroeder2410@gmail.com",
            icon: icons.email

        },        
        {
            url: "https://wa.me/5547988139924",
            icon: icons.whatsapp

        },        
        {
            url: "https://discordapp.com/users/257552506169720832/",
            icon: icons.discord
        },        
        {
            url: "https://www.instagram.com/_lbored/",
            icon: icons.instagram
        },        
        {
            url: "https://www.facebook.com/lucas.schroeder.589/",
            icon: icons.facebook
        },        
        {
            url: "https://twitter.com/lucas_sch10",
            icon: icons.twitter
        },        
        {
            url: "https://www.twitch.tv/f1r3g0n",
            icon: icons.twitch
        },        
        {
            url: "https://steamcommunity.com/id/MacarujaBR/",
            icon: icons.steam
        }
    ]

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
                    <h3 className="text-2xl lg:text-xl font-semibold whitespace-nowrap text-neutral-100">Contato e redes sociais</h3>
                    <p className="text-lg lg:text-base text-neutral-400 mt-2">Algumas das minhas redes sociais e formas de contato.</p>
                </div>
                <div className="h-[1px] bg-neutral-700"></div>
                <div className="max-w-xl grid grid-cols-5 gap-y-10 lg:gap-0 lg:flex lg:justify-between p-4 mx-auto my-8 lg:my-4">
                    {socialIcons.map((icon, iconIndex) => (
                        <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} key={iconIndex}>
                            <div className="w-[35px] h-[35px] bg-[white] rounded">
                                <a href={icon.url} target="_blank">
                                    <img className="p-1.5" src={icon.icon} alt=""/>
                                </a>
                            </div>
                        </motion.div>                    
                    ))}
                </div>
            </motion.div>
        </motion.footer>
    )
}