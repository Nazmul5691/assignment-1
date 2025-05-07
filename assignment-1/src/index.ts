// uppercase or lowercase 
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}

console.log(formatString('Hello'));
console.log(formatString('HELLO'));
console.log(formatString('HELLO', true));
console.log(formatString('HELLO', false));




// filter by rating
const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    return items.filter(item => item.rating >= 4)
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const filteredBooks = filterByRating(books)
console.log(filteredBooks);




// Concatenate Arrays
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, current) => acc.concat(current), [])
}


const concatTwoArrays = concatenateArrays(['a', 'b'], ['c', 'd'])
const concatMultipleArrays = concatenateArrays([1, 2], [3, 4], [5, 6, 7])

console.log(concatTwoArrays, concatMultipleArrays);



// inheritance
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

console.log(myCar.getInfo());
console.log(myCar.getModel());



// get value length or double
function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value * 2
    }
}

console.log(processValue("hello"));
console.log(processValue(10));



// maximum price product
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null
    }
    else {
        return products.reduce((acc, current) => {
            return current.price > acc.price ? current : acc
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



// day checker
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    }
    else {
        return "Weekday"
    }
}

console.log(getDayType(Day.Sunday));
console.log(getDayType(Day.Tuesday));



// square and delay setTimeout
async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (n > 0) {
                resolve(n * n)
            }
            else {
                reject(new Error("Negative number not allowed"))
            }
        }, 1000)
    })
}

squareAsync(4).then(console.log);       
squareAsync(-3).catch(console.error);
