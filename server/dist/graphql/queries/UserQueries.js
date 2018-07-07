"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const User_1 = require("../types/User");
const users_1 = require("../data/users");
exports.users = {
    type: new graphql_1.GraphQLList(User_1.default),
    description: "List of all users",
    resolve: function () {
        return users_1.default;
    }
};
exports.user = {
    type: User_1.default,
    description: "Object of specified user",
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: function (parentValue, args, request) {
        const user = users_1.default.find((user) => user.id === args.id);
        return user;
    }
};
exports.default = {
    users: exports.users,
    user: exports.user,
};
