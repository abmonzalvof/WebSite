import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-band-title-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './band-title-1.component.html',
  styleUrl: './band-title-1.component.scss'
})
export class BandTitle1Component {
  @Input() title: string = 'title'
  public titles: Map<string,string> = new Map<string,string>([
    ['title', './../../assets/img/title-default.svg'],
    ['knowledge','./../../assets/img/title-knowledge.svg'],
    ['career','./../../assets/img/title-career.svg'],
  ])
}
