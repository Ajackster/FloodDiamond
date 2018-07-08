import axios from 'axios';

const serverUrl = `http://178.128.176.11:8080`;

export async function CreateTransaction(transaction: {
  diamondId: string;
  supplierId: string;
  userId: string;
}) {
  return await axios.post(serverUrl + '/CreateTransaction', transaction);
}

export async function Login(credentials: {
  username: string;
  password: string;
}) {
  return await axios.post(serverUrl + '/Login', credentials);
}