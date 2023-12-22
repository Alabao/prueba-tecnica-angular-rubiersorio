import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {FullGame} from "../models/full-game";
import {SmartGame} from "../models/smart-game";
import {Filters} from "../models/filters";

@Injectable({
  providedIn: 'root'
})
export class FreeGameService {

  private games$: BehaviorSubject<SmartGame[]> = new BehaviorSubject<SmartGame[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  loadGamesData(filters: Filters | null = null) {
    const params = new URLSearchParams();
    if (!!filters?.platform) {
      params.append('platform', filters.platform);
    }
    if (!!filters?.category) {
      params.append('category', filters.category);
    }
    this.httpClient.get<SmartGame[]>(environment.apiUrlBase + '/games' + '?' + params).subscribe(val => {
      if (!!filters?.name)
        this.games$.next(val.filter(game => game.title.toLowerCase().includes(filters?.name.toLowerCase())));
      else
        this.games$.next(val);
    }, () => {
      this.games$.next([]);
    });
  }

  getGameData(id: number): Observable<FullGame> {
    return this.httpClient.get<FullGame>(environment.apiUrlBase + `/game?id=${id}`);
  }

  getGamesObs(): BehaviorSubject<SmartGame[]> {
    return this.games$;
  }
}
