# ✅ Checklist de Déploiement

## Avant de déployer

### Personnalisation
- [ ] Modifier le nom et le titre dans `src/Portfolio.jsx`
- [ ] Mettre à jour les compétences et leurs niveaux
- [ ] Ajouter vos projets réels
- [ ] Mettre à jour vos certifications
- [ ] Modifier les liens de contact (email, LinkedIn, GitHub)
- [ ] Changer les métadonnées dans `index.html` (titre, description, mots-clés)

### Vérification technique
- [ ] Tester localement avec `npm run dev`
- [ ] Vérifier que toutes les animations fonctionnent
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier tous les liens
- [ ] S'assurer qu'il n'y a pas d'erreurs dans la console

## Mise sur GitHub

### Préparation
- [ ] Créer un compte GitHub (si nécessaire)
- [ ] Installer Git sur votre ordinateur
- [ ] Configurer Git avec votre email et nom

### Repository
- [ ] Créer un nouveau repository sur GitHub
- [ ] Choisir un nom significatif (ex: `portfolio-admin-securite`)
- [ ] Ne pas initialiser avec README (nous en avons déjà un)
- [ ] Copier l'URL du repository

### Push du code
- [ ] Exécuter `git init` dans le dossier du projet
- [ ] Exécuter `git add .`
- [ ] Exécuter `git commit -m "Initial commit"`
- [ ] Exécuter `git branch -M main`
- [ ] Exécuter `git remote add origin <URL-DU-REPO>`
- [ ] Exécuter `git push -u origin main`
- [ ] Vérifier que le code est bien sur GitHub

## Déploiement sur Vercel

### Configuration Vercel
- [ ] Créer un compte sur Vercel (https://vercel.com)
- [ ] Connecter votre compte GitHub à Vercel
- [ ] Autoriser Vercel à accéder à vos repositories

### Import du projet
- [ ] Cliquer sur "New Project" dans Vercel
- [ ] Sélectionner votre repository GitHub
- [ ] Vérifier la configuration détectée automatiquement :
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`
- [ ] Cliquer sur "Deploy"

### Vérification du déploiement
- [ ] Attendre la fin du déploiement (1-2 minutes)
- [ ] Cliquer sur le lien du site déployé
- [ ] Vérifier que le site s'affiche correctement
- [ ] Tester la navigation
- [ ] Vérifier les animations
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens

## Post-déploiement

### Optimisation
- [ ] Configurer un domaine personnalisé (optionnel)
- [ ] Activer HTTPS (automatique avec Vercel)
- [ ] Configurer les variables d'environnement si nécessaire

### Partage
- [ ] Copier l'URL du site déployé
- [ ] Ajouter l'URL dans votre README.md sur GitHub
- [ ] Partager le lien sur LinkedIn
- [ ] Ajouter le lien dans votre CV

### Maintenance
- [ ] Tester les mises à jour automatiques (modifier un fichier et push)
- [ ] Configurer les notifications de déploiement
- [ ] Sauvegarder l'URL Vercel

## 🎉 C'est terminé !

Votre portfolio est maintenant en ligne et accessible au monde entier !

URL du site : ___________________________

Date de déploiement : ___________________________

## Pour les mises à jour futures

Chaque fois que vous voulez modifier votre portfolio :

```bash
# 1. Modifier les fichiers
# 2. Sauvegarder les changements
git add .
git commit -m "Description des modifications"
git push

# Vercel déploiera automatiquement !
```

## Liens utiles

- Portfolio en ligne : ___________________________
- Repository GitHub : ___________________________
- Dashboard Vercel : https://vercel.com/dashboard
- Support Vercel : https://vercel.com/docs
