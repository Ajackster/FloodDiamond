import { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLFloat } from 'graphql';

export const DiamondType = new GraphQLObjectType({
  name: 'Diamond',
  description: 'Metadata about a certified ethical diamond',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    supplierId: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    carat: { type: GraphQLFloat },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});
