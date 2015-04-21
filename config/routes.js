//   // First at the top of your routes.js file you'll have to require the controller
// var order = require('./../server/controllers/order.js');
// var customer = require('./../server/controllers/customer.js');
//   // This is our routes.js file located in /config/routes.js
//   // This is where we will define all of our routing rules!
//   // We will have to require this in the server.js file (and pass it app!)
// module.exports = function(app) 
// {
// 	app.get('/customer', function(req, res)
// 	{
// 		customer.show(req, res)
// 	})
// 	app.post('/customer', function(req, res) 
// 	{
// 		// console.log('Im Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',req.body);
// 		customer.add(req, res);	
// 		// console.log('OVER HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',req.body);

// 	})
// 	app.post('/remove', function(req, res) 
// 	{
// 		customer.remove(req, res);	
// 	})
// //=================================================================	
// 	app.get('/order', function(req, res) 
// 	{
// 		order.show(req, res);	
// 	})
// 	app.post('/order', function(req, res) 
// 	{
// 		order.add(req, res);	
// 	})
// 	app.post('/remove_order', function(req, res) 
// 	{
//         // console.log('YEEEEEEEEEEEEEEEE', req.body)
// 		order.remove(req, res);	
// 	})
// };