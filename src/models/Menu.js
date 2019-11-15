const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    platillo: {
        type:String,
        required:true
    },
    ingredinetes: {
        type:String, 
        required:true
    },
    picante: {
        type:String,
        enum: ['Nada', 'Poco', 'Medio', 'Picante', 'Muy Picante']
    },
    precio: {
        type:Number, 
        require:true
    },
    restaurante: {
        type:String,
        require:true
    },
    img_platillo: {
        type:String, 
        require:true
    },
    descripcion: {
        type:String,
        require:true
    },
    carrito: [
        {
            type:mongoose.Schema.Types.ObjectID,
            ref: 'Users'
        }
    ]
},{
    timestamps:true
}, { timestamps: true });

const itemsSchema = new Schema ({
    Nombre: String,
    addProducts: [],
    Total: Number
})

const carritoSchema = new Schema ({

}, { timestamps:true })

const Comida = mongoose.model('Comida', menuSchema);
const carrito = mongoose.model('carrito', carritoSchema);
const items = mongoose.model('items', itemsSchema);

module.exports = {
    Comida, 
    carrito,
    items
}

