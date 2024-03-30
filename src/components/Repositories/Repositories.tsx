import { useEffect, useState } from "react";
import { GithubLogo, Link } from "@phosphor-icons/react";
import { motion } from "framer-motion";


interface Repo {
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
}

export const Repositories = () => {
    const [repos, setRepo] = useState<Repo[]>([])
    const [isLoad, setLoad] = useState(false)
    
    const GITHUB_URL = 'https://api.github.com/users/LucasSch2410/repos?sort=created'
    
    useEffect(() => {
        const fetchRepo = async () => {
            const response = await fetch(GITHUB_URL)
            const json = await response.json()
            setRepo(json)
            setLoad(true)
        }

        fetchRepo()
    }, [])

    const belowAnimation = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                staggerChildren: 0.2
            },
            
        },
    };

    return !isLoad ? "" : (
        <motion.div className="h-50 py-8" variants={belowAnimation} initial="hidden" whileInView="visible" 
        viewport={{ amount: 0.2, once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white pb-5">Repositorios</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-7 sm:gap-5">

                {repos.map((repo, repoIndex) => {
                    return (
                        <motion.div className="flex flex-col bg-neutral-900 border border-neutral-700 rounded-xl p-2"
                        variants={belowAnimation} key={repoIndex}>
                            <div className="flex items-center gap-2 ">
                                <h3 className="font-bold text-neutral-200 text-xl lg:text-lg">{repo.name}</h3>
                                <GithubLogo color="#FFF"/>
                            </div>
                            <p className="text-neutral-400 text-lg lg:text-sm leading-[1.5] mt-2 mb-4">{repo.description ? repo.description : "..."}</p>
                            <a href={repo.html_url} className="mt-auto flex items-center gap-1">
                                <Link color="#FFF"/>
                                <h2 className="font-semibold text-neutral-300 text-base lg:text-sm">{repo.full_name}</h2>
                            </a>
                        </motion.div>
                    )
                })}
                
            </div>
        </motion.div>
    )
}