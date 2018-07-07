import { GraphQLList, GraphQLID } from 'graphql';
import { DiamondType } from '../types/Diamond';
import { getDiamonds, getDiamond } from '../../api/Diamonds';

export const diamonds = {
  type: new GraphQLList(DiamondType),
  description: 'List of all diamonds for sale',
  resolve: function() {
    return getDiamonds();
  },
};

export const diamond = {
  type: DiamondType,
  description: 'A single diamond for sale',
  args: {
    id: { type: GraphQLID },
  },
  resolve: function(parentValue, args) {
    const diamondId = args.id;
    return getDiamond(diamondId);
  },
};
