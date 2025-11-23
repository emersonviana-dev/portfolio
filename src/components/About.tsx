import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Código limpo, mantível e escalável",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e responsivas",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimização e alta performance",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação",
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor full stack apaixonado por criar soluções digitais inovadoras. 
            Com experiência em desenvolvimento frontend e backend, trabalho para entregar 
            produtos de alta qualidade que superem as expectativas dos usuários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-accent/20 hover:border-accent/40 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
