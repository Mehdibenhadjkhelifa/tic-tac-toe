import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    <p>
      <button>{{value}}</button>
 </p>
  `,
  styles: `
button {
  width: 200px;
  height: 200px;
  font-size: 150px; /* Adjust font size as needed */
  background-color: none;
}
`
})
export class SquareComponent{
  @Input() value! : 'X' | 'O';
}
