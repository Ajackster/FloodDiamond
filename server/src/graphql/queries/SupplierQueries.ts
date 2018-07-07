import { GraphQLList, GraphQLID } from 'graphql';
import { SupplierType } from '../types/Supplier';
import { getSuppliers, getSupplier } from '../../api/Supplier';

export const suppliers = {
  type: new GraphQLList(SupplierType),
  description: 'List of all ethical suppliers',
  resolve: function() {
    return getSuppliers();
  },
};

export const supplier = {
  type: SupplierType,
  description: 'A single ethical supplier',
  args: {
    id: { type: GraphQLID },
  },
  resolve: function(parentValue, args) {
    const supplierId = args.id;
    return getSupplier(supplierId);
  },
};
