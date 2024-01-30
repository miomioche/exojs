// 1. Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un tableau associatif qui contient une propriété.
let monTableau = [5124, true, { propriete: "valeur" }];

console.log(monTableau);

console.log("Premier élément :", monTableau[0]); 
console.log("Deuxième élément :", monTableau[1]); 
console.log("Troisième élément :", monTableau[2]); 
console.log("Propriété de l'objet :", monTableau[2].propriete);

// 2. Créez un tableau associatif avec trois propriétés

let monObjet = {
  propriete1: "valeur1",
  propriete2: 42,
  propriete3: true
};

console.log(monObjet);
console.log("Propriété 1 :", monObjet.propriete1); 
console.log("Propriété 2 :", monObjet.propriete2); 
console.log("Propriété 3 :", monObjet.propriete3); 


//3. ajouter les éléments "orange" et "grape" au tableau suivant :

    let fruits = ["apple", "banana", "cherry"];
    

    
    fruits.push("orange", "grape");
    
    console.log(fruits);

    

//4.  extraire les éléments "banana" et "cherry" du tableau suivant et les ajouter à un nouveau tableau:
    let fruits2 = ["apple", "banana", "cherry", "date"];
    

    
    let nouveauxFruits = fruits2.splice(1, 2);
    
    console.log("Tableau initial :", fruits2);
    console.log("Nouveaux éléments :", nouveauxFruits);
    


//5. Fusionner les tableaux suivants en un seul :
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


let mergedArray = arr1.concat(arr2);

console.log("Tableau fusionné :", mergedArray);


//6. aplatir le tableau suivant en un seul tableau, puis inverser les éléments du tableau:
let arr3 = [1, [2, 3], [4, [5, 6, [7, 8, [9, 10]]]]];

let flatArray = arr3.flat(Infinity);

let reversedArray = flatArray.reverse();

console.log("Tableau initial :", arr3);
console.log("Tableau aplati :", flatArray);
console.log("Tableau inversé :", reversedArray);




//7.  concaténer les éléments du tableau suivant en une chaîne de caractères séparée par des espaces
let arr4 = ["apple", "banana", "cherry", "date"];

let resultString = arr4.join(" ");

console.log("Tableau initial :", arr4);
console.log("Chaîne concaténée :", resultString);



// 8. Affichez à l'aide d'une boucle for.. in, toutes les valeurs des propriétés de ce tableau associatif dans la console.


const capitales = {
    autriche : "Vienne",
    argentine : "Buenos Aires",
    estonie : "Tallinn",
    australie : "Cambera"
  };

  for (let pays in capitales) {
   
    if (capitales.hasOwnProperty(pays)) {
      
      console.log(`${pays} : ${capitales[pays]}`);
    }
  }
  

    // 9. Idem mais avec une boucle "for..of" et ce tableau.
  
    const fruits3 = ['Fraise', 'Cerise', 'Orange', 'Citron', 'Ananas'];

for (let fruit of fruits3) {
 
  console.log(fruit);
}

    //10. créer un tableau avec 20 nombres aléatoires entre 0 et 100 //
  // Vérifier si 10 est présent dans le tableau //
  // trier les nombres du tableau dans deux tableau différents //
  // nombres pairs dans un tableau et nombres impairs dans un autre tableau //


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let tableauNombres = Array.from({ length: 20 }, () => getRandomNumber(0, 101));

console.log("Tableau initial :", tableauNombres);


let presenceDe10 = tableauNombres.includes(10);
console.log("Est-ce que 10 est présent dans le tableau ?", presenceDe10);


let tableauPairs = tableauNombres.filter(nombre => nombre % 2 === 0);
let tableauImpairs = tableauNombres.filter(nombre => nombre % 2 !== 0);

