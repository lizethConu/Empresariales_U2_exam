var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exam');


var kittySchema = new mongoose.Schema({
    code:{ type:String, required:true},
    price: {type: Number, required:true},
    description: { type:String, required:true},
    quantity: { type:Number, required:true},
    minimum: { type:Number, required:true},
  });

  var Kitten = mongoose.model('Kitten', kittySchema, 'kitten');
  var puff = new Kitten({code: '123',price:53,description:'this is a exam',quantity:12,minimum:10});


  /*puff.save(function ( fluffy,err) {
    if (err) return console.log(err);
    else console.log("insercion exitosa");
  });*/

  Kitten.find({}, function (err, kittens) {
    if (err) return console.log(err);
    else{
      kittens.forEach(item=>{
        if(item.quantity<item.minimum){
          console.log(item);
        }
      });
    } 
  });
