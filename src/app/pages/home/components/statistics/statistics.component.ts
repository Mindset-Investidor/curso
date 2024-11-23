import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';
import { StatsChartComponent } from './stats-chart/stats-chart.component';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [SubscribeButtonComponent, StatsChartComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {}
