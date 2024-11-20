import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extra-content-card',
  standalone: true,
  imports: [],
  templateUrl: './extra-content-card.component.html',
  styleUrl: './extra-content-card.component.scss'
})
export class ExtraContentCardComponent {
  @Input() imgSrc = "";
  @Input() title = "";
  @Input() description = "";
}
