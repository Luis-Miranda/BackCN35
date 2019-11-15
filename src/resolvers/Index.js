const ClientResolver = require('./ClientResolvers');
const OrderResolver = require('./OrderResolvers');
const {
    EmailAddressResolver,
    URLResolver,
    
} = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query:{
        ...ClientResolver.Query,
        ...OrderResolver.Query
    },
    Mutation:{
        ...ClientResolver.Mutation,
        ...OrderResolver.Mutation
    }
};