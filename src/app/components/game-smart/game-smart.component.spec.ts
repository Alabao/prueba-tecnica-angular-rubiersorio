import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSmartComponent } from './game-smart.component';

describe('GameSmartComponent', () => {
  let component: GameSmartComponent;
  let fixture: ComponentFixture<GameSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSmartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
