const mongoose = require("mongoose")
const scheema = mongoose.Schema;


const personSchema = new scheema({
    name:  String,
    age: String,
    favoriteFoods:Array
  });

  const Person = mongoose.model('person', personSchema);

  module.exports=Person;

