const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ComidaSchema = new Schema({
    platillo:{
        type:String, 
        required:true
    },
    ingredientes: {
        type:String, 
        required:true
    },
    picante: {
        type:String, 
        enum: ['Nada', 'Poco', 'Medio', 'Picante', 'Muy Picante']
    },
    precio:{
        type:Number,
        require:true
    },
    restaurante:{
        type:String,
        require:true
    },
    img_platillo:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('comida',ComidaSchema);