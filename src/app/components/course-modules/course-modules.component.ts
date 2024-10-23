import { Component } from '@angular/core';
import { ModuleCardComponent } from './module-card/module-card.component';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';

@Component({
  selector: 'app-course-modules',
  standalone: true,
  imports: [ModuleCardComponent, SubscribeButtonComponent],
  templateUrl: './course-modules.component.html',
  styleUrl: './course-modules.component.scss'
})
export class CourseModulesComponent {
  public cards: any[] = [
    {
      iconSrc: "assets/icons/mindset.png",
      title: "Economia Comportamental",
      bodyText: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor incidunt beatae repellat velit consectetur.
  Repudiandae, corrupti excepturi, maxime obcaecati, molestias accusantium odit laborum atque odio vitae aspernatur
  distinctio amet`
    },
    {
      iconSrc: "assets/icons/plan.png",
      title: "Planejamento Financeiro",
      bodyText: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor incidunt beatae repellat velit consectetur.
  Repudiandae, corrupti excepturi, maxime obcaecati, molestias accusantium odit laborum atque odio vitae aspernatur
  distinctio amet`
    },
    {
      iconSrc: "assets/icons/system.png",
      title: "Sistema Financeiro",
      bodyText: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor incidunt beatae repellat velit consectetur.
  Repudiandae, corrupti excepturi, maxime obcaecati, molestias accusantium odit laborum atque odio vitae aspernatur
  distinctio amet`
    },
    {
      iconSrc: "assets/icons/investment.png",
      title: "Investimentos",
      bodyText: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor incidunt beatae repellat velit consectetur.
  Repudiandae, corrupti excepturi, maxime obcaecati, molestias accusantium odit laborum atque odio vitae aspernatur
  distinctio amet`
    },
  ]
}
