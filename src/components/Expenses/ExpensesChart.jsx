import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
    let dataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    expenses.forEach(expense => {
        let expenseMonthIdx = expense.date.getMonth();
        dataPoints[expenseMonthIdx].value += expense.amount;
    });

    return (
        <Chart dataPoints={dataPoints}/>
    )
}

export default ExpensesChart