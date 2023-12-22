import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameFullComponent} from './game-full.component';
import {FreeGameService} from "../../services/free-game.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BehaviorSubject, Observable, of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";

describe('GameFullComponent', () => {
  let component: GameFullComponent;
  let fixture: ComponentFixture<GameFullComponent>;

  beforeEach(async () => {
    let mockActivatedRoute = {
      paramMap: new BehaviorSubject('12')
    };
    await TestBed.configureTestingModule({
      imports: [GameFullComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [
        FreeGameService,
        {
          provide: ActivatedRoute, useValue: mockActivatedRoute
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
