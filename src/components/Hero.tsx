import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-float"></div>
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent/20 shadow-2xl" 
            />
          </div>

          <div className="space-y-4 animate-fade-in-delayed">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Desenvolvedor <span className="text-gradient">Web</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transformando ideias em experiências digitais através de código limpo e design intuitivo
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-accent hover:bg-accent/90 text-white shadow-lg hover-lift group">
              Ver Projetos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="border-accent/50 hover:bg-accent/10">
              Entrar em Contato
            </Button>
          </div>

          <div className="flex gap-4 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              Disponível para freelance
            </div>
          </div>
        </div>
      </div>
    </section>;
}