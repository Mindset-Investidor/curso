import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: [
          'Famílias Endividadas (CNC)',
          'Famílias com Dívidas em Atraso (CNC)',
          'Taxa de Poupança (IBGE)',
          'Inflação acumulado de 12 meses (IBGE)'
        ],
        datasets: [{
          data: [78.5, 29.2, 17.8, 4, 42],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 2
        }]
      },
      options:
      {
        indexAxis: 'y',
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              display: false
            },
            border: {
              display: false
            },
            beginAtZero: true,
            reverse: true,
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              color: 'white',
              font: {
                size: 14
              }
            },
            position: 'right'
          }
        },
        plugins: {
          title: {
            display: true,
            color: '#FFFFFF',
            font: { size: 14 },
            text: 'Situação Financeira no Brasil (2023)'
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.x
                    + '%';
                }
                return label;
              }
            }
          },
          legend: {
            display: false
          },
          datalabels: {
            
            anchor: 'center',
            align: 'center',
            color: '#FFFFFF',
            formatter(value, context) {
              return value + "%"
            },
          }
        },
      }
    });
  }
}
