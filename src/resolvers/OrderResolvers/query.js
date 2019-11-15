const {
    getAllClients,
    getOneClient
} = require('../../services/clientServices');

const getClients = async () => {
    const clients = await getAllClients();
    return clients;
};

const getSingleClient = async (_, { id }) => {
    const client = await getOneClient(id);
    if(!client) throw new Error('Client not exist');
    return client;
};

module.exports = {
    getClients,
    getSingleClient
};
