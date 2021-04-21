const toys = [
  {
    id: 1,
    name: "Beyblade",
    manufacturer: "Hasbro",
    description:
      "Spinning battle tops! Mix and match components!! By far the coolest toy!!!",
    price: 9.84,
    quantity: 6,
    stock: true,
  },
  {
    id: 2,
    name: "Lincoln Log Set",
    manufacturer: "Honest Abe's",
    description: "Stackable little logs!? What ever will you build first!?",
    price: 14.99,
    quantity: 2,
    stock: true,
  },
  {
    id: 3,
    name: "BB Gun",
    manufacturer: "Red Ryder",
    description:
      "Hottest toy of this holiday season! CERTIFIED SEROTONIN SHOOTER!! DON'T SHOOT YOUR EYE OUT!!!",
    price: 59.95,
    quantity: 0,
    stock: false,
  },
];

// Below is the additon of new objects in Book 2 Chapter 5

const soccerBall = {
  id: 4,
  name: "Soccer Ball",
  manufacturer: "adidas",
  description:
    "Would you believe how freakin' high this baby will bounce!? Touch, turn, rocket, celly, GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL!!!!!!!!!",
  price: 29.99,
  quantity: 12,
  stock: true,
};

const drone = {
  id: 5,
  name: "Dragonflyer",
  manufacturer: "JDI",
  description:
    "There's a little pilot in there!!! Use the integrated spy cam to gain access to things you probably aren't supposed to know!!!",
  price: 128.99,
  quantity: 2,
  stock: true,
};

// console.log(toys);

// Below is the output from Book 2 Chapter 4: For...of loops

// for (const toy of toys) {
//   console.log(`The toy is called a ${toy.name}`);
// }

// Also from Book 2 Chapter 5
// toys.push(soccerBall);
// toys.push(drone);
// Alternatively, you can just seperate the objects with a comma in your method.
toys.push(soccerBall, drone);
// console.log(toys);

// const bbGun = {
//   id: 3,
//   name: "BB Gun",
//   manufacturer: "Red Ryder",
//   description: "Hottest toy of this holiday season! CERTIFIED SEROTONIN SHOOTER!! DON'T SHOOT YOUR EYE OUT!!!",
//   price: 59.95,
//   quantity: 0,
//   stock: false,
// };

// The BB Gun has a string name property,
// a string maufacturer property,
// a string descripton property,
// a float price property
// an integer quanitty property,
// and a boolean stock property

// Now you're going to display a simple catalog using string interpolation and a for...of loop.
// IT FINALLY WORKED!
// The key was to to ${toy.name} instead of ${toys.name}.
// You have to pick from the object, not the array!

// for (const toy of toys) {
//   console.log(`The ${toy.name} costs $${toy.price}.`);
// }

//What if you wanted to perform logic in your loop?
//Let's modify the for...of loop above to a 5% price increase.

for (const toy of toys) {
  toy.price = toy.price + toy.price * 0.05;
}

// for (const toy of toys) {
//   console.log(`The ${toy.name} costs $${toy.price}.`);
// }

// What if you want to find something inside of your array?
// In this example, id =4 relates to the soccer ball.
// This should output the ball's price.

// const toyToFind = 4;

// for (const toy of toys) {
//   if (toy.id === toyToFind) {
//     toy.price = toy.price + toy.price * 0.05;
//     console.log(`The ${toy.name} costs $${toy.price}.`);
//   }
// }

// Book 2 Chapter 10: Adding toys the right way
// This is a big function for adding a toy without an ID.

// Here's the whole of that Chapter 10 Code finished.
/*
const addToyToInventory = (toyObject) => {
  const lastIndex = toys.length - 1;
  const currentLastToy = toys[lastIndex];
  const maxId = currentLastToy.id;
  const idForNewToy = maxId + 1;
  toyObject.id = idForNewToy;
  toys.push(toyObject);
};

const legoSet = {
  name: "Lego Set",
  manufacturer: "Lego",
  description: "Stackable petroleum pieces!! Don't you dare step on one!!!",
  price: 14.95,
  quantity: 8,
  stock: true,
};

addToyToInventory(legoSet);

for (const toy of toys) {
  console.log(`The ${toy.name} costs $${toy.price}.`);
}
*/

//  Maybe loosen that down a bit.

// for (const toy of toys) {
//   console.log(toys);
// }

// if you want to break it down further:

const addToyToInventory = (toyObject) => {
  /*
        Step 1: Get maximum id current in array
    */
  // Get index of last item in array
  const lastIndex = toys.length - 1;
  // Get the last object in the array
  const currentLastToy = toys[lastIndex];
  // Get id property value of last phone
  const maxId = currentLastToy.id;
  /*
        Step 2: Increase the current max id by 1
    */
  const idForNewToy = maxId + 1;
  /*
        Step 3: Add the id property to the phone object
    */
  toyObject.id = idForNewToy;
  /*
        Step 4: Add the phone object to the array
    */
  toys.push(toyObject);
};

const legoSet = {
  name: "Lego Set",
  manufacturer: "Lego",
  description: "Stackable petroleum pieces!! Don't you dare step on one!!!",
  price: 14.95,
  quantity: 8,
  stock: true,
};

addToyToInventory(legoSet);

// for (const toy of toys) {
//   console.log(`The ${toy.name} costs $${toy.price}.`);
// }

// But can you do it again? Try calling your pre-defined function.

const teddyBear = {
  name: "Teddy Bear",
  manufacturer: "Beanie Babies",
  description: "Did we just become best friends!? Huggable plush!!!",
  price: 11.99,
  quantity: 5,
  stock: true,
};

addToyToInventory(teddyBear);

for (const toy of toys) {
  console.log(`The ${toy.name} costs $${toy.price}.`);
}

// Nice work! Calling a funciton is easy after you have defined it. 