import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Total Paid', 'Total Overdue', 'Total Unpaid'],
  datasets: [
    {
      label: 'Invoices Statistics',
      data: [234, 188, 126],
      backgroundColor: [
        'rgb(169,143,122)',
        'rgb(179, 160, 145)',
        'rgb(215,184,159)',
      ],
      borderColor: [
        'rgb(169,143,122)',
        'rgb(179, 160, 145)',
        'rgb(215,184,159)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
    elements: {
        center: {
            text: 'Red is 2/3 of the total numbers',
            color: '#FF6384', 
            fontStyle: 'Arial', 
            sidePadding: 20,
            minFontSize: 25,
            lineHeight: 25,
        }
    },
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: true,
      text: 'Invoices Statistics',
    },
  },

};


const centerTextPlugin = {
    afterDraw: (chart) => {
      const { ctx } = chart;
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
  
      const divRadius = 40;
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, divRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4;
      ctx.paddingTop = 10;
      ctx.shadowBlur = 10; 
      ctx.fill();
      ctx.restore();
  
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 1rem Arial';
      ctx.fillStyle = '#000000';
  
      const text = '1,213\n\nInvoices';
      const lines = text.split('\n');
      const lineHeight = 12;
      const totalHeight = lines.length * lineHeight;
      const startY = centerY - totalHeight / 2;
  
      lines.forEach((line, index) => {
        const lineY = startY + index * lineHeight;
        ctx.fillText(line, centerX, lineY);
      });
  
      ctx.restore();
    },
  };
  


function DoughnutChart() {
  return (
    <div className='m-4 h-64 w-64'>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
}

export default DoughnutChart;
