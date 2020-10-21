// Code goes here!
type Admin = {
    name: string;
    priviledges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

//nterface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    priviledges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;


type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: string, b:string): string;
function add(a: number, b:string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Hello', 'TypeScript');
result.split(' ');

const fetchUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        descriptopm: 'TypeScript',
    }
};

console.log(fetchUserData?.job?.title);

const userInput2 = '';

const storedData = userInput2 ?? 'DEFAULT'; // nullかundefinedだった場合はDEFAULT

console.log(storedData);

/* 
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    if('priviledges' in emp){
        console.log("Priviledges: " + emp.priviledges);
    }
    if('startDate' in emp){
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Menu', startDate: new Date()});

class Car {
    drive() {
        console.log("運転中...");
    }
}

class Truck {
    drive() {
        console.log("トラックを運転中...");
    }

    loadCargo(amount: number) {
        console.log("荷物を載せています..." + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird',
    flyingSpeed: number;
}

interface Horse {
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('移動速度 ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

//const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'こんにちは';
}

interface ErrorContainer { // { email: '正しいメールアドレスではありません', username: 'ユーザ名に記号を含めることが出来ません'}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザ名に記号を含めることが出来ません',
} */