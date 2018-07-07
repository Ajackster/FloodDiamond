import { GraphQLObjectType } from 'graphql';
import { diamonds, diamond } from './DiamondQueries';

const FloodDiamondRootQuery = new GraphQLObjectType({
  name: 'FloodDiamond',
  description: "FloodDiamond Schema Query Root",
  fields: () => ({
    diamonds,
    diamond,
  })
});

export default FloodDiamondRootQuery;
