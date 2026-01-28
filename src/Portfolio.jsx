import React, { useState, useEffect } from 'react';
import { Shield, Lock, Server, Cloud, Terminal, GitBranch, Database, Network, Zap, Eye, Code, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fonction pour faire défiler vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    { name: 'Sécurité Réseau', icon: Shield, level: 95, color: 'from-cyan-500 to-blue-600' },
    { name: 'Cloud Infrastructure', icon: Cloud, level: 90, color: 'from-blue-500 to-indigo-600' },
    { name: 'Linux/Unix', icon: Terminal, level: 92, color: 'from-green-500 to-emerald-600' },
    { name: 'DevSecOps', icon: GitBranch, level: 88, color: 'from-purple-500 to-pink-600' },
    { name: 'Base de données', icon: Database, level: 85, color: 'from-orange-500 to-red-600' },
    { name: 'Virtualisation', icon: Server, level: 90, color: 'from-teal-500 to-cyan-600' },
  ];

  const projects = [
    {
      title: 'Infrastructure Zero-Trust',
      description: 'Déploiement d\'une architecture zero-trust avec authentification multifacteur et segmentation réseau',
      tech: ['Kubernetes', 'Istio', 'Vault', 'AWS'],
      icon: Lock
    },
    {
      title: 'Plateforme Cloud Sécurisée',
      description: 'Migration et sécurisation d\'infrastructure vers AWS avec chiffrement de bout en bout',
      tech: ['AWS', 'Terraform', 'Docker', 'CloudWatch'],
      icon: Cloud
    },
    {
      title: 'SIEM & SOC Automation',
      description: 'Mise en place d\'un système de détection et réponse aux incidents automatisé',
      tech: ['ELK Stack', 'Python', 'Wazuh', 'Splunk'],
      icon: Eye
    },
    {
      title: 'CI/CD Pipeline Sécurisé',
      description: 'Pipeline DevSecOps avec tests de sécurité automatisés et scanning de vulnérabilités',
      tech: ['Jenkins', 'SonarQube', 'Trivy', 'GitLab CI'],
      icon: GitBranch
    }
  ];

  const certifications = [
    { name: 'CISSP', org: 'ISC²', year: '2024' },
    { name: 'AWS Solutions Architect', org: 'Amazon', year: '2023' },
    { name: 'CEH', org: 'EC-Council', year: '2023' },
    { name: 'CCNA Security', org: 'Cisco', year: '2022' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'left 0.1s, top 0.1s'
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SecureInfra
              </span>
            </div>
            <div className="flex space-x-6">
              {[
                { label: 'Accueil', id: 'accueil' },
                { label: 'Compétences', id: 'competences' },
                { label: 'Projets', id: 'projets' },
                { label: 'Certifications', id: 'certifications' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all hover:text-cyan-400 group ${
                    activeSection === item.id ? 'text-cyan-400' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-20 pt-20">
        {/* Hero Section */}
        <section id="accueil" className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative w-40 h-40 rounded-full border-4 border-cyan-500/50 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                  <Lock className="w-20 h-20 text-cyan-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Administrateur
              </span>
              <br />
              <span className="text-white">Infrastructures Sécurisées</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Expert en sécurité cloud, DevSecOps et architecture réseau. 
              Spécialisé dans la conception et la gestion d'infrastructures hautement sécurisées.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Cloud, text: 'Cloud Native' },
                { icon: Shield, text: 'Cybersécurité' },
                { icon: Network, text: 'Architecture Réseau' },
                { icon: Zap, text: 'Automatisation' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => scrollToSection('projets')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                Voir mes projets
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
              >
                Me contacter
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competences" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Compétences Techniques
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/60 transition-all transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projets Réalisés
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm text-center hover:border-cyan-500/60 transition-all transform hover:scale-105">
                  <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.org}</p>
                  <p className="text-cyan-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Travaillons Ensemble
              </span>
            </h2>
            <p className="text-gray-400 mb-8">
              Besoin d'un expert en sécurité infrastructure ? Discutons de votre projet.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="mailto:contact@secureinfra.dev" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-cyan-500/20">
          <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
            <p>© 2026 Administrateur Infrastructures Sécurisées. Tous droits réservés.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
