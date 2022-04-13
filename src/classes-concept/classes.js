class House {
    constructor(color) {
        this.color = color
    }

    getFurniture() {
        return '💺'
    }
}

const houseObj1 = new House("red")
const houseObj2 = new House("blue")

console.log(houseObj1.color, houseObj1.getFurniture()); // red 💺

console.log(houseObj2.color, houseObj2.getFurniture()); // blue 💺