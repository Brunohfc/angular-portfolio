import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
    public knowledgeIcons = signal<IKnowledge[]>([
      {
        src: '/assets/icons/knowledge/angular.svg',
        alt: 'angular icone conhecimento',
      },
      {
        src: "assets/icons/knowledge/css3-alt.svg",
        alt: "css icone conhecimento",
      },
      {
        src: "/assets/icons/knowledge/css3-alt.svg",
        alt: "html icone conhecimento",
        
      },
      {
        src: "/assets/icons/knowledge/js.svg",
        alt: "js icone conhecimento",
      }

    
    ])
}
