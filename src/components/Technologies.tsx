import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Layout, Server, Smartphone, Cloud, GitBranch } from "lucide-react";
export function Technologies() {
  const categories = [{
    title: "Frontend",
    icon: Layout,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
  }, {
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Python", "Express", "NestJS", "GraphQL"]
  }, {
    title: "Database",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL"]
  }, {
    title: "Mobile",
    icon: Smartphone,
    techs: ["React Native", "Flutter", "Expo"]
  }, {
    title: "DevOps",
    icon: Cloud,
    techs: ["Docker", "AWS", "Vercel", "CI/CD", "Nginx"]
  }, {
    title: "Tools",
    icon: GitBranch,
    techs: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
  }];
  return <section id="technologies" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tecnologias & Ferramentas
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico e ferramentas que utilizo no desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => <Card key={index} className="p-6 hover-lift border-accent/20 hover:border-accent/40 transition-all animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, i) => {})}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
}