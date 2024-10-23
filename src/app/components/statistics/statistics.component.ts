import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [SubscribeButtonComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
  public chart: any = [];
  private data: Array<number> = [78.5, 29.2, 17.8, 4];

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      plugins: [ChartDataLabels],
      type: 'bar',
      data: {
        labels: [
          'Famílias Endividadas (CNC)',
          'Famílias com Dívidas em Atraso (CNC)',
          'Taxa de Poupança (IBGE)',
          'Inflação em 12 meses (IBGE)'
        ],
        datasets: [
          {
            data: this.data,
            backgroundColor: [
              '#dc3545',
              '#ffc107',
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            ],
            borderRadius: 5,
            borderWidth: 0
          }
        ]
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
              display: false,
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
              color: '#081c15ff',
              font: {
                size: 14,
                weight: 'normal'
              }
            },
            position: 'right'
          }
        },
        plugins: {
          title: {
            display: true,
            color: '#081c15ff',
            font: { size: 18 },
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
            },
          },
          legend: {
            display: false
          },
          datalabels: {
            anchor: 'center',
            align: 'center',
            color: '#081c15',
            font: {
              weight: 'bold',
              size: 16
            },
            backgroundColor: "#FFFFFF",
            borderRadius: 5,
            formatter(value, context) {
              return value + "%"
            },
          }
        },
      }
    });
  }
}
