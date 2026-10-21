// //sir Amper's example

// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   start() {
//     console.log(`${this.brand} is starting...`);
//   }
// }

// class Car extends Vehicle {
//   drive() {
//     console.log(`${this.brand} car is driving.`);
//   }
// }
// class Motorcycle extends Vehicle {
//   ride() {
//     console.log(`${this.brand} motorcycle is riding.`);
//   }
// }

// // Create objects
// const car = new Car("Toyota");
// const motorcycle = new Motorcycle("Honda");

// // Inherited method
// car.start();
// motorcycle.start();

// // Child-specific methods
// car.drive();
// motorcycle.ride();

//My activity


class Gun {
    constructor(recoil, accuracy, range, attachment) {
        this.recoil = recoil;
        this.accuracy = accuracy;
        this.range = range;
        this.attachment = attachment;
    }

    display() {
        console.log("Recoil: ", this.recoil);
        console.log("Accuracy: ", this.accuracy);
        console.log("Range: ", this.range);
        console.log("Attachment: ", this.attachment);
    }

    fire() {
        console.log("The Gun is Firing...");
        console.log("====================");
    }
}

class Pistol extends Gun {
    constructor(recoil, accuracy, range, attachment, tiltingBarrel) {
        super(recoil, accuracy, range, attachment);
        this.tiltingBarrel = tiltingBarrel;
    }

    display() {
        console.log("PISTOL: ");
        super.display();
        console.log("Tilting Barrel: ", this.tiltingBarrel);
    }
}

class AssaultRifle extends Gun {
    constructor(recoil, accuracy, range, attachment, selectiveFire) {
        super(recoil, accuracy, range, attachment);
        this.selectiveFire = selectiveFire;
    }

    display() {
        console.log("RIFLE: ");
        super.display();
        console.log("Selective Fire: ", this.selectiveFire);
    }
}

// Create objects
const pistol = new Pistol("Short", 75, "50m", "Monolithic", true);

const rifle = new AssaultRifle("High", 99, "900m", "Red Dot", true);

// Display pistol information
pistol.display();
pistol.fire();

console.log("====================");

// Display assault rifle information
rifle.display();
rifle.fire();
