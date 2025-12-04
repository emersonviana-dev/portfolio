import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#about",
    label: "Sobre"
  }, {
    href: "#projects",
    label: "Projetos"
  }, {
    href: "#technologies",
    label: "Tecnologias"
  }, {
    href: "#expertise",
    label: "Expertise"
  }, {
    href: "#certificates",
    label: "Certificados"
  }, {
    href: "#contact",
    label: "Contato"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-accent/20 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }} className="text-xl font-bold text-accent cursor-pointer">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="px-4 py-2 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors cursor-pointer">
                  {link.label}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
}