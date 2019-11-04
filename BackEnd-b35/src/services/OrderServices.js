const {
    Orders
} = require('../models');

const createOrder = (data) => Orders.create(data);

const getOneOrder = (id) => Orders.findById({
    _id: id,
    is_active: true
});
const getAllOrders = () => Orders.find({
    is_active: true
});
const updateOrder = (id, data) => Orders.findByIdAndUpdate(id, {
    ...data
}, {
    new: true
});
const deleteOrder = (id) => Orders.findByIdAndUpdate({
    _id: id,
    is_active: true
}, {
    is_active: false
});

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getOneOrder
};
