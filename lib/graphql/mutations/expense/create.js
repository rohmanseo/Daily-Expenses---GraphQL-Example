import {GraphQLNonNull} from 'graphql';
import {expenseType, expenseInputType} from "../../types/expense";
import ExpenseModel from '../../../models/expense';

export default {
    type: expenseType,
    args:{
        data: {
            name: 'data',
            type: GraphQLNonNull(expenseInputType)
        }
    },
    resolve(root,params){
        const expenseModel = new ExpenseModel(params.data);
        const newExpense = expenseModel.save();

        if(!newExpense){
            throw new Error(`Can't add new expense`);
        }
        return newExpense;
    }
}