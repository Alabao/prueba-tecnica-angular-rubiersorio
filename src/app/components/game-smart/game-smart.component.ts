import {Component, Input} from '@angular/core';
import {SmartGame} from "../../models/smart-game";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-game-smart',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './game-smart.component.html',
  styleUrl: './game-smart.component.scss'
})
export class GameSmartComponent {
  @Input({required: true}) game: SmartGame;

  constructor() {
  }
}
