import React from "react";
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from "numeral";

export const ExpensesSummary = (props) => {
    const expenseCount = props.expenses.length;
    const expensesTotal = selectExpensesTotal(props.expenses);
    return (
        <div>
            {props.expenses.length === 1 ? (
                <p>Viewing 1 expense totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
            ) : (
                <p>Viewing {expenseCount} expenses totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);