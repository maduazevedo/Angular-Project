import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  urlNews: string = ""
  @Input()
  titleNews: string = ""
  @Input()
  descriptionNews: string = ""
  @Input()
  id: string = ""

}
