import * as express from 'express';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql';
import * as bodyParser from 'body-parser';
import schema from './graphql/schema';

import { connectToMongo } from './lib/DBRef';
connectToMongo();

const graphqlPort = 3000;
const appPort = 8080;
const serverIP = '108.18.137.11';

const graphql = express();
graphql.use(cors());
graphql.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

graphql.listen(graphqlPort);
console.log('GraphQL API server running at localhost:' + graphqlPort);

const app = express();
app.use(cors());
// Serve static files from the React app
app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser);

import { GetDiamonds, GetDiamond } from './api/Diamonds';
app.get('/GetDiamonds', GetDiamonds);
app.post('/GetDiamond', GetDiamond);

import { GetSuppliers, GetSupplier } from './api/Supplier';
app.get('/GetSuppliers', GetSuppliers);
app.post('/GetSupplier', GetSupplier);

app.listen(appPort, serverIP);
console.log(`App server running at ${serverIP}:${appPort}`);

