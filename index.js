var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exam');


var kittySchema = new mongoose.Schema({
    code:{ type:String, required:true},
    price: {type: Number, required:true},
    description: { type:String, required:true},
    quantity: { type:Number, required:true},
    minimun: { type:Number, required:true},
  });

  var Kitten = mongoose.model('Kitten', kittySchema, 'kitten');
  var puff = new Kitten({code: '123',pice:53,description:'this is a exam',quantity:5,minimun:10});


  puff.save(function ( fluffy,err) {
    if (err) return console.log(err);
    else console.log("inserccion exitosa");
  });

  Kitten.find({}, function (err, kittens) {
    if (err) return console.log(err);
    else{
      for(i=0;i<kittens.length();i++){
        if(kittens.quantity<kittens.minimun){
          console.log(kittens[i]);
        }   
      }   
    } 
  });
