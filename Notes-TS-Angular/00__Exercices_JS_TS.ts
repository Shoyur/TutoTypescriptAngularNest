// Si nombre pair:
function isEven(num: number): boolean {
    if (num % 2 === 0) { return true; }
    return false;
    // ou mieux :
    return !(num % 2);
    // si on envoie 5, 5 mod 2 = 1, !1 = 0, donc false, donc 5 n'est pas pair
}


// si mot plus long que 6 :
function isAcceptablePassword(password: string): boolean {
    return (password.length > 6);
}


// retourne seulement 1er mot
function firstWord(text: string): string {
    return text.split(" ")[0];
}


// string inversé :
function backwardString(value: string): string {
    return value.split("").reverse().join("");
    // split crée un array, reverse inverse un array, join mets tout l'array ensemble
}


// la longueur d'un number :
function numberLength(value: number): number {
    return value.toString().length;
}

// ********** J'ai oublié les parenthèses () à reverse() et toString()
// ********** Ne jamais les oublier, et essayer ça si j'ai un bug !!!!


// savoir le mot contient une ou des minuscules
function isAllUpper(text: string): boolean {
    return text.toUpperCase() == text;
    // on aurait pas pu prendre
    // return (/[a-z]/.test(text));
    // ou
    // return text.match(/[a-z]/);
    // cela ne fonctionnerait qu'avec a-z sans accents ou autres exceptions
}   


// trouver un string entre 2 caractères :
function betweenMarkers(text: string, start: string, end: string): string {
    return text.split(start)[1].split(end)[0];
}


// combien il y a de zéros à la fin d'un number :
function endZeros(a: number): number {
    let b: string[] = a.toString().split("");
    let c: number = 0;
    for (let i = b.length-1; i>=0; i--) {
        if (b[i] == "0") { c++; }
        else { break; }
    }
    return c;
}


// combien de zéros au début d'un string :
function beginningZeros(a: string): number {
    let b: string[] = a.split("");
    let c: number = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] == "0") { c++; }
        else { break; }
    }
    return c;
}


// s'assurer que la phrase début par une majuscule et se termine par un point :
function correctSentence(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1) + (text.endsWith(".") ? "": ".");
}



// trouver le chiffre le plus grand dans un nombre :
function maxDigit(value: number): number {
    let s: string[] = value.toString().split("");
    let p: number = 0;
    for (let i = 0; i < s.length; i++) {
       if (parseInt(s[i]) > p) {
           p = parseInt(s[i]);
       }
    }
    return p;
}



// si n est dans ar, retourner ar[n] à la n, sinon retourner -1 :`
function indexPower(ar: number[], n: number): number {
    if (!ar.includes(n)) { return -1; }
    return Math.pow(ar[n], n);
}



// mais j'avais mal compris la question
// c'était plutôt, s'il existe un nombre à l'index n, retourner ar[n] à la n, sinon retourner -1 :
function indexPower2(ar: number[], n: number): number {
    if (n >= ar.length) { return -1; }
    return Math.pow(ar[n], n);
    // et on peut aussi faire :
    // return ar[n]**n;
}



// s'il y plus qu'une correspondance à un caractère, erreur et donc pas isométrique :
function isometricStrings(line1: string, line2: string): boolean {
    if (line1 == "") { return true; }
    let map = new Map<string, string>();
    for (let i = 0; i < line1.length; i++) {
        if (map.has(line1.charAt(i)) && (map.get(line1.charAt(i)) != line2.charAt(i))) { return false; }
        else { map.set(line1.charAt(i), line2.charAt(i)); }
    }
    return true;
}
// console.log(isometricStrings("add", "egg"), true);
// console.log(isometricStrings("foo", "bar"), false);
// console.log(isometricStrings("bar", "foo"), true);



// cherche seulement les nombres seuls dans un string et les additionne :
function sumNumbers(text: string): number {
    let reponse: number = 0;
    let t: string[] = text.split(" ");
    for (let i = 0; i < t.length; i++) {
        if (Number(t[i])) {
            reponse += parseInt(t[i]);
        }
    }
    return reponse;
}



