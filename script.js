' use strict '

// const number = new Number(2);
// console.log(number);

function Car(name,color,mph){
    this.name = name;  
    this.mph = mph;      // bunda this.name yangi o'zgaruvchi dan o'ng tarafda turgan name funksiya argumentidagi name
    this.color = color;
    this.isAirbag = true;
    this.speed = function(){
        console.log(`Speed of car ${this.name} is ${this.mph}`);
    }
}

const bmw = new Car('bmw','red',32);   //prototype olinyapti Car funksiyasidan
const merc = new Car('merc','black',10);
// console.log(bmw);
// console.log(merc);

// Car funksiysidagi speed metodini chaqirish
// bmw.speed();
// merc.speed();

// console.log(merc);

// Prototip metodini chaqirish
Car.prototype.sayHello = function(){
    console.log(`Car of name ${this.name} say hello`);  // name Cardan kelyapti
}

bmw.sayHello();
merc.sayHello()