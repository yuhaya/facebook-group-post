# Publication de groupe Facebook (marketing matrice)

> Une configuration : plusieurs groupes × plusieurs textes × plusieurs comptes (navigateurs fingerprint). Plus de portée, moins de copier-coller.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Dépôt :** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## Ce que fait cette automatisation

Projet d’automatisation pour le client bureau **AutoAI**. Après import :

| Capacité | Résultat |
|---|---|
| **Publier dans des groupes Facebook** | Ouvrir le groupe et publier texte + images, ou texte + une vidéo |
| **Échelle matrice** | Plusieurs URL + plusieurs textes → **chaque groupe reçoit tous les textes** (tâches = groupes × textes) |
| **Navigateurs multi-comptes** | Répartition **round-robin** sur les fingerprint choisis (1 navigateur = 1 compte) |
| **Pools média** | Pool d’images (N par publication, cyclique) ou de vidéos (1 par publication) |
| **Anonyme optionnel** | Active « Publier anonymement » si le compositeur le propose |
| **Planning réaliste** | Limite quotidienne, intervalle aléatoire, fenêtre horaire (nuit chevauchée possible) |

### Pourquoi la « matrice »

Le marketing manuel de groupes ne scale pas.

Exemples :

- **20 groupes × 5 textes = 100 tâches**, planifiées sur plusieurs navigateurs  
- Même offre avec textes/médias variés dans plusieurs communautés  
- Fenêtres de nuit pour publier quand l’audience est en ligne  

**Les exécutions de production consomment presque aucun token IA.** Les tokens servent surtout au développement, à l’adaptation et au dépannage via l’agent.

> Utilisez uniquement des comptes/groupes dont vous êtes propriétaire ou autorisé. Respectez les règles Facebook et la loi locale.

---

## Prérequis

- **Client bureau AutoAI** ([Télécharger](https://www.xrobot.tech/fr/download/))
  - **Windows :** x86 / x64 uniquement (pas ARM)
  - **macOS :** Apple silicon (série M) uniquement (pas Intel)
- Compte AutoAI ([Inscription](https://www.xrobot.tech/fr/register/) · [Connexion](https://www.xrobot.tech/fr/login/))
- Au moins un **navigateur fingerprint** connecté à Facebook
- **Quota :** AutoAI inclut **un environnement fingerprint gratuit**. Pour la matrice / multi-comptes, **achetez-en davantage** dans le client ou le [centre de compte](https://www.xrobot.tech/fr/account/)

---

## Démarrage rapide

### 1. Télécharger le client

👉 [https://www.xrobot.tech/fr/download/](https://www.xrobot.tech/fr/download/)

### 2. S’inscrire et se connecter

1. [Inscription](https://www.xrobot.tech/fr/register/) (e-mail + code / mot de passe).
2. Connexion web optionnelle. **Connectez-vous avec le même compte dans le client bureau.**

### 3. Préparer un navigateur Facebook

AutoAI fournit **un environnement fingerprint gratuit** (**Navigateur plateforme**). Suffisant pour un compte. La matrice marche mieux avec **plusieurs navigateurs (comptes)** — achetez du quota et créez d’autres environnements si besoin.

1. Barre latérale **Navigateur**.
2. Préférez **Navigateur plateforme** (gratuit intégré) ; BitBrowser / AdsPower possibles.
3. **Créer** → **Démarrer** → activez **Cast** si besoin.
4. **Connexion manuelle à Facebook**.
5. Plus de comptes : acheter du quota → créer des navigateurs → login chacun → tous les sélectionner à la création du groupe de tâches.

### 4. Importer depuis GitHub

1. **Automatisation → Importer**.
2. Collez : `https://github.com/yuhaya/facebook-group-post` (aussi `yuhaya/facebook-group-post` ou `git@github.com:yuhaya/facebook-group-post.git`).
3. **Démarrer l’import**.
4. Le projet apparaît sous **Automatisation → Mes automatisations**.

### 5. Créer un groupe de tâches (exécution matrice)

1. **Mes automatisations**.
2. **Cliquez le corps de la carte** (pas le bouton expert en bas).
3. URL de groupes, textes (`==sep==`), navigateurs, médias, planning.
4. **Créer** → vérifier horaires et nombre.
5. Activez le commutateur maître **Tâches** en haut à droite si demandé.
6. Suivez sous **Gestion des groupes de tâches**.

**Règle :** `groupes × textes`. Puis round-robin sur les navigateurs.

---

## Champs du formulaire

| Champ | Signification |
|---|---|
| URL de groupes | Une URL par ligne ; chaque groupe reçoit tous les textes |
| Textes | Séparer avec `==sep==` |
| Publier anonymement | On → active le commutateur s’il existe |
| Type de média | Images (plusieurs) / Vidéo (une par post) |
| Images / Vidéos | Pool dans l’ordre puis cyclique |
| Images par post | Combien depuis le pool |
| Navigateurs | Environnements fingerprint exécutants |
| Limite quotidienne | Max par navigateur dans la fenêtre |
| Intervalle min / max | Attente aléatoire (secondes) |
| Début / fin journaliers | **début > fin** = nuit chevauchée (ex. `22:00`→`06:00`) |

---

## Personnaliser

Les scripts officiels peuvent différer de votre langue d’UI ou région — adaptez avec l’agent intégré.

### Recharger de la puissance de calcul (chat agent)

Les runs de production ≈ 0 token. **Modifs / dépannage agent** consomment de la **puissance IA**.

1. Sur le site, **rechargez le solde USD**.  
2. Client → profil / portefeuille → **Acheter de la puissance IA**.  
3. Puis ouvrez le chat agent.

### Demander à l’agent

**A. Mode développement** — carte → **Expert automatisation navigateur** → navigateur debug démarré → décrire → **essai du script**.

**B. Mode dépannage** — **Gestion des groupes** → **Investiguer et corriger**.

### Aller plus loin

- [Premiers pas](https://www.xrobot.tech/blog/fr/guide/getting-started) · [Construire from scratch](https://www.xrobot.tech/blog/fr/guide/custom-automation)
- [Cas](https://www.xrobot.tech/fr/cases/) · [Télécharger](https://www.xrobot.tech/fr/download/) · [Inscription](https://www.xrobot.tech/fr/register/) · [Login](https://www.xrobot.tech/fr/login/)

---

## Conseils

- Préférez **plusieurs navigateurs (comptes)**. Commencez par le **gratuit** ; achetez des slots fingerprint en scalant.  
- Intervalles et limites prudents ; fenêtres de nuit pour le jour à l’étranger.  
- Variez textes et médias.  
- Vérifiez les logins Facebook avant les gros lots.  
- Production ≈ **0 token**.

---

## Infos projet

| | |
|---|---|
| ID paquet | `fb-group-post` |
| Nom affiché | Publication de groupe Facebook |
| Runtime | AutoAI bureau (automatisation navigateur) |

`AGENTS.md` est pour les développeurs d’agent dans le client. Les clients suivent ce README.

---

## Support

- Site : [https://www.xrobot.tech](https://www.xrobot.tech)

En cas de problème, privilégiez le **mode développement / dépannage**.
