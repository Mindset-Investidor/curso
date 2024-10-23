import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [],
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.scss'
})
export class ModuleCardComponent {
  @Input() iconSrc = "assets/icons/mindset.png";
  @Input() moduleNumber = 1;
  @Input() title = "Título do Módulo";
  @Input() bodyText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor incidunt beatae repellat velit consectetur.
  Repudiandae, corrupti excepturi, maxime obcaecati, molestias accusantium odit laborum atque odio vitae aspernatur
  distinctio amet`

}
