import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "Início", href: "#hero" },
        { label: "Serviços", href: "#services" },
        { label: "Sobre", href: "#about" },
        { label: "Equipe", href: "#team" },
        { label: "Depoimentos", href: "#testimonials" },
        { label: "Contato", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="font-heading text-2xl font-bold text-primary">
                            DentalCare
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <div
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-foreground cursor-pointer hover:text-primary transition-colors font-medium"
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <a
                                href="/agendamento"
                                className="bg-primary py-2 px-4 rounded-2xl text-white hover:scale-105 transition-transform font-medium"
                            >
                                Agendar Consulta
                            </a>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-foreground hover:text-primary transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className="h-16" />
            {isMobileMenuOpen && (
                <div

                    className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-background shadow-2xl md:hidden"
                >
                    <div className="flex flex-col p-8 gap-6 mt-20">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                            >
                                {item.label}
                            </button>
                        ))}
                        <div

                            className="flex items-center gap-4"
                        >
                            <a href="/agendamento" className=" bg-primary py-2 px-4 rounded-2xl text-white transform hover:scale-105 transition-transform font-medium">
                                Agendar Consulta
                            </a>

                        </div>

                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;