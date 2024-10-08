
// An object is an instance of a class in object-oriented programming, representing a specific entity with attributes (data)
// and behaviors (methods). The class serves as a blueprint or template for creating objects, defining the properties and methods
//  that the objects will have. A constructor, on the other hand, is a special type of method that is automatically called when an object
//  is created from a class. It initializes the object's attributes with specific values. In summary, while a class defines the structure
//  and behavior of objects, the constructor is responsible for initializing the new objects created from that class, allowing for customized
//  initial states.

//parent class
class Human{
    name: string;
    age: number;
    gender: string;
    complexion: string;
    isHuman: boolean;

    constructor(name:string, age: number, gender: string, complexion: string, isHuman: boolean){
            //construstor is used for dependency injection, otherwise installing third party libraries and calling then in the constructors
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.complexion = complexion;
            this.isHuman = isHuman;
    }
    person(){
     return `My name is ${this.name}, i am ${this.age} years old. I am a ${this.gender}, i am ${this.complexion} in complexion. Am i a human? ${this.isHuman}.`
    }
}

//new means to instantiate a new class therby calling the human class out
const myDetails = new Human('Daniel', 19, 'Male', 'Chocolate', true);

console.log(myDetails.person());


//child of parent class using inheritance
class humanbeing extends Human{

    //adding another property
    lga: string;

    constructor(name: string, age: number, gender: string, complexion: string, isHuman: boolean, lga: string){

        //super is important for the construstor to work
        super(name, age, gender, complexion, isHuman)

        //assigning the new property to the constructor
        this.lga = lga;
    }

    user(){
        return `My name is ${this.name}, i am ${this.age} years old. I am a ${this.gender}, i am ${this.complexion} in complexion. Am i a human? ${this.isHuman}. I live in ${this.lga}`
    }
}
const childElement = new humanbeing('Esther', 20, 'female', 'fair', true, 'Uyo');
console.log(childElement.user())