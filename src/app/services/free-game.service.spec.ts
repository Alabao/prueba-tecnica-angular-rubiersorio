import {TestBed} from '@angular/core/testing';

import {FreeGameService} from './free-game.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {GAME, GAMES} from "../mock-data/games";
import {environment} from "../../environments/environment";

describe('FreeGameService', () => {
  let service: FreeGameService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FreeGameService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all games', () => {
    service.loadGamesData({name: 'a', category: 'b', platform: 'c'});
    const mockReq = testingController.expectOne(environment.apiUrlBase + '/games?platform=c&category=b');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(GAMES)
  });

  it('should get a full game', () => {
    service.getGameData(12).subscribe(game => {
      expect(game.id).toEqual(452);
    });
    const mockReq = testingController.expectOne(environment.apiUrlBase + '/game?id=12');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(GAME)
  });
});
