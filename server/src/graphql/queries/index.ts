import { GraphQLObjectType } from 'graphql';
import { diamonds, diamond } from './DiamondQueries';
import { suppliers, supplier } from './SupplierQueries';

const FloodDiamondRootQuery = new GraphQLObjectType({
  name: 'FloodDiamond',
  description: "FloodDiamond Schema Query Root",
  fields: () => ({
    diamonds,
    diamond,
    suppliers,
    supplier,
  })
});

export default FloodDiamondRootQuery;
