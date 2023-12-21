import {Routes} from '@angular/router';
import {GameFullComponent} from "./components/game-full/game-full.component";
import {GameListComponent} from "./components/game-list/game-list.component";

export const routes: Routes = [
  {path: 'game/:id', component: GameFullComponent},
  {path: 'games', component: GameListComponent},
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: '**', redirectTo: '/games'}
];
