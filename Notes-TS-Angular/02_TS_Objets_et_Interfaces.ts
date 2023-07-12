// OBJET + INTERFACE
const user1 = {
    name: "Hayes",
    id: 0,
};
// créer un modèle d'objet à respecter avec une interface:
interface User {
    name: string;
    id: number;
};
// créer un objet avec ce modèle :
const user2: User = {
    name: "Hayes",
    id: 0,
};

// CLASS
class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
const user3: UserAccount = new UserAccount("Murphy", 1);
// on peut même créer un object (class) avec une interface comme type :
const user4: User = new UserAccount("Murphy", 1);
// on peut utiliser les interface comme paramètre ou valeur de retour
function getAdminUser(): UserAccount {
    // ...
    return user3;
}
function deleteUser(user: UserAccount) {
    // ...
}


// test UNION pour recevoir en param d'une fun, un ou l'autre type :
console.log("-------------------------------------");

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return obj;
    }
    return [obj];
}
const test1:string = "test1";
console.log(wrapInArray(test1));
const test2:string[] = ["test", "test", "test"];
console.log(wrapInArray(test2));


// ON PEUT DÉCLARER NOS PROPRES TYPES QUI UTILISENT DES GENERICS :
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<string>;
   
  // object is a string, because we declared it above as the variable part of Backpack.
//   const object1 = backpack.get();
//   console.log("object1= " + object1);
  
   
  // Since the backpack variable is a string, you can't pass a number to the add function.
//   backpack.add(23);


// "STRUCTURAL TYPE SYSTEM" :
interface Point {
    x: number;
    y: number;
}
function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);  
}
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);


// les classes et les objets se conforment au shapes
class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  const newVPoint = new VirtualPoint(13, 56);
  logPoint(newVPoint); // logs "13, 56"