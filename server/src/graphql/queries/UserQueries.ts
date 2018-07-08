import { GraphQLID } from 'graphql';
import { UserType } from '../types/User';
import { getUser } from '../../api/User';

export const user = {
  type: UserType,
  description: 'A single user',
  args: {
    id: { type: GraphQLID },
  },
  resolve: function(parentValue, args) {
    const userId = args.id;
    return getUser(userId);
  },
};