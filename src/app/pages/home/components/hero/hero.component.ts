import { Component } from '@angular/core';
import { LeadCaptureComponent } from './components/lead-capture/lead-capture.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LeadCaptureComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
