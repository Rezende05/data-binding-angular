import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [],
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent {

  @Input() className = ''
}
