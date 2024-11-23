import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExtraContentComponent } from './components/extra-content/extra-content.component';
import { CourseModulesComponent } from './components/course-modules/course-modules.component';
import { SubscribeButtonComponent } from './components/subscribe-button/subscribe-button.component';
import { SocialMediaComponent } from "./components/social-media/social-media.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    StatisticsComponent,
    AboutMeComponent,
    HeroComponent,
    ExtraContentComponent,
    CourseModulesComponent,
    SubscribeButtonComponent,
    SocialMediaComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
