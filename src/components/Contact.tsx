import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-accent",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contato@exemplo.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Conversar?</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-accent/20 animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-accent/20 focus:border-accent min-h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 border-accent/20">
              <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-all group ${link.color}`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-accent/20 bg-accent/5">
              <h3 className="text-xl font-semibold mb-4">Disponibilidade</h3>
              <p className="text-muted-foreground mb-4">
                Atualmente disponível para projetos freelance e oportunidades remotas.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-sm font-medium">Disponível para trabalho</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
