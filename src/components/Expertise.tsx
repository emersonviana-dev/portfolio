import { Card } from "@/components/ui/card";
import { Brain, Sparkles, Server, Cloud, HardDrive, Palette } from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Desenvolvimento e implementação de soluções baseadas em IA e machine learning",
    },
    {
      icon: Sparkles,
      title: "Engenharia de Prompt",
      description: "Criação e otimização de prompts para modelos de linguagem e sistemas de IA",
    },
    {
      icon: Server,
      title: "Virtualização de Sistemas",
      description: "Gestão de ambientes virtualizados e infraestrutura de servidores",
    },
    {
      icon: Cloud,
      title: "Oracle Cloud",
      description: "Implementação e gerenciamento de soluções na Oracle Cloud Infrastructure",
    },
    {
      icon: HardDrive,
      title: "Proxmox",
      description: "Administração de clusters e virtualização com Proxmox VE",
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Criação de interfaces modernas, responsivas e centradas no usuário",
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
