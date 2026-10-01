const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');
const Dish = require('./models/Dish');
const Team = require('./models/Team');

dns.setServers(['1.1.1.1']);

dotenv.config();

const dishes = [
    {
        name: 'Chakalaka Croquettes',
        image: '/assets/images/menu/chakalaka-croquettes.jpg',
        category: 'starter',
        label: 'Popular',
        price: 85,
        featured: true,
        description:
            'Crispy croquettes inspired by spicy chakalaka, served with a smooth roasted tomato and herb relish.'
    },
    {
        name: 'Cape Malay Chicken Skewers',
        image: '/assets/images/menu/chicken-skewers.jpg',
        category: 'starter',
        label: '',
        price: 95,
        featured: false,
        description:
            'Tender chicken marinated in fragrant Cape Malay spices, grilled over an open flame and finished with a fresh herb dressing.'
    },
    {
        name: 'Samp & Bean Arancini',
        image: '/assets/images/menu/samp-arancini.jpg',
        category: 'starter',
        label: 'New',
        price: 80,
        featured: false,
        description:
            'Golden fried balls of creamy samp and beans with a lightly spiced centre and a tangy tomato dipping sauce.'
    },
    {
        name: 'Braai Short Rib',
        image: '/assets/images/menu/braai-short-rib.jpg',
        category: 'main',
        label: 'Signature',
        price: 195,
        featured: true,
        description:
            'Slow-cooked beef short rib finished over open flames and served with a rich smoky jus.'
    },
    {
        name: 'Eastern Cape Seafood Pot',
        image: '/assets/images/menu/seafood-pot.jpg',
        category: 'main',
        label: '',
        price: 210,
        featured: true,
        description:
            'A generous pot of locally inspired seafood cooked with tomato, herbs, chilli and fragrant coastal spices.'
    },
    {
        name: 'Peri-Peri Chicken',
        image: '/assets/images/menu/peri-peri-chicken.jpg',
        category: 'main',
        label: 'Hot',
        price: 175,
        featured: false,
        description:
            'Char-grilled chicken marinated in a house peri-peri blend with citrus, garlic and African bird’s eye chilli.'
    },
    {
        name: 'Slow-Cooked Lamb',
        image: '/assets/images/menu/slow-cooked-lamb.jpg',
        category: 'main',
        label: '',
        price: 205,
        featured: false,
        description:
            'Tender slow-cooked lamb served with a warm spice glaze and seasonal roasted vegetables.'
    },
    {
        name: 'Creamy Samp & Beans',
        image: '/assets/images/menu/samp-and-beans.jpg',
        category: 'side',
        label: '',
        price: 65,
        featured: false,
        description:
            'Comforting samp and sugar beans slowly cooked until creamy and finished with herbs and roasted onion.'
    },
    {
        name: 'Roasted Butternut',
        image: '/assets/images/menu/roasted-butternut.jpg',
        category: 'side',
        label: '',
        price: 55,
        featured: false,
        description:
            'Roasted seasonal butternut with toasted seeds, fresh herbs and a lightly spiced dressing.'
    },
    {
        name: 'Malva Pudding',
        image: '/assets/images/menu/malva-pudding.jpg',
        category: 'dessert',
        label: 'Classic',
        price: 75,
        featured: true,
        description:
            'Warm, soft malva pudding served with a delicate vanilla custard and a touch of citrus.'
    },
    {
        name: 'Amarula Cheesecake',
        image: '/assets/images/menu/amarula-cheesecake.jpg',
        category: 'dessert',
        label: '',
        price: 85,
        featured: false,
        description:
            'A smooth baked cheesecake with a subtle Amarula-inspired cream topping and biscuit base.'
    },
    {
        name: 'African Chocolate Tart',
        image: '/assets/images/menu/chocolate-tart.jpg',
        category: 'dessert',
        label: 'New',
        price: 90,
        featured: false,
        description:
            'Rich dark chocolate tart with roasted cocoa, a hint of spice and a crisp pastry shell.'
    }
];

const team = [
    {
        name: 'Lwazi Mbeki',
        image: '/assets/images/team/lwazi.jpg',
        designation: 'Founder & Creative Director',
        description:
            'Lwazi founded Confusion with the idea that modern African dining could celebrate heritage while still making room for curiosity, creativity and new ideas.',
        featured: true
    },
    {
        name: 'Amahle Ndlovu',
        image: '/assets/images/team/amahle.jpg',
        designation: 'Head Chef',
        description:
            'Amahle leads the kitchen with a passion for open-fire cooking, bold spices and seasonal ingredients inspired by the Eastern Cape and the wider African continent.',
        featured: true
    },
    {
        name: 'Thando Jacobs',
        image: '/assets/images/team/thando.jpg',
        designation: 'Restaurant Manager',
        description:
            'Thando believes hospitality begins before the first plate reaches the table. Their focus is creating a relaxed, welcoming experience for every guest.',
        featured: true
    },
    {
        name: 'Zanele Mokoena',
        image: '/assets/images/team/zanele.jpg',
        designation: 'Pastry & Dessert Chef',
        description:
            'Zanele brings a playful approach to desserts, combining familiar South African favourites with modern techniques and unexpected flavours.',
        featured: false
    }
];



const seedDatabase = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Connected to MongoDB');

        await Dish.deleteMany();
            await Team.deleteMany();

            console.log('Existing dishes and team members removed');

            await Dish.insertMany(dishes);
            await Team.insertMany(team);

            console.log(`${dishes.length} dishes added successfully`);
            console.log(`${team.length} team members added successfully`);


        await mongoose.connection.close();

        console.log('MongoDB connection closed');

    } catch (error) {

        console.error('Database seeding error:', error);

        process.exit(1);

    }

};


seedDatabase();
