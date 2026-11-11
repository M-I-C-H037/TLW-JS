/* ============================================================
   GUIDE COMPLET POUR APPRENDRE À CODER EN JAVASCRIPT
   ============================================================
   Ce fichier est un tutoriel exécutable : chaque section explique
   un concept et montre du code concret. Tu peux l'exécuter avec :
     node apprendre-javascript.js
   ou copier des morceaux dans la console de ton navigateur (F12).
   ============================================================ */


/* ============================================================
   1. LES VARIABLES
   ============================================================
   On stocke des données avec let, const ou var (à éviter).
   - const : la valeur ne peut pas être réassignée (à privilégier)
   - let   : la valeur peut changer
   - var   : ancienne syntaxe, portée différente, à éviter
*/

const nom = "Alice";          // une chaîne de caractères (string)
let age = 25;                  // un nombre (number)
age = 26;                      // ok, on peut réassigner un "let"

console.log("--- 1. Variables ---");
console.log(nom, age);


/* ============================================================
   2. LES TYPES DE DONNÉES
   ============================================================ */

const unNombre = 42;                 // number
const unTexte = "Bonjour";           // string
const unBooleen = true;              // boolean (true / false)
const unTableau = [1, 2, 3];         // array (liste ordonnée)
const unObjet = { cle: "valeur" };   // object (clé/valeur)
const rienDuTout = null;             // absence volontaire de valeur
let nonDefini;                       // undefined (pas encore assigné)

console.log("\n--- 2. Types de données ---");
console.log(typeof unNombre, typeof unTexte, typeof unBooleen);
console.log(typeof unTableau, typeof unObjet);


/* ============================================================
   3. LES OPÉRATEURS
   ============================================================ */

console.log("\n--- 3. Opérateurs ---");
console.log(5 + 3);     // addition -> 8
console.log(5 - 3);     // soustraction -> 2
console.log(5 * 3);     // multiplication -> 15
console.log(5 / 3);     // division -> 1.666...
console.log(5 % 3);     // modulo (reste) -> 2
console.log(5 === 5);   // égalité stricte (type + valeur) -> true
console.log(5 === "5"); // false, car types différents
console.log(5 == "5");  // égalité "souple" (déconseillée) -> true
console.log(5 > 3 && 2 < 4); // ET logique -> true
console.log(5 > 3 || 2 > 4); // OU logique -> true


/* ============================================================
   4. LES CONDITIONS
   ============================================================ */

function direSiMajeur(age) {
  if (age >= 18) {
    return "majeur";
  } else if (age >= 13) {
    return "adolescent";
  } else {
    return "enfant";
  }
}

console.log("\n--- 4. Conditions ---");
console.log(direSiMajeur(20)); // majeur
console.log(direSiMajeur(15)); // adolescent
console.log(direSiMajeur(5));  // enfant

// Le "switch" est utile quand on compare une seule variable à
// plusieurs valeurs possibles :
function nomDuJour(numero) {
  switch (numero) {
    case 1:
      return "Lundi";
    case 2:
      return "Mardi";
    default:
      return "Jour inconnu";
  }
}
console.log(nomDuJour(1)); // Lundi


/* ============================================================
   5. LES BOUCLES
   ============================================================ */

console.log("\n--- 5. Boucles ---");

// Boucle "for" classique
for (let i = 0; i < 3; i++) {
  console.log("for i =", i);
}

// Boucle "while"
let compteur = 0;
while (compteur < 3) {
  console.log("while compteur =", compteur);
  compteur++;
}

// Boucle "for...of" : pour parcourir un tableau
const fruits = ["pomme", "banane", "cerise"];
for (const fruit of fruits) {
  console.log("fruit :", fruit);
}

// Boucle "for...in" : pour parcourir les clés d'un objet
const personne = { prenom: "Marc", ville: "Paris" };
for (const cle in personne) {
  console.log(cle, "->", personne[cle]);
}


