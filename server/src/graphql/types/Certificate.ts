import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export const CertificateType = new GraphQLObjectType({
  name: 'Certificate',
  description: 'A certificate of purchase',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    transactionId: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    supplierName: { type: GraphQLString },
    supplierLocation: { type: GraphQLString },
    diamondName: { type: GraphQLString },
  }),
});