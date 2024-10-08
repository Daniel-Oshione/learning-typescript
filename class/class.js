// An object is an instance of a class in object-oriented programming, representing a specific entity with attributes (data)
// and behaviors (methods). The class serves as a blueprint or template for creating objects, defining the properties and methods
//  that the objects will have. A constructor, on the other hand, is a special type of method that is automatically called when an object
//  is created from a class. It initializes the object's attributes with specific values. In summary, while a class defines the structure
//  and behavior of objects, the constructor is responsible for initializing the new objects created from that class, allowing for customized
//  initial states.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//parent class
var Human = /** @class */ (function () {
    function Human(name, age, gender, complexion, isHuman) {
        //construstor is used for dependency injection, otherwise installing third party libraries and calling then in the constructors
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.complexion = complexion;
        this.isHuman = isHuman;
    }
    Human.prototype.person = function () {
        return "My name is ".concat(this.name, ", i am ").concat(this.age, " years old. I am a ").concat(this.gender, ", i am ").concat(this.complexion, " in complexion. Am i a human? ").concat(this.isHuman, ".");
    };
    return Human;
}());
//new means to instantiate a new class therby calling the human class out
var myDetails = new Human('Daniel', 19, 'Male', 'Chocolate', true);
console.log(myDetails.person());
//child of parent class using inheritance
var humanbeing = /** @class */ (function (_super) {
    __extends(humanbeing, _super);
    function humanbeing(name, age, gender, complexion, isHuman, lga) {
        //super is important for the construstor to work
        var _this = _super.call(this, name, age, gender, complexion, isHuman) || this;
        //assigning the new property to the constructor
        _this.lga = lga;
        return _this;
    }
    humanbeing.prototype.user = function () {
        return "My name is ".concat(this.name, ", i am ").concat(this.age, " years old. I am a ").concat(this.gender, ", i am ").concat(this.complexion, " in complexion. Am i a human? ").concat(this.isHuman, ". I live in ").concat(this.lga);
    };
    return humanbeing;
}(Human));
var childElement = new humanbeing('Esther', 20, 'female', 'fair', true, 'Uyo');
console.log(childElement.user());
