import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'display', redirectTo: 'display', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
  // {
  //   path: '', redirectTo: '/404'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
