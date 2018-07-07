import * as express from 'express';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import schema from './graphql/schema';

dotenv.config();

import { connectToMongo } from './lib/DBRef';
connectToMongo();

const graphqlPort = 3000;
const appPort = 8080;

const graphql = express();
graphql.use(cors());
graphql.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

graphql.listen(graphqlPort);
console.log('GraphQL API server running at localhost:' + graphqlPort);

const app = express();
// Allow variables passed through http hody
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Serve static files from the React app
app.use(express.static(__dirname + '/../../client/dist/'));


import { handleGetDiamonds, handleGetDiamond } from './api/Diamonds';
app.get('/GetDiamonds', handleGetDiamonds);
app.post('/GetDiamond', handleGetDiamond);

import { handleSuppliers, handleSupplier } from './api/Supplier';
app.get('/GetSuppliers', handleSuppliers);
app.post('/GetSupplier', handleSupplier);

import { handleLogin } from './api/User';
app.post('/Login', handleLogin);

import { handleTransaction } from './api/Transactions';
app.post('/CreateTransaction', handleTransaction);

app.listen(appPort, process.env.IP as any);
console.log(`App server running at ${process.env.IP}:${appPort}`);

