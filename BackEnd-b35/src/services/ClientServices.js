const { Clients } = require('../models');

const createClient = (data) => Clients.create(data);

const getOneClietn = (id) => Clients.findById({_id: id, is_active:true}).populate('posts');
const getAllClietns = () => Clients.find({is_active:true}).populate('posts');
const getClientByEmail = (email) => Clients.findOne({email, is_active:true});
const updateClient = (id, data) => Clients.findByIdAndUpdate(id,{...data},{ new:true });
const deleteClient = (id) => Clients.findByIdAndUpdate({_id:id, is_active: true},{is_active:false});

module.exports = {
    createClient,
    updateClient,
    deleteClient,
    getAllClients,
    getOneClient,
    getClientByEmail
};