/* ============================================================
   6. LES FONCTIONS
   ============================================================ */

console.log("\n--- 6. Fonctions ---");

// Déclaration classique
function additionner(a, b) {
  return a + b;
}

// Fonction fléchée (arrow function), syntaxe moderne et concise
const multiplier = (a, b) => a * b;

// Paramètre par défaut
function saluer(prenom = "inconnu") {
  return `Bonjour ${prenom} !`; // template literal avec des backticks
}

console.log(additionner(2, 3)); // 5
console.log(multiplier(2, 3));  // 6
console.log(saluer());          // Bonjour inconnu !
console.log(saluer("Lina"));    // Bonjour Lina !


/* ============================================================
   7. LES TABLEAUX (ARRAYS) ET LEURS MÉTHODES
   ============================================================ */

console.log("\n--- 7. Tableaux ---");

const nombres = [1, 2, 3, 4, 5];

console.log(nombres.length);               // 5, le nombre d'éléments
console.log(nombres.map(n => n * 2));       // [2, 4, 6, 8, 10]
console.log(nombres.filter(n => n % 2 === 0)); // [2, 4]
console.log(nombres.reduce((acc, n) => acc + n, 0)); // 15 (somme)
console.log(nombres.find(n => n > 3));      // 4 (premier trouvé)
console.log(nombres.includes(3));           // true

nombres.push(6);     // ajoute à la fin -> [1,2,3,4,5,6]
nombres.pop();        // retire le dernier élément
console.log(nombres);


/* ============================================================
   8. LES OBJETS
   ============================================================ */

console.log("\n--- 8. Objets ---");

const voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2022,
  demarrer() {                 // méthode (fonction dans un objet)
    return `${this.marque} démarre.`;
  },
};

console.log(voiture.marque);     // accès avec un point
console.log(voiture["modele"]);  // accès avec des crochets
console.log(voiture.demarrer()); // appel d'une méthode

// Décomposition ("destructuring"), très utilisée en JS moderne
const { marque, annee } = voiture;
console.log(marque, annee);


/* ============================================================
   9. ASYNCHRONE : CALLBACKS, PROMESSES, ASYNC/AWAIT
   ============================================================
   JavaScript est single-threaded mais gère les tâches longues
   (requêtes réseau, minuteurs...) de façon asynchrone.
*/

console.log("\n--- 9. Asynchrone ---");

// Une promesse représente une valeur qui arrivera plus tard
function attendre(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function exempleAsync() {
  console.log("Début");
  await attendre(100);          // on attend 100ms sans bloquer le reste
  console.log("Fin (après l'attente)");
}

exempleAsync();


/* ============================================================
   10. LES CLASSES (programmation orientée objet)
   ============================================================ */

console.log("\n--- 10. Classes ---");

class Animal {
  constructor(nom, bruit) {
    this.nom = nom;
    this.bruit = bruit;
  }

  parler() {
    return `${this.nom} fait ${this.bruit}`;
  }
}

class Chien extends Animal {
  constructor(nom) {
    super(nom, "Wouf"); // appelle le constructeur de la classe parente
  }
}

const rex = new Chien("Rex");
console.log(rex.parler()); // Rex fait Wouf


/* ============================================================
   11. GESTION DES ERREURS
   ============================================================ */

console.log("\n--- 11. Gestion des erreurs ---");

function diviser(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro impossible");
  }
  return a / b;
}

try {
  console.log(diviser(10, 2)); // 5
  console.log(diviser(10, 0)); // va déclencher l'erreur
} catch (erreur) {
  console.log("Erreur attrapée :", erreur.message);
} finally {
  console.log("Ce bloc s'exécute toujours, erreur ou pas.");
}


