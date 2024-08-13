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
  @Input() title: 'title' | string = 'title'
}
