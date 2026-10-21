//sir Amper's Example
// Product class

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// // Cart item class
// class CartItem {
//   constructor(product, quantity) {
//     this.product = product;
//     this.quantity = quantity;
//   }

//   subtotal() {
//     return this.product.price * this.quantity;
//     // 20(ballpen) x qty(6) = 120
//   }
// }

// // Shopping cart class
// class ShoppingCart {
//   constructor() {
//     this.items = []; // empty array
//   }

//   add(product, quantity) {
//     this.items.push(new CartItem(product, quantity));
//   }

//   show() {
//     let total = 0;

//     for (const item of this.items) {
//       console.log(
//         `${item.product.name} x ${item.quantity} = ₱${item.subtotal()}`,
//       );

//       total += item.subtotal();
//     }

//     console.log(`\nTotal: ₱${total}`);
//     console.log("Payment: E-Wallet");
//     console.log("Status: Paid");
//   }
// }

// // Create products
// const mouse = new Product("Mouse", 500);
// const keyboard = new Product("Keyboard", 1500);

// // Create cart and add items
// const cart = new ShoppingCart();

// cart.add(mouse, 2);
// cart.add(keyboard, 1);

// // Display result
// cart.show();


//My Activity Gun class
class Gun {
  constructor(recoil, accuracy, range, attachment, price) {
    this.recoil = recoil;
    this.accuracy = accuracy;
    this.range = range;
    this.attachment = attachment;
    this.price = price;
  }
}

// Pistol class
class Pistol extends Gun {
  constructor(recoil, accuracy, range, attachment, tiltingBarrel, price) {
    super(recoil, accuracy, range, attachment, price);
    this.tiltingBarrel = tiltingBarrel;
  }
}

// Assault Rifle class
class AssaultRifle extends Gun {
  constructor(recoil, accuracy, range, attachment, selectiveFire, price) {
    super(recoil, accuracy, range, attachment, price);
    this.selectiveFire = selectiveFire;
  }
}

// Cart item class
class CartItem {
  constructor(gun, quantity) {
    this.gun = gun;
    this.quantity = quantity;
  }

  subtotal() {
    return this.gun.price * this.quantity;
  }
}

// Shopping cart class
class ShoppingCart {
  constructor() {
    this.items = []; // empty array
  }

  add(gun, quantity) {
    this.items.push(new CartItem(gun, quantity));
  }

  show() {
    let total = 0;

    for (const item of this.items) {
      console.log(
        `${item.gun.constructor.name} x ${item.quantity} = ₱${item.subtotal()}`,
      );

      total += item.subtotal();
    }

    console.log(`\nTotal: ₱${total}`);
    console.log("Payment: E-Wallet");
    console.log("Status: Paid");
  }
}

// Create guns
const pistol = new Pistol("Short", 75, "50m", "Monolithic", true, 50000);
const rifle = new AssaultRifle("High", 99, "900m", "Red Dot", true, 150000);

// Create cart and add items
const cart = new ShoppingCart();

cart.add(pistol, 2);
cart.add(rifle, 1);

// Display result
cart.show();
