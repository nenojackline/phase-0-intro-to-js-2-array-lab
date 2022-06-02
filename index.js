
const cats = ["Milo", "Otis", "Garfield" ];
function destructivelyAppendCat(name) {
    cats.push(name)    
}
function destructivelyPrependCat(name) {
    cats.unshift(name)    
}
function destructivelyRemoveLastCat(name) {
    cats.pop()    
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()    
}
function appendCat(name) {
    return [...cats, name]  
}
function removeLastCat(name) {
    return cats.slice(0,-1);
}
function prependCat(name) {
    return [name,...cats]  
}
function removeFirstCat(name) {
    return cats.slice(1); 
}





