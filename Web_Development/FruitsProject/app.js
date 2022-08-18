// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
///////////////////////////////////////////////////////////////////////////////////////////

// ***Using MongoDB***
//
// const MongoClient =require("mongodb").MongoClient;
//  const assert = require("assert");
//
//  const url = 'mongodb://localhost:27017';
//
// const dbName = "fruitsDB";
//
// const client = new MongoClient(url);
//
// client.connect(function(err) {
//   assert.equal(null, err);
//
//   console.log("Connected successfully to server!");
//
//   const db = client.db(dbName);
//    client.close();
// })
// ********************************

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please specify name of the fruit"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Its red and not so good in taste"
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "Its green and very sour and juicy"
});

fruit.save();
kiwi.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
  favouriteFruit: kiwi
});

person.save();


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name)
    });
  }
});
