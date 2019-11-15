const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String
    },
    birth_date:{
        type:Date
    },
    gender:{
        type:String,
        enum:['M','F','O']
    },
    order:{
        type:[Schema.Types.ObjectId],
        ref:'order'
    },
    profile_pic:{
        type:String
    }
},{
    timestamps:true
});

ClientSchema.pre('save', function(next){
    const clients = this;
    const SALT_FACTOR = 10;
    if(!clients.isModified('password')) { return next();}
    bcrypt.genSalt(SALT_FACTOR, function (err, salt){
        if(err) return next(err);
        bcrypt.hash(clients.password, salt, function(error, hash){
            if(error) return next(err);
            clients.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('clients', ClientSchema);
