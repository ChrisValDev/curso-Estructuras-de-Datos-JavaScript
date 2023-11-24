// const array = ["Diego", "Christopher", "Vanessa"];

class MyArray {
    constructor() {
        this.length = 0; // Tener el conteo de cuantos elementos se van agregando.
        this.data = {}; // Lugar donde se va a guardar los elementos nuevos.
    }
    get(index) {// obtiene un elemento
        return this.data[index];
    }
    push(item) {// agrega un elemento al final
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    unshift(item) {// agrega un elemento al inicio
        for(let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.length++;
        this.data[0] = item;
        return this.data;
    }
    pop() {// elimina un elemento al final
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    shift() {// elimina un elemento al inicio
        if(this.length >= 1) {
            const firstItem = this.data[0];
            for (let i = 0; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1]; // correcion de numero de indice de cada elemento.
            }
            delete this.data[this.length - 1]; // elimina el ultimo slot del elemento.
            this.length--; // corrijo el tamaño del array.
            return firstItem;
        }   
    }
    delete(index) {// elimina un elemento con indice señalado
        const item = this.data[index];
        console.log("item", item);
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
    
}

const myArray = new MyArray();

myArray.push("Hector");
myArray.push("Christopher");
myArray.push("Francisco");
console.log("array", myArray);
console.log("POP", myArray.pop());
console.log("arrayBorrado", myArray);
myArray.push("Antonio");
myArray.push("Federico");
myArray.push("Juan");
console.log("nuevoArray", myArray);
myArray.unshift("Pepe");
console.log("arrayNew", myArray);
myArray.delete(3);
console.log("arrayNew", myArray);
