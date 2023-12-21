import { Component } from '@angular/core';
import {GameFiltersComponent} from "../game-filters/game-filters.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    GameFiltersComponent
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {

}
