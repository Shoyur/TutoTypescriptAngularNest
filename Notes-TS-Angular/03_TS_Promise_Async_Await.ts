// Un nombre entre 0 et 9
// .toFixed() produit un string
const getRandomInt = (): string => {
    return (Math.random() * 10).toFixed(0);
};

// resolve : cherche à retourner une valeur, sinon une erreur (un resolve, sinon un reject)
const trouverNbPair = new Promise<number>((resolve, reject) => {
    setTimeout(function():void {
        // parseInt converti le string de getRandomInt en number
        const value = parseInt(getRandomInt());
        if (value % 2 === 0) { resolve(value); }
        else { reject('Nombre impair trouvé!'); }
    }, 3000 ); // attend 1s avant d'exécuter cette fonction
});

// appel trouverNbPair()
// et attend une résolution du promise
trouverNbPair.then((valeur) => {
    console.log('Réussi 0:', valeur);
})
.catch((e) => {
    console.log('Erreur:', e);
})
.finally(() => {
    console.log('Terminé!');
});

// Le callback est, ce qui est exécuté (au .then) lorsque le promise est résolu





////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "VERSION PLUS SIMPLE" :

const value:number = parseInt(getRandomInt());
const numPromise1 = Promise.resolve(value); // est implicitement un number car value:number

numPromise1.then((value) => {
    console.log( 'Réussi 1:', value);
})
.catch((e) => {
    console.log( 'Erreur:', e);
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pleinde promises (promise all), qui démontre qu'ils doivent tous être terminés :
// a function that return a delayed promise
const getPromise = (
    value: number, delay: number, fail: boolean
): Promise<number> => {
    return new Promise<number>( ( resolve, reject ) => {
        setTimeout(
            () => fail ? reject( value ) : resolve( value ),
            delay
        );
    } );
};
// const allPromise: Promise<number[]>
const allPromise = Promise.all<number>( [
    getPromise( 0, 0, false ),    // 0s
    getPromise( 1, 2000, false ), // 2s
    getPromise( 2, 1000, false ), // 1s
] );
// listen to `allPromise` resolution
console.time('settled-in');
allPromise.then( ( value ) => {
    // (parameter) value: number[]
    console.log( 'Resolved:', value );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} ).finally( () => {
    console.timeEnd('settled-in');
} );
// ...même s'ils sont démarrés avec délais 0,2,1, s'affiche quand même 0,1,2, car doivent tous être revenus :
// Réussi 1: 1                      avait pas de délai -> promise1()
// Resolved: [ 0, 1, 2 ]            étaient à 0, 2, 1 secondes
// settled-in: 2.006s               indicateur justement
// Erreur: Nombre impair trouvé!    celui que j'ai ajusté à 3000ms -> trouverNbPair()
// Terminé!                         le finaly de trouverNbPair()


// ceci était .all
// voir aussi .allSettled et .allReject
// promise.race pour utiliser le plus rapide
// promise.any pour le 1er qui est pas reject





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIS !
// il y a moyen de faire plus simple que déclarer des Promise's etc.
// avec async/await
// 
// ASYNC AWAIT <<<<<<<<<<<-------------------------
// 
// The await keyword is used inside an async function to wait on a promise. 
// If a promise has the await keyword before it, 
// the function execution won’t proceed further until that promise is resolved.

