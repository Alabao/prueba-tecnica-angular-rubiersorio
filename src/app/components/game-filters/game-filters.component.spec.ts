import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFiltersComponent } from './game-filters.component';
import {FreeGameService} from "../../services/free-game.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReactiveFormsModule} from "@angular/forms";

describe('GameFiltersComponent', () => {
  let component: GameFiltersComponent;
  let fixture: ComponentFixture<GameFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFiltersComponent,ReactiveFormsModule,HttpClientTestingModule],
      providers:[FreeGameService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GameFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
