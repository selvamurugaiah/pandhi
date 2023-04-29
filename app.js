const express = require('express');
const parser = require("body-parser")
const RestaurantRouter = require('./controllers/Restaurants.controller');
const bodyParser = require('body-parser');
const FoodRouter = require('./controllers/Food.controller');
const CartRouter = require('./controllers/Cart.controller');
const APP_SERVER = express();

/**
 * INJECTIONG DATABASE SESSION
 */

   require("./dbconfig")

/**
 * REGISTERING THE MIDDLEWARE
 *
 */

  APP_SERVER.use(bodyParser.urlencoded({extended:true}))
  APP_SERVER.use(bodyParser.json())

//REGISTERING THE CONTROLLER

APP_SERVER.use("/api/restaurants" , RestaurantRouter);
APP_SERVER.use("/api/food", FoodRouter)
APP_SERVER.use("/api/cart", CartRouter)


module.exports = APP_SERVER;