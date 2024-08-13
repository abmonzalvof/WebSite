import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card-model-2',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card-model-2.component.html',
  styleUrl: './card-model-2.component.scss'
})
export class CardModel2Component {
  @Input() title: string = 'title'
  @Input() description: string = 'desc'
  @Input() dates: string = 'dates'
  @Input() institution: string = 'institution'
  @Input() link: string = ''

}
