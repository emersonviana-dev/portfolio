import { Card } from "@/components/ui/card";
import { Code, Layers, Zap, Shield, RefreshCw, Users } from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Desenvolvimento Full Stack",
      description: "Experiência completa em frontend e backend, criando aplicações web robustas e escaláveis",
    },
    {
      icon: Layers,
      title: "Arquitetura de Software",
      description: "Design de sistemas escaláveis com padrões de arquitetura modernos e boas práticas",
    },
    {
      icon: Zap,
      title: "Otimização de Performance",
      description: "Expertise em melhorar velocidade e eficiência de aplicações web",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementação de práticas de segurança e proteção de dados",
    },
    {
      icon: RefreshCw,
      title: "CI/CD & DevOps",
      description: "Automação de deploy e integração contínua para entregas ágeis",
    },
    {
      icon: Users,
      title: "Liderança Técnica",
      description: "Mentoria de equipes e revisão de código para garantir qualidade",
    },
  ];

  return (
    <section id="expertise" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Áreas de especialização e competências técnicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-accent/20 hover:border-accent/40 transition-all animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