console.log("Tableau des nombres pairs :", tableauPairs);
console.log("Tableau des nombres impairs :", tableauImpairs);


    //11. Affichez les valeurs et les clés d'un tableau avec la boucle for... of   //
  
    const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
    for (const [indice, valeur] of arr5.entries()) {
      console.log(`Indice : ${indice}, Valeur : ${valeur}`);
    }
    

    //12. même exercice avec la boucle for...in //
    const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (const indice in arr5) {
  console.log(`Indice : ${indice}, Valeur : ${arr5[indice]}`);
}

  

   //13. afficher les pays avec plus de 10 millions d'habitants avec une boucle for in  //
    const Pays = {
        France: 67009988,
        Espagne: 46700000,
        Italie: 60400000,
        Allemagne: 83000000,
        RoyaumeUni: 66000000,
        Belgique: 11500000,
        Suisse: 8500000,
        Autriche: 9000000,
        Portugal: 10200000,
      
      }
      

    for (const pays in Pays) {
        if (Pays.hasOwnProperty(pays) && Pays[pays] > 10000000) {
            console.log(`${pays} a plus de 10 millions d'habitants.`);
        }
    }
    
 

// 14- Créer un tableau avec 20 nombres aléatoires entre 0 et 100 //
// calculer la moyenne des nombres du tableau avec la méthode reduce //
 // calculer le nombre de nombres chiffre pairs dans le tableau avec la méthode reduce //



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const tableauNombres = Array.from({ length: 20 }, () => getRandomNumber(0, 101));

console.log("Tableau de nombres aléatoires :", tableauNombres);


const somme = tableauNombres.reduce((acc, nombre) => acc + nombre, 0);
const moyenne = somme / tableauNombres.length;

console.log("Moyenne des nombres du tableau :", moyenne);

const nombrePairs = tableauNombres.reduce((acc, nombre) => (nombre % 2 === 0 ? acc + 1 : acc), 0);

console.log("Nombre de nombres pairs dans le tableau :", nombrePairs);



  //15. doubler les valeurs du tableau avec la méthode map et les retrouner dans un nouveau tableau  //
  let arr6 = [1, 2, 3, 4, 5];

let doubledArray = arr6.map((valeur) => valeur * 2);

console.log("Tableau initial :", arr6);
console.log("Tableau doublé :", doubledArray);
  
  //16. utilser map pour transformer chaque élements du tableau en majuscule et les retrouner dans un nouveau tableau //
  
  let arr7 = ["apple", "banana", "cherry", "date"];
  
let uppercaseArray = arr7.map((element) => element.toUpperCase());

console.log("Tableau initial :", arr7);
console.log("Tableau en majuscules :", uppercaseArray);

  
  //17. Utiliser la méthode map pour retourner dans un nouveau tableau le carré des nombres du tableau suivant et ajouter la valeur 6 à ce même tableau  // 
  const nombres = [1, 2, 3, 4, 5];

  

let carres = nombres.map((nombre) => nombre * nombre);

carres.push(6);

console.log("Tableau initial :", nombres);
console.log("Carrés des nombres et ajout de 6 :", carres);
  
  //18. utiliser map pour créer un tableau avec les racines carrées des valeurs de l'objet //
  let obj = {a: 25, b: 16, c: 9, d: 4};

let racinesCarrees = Object.values(obj).map((valeur) => Math.sqrt(valeur));

console.log("Objet initial :", obj);
console.log("Racines carrées des valeurs :", racinesCarrees);

    
  //19. même exercice avec la méthode forEach  //
  let obj = {a: 25, b: 16, c: 9, d: 4};

let racinesCarrees = [];


Object.values(obj).forEach((valeur) => {
   
    racinesCarrees.push(Math.sqrt(valeur));
});

console.log("Objet initial :", obj);
console.log("Racines carrées des valeurs :", racinesCarrees);


  // 20. Faire la sommes des nombre pairs
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sommeNombresPairs = arr.reduce((acc, nombre) => {
    if (nombre % 2 === 0) {
        return acc + nombre;
    }
    return acc;
}, 0);

console.log("Tableau initial :", arr);
console.log("Somme des nombres pairs :", sommeNombresPairs);
      
      
    