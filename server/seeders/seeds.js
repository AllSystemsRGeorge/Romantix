const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Horror' },
        { name: 'Sci-fi' },
        { name: 'Action' },
        { name: 'Others' },
      ]);

      console.log('categories seeded');

    await Product.deleteMany();

});

await User.create({
    firstName: 'Some',
    lastName: 'Body',
    email: 'SomeBody@whatever.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
  