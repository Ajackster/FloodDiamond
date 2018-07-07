import { GraphQLSchema } from 'graphql';
import query from './queries';

const FloodDiamondAppSchema = new GraphQLSchema({ query });

export default FloodDiamondAppSchema;
