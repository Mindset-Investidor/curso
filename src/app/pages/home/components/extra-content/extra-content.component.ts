import { Component } from '@angular/core';
import { ExtraContentCardComponent } from './extra-content-card/extra-content-card.component';

@Component({
  selector: 'app-extra-content',
  standalone: true,
  imports: [ExtraContentCardComponent],
  templateUrl: './extra-content.component.html',
  styleUrl: './extra-content.component.scss'
})
export class ExtraContentComponent {
  cards: any[] = [
    {
      imgSrc: "assets/images/extra-contents/community.jpg",
      title: "Comunidade no Whatsapp",
      description: `Você fará parte de uma <strong>comunidade exclusiva</strong> em que receberá conteúdos para te guiar rumo aos seus objetivos.`
    },
    {
      imgSrc: "assets/images/extra-contents/ebooks.jpg",
      title: "Ebooks e Planilhas",
      description: `Você terá acesso à <strong>ferramentas financeiras que o ajudarão a fazer melhores escolhas</strong> ao longo da sua jornada.`
    },
    {
      imgSrc: "assets/images/extra-contents/video-conference.jpg",
      title: "Aulas Tira Dúvidas Ao Vivo",
      description: `Teremos <strong>encontros online ao vivo</strong> para tirar dúvidas sobre os pontos abordados nas aulas. Os encontros serão gravados para você rever
      quando quiser.`
    },
    {
      imgSrc: "assets/images/extra-contents/studying.jpg",
      title: "Acesso ilimitado por 6 meses",
      description: `Você terá acesso <strong>ilimitado ao Curso Formação do Mindset Investidor<strong> a partir da data de inscrição. Todas as aulas poderão ser vistas e revistas quando quiser.`
    },
  ]
}
