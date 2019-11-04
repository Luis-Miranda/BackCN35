const ClientResolvers = require('./ClientResolvers/Index');
const OrderResolvers = require('./OrderResolvers');
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