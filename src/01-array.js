// const array = ["Diego", "Christopher", "Vanessa"];

class MyArray {
    constructor() {
        this.length = 0; // Tener el conteo de cuantos elementos se van agregando.
        this.data = {}; // Lugar donde se va a guardar los elementos nuevos.
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();

myArray.push("Christopher");
myArray.push("Hector");
console.log(myArray.get(1));