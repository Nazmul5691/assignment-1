## 2. What is the use of the keyof keyword in TypeScript? Provide an example.
- The keyof keyword in typeScript is use for create a union type of the keys of a given type (object or interface).

keyof keyword helps to extract the keys of an object as a union type.

keyof used for safely access properties of an object dynamically.


### Example: 

```ts
type Vehicle2 = {
    bike: string;
    car: string;
    ship: string
}

type Owner = 'ship' | 'car' | 'bike'    //manually

type Owner2 = keyof Vehicle2            //using keyof keyword

 
const person: Owner =  "car"           // "bike" | "car" | "ship"
const person2: Owner2 = "car"          // "bike" | "car" | "ship"

```




## 7.Provide an example of using union and intersection types in TypeScript.


### Example using union |

```ts
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
 ```


### Example using intersection &

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  level: string;
};

type EmployeeProfile = Person & Employee;        //use intersections &

const profile: EmployeeProfile = {
  name: "Nazmul",
  age: 20,
  employeeId: 100,
  level: "Next Level"
};

console.log(profile);


```