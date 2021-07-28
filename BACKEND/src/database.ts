import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:admin123@cluster0.r5rt8.mongodb.net/cars?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Mongoose = mongoose.connection;

Mongoose.on("open", () => {
  console.log("Database connection success!");
})

Mongoose.on("error", () => {
  console.log("Database connection fail")
})
