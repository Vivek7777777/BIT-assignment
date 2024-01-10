import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { useState } from 'react';






const PieChart = ({ text1, lessFif, aboveFif, aboveHun}) => {
console.log(text1);
    const data = {
        labels: text1,
        datasets: [
            {
                // label: '# of Votes',
                data: [lessFif, aboveFif, aboveHun],
                backgroundColor: ['rgba(54, 162, 235)', 'rgba(255, 206, 86)', 'rgba(75, 192, 192)'],
                // borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }
        ]
    };
    return (
        <div className="chart-container">
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
