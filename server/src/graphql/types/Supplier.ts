import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export const SupplierType = new GraphQLObjectType({
  name: 'Supplier',
  description: 'Metadata about an certified ethical supplier',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLString },
    image: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
