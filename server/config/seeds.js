const db = require('./connection');
const { User, Product, Category, Review } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Hats' },
    { name: 'Pants' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '{ Shirt }',
      image: 'shirt.png',
      description:
        '100% Cotton. Imported. Pull On closure. Machine Wash. Unisex streetwear design for men, women, boys, girls, dark style graphic tshirt.Oversized fit, drop-shoulder. Retro Washed effect Fabric.',
      category: categories[0]._id,
      price: 125,
      reviews: [Review._id]
    },
    {
      name: '{ Hat }',
      image: 'hatF.jpg',
      description:
        '100% Cotton. Embroidered Dad Cap',
      category: categories[1]._id,
      price: 50,
      reviews: [Review._id]
    },
    {
      name: '{ Pants }',
      image: 'sweats.jpg',
      description: '100% Polyester. Lightweight water-resistant fabric. Fully lined mesh lining. Relaxed fit. Elastic waistband and ankle cuffs. Zip pockets. Sits at hip. Tear-away care label Blank product sourced from China.',
      category: categories[1]._id,
      price: 50,
      reviews: [
        {
          reviews: [products[0]._id]
        }
      ]
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'ck',
    fName: 'Chris',
    lName: 'Khiev',
    email: 'chrisk@testmail.com',
    password: 'password123',
    histories: [
      {
        products: [products[0]._id, products[0]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});

await Review.deleteMany();

const reviews = await Review.insertMany([

{
  message: 'This one is a sick fit, dog.',
  rating: 5
}
]);