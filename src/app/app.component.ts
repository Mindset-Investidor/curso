import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { HeroComponent } from './components/hero/hero.component';
import { ExtraContentComponent } from './components/extra-content/extra-content.component';
import { CourseModulesComponent } from './components/course-modules/course-modules.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    StatisticsComponent,
    AboutMeComponent,
    HeroComponent,
    ExtraContentComponent,
    CourseModulesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mindset-investidor';
}
