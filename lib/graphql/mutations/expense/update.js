import {GraphQLID, GraphQLNonNull} from 'graphql';
import {expenseInputType, expenseType} from "../../types/expense";
import ExpenseModel from '../../../models/expense';

export default {
    type: expenseType,
    args: {
        id: {
            name: 'id',
            type: GraphQLNonNull(GraphQLID)
        },
        data: {
            name: 'data',
            type: GraphQLNonNull(expenseInputType)
        }
    },
    resolve(root, params) {
        let query = {'_id': params.id};
        let updateQuery =  { "$set": params.data };
        const updated = ExpenseModel.findOneAndUpdate(query, updateQuery, {new: true,upsert: true}, function (err, doc) {
            if (err) {
                throw new Error(`Can't update this data`);
            }
        });

        return updated

    }
}