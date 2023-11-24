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
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();

myArray.push("Christopher");
myArray.push("Hector");
myArray.push("Francisco");
console.log("array", myArray);
console.log("POP", myArray.pop());
console.log("arrayBorrado", myArray);
myArray.push("Antonio");
myArray.push("Federico");
myArray.push("Juan");
console.log("nuevoArray", myArray);
myArray.delete(3);
console.log("arrayNew", myArray);