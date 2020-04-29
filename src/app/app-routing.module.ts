import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './error/notfound/notfound.component'; //404

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '404', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
