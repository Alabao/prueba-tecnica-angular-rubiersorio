import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFullComponent } from './game-full.component';

describe('GameFullComponent', () => {
  let component: GameFullComponent;
  let fixture: ComponentFixture<GameFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFullComponent]
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
