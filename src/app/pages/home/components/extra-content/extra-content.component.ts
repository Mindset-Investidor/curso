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
      description: `Análises diariamente atualizadas com dicas de investimento...`
    },
    {
      imgSrc: "assets/images/extra-contents/ebooks.jpg",
      title: "Ebooks e Planilhas",
      description: `Para facilitar seu acesso ao conhecimento mais relevante
      e seus controles financeiro e de operações...`
    },
    {
      imgSrc: "assets/images/extra-contents/community.jpg",
      title: "Liberação de Módulos",
      description: `Módulos quinzenais (A partir do dia 11 de novembro)`
    },
    {
      imgSrc: "assets/images/extra-contents/video-conference.jpg",
      title: "Plantões Tira Dúvidas",
      description: `Lives quinzenais (cada 15 dias, a partir do dia 19 denovembro`
    },
  ]
}
