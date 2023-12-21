import {Component, OnDestroy, OnInit} from '@angular/core';
import {FullGame} from "../../models/full-game";
import {FreeGameService} from "../../services/free-game.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-game-full',
  standalone: true,
  imports: [],
  templateUrl: './game-full.component.html',
  styleUrl: './game-full.component.scss'
})
export class GameFullComponent implements OnInit{
  game: FullGame;

  constructor(private freeGameService: FreeGameService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>this.freeGameService.getGameData(+params.get('id')!))
    ).subscribe(val=>this.game= val)
  }

  protected readonly routes = routes;
}
