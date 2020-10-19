import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AeGameLibComponent } from 'projects/ae-game-lib/src/public-api';

const routes: Routes = [
  { path: '', component: AeGameLibComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
