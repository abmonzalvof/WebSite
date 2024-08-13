import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-model-1',
  standalone: true,
  imports: [],
  templateUrl: './card-model-1.component.html',
  styleUrl: './card-model-1.component.scss'
})
export class CardModel1Component {
  @Input() title: 'title' | string = 'title'
  @Input() description: 'desc' | string = 'desc'
}
