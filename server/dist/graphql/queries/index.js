"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const UserQueries_1 = require("./UserQueries");
// This is the Root Query
const BrainChildRootQuery = new graphql_1.GraphQLObjectType({
    name: 'BrainChild',
    description: "BrainChild Schema Query Root",
    fields: () => ({
        users: UserQueries_1.default.users,
        user: UserQueries_1.default.user,
    })
});
exports.default = BrainChildRootQuery;
