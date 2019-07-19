import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectBloodies from '../selectors/bloodies';
import selectBloodiesTotal from '../selectors/bloodies-total';

export const BloodiesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
        <div>
            <div>
                <h1>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div>
                    <Link className="button" to="/create">Review a Bloody</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleBloodies = selectBloodies(state.bloodies, state.filters);

    return {
        expenseCount: visibleBloodies.length,
        expensesTotal: selectBloodiesTotal(visibleBloodies)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);