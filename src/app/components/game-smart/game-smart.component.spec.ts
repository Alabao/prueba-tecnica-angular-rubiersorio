import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSmartComponent } from './game-smart.component';
import {SmartGame} from "../../models/smart-game";

describe('GameSmartComponent', () => {
  let component: GameSmartComponent;
  let fixture: ComponentFixture<GameSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSmartComponent]
    })
    .compileComponents();

    const game :SmartGame ={
      id: 540,
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      developer: "Blizzard Entertainment",
      release_date: "06-20-2018",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2"
    };

    fixture = TestBed.createComponent(GameSmartComponent);
    component = fixture.componentInstance;
    component.game = game;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
