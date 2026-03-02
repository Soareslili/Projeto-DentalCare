

import heroImage from "../assets/Hero.png";

export const Hero = () => {


    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.3) 100%), url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <div

                        className="space-y-6"
                    >
                        <div
                           
                            className="inline-block bg-[#D6EBE2] px-6 py-2 rounded-full"
                        >
                            <span className="text-primary font-medium">✨ Cuidado Odontológico Premium</span>
                        </div>

                        <h1 className="font-heading text-5xl md:text-7xl w-150 font-bold text-foreground">
                            Sorrisos Saudáveis{" "}
                            <span className="text-primary">para Toda a Família</span>
                        </h1>

                        <p className="text-xl text-gray-500 max-w-xl">
                            Tratamento odontológico completo e humanizado com equipe especializada.
                            Sua saúde bucal é nossa prioridade.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">

                            <a href="/agendamento" className="text-lg h-14 px-8 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center">
                                Agendar Consulta
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 shadow-2xl"
                >
                    <div className="text-center space-y-2">
                        <div className="text-5xl font-bold text-primary">15+</div>
                        <div className="text-muted-foreground">Anos de<br />Experiência</div>
                    </div>
                </div>
            </div>
        </section>
    );
};