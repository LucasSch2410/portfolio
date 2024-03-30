import { default as profile_pic } from "../../assets/profile-pic.jpeg"

export const About = () => {
    return (
        <main className="max-w-5xl mx-auto flex-col py-6 px-10 md:px-0">
            <section className="max-w-5xl flex flex-col justify-start py-8">
                <div className="flex flex-col-reverse lg:flex-row gap-10">
                    <div className="flex flex-col gap-8 w-full lg:w-1/2">
                        <h1 className="text-white text-6xl lg:text-5xl text-center">Sobre.</h1>
                        <h2 className="text-white text-3xl lg:text-2xl text-center">O meu nome é Lucas Schroeder. Tenho 21 anos e sempre tô programando alguma coisa.</h2>

                        <div className="flex flex-col gap-5 mt-10 text-white text-xl lg:text-lg">
                            <p>Como muitos, cresci na frente de um computador a maior parte da minha vida. Não via nada que me interessava mais do que o digital. </p>

                            <p>Pegando um conceito abstrato como a criação, eu considero que me identifico muito com isso. <span className="font-extrabold">Desenvolver minhas próprias ferramentas</span>,
                                ou ajudar os outros com o que eu sabia, sempre foram os meus pilares.  </p>

                            <p>Já me interessei a trabalhar com Design Gráfico, tanto que possuo cursos na área, mas
                                a chama e o sentimento peculiar da <span className="font-extrabold">programação</span> me desviaram do caminho.</p>

                            <p>Eu não sei bem quando foi o ponto de partida, mas agradeço o meu eu do passado, por que é algo que eu amo fazer, e me vejo
                                passando a vida <span className="font-extrabold">criando e desenvolvendo aplicações.</span></p>

                            <p className="text-white text-xl lg:text-lg">Meus hobbies se baseiam em ver filmes recentes, jogos e estudar assuntos relacionados a tecnologia. Sou músico faz anos e toco piano, violão e guitarra.</p>
                        </div>

                    </div>
                    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
                        <img src={profile_pic} alt="Lucas Schroeder" />
                    </div>
                </div>
            </section>
        </main>
    )
}