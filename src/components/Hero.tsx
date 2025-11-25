import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ImagePlus } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Hero() {
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [tempUrl, setTempUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("profileImageUrl");
    if (saved) {
      setProfileUrl(saved);
    }
  }, []);

  const handleSaveUrl = () => {
    if (tempUrl.trim()) {
      localStorage.setItem("profileImageUrl", tempUrl);
      setProfileUrl(tempUrl);
      setIsOpen(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("profileImageUrl");
    setProfileUrl("");
    setTempUrl("");
    setIsOpen(false);
  };

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
              src={profileUrl || profileImg} 
              alt="Profile" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent/20 shadow-2xl" 
            />
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-2 right-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <ImagePlus className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Alterar Foto de Perfil</DialogTitle>
                  <DialogDescription>
                    Insira a URL da nova foto de perfil
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">URL da Imagem</Label>
                    <Input
                      id="imageUrl"
                      placeholder="https://exemplo.com/foto.jpg"
                      value={tempUrl}
                      onChange={(e) => setTempUrl(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveUrl} className="flex-1">
                      Salvar
                    </Button>
                    <Button onClick={handleReset} variant="outline">
                      Restaurar Original
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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