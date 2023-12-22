import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FreeGameService} from "../../services/free-game.service";
import {LowerCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-game-filters',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LowerCasePipe,
    UpperCasePipe
  ],
  templateUrl: './game-filters.component.html',
  styleUrl: './game-filters.component.scss'
})
export class GameFiltersComponent implements OnInit {
  form: FormGroup;
  categories: string[] = [];
  platforms: string[] = [];

  constructor(private freeGameService: FreeGameService, private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.min(2)]],
      category: [''],
      platform: [''],
    })
  }

  ngOnInit() {
    this.freeGameService.getGamesObs().subscribe(
      values => {
        values.forEach(game=>{
          if(!this.categories.includes(game.genre)){
            this.categories.push(game.genre)
          }
          if(!this.platforms.includes(game.platform)){
            this.platforms.push(game.platform)
          }
        })
      }
    )
  }

  onSubmit() {
    this.freeGameService.loadGamesData(this.form.getRawValue());
  }

  clearFilter() {
    this.form.setValue({name: '', platform: '', category: ''});
    this.freeGameService.loadGamesData();
  }
}
