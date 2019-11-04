const jwt = require('jsonwebtoken');
const { getClientByEmail } = require('../services/ClientServices');

const verifyToken = async req => {
    try {
        const Authorization = req.get('Authorization');
        if(Authorization) {
            const formatedToken = Authorization.replace('JWT ', '');
            const payload = jwt.verify(formatedToken, process.env.SECRET_KEY);
            if(!payload) return req;
            const user = getClientByEmail(payload.email);
            if (!user) return req;
            return user;
        } else {
            return {};
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = verifyToken;