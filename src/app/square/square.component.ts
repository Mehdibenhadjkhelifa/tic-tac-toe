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
 button{
    background-size: 200px;
}
`
})
//this component can't modify it's own state it all comes from
//the parent so it's called a UI component or a DUMB component
export class SquareComponent{
  @Input() value! : 'X' | 'O';
}
