import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {FullGame} from "../models/full-game";
import {SmartGame} from "../models/smart-game";

@Injectable({
  providedIn: 'root'
})
export class FreeGameService {

  private games$: BehaviorSubject<SmartGame[]> = new BehaviorSubject<SmartGame[]>([]);

  constructor(private httpClient: HttpClient, private handleError: ErrorHandler) {
  }

  loadGamesData() {
    this.httpClient.get<SmartGame[]>(environment.apiUrlBase + '/games').subscribe(val=>{
      this.games$.next(val);
    }, error => {
      this.games$.next([]);
    });
  }

  getGameData(id: number): Observable<FullGame> {
    return this.httpClient.get<FullGame>(environment.apiUrlBase + `/game?id=${{id}}`);
  }

  getGamesObs(): BehaviorSubject<SmartGame[]> {
    return this.games$;
  }
}
