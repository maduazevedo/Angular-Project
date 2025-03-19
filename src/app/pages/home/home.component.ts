import { Component } from '@angular/core';
import { MenuTopComponent } from "../../menu-top/menu-top.component";
import { BigTitleComponent } from "../../big-title/big-title.component";
import { MenuMiddleComponent } from "../../menu-middle/menu-middle.component";
import { BigCardComponent } from "../../big-card/big-card.component";
import { SmallCardComponent } from "../../small-card/small-card.component";

@Component({
  selector: 'app-home',
  imports: [MenuTopComponent, BigTitleComponent, MenuMiddleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
