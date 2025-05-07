// problem -1

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}

// console.log(formatString('Hello'));
// console.log(formatString('HELLO'));
// console.log(formatString('HELLO', true));
// console.log(formatString('HELLO', false));



// problem-2

const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    return items.filter(item => item.rating >= 4)
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const filteredBooks = filterByRating(books)
// console.log(filteredBooks);




// problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, current) => acc.concat(current), [])
}


const concatTwoArrays = concatenateArrays(['a', 'b'], ['c', 'd'])
const concatMultipleArrays = concatenateArrays([1, 2], [3, 4], [5, 6, 7])

// console.log(concatTwoArrays, concatMultipleArrays);



// problem 4
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `"Make: ${this.make}, year: ${this.year}"`
    }


}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model
    }

    getModel(): string {
        return `"Model: ${this.model}"`
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());



// problem 5
function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value * 2
    }
}

// console.log(processValue("hello"));
// console.log(processValue(10));



// problem 6
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null
    }
    else {
        return products.reduce((max, current) => {
            return current.price > max.price ? current : max
        })
    }
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
    { name: "Pencil", price: 100 }
];

console.log(getMostExpensiveProduct(products));
