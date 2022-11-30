const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirt' },
    { name: 'Pants' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Shrek',
      description:
        'HELP ME SOMEONE',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'ck',
    fName: 'Chris',
    lName: 'Khiev',
    email: 'chrisk@testmail.com',
    password: 'password12345',
    histories: [
      {
        products: [products[0]._id, products[0]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});