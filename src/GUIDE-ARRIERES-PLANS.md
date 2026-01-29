# 🎨 Guide des Arrière-Plans Animés

## 📋 Vous avez maintenant 2 versions disponibles :

### Version 1 : Automatique (Actuelle)
✅ Change automatiquement toutes les 5 secondes
✅ 6 animations différentes
✅ Discret et élégant

**Fichier :** `AnimatedBackground.jsx`

### Version 2 : Avec Sélecteur
✅ Change automatiquement OU manuellement
✅ 8 animations différentes
✅ Contrôles visibles en bas de page
✅ Bouton Play/Pause
✅ Indicateurs pour chaque animation

**Fichier :** `AnimatedBackgroundWithSelector.jsx`

## 🎯 Les 8 Animations Disponibles :

1. **Grille Matrix** - Grille cybernétique qui défile
2. **Particules** - Particules flottantes aléatoires
3. **Vagues Cyber** - Lignes ondulées horizontales et verticales
4. **Code Binaire** - Code 0 et 1 qui défile
5. **Hexagones** - Motif hexagonal géométrique
6. **Radar** - Cercles qui pulsent comme un radar
7. **Réseau** - Noeuds connectés animés
8. **Pluie de Code** - Code qui tombe comme Matrix

## 🔄 Comment changer de version :

### Pour utiliser la version AVEC SÉLECTEUR :

Dans `src/Portfolio.jsx`, ligne 3, changez :

**De :**
```javascript
import AnimatedBackground from './AnimatedBackground';
```

**À :**
```javascript
import AnimatedBackground from './AnimatedBackgroundWithSelector';
```

C'est tout ! 🎉

## ⚙️ Personnalisation

### Changer la durée entre les animations :

Dans `AnimatedBackground.jsx` ou `AnimatedBackgroundWithSelector.jsx`, ligne ~10 :

```javascript
}, 5000);  // 5000ms = 5 secondes
```

Changez 5000 par :
- 3000 = 3 secondes (plus rapide)
- 10000 = 10 secondes (plus lent)

### Désactiver une animation :

Dans le fichier, supprimez ou commentez l'animation que vous ne voulez pas :

```javascript
// Commentez celle-ci pour la retirer :
// {
//   name: "Particules",
//   component: (...)
// },
```

### Ajouter votre propre animation :

Ajoutez un nouvel objet dans le tableau `backgrounds` :

```javascript
{
  name: "Mon Animation",
  component: (
    <div className="absolute inset-0 opacity-20">
      {/* Votre code d'animation ici */}
    </div>
  )
}
```

## 🎨 Modifier l'opacité :

Chaque animation a une classe `opacity-XX`. Changez-la pour rendre l'animation plus ou moins visible :

```javascript
opacity-10  // Très discret
opacity-20  // Discret (par défaut)
opacity-30  // Moyen
opacity-40  // Visible
```

## 💡 Recommandations :

- **Version automatique** : Pour un portfolio professionnel discret
- **Version avec sélecteur** : Pour impressionner et donner du contrôle

## 🎭 Combiner avec l'effet de curseur :

L'effet de lumière qui suit le curseur est toujours actif et fonctionne avec toutes les animations !

## 🚀 Test :

```bash
npm run dev
```

Regardez l'arrière-plan changer automatiquement !

---

Profitez de votre portfolio cybernétique ! 🌐✨
