import { Component } from '@angular/core';
import { BandTitle1Component } from '../../shared/band-title-1/band-title-1.component';
import { CardModel1Component } from '../../shared/card-model-1/card-model-1.component';
import { CardModel2Component } from '../../shared/card-model-2/card-model-2.component';
import { Card, Card2 } from '../../Models/card.model';
import { AboutMeService } from '../../Services/about-me.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [BandTitle1Component, CardModel1Component, CardModel2Component],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  public knowledge: Array<Card> = [
    new Card('Languages',['Typescript', 'Javascript', 'C#', 'Python']),
    new Card('Platforms',['Angular', '.NET']),
    new Card('Web', ['HTML', 'CSS', 'SCSS', 'Tailwind', 'Bootstrap']),
    new Card('Libraries', ['Stripe', 'Angular Material', 'Shepherd (guided tour)', 'RxJs', 'NgRx']),
    new Card('Applications',['Monday', 'Asana', 'Jira', 'Trello', 'Microsoft office', 'Gsuite', 'NPM']),
    new Card('Languages',['English: Intermidate / Technical'])
  ]
  public career: Array<Card2> = []

  constructor(private aboutMeService: AboutMeService){
    this.getCareers()
  }

  private getCareers(){
    this.aboutMeService.getCareers()
    .subscribe( res => {
      this.career = res
    })
  }
}
