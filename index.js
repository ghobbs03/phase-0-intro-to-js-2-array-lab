// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(name) {
    const copycatsAppend= [...cats, name];
    return copycatsAppend;
};

function prependCat(name) {
    const copycatsPrepend = [name,...cats];
    return copycatsPrepend;
};

function removeLastCat() {
    const copycatsRemoveLast = cats.slice(0,cats.length - 1);
    return copycatsRemoveLast;
};

function removeFirstCat(){
    const copycatsRemoveFirst = cats.slice(1);
    return copycatsRemoveFirst;
};


