import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './CumulativeFlowDiagram.css';

const CumulativeFrequencyDiagram = ({ data,labsPass }) => {
  const chartContainer = useRef(null);
  console.log(data)
  const labs = Array.from({ length: labsPass }, (_, index) => index + 1);
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      const chartConfig = {
        type: 'line',
        data: {
          labels:labs,
          datasets: [
            {
              label: 'Refinement',
              data: data.map((dayData) => dayData[0]),
              fill: 'origin',
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.3,
            },
            {
              label: 'Design',
              data: data.map((dayData) => dayData[1]),
              fill: 'origin',
              borderColor: 'rgba(255, 206, 86, 1)',
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              tension: 0.3,
            },
            {
              label: 'Development',
              data: data.map((dayData) => dayData[2]),
              fill: 'origin',
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.3,
            },
            {
              label: 'Testing',
              data: data.map((dayData) => dayData[3]),
              fill: 'origin',
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              tension: 0.3,
            },
            {
              label: 'Production',
              data: data.map((dayData) => dayData[4]),
              fill: 'origin',
              borderColor: 'rgba(255, 159, 64, 1)',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              tension: 0.3,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Days',
                font: {
                  weight: 'bold'
                }
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
              beginAtZero: true,
              precision: 0,
              max: 60,
              stepSize: 10 
              },
              title: {
                display: true,
                text: 'Work Items',
                font: {
                  weight: 'bold'
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'chartArea',
              align: 'center',
              labels: {
                boxWidth: 40,
                font: {
                  size: 50,
                }
              }
            }
          },
        },
      };
      
      const myChart = new Chart(ctx, chartConfig);
      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return (
    <div className='plot'>
      <h1>Cumulative Flow Diagram</h1>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default CumulativeFrequencyDiagram;
