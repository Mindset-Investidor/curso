import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, FormComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
