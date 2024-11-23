import { Component } from '@angular/core';
import { ModuleCardComponent } from './module-card/module-card.component';

@Component({
  selector: 'app-course-modules',
  standalone: true,
  imports: [ModuleCardComponent],
  templateUrl: './course-modules.component.html',
  styleUrl: './course-modules.component.scss'
})
export class CourseModulesComponent {
  public cards: any[] = [
    {
      iconSrc: "assets/icons/mindset.png",
      title: "Mindset Investidor",
      bodyText: `Módulo elaborado para te ajudar a <strong>desenvolver sua mentalidade investidora</strong>. Você vai aprender como suas decisões financeiras afetam sua vida, 
      buscando desenvolver novos hábitos que te ajudarão a alcançar seus sonhos e objetivos.`
    },
    {
      iconSrc: "assets/icons/plan.png",
      title: "Planejamento",
      bodyText: `Módulo em que serão fornecidas <strong>ferramentas necessárias para guiar</strong> suas decisões rumo aos seus objetivos.`
    },
    {
      iconSrc: "assets/icons/system.png",
      title: "Sistema Financeiro",
      bodyText: `Neste módulo você aprenderá como funcionam as instituições que compõem o sistema financeiro. Você <strong>dominará técnicas e estratégias de 
      negociação para ser mais eficaz</strong> no seu relacionamento com bancos e outros agentes do mercado.`
    },
    {
      iconSrc: "assets/icons/investment.png",
      title: "Investimentos",
      bodyText: `Você terá conhecimento das diferentes técnicas de investimento para fazer seu dinheiro render de forma sustentável. De Tesouro Direto a ações, de 
      ETFs a fundos imobiliários, criptoativos, dólar e mais. O conhecimento adquirido irá <strong>aprimorar seu processo de decisão para que você possa 
      analisar as melhores oportunidades de investimento</strong>.`
    },
  ]
}
