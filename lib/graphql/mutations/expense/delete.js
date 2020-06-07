import {GraphQLNonNull,GraphQLID} from 'graphql';
import {expenseType} from "../../types/expense";
import ExpenseModel from '../../../models/expense';

export default {
    type: expenseType,
    args:{
        id:{
            name: 'id',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const removedExpense = ExpenseModel.findByIdAndRemove(params.id).exec();
        if (!removedExpense) {
            throw new Error(`Can't delete this expense`);
        }
        return removedExpense;
    }
}