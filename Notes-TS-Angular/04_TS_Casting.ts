// Caster pour supposer un type :
let test04_1: unknown = 'salut!';
console.log((test04_1 as string).length);

let test04_2: unknown = 56789231784314651378264;
console.log((test04_2 as string).length);
console.log(String(test04_2).length);