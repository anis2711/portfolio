# Portfolio - Administrateur Cloud

Portfolio professionnel moderne pour un administrateur d'infrastructures sécurisées, avec un design innovant axé sur la cybersécurité.

## 🚀 Fonctionnalités

- Design moderne et innovant avec animations fluides
- Thème cybersécurité avec effets de grille animée
- Section compétences avec barres de progression
- Projets réalisés avec technologies utilisées
- Certifications professionnelles
- Responsive design pour tous les appareils
- Effet de curseur lumineux
- Animations au scroll

## 🛠️ Technologies utilisées

- **React** - Framework JavaScript
- **Vite** - Build tool moderne et rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **Vercel** - Hébergement et déploiement

## 📦 Installation locale

1. Cloner le repository :
```bash
git clone <votre-repo-url>
cd portfolio-admin-infra-securisee
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir votre navigateur à l'adresse : `http://localhost:5173`

## 🚢 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel (Recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre compte GitHub
3. Importer votre repository
4. Vercel détectera automatiquement la configuration Vite
5. Cliquer sur "Deploy"

### Méthode 2 : Via la CLI Vercel

1. Installer la CLI Vercel :
```bash
npm install -g vercel
```

2. Se connecter à Vercel :
```bash
vercel login
```

3. Déployer le projet :
```bash
vercel
```

4. Pour le déploiement en production :
```bash
vercel --prod
```

## 📝 Configuration GitHub

1. Initialiser Git (si ce n'est pas déjà fait) :
```bash
git init
```

2. Ajouter tous les fichiers :
```bash
git add .
```

3. Créer le premier commit :
```bash
git commit -m "Initial commit - Portfolio Administrateur Infrastructures Sécurisées"
```

4. Créer un repository sur GitHub

5. Lier le repository local au repository distant :
```bash
git remote add origin https://github.com/<votre-username>/<nom-du-repo>.git
```

6. Pousser le code :
```bash
git branch -M main
git push -u origin main
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditer le fichier `src/Portfolio.jsx` et modifier :
- Le nom et le titre
- Les compétences et leurs niveaux
- Les projets réalisés
- Les certifications
- Les liens de contact (email, LinkedIn, GitHub)

### Changer les couleurs

Les couleurs principales utilisent les classes Tailwind :
- `cyan-400`, `cyan-500`, `cyan-600` - Couleur principale
- `blue-500`, `blue-600` - Couleur secondaire
- `slate-800`, `slate-900`, `slate-950` - Arrière-plan

Vous pouvez les modifier dans `tailwind.config.js` pour utiliser votre propre palette.

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à tous les types d'écrans :
- Desktop (>1024px)
- Tablet (768px - 1024px)
- Mobile (<768px)

## 🔒 Sécurité

- Pas de données sensibles dans le code
- Variables d'environnement pour les configurations sensibles
- Utilisation de `.gitignore` pour exclure les fichiers sensibles

## 📄 License

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Développé avec ❤️ pour les professionnels de la cybersécurité**