/* ============================================================
   12. MODULES (POUR ALLER PLUS LOIN)
   ============================================================
   Dans un vrai projet, on sépare le code en plusieurs fichiers :

   // fichier maths.js
   export function additionner(a, b) { return a + b; }

   // fichier principal.js
   import { additionner } from "./maths.js";
   console.log(additionner(1, 2));

   (Ceci est un commentaire d'exemple, pas du code exécuté ici,
   car cela demande une configuration de projet spécifique :
   soit un fichier package.json avec "type": "module",
   soit des balises <script type="module"> dans le navigateur.)
*/


/* ============================================================
   13. LES API (APPELS RÉSEAU AVEC fetch)
   ============================================================
   Une API (Application Programming Interface) permet à ton code
   de communiquer avec un serveur distant pour récupérer ou
   envoyer des données (météo, utilisateurs, produits...).

   En JavaScript moderne (navigateur ou Node.js récent), on utilise
   la fonction native fetch(), qui renvoie une Promise.
*/

console.log("\n--- 13. Les API ---");

// Exemple de requête GET : récupérer des données depuis une API
async function recupererUtilisateur() {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");

    // reponse.ok indique si le code HTTP est entre 200 et 299
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }

    const donnees = await reponse.json(); // on convertit la réponse en objet JS
    console.log("Utilisateur reçu :", donnees.name, "-", donnees.email);
    return donnees;
  } catch (erreur) {
    console.log("Échec de la requête :", erreur.message);
  }
}

// Exemple de requête POST : envoyer des données à une API
async function creerArticle() {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // on précise qu'on envoie du JSON
      },
      body: JSON.stringify({
        title: "Mon article",
        body: "Contenu de l'article",
        userId: 1,
      }),
    });

    const donnees = await reponse.json();
    console.log("Article créé avec l'id :", donnees.id);
  } catch (erreur) {
    console.log("Échec de l'envoi :", erreur.message);
  }
}

// Ces appels sont asynchrones : ils ne bloquent pas le reste du script.
recupererUtilisateur();
creerArticle();

/* ------------------------------------------------------------
   Points clés sur les API en JavaScript :

   - fetch(url) envoie une requête GET par défaut.
   - On peut changer la méthode (POST, PUT, DELETE...) via l'objet
     d'options : { method: "POST", headers: {...}, body: "..." }.
   - La réponse (response) n'est pas directement les données : il
     faut appeler .json() (ou .text()) pour les extraire, et cet
     appel est lui-même asynchrone (il renvoie une Promise).
   - fetch() ne rejette PAS automatiquement en cas d'erreur HTTP
     (comme un 404 ou 500) : il faut vérifier reponse.ok soi-même.
   - Beaucoup d'API demandent une authentification, souvent via un
     header : headers: { "Authorization": "Bearer MON_TOKEN" }.
   - Les API REST utilisent typiquement les verbes HTTP suivants :
       GET    -> lire des données
       POST   -> créer une ressource
       PUT    -> remplacer une ressource existante
       PATCH  -> modifier partiellement une ressource
       DELETE -> supprimer une ressource
   - Dans un navigateur, les appels vers un domaine différent
     peuvent être bloqués par la politique CORS (Cross-Origin
     Resource Sharing) : c'est une sécurité gérée par le serveur
     distant, pas une erreur dans ton code.
   ------------------------------------------------------------ */


/* ============================================================
   RÉCAPITULATIF DES ÉTAPES POUR PROGRESSER
   ============================================================
   1. Variables, types, opérateurs
   2. Conditions et boucles
   3. Fonctions (classiques et fléchées)
   4. Tableaux et objets + leurs méthodes
   5. Asynchrone (Promises, async/await)
   6. Classes et POO
   7. Gestion des erreurs (try/catch)
   8. Modules pour structurer un vrai projet
   9. Les API : appeler un serveur distant avec fetch() (GET, POST...)
   10. Ensuite : le DOM (manipuler une page web), puis un framework
       (React, Vue...) si besoin.
   ============================================================ */

console.log("\n--- Fin du guide ---");
console.log("Essaie de modifier ce fichier et de relancer : node apprendre-javascript.js");
