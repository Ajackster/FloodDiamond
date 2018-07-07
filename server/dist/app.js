"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = require("cors");
const express_graphql_1 = require("express-graphql");
const schema_1 = require("../dist/graphql/schema");
const graphqlPort = 3000;
const appPort = 8080;
const graphql = express_1.default();
graphql.use(cors_1.default());
graphql.use('/', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true,
}));
graphql.listen(graphqlPort);
console.log('GraphQL API server running at localhost:' + graphqlPort);
const app = express_1.default();
app.use(cors_1.default());
// Serve static files from the React app
app.use(express_1.default.static(__dirname + '/../client/dist/'));
app.listen(appPort);
console.log('App server running at localhost:' + appPort);
