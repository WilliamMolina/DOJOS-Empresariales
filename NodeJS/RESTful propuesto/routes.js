var express=require('express');
var router=express.Router();
var db=require('./queries');
router.get('/api/restaurants',db.getAllRestaurants);
router.get('/api/restaurants/:name',db.getRestaurantByName);
router.post('/api/restaurants',db.createRestaurant);
router.delete('/api/restaurants/:id',db.removeRestaurant);
router.put('/api/restaurants/:id',db.updateRestaurant);

//Menus api
router.get('/api/menus',db.getAllMenus);
router.get('/api/menus/:id',db.getMenuById);
router.post('/api/menus',db.createMenu);
router.delete('/api/menus',db.removeMenu);
router.put('/api/menus/:id',db.updateMenu);
router.get('/api/restaurants/menus/:id',db.getRestaurantMenus);
module.exports=router;