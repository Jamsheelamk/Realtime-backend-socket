const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jamsheela:jamsheela@realtime.z3udx.mongodb.net/jamsheela?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    isForwarded:Boolean,
    message:String,
    image:String,
    date:{type:Date , default:Date.now},
    room:String
    
});


var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;