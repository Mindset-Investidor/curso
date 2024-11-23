import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMedia = [
    {
      url: "https://www.linkedin.com/in/joacicabral/",
      imgSrc: "assets/icons/linkedin.svg",
      alt: "Ilustração: rede social LinkedIn"
    },
    {
      url: "https://www.instagram.com/jocabral.invest/",
      imgSrc: "assets/icons/instagram.svg",
      alt: "Ilustração: rede social Instagram"
    },
  ]
}
