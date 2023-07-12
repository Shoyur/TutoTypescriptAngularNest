// Types de base :

// BOOLEAN
let isDone:boolean = false;

//STRING
let nom:string = "Jean";

// NUMBER
let age:number = 50;

console.log(nom + " a " + age + " ans.");

// autres NUMBER :
// hex : 0x.........
// bin : 0b.........
// oct : 0o.........

// BIGINT
// peut pas être mélangé avec number ou autres types.
let grosNombre:bigint = 100n;
console.log("grosNombre= " + grosNombre);
// semble être normal mais c'Est pour définir un plus gros que number
typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true

// on peut faire des "templates" de variable incluant d'autres variables :
let phrase1:string = "Bonjour, mon nom est " + nom + " et j'ai " + age + " ans!"; // même avec un number dans le string
console.log(phrase1);


// ARRAY
let liste1: number[] = [1, 2, 3];
let liste2: string[] = ["oui", "non", "what"];
// 2D array de type number :
let liste3: number[][] = [[1], [2, 3], [4, 5, 6]];
liste3.push([13])
// 2D array de type précisement [string, number] :
let liste4: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];


// ANY
// si on s'en fou
// voir noImplicitAny pour empêcher les Any ???

// UNKNOWN
// si on sait pas encore

// VOID
function sayHi(): void { 
    console.log('Hi!')
} 
let speech: void = sayHi(); 
console.log(speech); // undefined
// si on veut vraiment que la fnction retourne undefined, au lieu de rien, ou true, ou false
// pas certain de l'utilité...


// TUPLE
// exactement comme array mais avec types mélangés
// tout est ensuite manipulé par l'index (#)
let personne:[string, string, number] = ["Jean", "Bon", 50];
console.log("personne= " + personne);
// ET si on veut, on peut déclarer un tuple initialisé sans préciser les types
let chien1 = ["Fido", 7, 42, "boeuf"];
// avec les (), c'est une opération et donne 51 
console.log(personne[0] + " " + personne[1] + " a " + personne[2] + " ans, et aura " + (personne[2] + 1) + " l'année prochaine.");
// mais sans (), ça considère comme tout le reste string, donc ça concatène et ça donne 501
console.log(personne[0] + " " + personne[1] + " a " + personne[2] + " ans, et aura " + personne[2] + 1 + " l'année prochaine.");
// on peut ajouter une valeur supplémentaire :
personne.push(1973);
// on peut enlever des éléments avec :
// .pop() .shift() .splice()

// *** on peut destructurer un tuple dans ddes variables (que tout soit transmis dans pleins de variables) :
var user = ["John", "Doe", 32,];
var [userFirstName, userLastName, userAge] = user;
console.log( user );
console.log( userFirstName + " " + userLastName + " is " + userAge + " years old" );



// ENUM
enum Color {
    Red = 1, // l'indice peut commencer à 15 par exemple, et alors là, Green sera 16
    Green,
    Blue,
}
let c1:Color = Color.Red;
console.log("c1= " + c1);

let colorName: string = Color[2];
console.log("colorName= " + colorName);

let c2:Color = Color.Green;
console.log("c2= " + c2);


// SYMBOL, UNIQUE SYMBOL
// beaucoup de docu à voir plus tard...

// NEVER
// même chose...

// TYPE
// on peut se créer des types customs
// c'est des ALIASes
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
// code = false; // Compiler Error



// MAP
// typeof() = object
// genre de dictionnaire
// est manipulé par le nom de la clé au lieu du numero index
// paire key/value

// Create Empty Map
let myMap1 = new Map<string, number>();
// Creating map with initial key-value pairs
let myMap2 = new Map<string, string>([
    ["key1", "value1"],
    ["key2", "value2"]
]);
// console.log(typeof(myMap2)); // object


// map.set(key, value) – adds a new entry in the Map.
// map.get(key) – retrieves the value for a given key from the Map.
// map.has(key) – checks if a key is present in the Map. Returns true or false.
// map.size – returns the count of entries in the Map.
// map.delete(key) – deletes a key-value pair using its key. If key is found and deleted, it returns true, else returns false.
// map.clear() – deletes all entries from the Map.

// map.keys() – to iterate over map keys
// map.values() – to iterate over map values
// map.entries() – to iterate over map entries

let nameAgeMapping = new Map<string, number>();
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
//3. Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}
//4. Using object destructuring
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
}



// SET
// array qui ne peut avoir 2 valeurs pareilles
//Create a Set
let diceEntries = new Set<number>();
//Add values
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6);   //Chaining of add() method is allowed
//Check value is present or not
diceEntries.has(1);                 //true
diceEntries.has(10);                //false
//Size of Set 
diceEntries.size;                   //6
//Delete a value from set
diceEntries.delete(6);              // true
//Clear whole Set
diceEntries.clear();                //Clear all entries