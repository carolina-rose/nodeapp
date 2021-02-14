const helloWorld = () => console.log('New Hello World');
const add = (a,b) => console.log(a+b); 
const subTitle = "Zajęcia backend"
const sample = () => 'proba funkcji'; 


module.exports = {
    helloWorld,
    add,
    subTitle,
    sample
}

console.log('functions.js loaded correctly');

