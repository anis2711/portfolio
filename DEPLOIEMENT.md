# Guide de Déploiement - Portfolio sur Vercel

## 📋 Prérequis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)
- Git installé sur votre ordinateur
- Node.js installé (version 14 ou supérieure)

## 🔧 Étape 1 : Préparation du projet

1. Téléchargez tous les fichiers du portfolio
2. Placez-les dans un dossier de votre choix
3. Ouvrez un terminal dans ce dossier

## 📁 Étape 2 : Mise sur GitHub

### 2.1 Créer un nouveau repository sur GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton "+" en haut à droite
3. Sélectionnez "New repository"
4. Donnez un nom au repository (ex: `portfolio-admin-securite`)
5. Laissez-le en "Public" ou choisissez "Private"
6. **NE PAS** cocher "Initialize with README" (nous avons déjà un README)
7. Cliquez sur "Create repository"

### 2.2 Pousser le code sur GitHub

Dans votre terminal, exécutez les commandes suivantes :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio Administrateur Infrastructures Sécurisées"

# Renommer la branche en main (si nécessaire)
git branch -M main

# Lier au repository GitHub (remplacez USERNAME et REPO par vos valeurs)
git remote add origin https://github.com/USERNAME/REPO.git

# Pousser le code
git push -u origin main
```

**Note** : Si GitHub vous demande vos identifiants, utilisez un Personal Access Token au lieu de votre mot de passe.

### 2.3 Créer un Personal Access Token (si nécessaire)

1. Allez dans Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Cliquez sur "Generate new token"
3. Cochez "repo" pour accès complet aux repositories
4. Générez le token et copiez-le
5. Utilisez ce token comme mot de passe lors du push

## 🚀 Étape 3 : Déploiement sur Vercel

### Méthode A : Déploiement automatique (Recommandé)

1. Allez sur [Vercel](https://vercel.com)
2. Cliquez sur "Sign Up" ou "Login"
3. Choisissez "Continue with GitHub"
4. Autorisez Vercel à accéder à vos repositories
5. Cliquez sur "New Project"
6. Importez votre repository `portfolio-admin-securite`
7. Vercel détectera automatiquement qu'il s'agit d'un projet Vite
8. Les paramètres par défaut sont corrects :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
9. Cliquez sur "Deploy"
10. Attendez 1-2 minutes que le déploiement se termine
11. Votre site est en ligne ! 🎉

### Méthode B : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Suivre les instructions interactives
# Pour la production :
vercel --prod
```

## 🔄 Mises à jour futures

Chaque fois que vous modifiez votre portfolio :

```bash
# Ajouter les modifications
git add .

# Créer un commit
git commit -m "Description de vos modifications"

# Pousser sur GitHub
git push

# Vercel déploiera automatiquement les changements !
```

## 🎨 Personnalisation

Avant le déploiement, pensez à personnaliser :

1. **Informations personnelles** dans `src/Portfolio.jsx` :
   - Nom et titre
   - Compétences
   - Projets
   - Certifications
   - Liens de contact

2. **Métadonnées SEO** dans `index.html` :
   - Titre de la page
   - Description
   - Mots-clés

3. **Favicon** : Ajoutez votre propre icône `shield.svg` dans le dossier `public/`

## 🌐 Nom de domaine personnalisé (Optionnel)

1. Dans Vercel, allez dans les paramètres de votre projet
2. Cliquez sur "Domains"
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions pour configurer les DNS

## ✅ Vérification

Après le déploiement :
- ✅ Le site s'affiche correctement
- ✅ Les animations fonctionnent
- ✅ Le site est responsive (testez sur mobile)
- ✅ Tous les liens fonctionnent
- ✅ Les informations sont à jour

## 🆘 Problèmes courants

### Erreur de build
- Vérifiez que toutes les dépendances sont dans `package.json`
- Essayez `npm install` puis `npm run build` localement

### Site ne s'affiche pas
- Vérifiez les logs de déploiement dans Vercel
- Assurez-vous que le dossier de sortie est `dist`

### Animations ne fonctionnent pas
- Vérifiez que Tailwind CSS est bien configuré
- Effacez le cache du navigateur

## 📧 Contact

En cas de problème, consultez :
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Vite](https://vitejs.dev)
- [Documentation React](https://react.dev)

---

**Bon déploiement ! 🚀**
