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
      name: 'Object Oriented',
      description:
        '100% Cotton. Imported. Pull On closure. Machine Wash. Unisex streetwear design for men, women, boys, girls, dark style graphic tshirt.Oversized fit, drop-shoulder. Retro Washed effect Fabric.',
      category: categories[0]._id,
      price: 125,
      stock: 40
    },
    {
      name: 'Object Oriented 2',
      description:
        '100% Cotton. Imported. Pull On closure. Machine Wash. Unisex streetwear design for men, women, boys, girls, dark style graphic tshirt.Oversized fit, drop-shoulder. Retro Washed effect Fabric.',
      category: categories[1]._id,
      price: 125,
      stock: 40
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