const { Clients } = require('../model');

const createClient = (data) => Clients.create(data);

const getOneClient = (id) => Clients.findById({_id: id, is_active:true}).populate('posts');
const getAllClients = () => Clients.find({is_active:true}).populate('posts');
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
