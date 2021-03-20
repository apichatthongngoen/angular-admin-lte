import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Display1Component } from "./display1/display1.component";
import { Display2Component } from "./display2/display2.component";
import { Display3Component } from "./display3/display3.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "display", component: Display1Component },
  { path: "pharmacydisplay", redirectTo: "display", pathMatch: "full" },
  { path: "display2", component: Display2Component },
  { path: "display3", component: Display3Component },
  { path: "home", component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DisplayRoutingModule {}
