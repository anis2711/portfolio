import React, { useState, useEffect } from 'react';
import { Shield, Lock, Server, Cloud, Terminal, GitBranch, Database, Network, Zap, Eye, Code, Award, X, FileText, Image as ImageIcon, Download, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      icon: Lock,
      detailedDescription: `Ce projet consistait à mettre en place une architecture Zero-Trust complète pour sécuriser l'infrastructure de l'entreprise. 
      
L'approche Zero-Trust repose sur le principe "ne jamais faire confiance, toujours vérifier". Nous avons implémenté :

• Authentification multifacteur (MFA) obligatoire pour tous les accès
• Segmentation micro-périmétrique du réseau
• Chiffrement de bout en bout des communications
• Surveillance continue et analyse comportementale
• Politique de moindre privilège stricte

Résultats :
- Réduction de 85% des tentatives d'intrusion réussies
- Temps de détection des anomalies réduit de 70%
- Conformité totale avec les normes ISO 27001`,
      duration: '6 mois',
      team: '5 personnes',
      role: 'Lead Infrastructure Security',
      challenges: [
        'Migration sans interruption de service',
        'Formation des équipes aux nouvelles pratiques',
        'Intégration avec les systèmes legacy'
      ],
      achievements: [
        'Certification ISO 27001 obtenue',
        'Zéro incident de sécurité post-déploiement',
        'Amélioration de 40% des performances réseau'
      ],
      images: [
        // Ajoutez vos vraies images ici
        // '/images/zerotrust-architecture.jpg',
        // '/images/zerotrust-dashboard.png'
      ],
      documents: [
        // Ajoutez vos vrais documents ici
        // { name: 'Architecture Zero-Trust - Documentation.pdf', url: '/docs/zerotrust-doc.pdf', type: 'pdf' },
        // { name: 'Rapport de sécurité.pdf', url: '/docs/security-report.pdf', type: 'pdf' }
      ],
      links: [
        // { name: 'Documentation technique', url: 'https://votre-lien.com' }
      ]
    },
    {
      title: 'Plateforme Cloud Sécurisée',
      description: 'Migration et sécurisation d\'infrastructure vers AWS avec chiffrement de bout en bout',
      tech: ['AWS', 'Terraform', 'Docker', 'CloudWatch'],
      icon: Cloud,
      detailedDescription: `Migration complète de l'infrastructure on-premise vers AWS avec mise en place de mesures de sécurité avancées.

Éléments clés du projet :

• Architecture multi-régions pour haute disponibilité
• Infrastructure as Code avec Terraform
• Conteneurisation avec Docker et ECS
• Monitoring avancé avec CloudWatch et CloudTrail
• Sauvegarde automatisée et disaster recovery

Technologies utilisées :
- AWS EC2, S3, RDS, Lambda
- Terraform pour l'IaC
- Docker et ECS pour la conteneurisation
- AWS KMS pour le chiffrement
- CloudFormation pour l'automatisation

Impact :
- Réduction des coûts d'infrastructure de 35%
- Disponibilité de 99.99% atteinte
- Temps de déploiement réduit de 80%`,
      duration: '8 mois',
      team: '7 personnes',
      role: 'Cloud Security Architect',
      challenges: [
        'Migration des données sensibles',
        'Minimisation du downtime',
        'Formation des équipes au cloud'
      ],
      achievements: [
        'Migration réussie sans perte de données',
        'Économie de 300K€/an sur l\'infrastructure',
        'Scalabilité automatique implémentée'
      ],
      images: [],
      documents: [],
      links: []
    },
    {
      title: 'SIEM & SOC Automation',
      description: 'Mise en place d\'un système de détection et réponse aux incidents automatisé',
      tech: ['ELK Stack', 'Python', 'Wazuh', 'Splunk'],
      icon: Eye,
      detailedDescription: `Déploiement d'un Security Operations Center (SOC) avec automatisation de la détection et réponse aux incidents.

Composants du système :

• SIEM centralisé avec ELK Stack
• Corrélation d'événements en temps réel
• Playbooks automatisés de réponse aux incidents
• Tableau de bord de sécurité temps réel
• Intégration avec les outils existants

Fonctionnalités :
- Détection automatique des menaces
- Alertes en temps réel
- Analyse forensique automatisée
- Rapports de conformité automatiques
- Machine learning pour détection d'anomalies

Métriques :
- 10,000+ événements analysés par seconde
- MTTR (temps de réponse) réduit de 75%
- 95% des incidents résolus automatiquement`,
      duration: '5 mois',
      team: '4 personnes',
      role: 'Security Operations Lead',
      challenges: [
        'Réduction des faux positifs',
        'Intégration de sources multiples',
        'Optimisation des performances'
      ],
      achievements: [
        'Détection de 3 attaques majeures évitées',
        'Réduction de 90% des faux positifs',
        'Conformité RGPD automatisée'
      ],
      images: [],
      documents: [],
      links: []
    },
    {
      title: 'CI/CD Pipeline Sécurisé',
      description: 'Pipeline DevSecOps avec tests de sécurité automatisés et scanning de vulnérabilités',
      tech: ['Jenkins', 'SonarQube', 'Trivy', 'GitLab CI'],
      icon: GitBranch,
      detailedDescription: `Mise en place d'un pipeline CI/CD intégrant la sécurité à chaque étape (DevSecOps).

Pipeline complet :

1. Commit → Analyse de code statique (SAST)
2. Build → Scan des dépendances
3. Test → Tests de sécurité automatisés
4. Scan → Analyse des images Docker
5. Deploy → Validation de la configuration
6. Monitor → Surveillance continue

Outils intégrés :
- SonarQube pour l'analyse de code
- Trivy pour le scan de vulnérabilités
- OWASP Dependency Check
- GitLab CI/CD
- Vault pour les secrets

Résultats :
- 100% du code scanné automatiquement
- Déploiements 5x plus rapides
- Réduction de 95% des vulnérabilités en production`,
      duration: '4 mois',
      team: '3 personnes',
      role: 'DevSecOps Engineer',
      challenges: [
        'Intégration sans ralentir le pipeline',
        'Gestion des faux positifs',
        'Adoption par les développeurs'
      ],
      achievements: [
        'Pipeline déployé sur 15 projets',
        'Économie de 200h/mois de tests manuels',
        'Certification de sécurité du code'
      ],
      images: [],
      documents: [],
      links: []
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
              Administrateur Infrastructures Sécurisées, je mets mes compétences au service de la conception, de l’administration et de la sécurisation d’environnements systèmes et réseaux.
Actuellement en recherche d’une alternance, je souhaite évoluer au sein d’une structure où la sécurité, la continuité de service et l’optimisation des infrastructures sont au cœur des priorités.
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
                <div 
                  key={idx} 
                  onClick={() => setSelectedProject(project)}
                  className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
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
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                    <span>Voir les détails</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
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

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/30 p-6 flex items-start justify-between z-10">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <selectedProject.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                    {selectedProject.duration && (
                      <span>⏱️ {selectedProject.duration}</span>
                    )}
                    {selectedProject.team && (
                      <span>👥 {selectedProject.team}</span>
                    )}
                    {selectedProject.role && (
                      <span>🎯 {selectedProject.role}</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description détaillée */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Description du projet</h3>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {selectedProject.detailedDescription}
                </div>
              </div>

              {/* Défis */}
              {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Défis relevés</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">🔸</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Réalisations */}
              {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Réalisations clés</h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Images */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                    <ImageIcon className="w-5 h-5 mr-2" />
                    Captures d'écran
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.images.map((img, i) => (
                      <div key={i} className="border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500/60 transition-colors">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} - Image ${i + 1}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents */}
              {selectedProject.documents && selectedProject.documents.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Documents
                  </h3>
                  <div className="space-y-2">
                    {selectedProject.documents.map((doc, i) => (
                      <a
                        key={i}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-cyan-400" />
                          <span className="text-gray-300 group-hover:text-white">{doc.name}</span>
                        </div>
                        <Download className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Liens externes */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Liens utiles
                  </h3>
                  <div className="space-y-2">
                    {selectedProject.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-colors group"
                      >
                        <span className="text-gray-300 group-hover:text-white">{link.name}</span>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer du modal */}
            <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/30 p-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
