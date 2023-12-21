import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameFiltersComponent} from "../game-filters/game-filters.component";
import {SmartGame} from "../../models/smart-game";
import {FreeGameService} from "../../services/free-game.service";
import {GameSmartComponent} from "../game-smart/game-smart.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    GameFiltersComponent,
    GameSmartComponent
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit, OnDestroy {
  games: SmartGame[] = [];

  constructor(private freeGameServices: FreeGameService) {
  }

  ngOnInit() {
    this.freeGameServices.getGamesObs().subscribe(values => {
      this.games = values;
    });
    this.freeGameServices.loadGamesData();
  }

  ngOnDestroy() {
    this.freeGameServices.getGamesObs().unsubscribe();
  }
}
