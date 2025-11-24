import { Heart } from "lucide-react";
import logoSignature from "@/assets/logo-signature.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 border-t border-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Assinatura */}
          <div className="w-full max-w-xs">
            <img 
              src={logoSignature} 
              alt="Emerson Viana - WebDev UI/UX" 
              className="w-full h-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              Desenvolvido com <Heart className="w-4 h-4 text-accent fill-accent" /> por Desenvolvedor Full Stack
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Todos os direitos reservados.
            </p>
            <p className="text-sm text-accent">
              contato@exemplo.com
            </p>
          </div>

          {/* Links rápidos */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projetos
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
