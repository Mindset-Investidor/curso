import { Component } from '@angular/core';


@Component({
  selector: 'app-stats-chart',
  standalone: true,
  imports: [],
  templateUrl: './stats-chart.component.html',
  styleUrl: './stats-chart.component.scss',
})
export class StatsChartComponent {
  bars = [
    { label: 'Famílias Endividadas (CNC)', value: 78.5, animatedWidth: 0 },
    { label: 'Famílias com Dívidas em Atraso (CNC)', value: 29.2, animatedWidth: 0 },
    { label: 'Taxa de Poupança (IBGE)', value: 17.8, animatedWidth: 0 },
    { label: 'Inflação em 12 meses (IBGE)', value: 4, animatedWidth: 0 },
  ];

  getBarColor(value: number): string {
    if (value >= 70) {
      return '#C41E3A'; // Vermelho (melhores valores)
    } else if (value >= 40) {
      return this.interpolateColor('#FFC107', '#C41E3A', (value - 40) / 30); // Amarelo para Vermelho
    } else {
      return this.interpolateColor('#00308F', '#FFC107', value / 40); // Azul para Amarelo
    }
  }

  interpolateColor(color1: string, color2: string, factor: number): string {
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.replace('#', ''), 16);
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    };

    const rgbToHex = ({ r, g, b }: { r: number; g: number; b: number }) =>
      `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const interpolatedRgb = {
      r: Math.round(rgb1.r + factor * (rgb2.r - rgb1.r)),
      g: Math.round(rgb1.g + factor * (rgb2.g - rgb1.g)),
      b: Math.round(rgb1.b + factor * (rgb2.b - rgb1.b)),
    };

    return rgbToHex(interpolatedRgb);
  }
}
