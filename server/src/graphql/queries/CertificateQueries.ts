import { GraphQLList, GraphQLID } from 'graphql';
import { CertificateType } from '../types/Certificate';
import { getCertificate, getMyCertificates } from '../../api/Certificates';

export const myCertificates = {
  type: new GraphQLList(CertificateType),
  description: 'List of all of requesters certificates',
  args: {
    id: { type: GraphQLID },
  },
  resolve: function(p, args) {
    const userId = args.userId;
    return getMyCertificates(userId);
  },
};

export const certificate = {
  type: CertificateType,
  description: 'A single certificate',
  args: {
    id: { type: GraphQLID },
  },
  resolve: function(parentValue, args) {
    const certId = args.id;
    return getCertificate(certId);
  },
};
