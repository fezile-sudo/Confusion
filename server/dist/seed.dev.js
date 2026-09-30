"use strict";

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var Dish = require('./models/Dish');

var Team = require('./models/Team');

dotenv.config();
var dishes = [{
  name: 'Chakalaka Croquettes',
  image: '/assets/images/menu/chakalaka-croquettes.jpg',
  category: 'starter',
  label: 'Popular',
  price: 85,
  featured: true,
  description: 'Crispy croquettes inspired by spicy chakalaka, served with a smooth roasted tomato and herb relish.'
}, {
  name: 'Cape Malay Chicken Skewers',
  image: '/assets/images/menu/chicken-skewers.jpg',
  category: 'starter',
  label: '',
  price: 95,
  featured: false,
  description: 'Tender chicken marinated in fragrant Cape Malay spices, grilled over an open flame and finished with a fresh herb dressing.'
}, {
  name: 'Samp & Bean Arancini',
  image: '/assets/images/menu/samp-arancini.jpg',
  category: 'starter',
  label: 'New',
  price: 80,
  featured: false,
  description: 'Golden fried balls of creamy samp and beans with a lightly spiced centre and a tangy tomato dipping sauce.'
}, {
  name: 'Braai Short Rib',
  image: '/assets/images/menu/braai-short-rib.jpg',
  category: 'main',
  label: 'Signature',
  price: 195,
  featured: true,
  description: 'Slow-cooked beef short rib finished over open flames and served with a rich smoky jus.'
}, {
  name: 'Eastern Cape Seafood Pot',
  image: '/assets/images/menu/seafood-pot.jpg',
  category: 'main',
  label: '',
  price: 210,
  featured: true,
  description: 'A generous pot of locally inspired seafood cooked with tomato, herbs, chilli and fragrant coastal spices.'
}, {
  name: 'Peri-Peri Chicken',
  image: '/assets/images/menu/peri-peri-chicken.jpg',
  category: 'main',
  label: 'Hot',
  price: 175,
  featured: false,
  description: 'Char-grilled chicken marinated in a house peri-peri blend with citrus, garlic and African bird’s eye chilli.'
}, {
  name: 'Slow-Cooked Lamb',
  image: '/assets/images/menu/slow-cooked-lamb.jpg',
  category: 'main',
  label: '',
  price: 205,
  featured: false,
  description: 'Tender slow-cooked lamb served with a warm spice glaze and seasonal roasted vegetables.'
}, {
  name: 'Creamy Samp & Beans',
  image: '/assets/images/menu/samp-and-beans.jpg',
  category: 'side',
  label: '',
  price: 65,
  featured: false,
  description: 'Comforting samp and sugar beans slowly cooked until creamy and finished with herbs and roasted onion.'
}, {
  name: 'Roasted Butternut',
  image: '/assets/images/menu/roasted-butternut.jpg',
  category: 'side',
  label: '',
  price: 55,
  featured: false,
  description: 'Roasted seasonal butternut with toasted seeds, fresh herbs and a lightly spiced dressing.'
}, {
  name: 'Malva Pudding',
  image: '/assets/images/menu/malva-pudding.jpg',
  category: 'dessert',
  label: 'Classic',
  price: 75,
  featured: true,
  description: 'Warm, soft malva pudding served with a delicate vanilla custard and a touch of citrus.'
}, {
  name: 'Amarula Cheesecake',
  image: '/assets/images/menu/amarula-cheesecake.jpg',
  category: 'dessert',
  label: '',
  price: 85,
  featured: false,
  description: 'A smooth baked cheesecake with a subtle Amarula-inspired cream topping and biscuit base.'
}, {
  name: 'African Chocolate Tart',
  image: '/assets/images/menu/chocolate-tart.jpg',
  category: 'dessert',
  label: 'New',
  price: 90,
  featured: false,
  description: 'Rich dark chocolate tart with roasted cocoa, a hint of spice and a crisp pastry shell.'
}];
var team = [{
  name: 'Lwazi Mbeki',
  image: '/assets/images/team/lwazi.jpg',
  designation: 'Founder & Creative Director',
  description: 'Lwazi founded Confusion with the idea that modern African dining could celebrate heritage while still making room for curiosity, creativity and new ideas.',
  featured: true
}, {
  name: 'Amahle Ndlovu',
  image: '/assets/images/team/amahle.jpg',
  designation: 'Head Chef',
  description: 'Amahle leads the kitchen with a passion for open-fire cooking, bold spices and seasonal ingredients inspired by the Eastern Cape and the wider African continent.',
  featured: true
}, {
  name: 'Thando Jacobs',
  image: '/assets/images/team/thando.jpg',
  designation: 'Restaurant Manager',
  description: 'Thando believes hospitality begins before the first plate reaches the table. Their focus is creating a relaxed, welcoming experience for every guest.',
  featured: true
}, {
  name: 'Zanele Mokoena',
  image: '/assets/images/team/zanele.jpg',
  designation: 'Pastry & Dessert Chef',
  description: 'Zanele brings a playful approach to desserts, combining familiar South African favourites with modern techniques and unexpected flavours.',
  featured: false
}];

var seedDatabase = function seedDatabase() {
  return regeneratorRuntime.async(function seedDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.MONGODB_URI));

        case 3:
          console.log('Connected to MongoDB');
          _context.next = 6;
          return regeneratorRuntime.awrap(Dish.deleteMany());

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(Team.deleteMany());

        case 8:
          console.log('Existing dishes and team members removed');
          _context.next = 11;
          return regeneratorRuntime.awrap(Dish.insertMany(dishes));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(Team.insertMany(team));

        case 13:
          console.log("".concat(dishes.length, " dishes added successfully"));
          console.log("".concat(team.length, " team members added successfully"));
          _context.next = 17;
          return regeneratorRuntime.awrap(mongoose.connection.close());

        case 17:
          console.log('MongoDB connection closed');
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.error('Database seeding error:', _context.t0);
          process.exit(1);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

seedDatabase();
//# sourceMappingURL=seed.dev.js.map
