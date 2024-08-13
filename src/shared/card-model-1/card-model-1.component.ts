import { Component, Input } from '@angular/core';
import { Card } from '../../Models/card.model';

@Component({
  selector: 'app-card-model-1',
  standalone: true,
  imports: [],
  templateUrl: './card-model-1.component.html',
  styleUrl: './card-model-1.component.scss'
})
export class CardModel1Component {
  @Input() card: Card = new Card()

}
