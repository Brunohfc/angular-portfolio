import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperience[]>([{
    
    summary:{
        strong: "SRE ",
        p: "NTT DATA | Jul 2022 - Present",
    },
    text: "<p>Criação de dashboard focado em observabilidade, disseminação da cultura de boas práticas do SRE e DevOps<p>",
  }
  ])

}
