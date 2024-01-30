//1.En utilisant une regex, trouver toutes les occurrences de nombres dans une chaîne de caractères :
let str = "Il y a 10 pommes et 5 bananes.";

let str = "Il y a 10 pommes et 5 bananes.";

let regex = /\d+/g;

let result = str.match(regex);

console.log(result);

// 2.En utilisant une regex vérifier si les adresses e-mail suivantes sont valides :
// Pour se faire vous devrez découper votre regex en 3 parties :
// avant le @ : 1 ou plusieurs caractères alphanumériques ou "." ou "_" ou "-" 
// après le @ : 1 ou plusieurs caractères alphanumériques ou "." ou "_" ou "-" 
// après le . : 2 caractères ou plus  
// Afin de signifier le début et la fin de la chaîne, vous devrez utiliser les caractères spéciaux "^" et "$".
const email1 = "john.doe@gmail.com";
const email2 = "jane@gmail";




const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

console.log(regex.test(email1));  
console.log(regex.test(email2));  


// 3. En utilisant une regex, remplacer "Bonjour" par "hello"
let str2 = "Bonjour tout le monde !";

let nouvelleChaine = str2.replace(/Bonjour/g, "hello");
console.log(nouvelleChaine);

// 4. En utilisant une regex, remplacer les nombres par leur carré :
let str3 = "Les carrés des nombres de 1 à 5 sont : 1, 4, 9, 16, 25.";

let nouvelleChaine2 = str3.replace(/\b(\d+)\b/g, (match, nombre) => Math.pow(parseInt(nombre), 2));
console.log(nouvelleChaine2);


// 5. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

const multiplier = (a, b) => a * b;

// 6. Créez une fonction flêchée qui retourne "Hello World", elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)

const helloWorld = () => "Hello World";

//7- Ecricre une fonction qui inverse les valeurs passées en paramètres
const inverserValeurs = (a, b) => [b, a];

//8-  Ecricre une fonction recursive qui renvoi la factorielle d'un nombre

const factorielle = (n) => (n === 0 || n === 1) ? 1 : n * factorielle(n - 1);


// 9-  Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1

const ajouterUn = (callback, tableau) => tableau.map(callback);

const tableauInitial = [1, 2, 3, 4];
const nouveauTableau = ajouterUn((valeur) => valeur + 1, tableauInitial);
console.log(nouveauTableau);



//10-  fonction qui renvoi tous les nombres premiers entre deux nombres
// un nombre premier est un nombre qui n'est divisible que par 1 et par lui même

const estNombrePremier = (nombre) => {
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return false;
    }
    return nombre > 1;
};

const nombresPremiersEntreDeux = (debut, fin) => {
    const result = [];
    for (let i = debut; i <= fin; i++) {
        if (estNombrePremier(i)) 
        {result.push(i);
    }
}
    return result;
};



// 11-  fonction qui calcule et renvoie le PGCD de deux nombres entiers positifs
// Rappel : Le PGCD de a et b est le plus grand nombre qui est un diviseur à la fois de a et de b. 
const pgcd = (a, b) => (b === 0) ? a : pgcd(b, a % b);


//12-  Ecrire une fonction récursive qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à 
// ce nombre. Par exemple, si l’on entre 5, le programme doit calculer 1 + 2 + 3 + 4 + 5 = 15.:

const sommeJusquAN = (n) => (n === 1) ? 1 : n + sommeJusquAN(n - 1);



//13-   Créer une fonction abracadabra qui ne contiendra aucun paramètre.
// Demander le prénom, le nom et l'age de notre utilisateur grâce à une boîte de dialogue.
// Afficher, toujours grâce à une boîte de dialogue, la phrase "Sapristi ! On ne m'avait pas prévenu que c'était vous, [prenom] ! Euh... Je veux dire... Monsieur le grand magicien [nom] ! Cela fait déjà [age] ans que vous faites rayonner notre contrée !".
const abracadabra = () => {
    const prenom = prompt("Entrez votre prénom :");
    const nom = prompt("Entrez votre nom :");
    const age = prompt("Entrez votre âge :");

    alert(`Sapristi ! On ne m'avait pas prévenu que c'était vous, ${prenom} ! Euh... Je veux dire... Monsieur le grand magicien ${nom} ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !`);
};



//14-  Realisez un programme premettant de calculer l'IMC (Indice de Masse Corporelle) en utilisant une fonction. et en demandant à l'utilisateur son poids et sa taille.

const calculerIMC = () => {
    const poids = parseFloat(prompt("Entrez votre poids en kg :"));
    const taille = parseFloat(prompt("Entrez votre taille en m :"));
    const imc = poids / (taille ** 2);
    alert(`Votre IMC est de : ${imc.toFixed(2)}`);
};



// 15. rédigrez un programme qui permette de créer une calculatrice, pour se faire vous commencerez par demander à l'utilisateur un choix entre les opérations suivantes : addition, multiplication, soustraction, division. Ensuite vous demanderez à l'utilisateur de saisir deux nombres puis  et enfin vous afficherez le résultat de l'opération choisie.

const calculatrice = () => {
    const operation = prompt("Choisissez une opération : addition, multiplication, soustraction, division");
    const nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
    const nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

    switch (operation) {
        case "addition":
            alert(`Le résultat est : ${nombre1 + nombre2}`);
            break;
        case "multiplication":
            alert(`Le résultat est : ${nombre1 * nombre2}`);
            break;
        case "soustraction":
            alert(`Le résultat est : ${nombre1 - nombre2}`);
            break;
        case "division":
            alert(`Le résultat est : ${nombre1 / nombre2}`);
            break;
        default:
            alert("Opération non reconnue");
    }
};


//16 . Ecrire un programme qui permette de déterminer si un mot est un palindrome(un mot qui peut se lire dans les deux sens) Par exemple : radar, kayak, elle, ressasser, etc.

const estPalindrome = (mot) => {
    const motSansEspaces = mot.toLowerCase().replace(/\s/g, "");
    const motInverse = motSansEspaces.split("").reverse().join("");
    return motSansEspaces === motInverse;
};


const motTest = "radar";
console.log(estPalindrome(motTest));  // Devrait afficher true


// 17. Sur le modèle de la méthode filter(),  créez une fonction customFilter() qui prend un paramètre un tableau et une fonction callBack().
// Votre fonction customFilter() devra parcourir le tableau et pousser l’élément courant dans un autre tableau si le critère est rempli 
// La fonction callBack() contiendra la condition à remplir pour filtrer.

const customFilter = (tableau, callback) => {
    const resultat = [];
    for (const element of tableau) {
        if (callback(element)) {
            resultat.push(element);
        }
    }
    return resultat;
};


const tableauTest = [1, 2, 3, 4, 5];
const nouveauTableau = customFilter(tableauTest, (element) => element % 2 === 0);
console.log(nouveauTableau);  
