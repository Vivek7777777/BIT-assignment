import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';






const PieChart = ({ text1, lessFif, aboveFif, aboveHun}) => {
    const data = {
        labels: text1,
        datasets: [
            {
                data: [lessFif, aboveFif, aboveHun],
                backgroundColor: ['rgba(54, 162, 235)', 'rgba(255, 206, 86)', 'rgba(75, 192, 192)'],
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
