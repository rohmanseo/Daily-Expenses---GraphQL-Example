import {GraphQLNonNull,GraphQLID} from 'graphql';
import {expenseType} from "../../types/expense";
import ExpenseModel from '../../../models/expense';

export default {
    type: expenseType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        return ExpenseModel.findById(params.id);
    }
}