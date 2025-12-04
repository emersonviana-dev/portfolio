import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      github: "#",
      demo: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard interativo de análise de dados com visualizações avançadas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Platform",
      description: "Rede social com feed em tempo real, stories e sistema de mensagens",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["React Native", "Firebase", "Node.js"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção dos meus principais trabalhos e projetos recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift group border-accent/20 hover:border-accent/40 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-accent/50 hover:bg-accent/10">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button variant="outline" size="sm" className="border-accent/50 hover:bg-accent/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
