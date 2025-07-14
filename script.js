
/*Snack 1

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bikes = [
  {
    name : 'bianchi',
    kilogram : 6.8
  },
  {
    name : 'pinarello',
    kilogram : 7.0
  },
  {
    name : 'deRosa',
    kilogram : 6.9
  },
  {
    name : 'trek',
    kilogram : 7.2
  },
  {
    name : 'scott',
    kilogram : 7.8
  },
  {
    name : 'canyon',
    kilogram : 7.5
  }
];

console.log(bikes);

/*Stampare a schermo la bici con peso minore. */

let lightWeight = bikes[0];

for(let i=0; i<bikes.length; i++){

   const currentbike = bikes[i];
   
   if(currentbike.kilogram < lightWeight.kilogram ){
      
    lightWeight = currentbike
    
   }
}

console.log(lightWeight);



/*Snack2

Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


const footballTeams = [
  {
    name : 'milan',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'inter',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'roma',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'atalanta',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'napoli',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'fiorentina',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'bologna',
    pointsMade : 0,
    foulsDrawn : 0
  },
  {
    name : 'cagliari',
    pointsMade : 0,
    foulsDrawn : 0
  },
];

console.log(footballTeams);

//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.