// chercher premier mot, mais il peut y avoir des points ou espaces ou virgules n'importe où,
// et en n'importe quelle quantité, et un mot peut contenir un apostrophe :
function firstWord2(text: string): string {
    return text.replace(/\./g, " ").trim().split(/[\s,]+/)[0];
    // remplace tous (g) les points (\.) par espace
    // enlève les espaces au début et à la fin
    // prend le 1er après avoir séparé par espace ou virgule
    // qu'est ce que le "+" ?
}



// compter le nombre de lignes non-vides
function nonEmptyLines(text: string): number {
    let s: string[] = text.split("\n");
    let n: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].replace(/\s/g, '').length) { n++; }
    }
    return n;
}
// console.log("Example:");
// console.log(nonEmptyLines("one simple line\n"), 1);
// console.log(nonEmptyLines(""), 0);
// console.log(nonEmptyLines("\nonly one line\n            "), 1);
// console.log(nonEmptyLines("\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            "), 3);



// aggregate les arrays (2D array) dans un objet qui cumule les propriétés
function aggregateAndCount(items: [string, number][]): object {
    let obj: {[k: string]: number} = {};
    for(let i = 0; i < items.length; i++) {
        obj.hasOwnProperty(items[i][0]) ? obj[items[i][0]] += items[i][1] : obj[items[i][0]] = items[i][1];
        // *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
        // je crois que je devrais étudier ||=, &&=, ??=
        // ces opérateurs modifient selon l'existance ou l'état de la propriété
    }
    return obj;
}
// console.log(
//     aggregateAndCount([
//         ["a", 1],
//         ["b", 2],
//         ["c", 3],
//         ["a", 5],
//     ]),
//     { a: 6, b: 2, c: 3 }
// );



// enlever le max et min d'un SET, et combien de fois, et le retourner
function removeMinMax(data: Set<number>, total: number): Set<number> {
    for(let i = 0; i < total; i++) {
        data.delete(Math.min.apply(Math, [...data]));
        data.delete(Math.max.apply(Math, Array.from(data)));
    }
    return data;
}
// console.log(removeMinMax(new Set([8, 9, 18, 7]), 1));



// vérifier le nombre manquant, peu importe le bond ou la position
function missingNumber(items: number[]): number {
    let diff: number = Number.MAX_SAFE_INTEGER;
    let diffTemp: number;
    let rep: number = 0;
    items.sort(function(a, b){return a-b});
    for (let a = 0; a < (items.length - 1); a++) {
        diffTemp = items[a+1] - items[a];
        if (diffTemp < diff) { diff = diffTemp; }
    }    
    for (let a = 0; a < (items.length - 2); a++) {
        if ((items[a] + diff) != items[a+1]) { rep = (items[a] + diff); }
    }
    return rep;
}
// console.log((missingNumber([1, 4, 2, 5]) + " = " + 3));
// console.log((missingNumber([2, 6, 8]) + " = " + 4));



// changer tous les "right" pour des "left" et faire une phrase avec ça
// et ajouter une virgule entre les bouts de l'array
function leftJoin(phrases: string[]): string {
    // return phrases.join(",").replaceAll("right", "left");
    return ""; // le return fonctionne mais aurait fallu que j'importe qqchose pour être compatible
    // https://stackoverflow.com/questions/63616486/property-replaceall-does-not-exist-on-type-string
}
// console.log(leftJoin(["bright aright", "ok"]), "bleft aleft,ok");
// console.log(leftJoin(["brightness wright"]), "bleftness wleft");
// console.log(leftJoin(["enough", "jokes"]), "enough,jokes");



// le string le plus fréquent dans un array
function mostFrequent(data: string[]): string {
    let a: string;
    let b: string;
    let v: string;
    // return data.sort((a,b) => data.filter(v => v===a).length - data.filter(v => v===b).length).pop();
    return "";
    // ************ Je dois trouver une solution qui fonctionne en Typescript...
    // car j'ai cheaté pour cette question
}
// console.log(mostFrequent(["a", "b", "c", "a", "b", "a"]), "a");
// console.log(mostFrequent(["a", "a", "bi", "bi", "bi"]), "bi");



// 
function AfficherNombre(liste: number[]) {
	for (let i = 0; i < (liste.length - 2); i++) {
		if (liste[i] > liste[i+1]) {
			console.log(liste[i]);
		}
	}
	console.log(liste[liste.length - 1]);
}
AfficherNombre([3, 6, 4, 3, 4]);