import {TestBed} from '@angular/core/testing';

import {FreeGameService} from './free-game.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {GAMES} from "../mock-data/games";
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
    service.loadGamesData();
    const mockReq = testingController.expectOne(environment.apiUrlBase + '/games?');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(GAMES)
  });
});
