class Uber{
    constructor(price, distance){
        this.price = price;
        this.distance = distance;
    }

    getTotalPrice(){
        return "Total price is: " + this.price * this.distance
    }
}

const price1 = new Uber(250, 2);
console.log(price1. getTotalPrice());