"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const queries_1 = require("./queries");
// This is the schema declaration
const BrainChildAppSchema = new graphql_1.GraphQLSchema({ query: queries_1.default });
module.exports = BrainChildAppSchema;
