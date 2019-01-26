"use strict"


function Phone(brand, price, color, software, condition) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.software = software;
    this.condition = condition;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + ". System is: " + this.software + ", and condition is: " + this.condition + ".");
}



var samsungGalaxyS6 = new Phone("Samsung", 2900, "silver", "Android", "new");
var iphone6S = new Phone("Iphone", 4500, "white", "Ios", "new");
var onePlusOna = new Phone("onePlus", 1800, "black", "onePlus", "new");


iphone6S.printInfo();