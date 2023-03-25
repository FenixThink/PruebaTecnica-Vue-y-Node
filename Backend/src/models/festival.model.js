import mongoose from 'mongoose';
//esquema
// estructura del modelo
const FestivalSchema = new mongoose.Schema({
    nameEvent : {
        type:String
    },
    dateEvent : {
        type:Date
    },
    max_capacity: {
        type:Number
    }, 
    location : {
        type:String
    }, 
    available_tickets : {
        type:Number
    }
})
const Festival = mongoose.model('Festival', FestivalSchema);
export default  Festival;