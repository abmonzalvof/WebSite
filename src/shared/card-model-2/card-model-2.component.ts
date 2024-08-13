import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Card2 } from '../../Models/card.model';

@Component({
  selector: 'app-card-model-2',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card-model-2.component.html',
  styleUrl: './card-model-2.component.scss'
})
export class CardModel2Component {
  @Input() card: Card2 = new Card2()

}
