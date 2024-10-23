import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExtraContentComponent } from './components/extra-content/extra-content.component';
import { CourseModulesComponent } from './components/course-modules/course-modules.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    StatisticsComponent,
    AboutMeComponent,
    HeroComponent,
    ExtraContentComponent,
    CourseModulesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
