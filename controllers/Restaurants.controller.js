
const RestaurantRouter = require("express").Router();
const RestaurantsModel = require("../Models/Restaurants.model");
const { response } = require("../app");


/**
 * ROUTES NEEDED
 * 
 * GET ALL RESTAURANTS
 * ADD A RESTAURNT
 * GET RESTAURANT BY RESTARANT ID
 */

RestaurantRouter.get("/getAllRestaurants", function (req,res,next){
     
    res.status(200).json({
        message:"Restaurants fetched successfully"
    })
})
/**
 * METHOD = POST 
 * PATH = /createRestaurant
 * INPUT = RESTAURANT DATA
 * OUTPUT = RESTAURANT DATA OR ERROR
 */

RestaurantRouter.post("/createRestaurant", function (req,res,next){
    const {name,
        cuisine,
        foodType,
        branch,
        address,
        contactNumber,
        defaultrating
    }=req.body;
       const RestaurantNew = new RestaurantsModel({
        name: name,
        cuisine:cuisine,
        foodType:foodType,
        branch: branch,
        address: {
          city: address.city,
          state: address.city,
          area: address.area,
          country: address.country,
          addressLine1: address.addressLine1,
          addressLine2: address.addressLine2,
          pincode: address.pincode
        },
        contactNumber:contactNumber,
        defaultrating: defaultrating

       });
       RestaurantNew.save().then((response)=>{
        if(response && response._id){
            res.status(200).json({
                message: "Restaurant created successfully!!!",
                data:response
            })
        }
       }).catch((error)=>{

        return res.status(401).json({
            message:"Error creating restaurant!!!",
            error:error
        });

       });
    
});

module.exports = RestaurantRouter;