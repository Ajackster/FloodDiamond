import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Metadata about a user',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
  }),
});
