import { Card } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      year: "2024",
      description: "Certificação em arquitetura de soluções cloud",
    },
    {
      title: "Professional Scrum Master I",
      institution: "Scrum.org",
      year: "2023",
      description: "Metodologias ágeis e gestão de projetos",
    },
    {
      title: "React Advanced Patterns",
      institution: "Udemy",
      year: "2023",
      description: "Padrões avançados de desenvolvimento React",
    },
    {
      title: "Node.js Certified Developer",
      institution: "OpenJS Foundation",
      year: "2022",
      description: "Desenvolvimento backend com Node.js",
    },
    {
      title: "GraphQL API Design",
      institution: "Frontend Masters",
      year: "2022",
      description: "Design e implementação de APIs GraphQL",
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificados & Reconhecimentos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificações profissionais e cursos completados
          </p>
        </div>

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full hover-lift border-accent/20 hover:border-accent/40 transition-all">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground">{cert.institution}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Calendar className="w-4 h-4" />
                        {cert.year}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
