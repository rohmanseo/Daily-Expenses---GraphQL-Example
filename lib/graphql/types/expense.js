import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const expenseType = new GraphQLObjectType({
    name: 'Expense',
    description: 'Expense Type',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        price: {
          type: GraphQLInt
        },
        createdAt: {
            type: GraphQLDate
        },
        updatedAt: {
            type: GraphQLDate
        }
    })
});

export const expenseInputType = new GraphQLInputObjectType({
    name: 'ExpenseInput',
    description: 'Expense Type',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLInt
        }
    })
});