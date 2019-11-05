const {
    createOrder,
    updateOrder,
    deleteOrder
} = require('../../services/ClientServices');
const storage = require('./../../utils/storage');

const createNewOrder = async (_, { data }, { user }) => {
    data.client = user._id;
    console.log(user);
    if (data.saucer_photo){
        const { createReadStream } = await data.saucer_photo;
        const stream = createReadStream();
        const image = await storage({stream});
        data = { ...data, saucer_photo: image.url};
    }

    const order = await createOrder(data);
    user.orders.push(post._id);
    user.save();
    return order;
};

const updateOneOrder = async (_, {id,data}, { user }) => {
    const order = await updateOrder(id, data);
    if (data.saucer_photo){
        const { createReadStream } = await data.saucer_photo;
        const stream = createReadStream();
        const image = await storage({stream});
        data = { ...data, saucer_photo: image.url, user};
    }
    if (!order) throw new Error('Order not exist');
    return order;
};

const deleteOneOreder = async (_, { id }, { user }) => {
    const order = await deleteOrder(id, user);
    if (!order) throw new Error('Order not exist');
    return 'Order deleted';
};

module.exports = {
    createNewOrder,
    updateOneOrder,
    deleteOneOrder
};