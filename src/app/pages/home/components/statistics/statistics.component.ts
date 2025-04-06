import { Component } from '@angular/core';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';
import { StatsChartComponent } from './stats-chart/stats-chart.component';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [StatsChartComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {}
