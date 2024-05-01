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
        strong: "Java",
        p: "API Rest",
    },
    text: "<p>Criação de APi<p>",
  }
  ])

}
