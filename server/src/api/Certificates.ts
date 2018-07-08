import * as mongodb from 'mongodb';
import { Certificate } from '../lib/interfaces';
import { DBRef } from '../lib/DBRef';

export async function insertCertificate(cert: Partial<Certificate>) {
  return await DBRef.certificateCollecion.insert(cert);
}

export async function getMyCertificates(userId: string) {
  return await DBRef.certificateCollecion.find({ userId }).toArray();
}

export async function getCertificate(id: string) {
  return await DBRef.certificateCollecion.findOne({ _id: new mongodb.ObjectId });
}
