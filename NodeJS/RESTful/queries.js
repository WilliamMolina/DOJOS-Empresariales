var promise=require('bluebird');

var options={
	promiseLib:promise
};
var pgp=require('pg-promise')(options);
var connectionString='postgres://lmpnjese:vvhIDfKXsqF-pNnf7EOHAauOgE-YrTNW@elmer.db.elephantsql.com:5432/lmpnjese';
var db=pgp(connectionString);

function getAllRestaurants(req,res,next){
	db.any('select * from restaurant')
	.then(function(data){
		res.status(200)
		.json({
			status:'Exitoso',
			data:data,
			message:'Recuperados todos los restaurantes'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function getRestaurantByName(req,res,next){
	var name=req.params.name;
	db.any('select * from restaurant where name=$1',name)
	.then(function(data){
		res.status(200)
		.json({
			status:'Exitoso',
			data:data,
			message:'Recuperado restaurante por nombre'
		});
	})
	.catch(function(err){
		return next(err);
	});
}
function createRestaurant(req,res,next){
	db.none('insert into restaurant(name,city,address,phone) values($1,$2,$3,$4)',
		[req.body.name,req.body.city,req.body.address,parseInt(req.body.phone)])
	.then(function(){
		res.status(200)
		.json({
			status:'Exitoso',
			message:'Restaurante insertado'
		});
	})
	.catch(function(err){
		return next(err);
	});
}
function removeRestaurant(req,res,next){
	var restaurantId=parseInt(req.params.id);
	db.result('delete from restaurant where id=$1',restaurantId)
	.then(function(){
		res.status(200)
		.json({
			status:'Exitoso',
			message:'Restaurante eliminado'
		});
	})
	.catch(function(err){
		return next(err);
	});
}
function updateRestaurant(req,res,next){
	db.none('update restaurant set name=$1,city=$2, address=$3,phone=$4 where id=$5',
		[req.body.name,req.body.city,req.body.address,parseInt(req.body.phone),parseInt(req.params.id)])
	.then(function(){
		res.status(200)
		.json({
			status:'Exitoso',
			message:'Restaurante insertado'
		});
	})
	.catch(function(err){
		return next(err);
	});
}

module.exports={
	getAllRestaurants:getAllRestaurants,
	getRestaurantByName:getRestaurantByName,
	createRestaurant:createRestaurant,
	removeRestaurant:removeRestaurant,
	updateRestaurant:updateRestaurant
}