import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DisplayMainComponent } from "./display-main/display-main.component";

const routes: Routes = [{ path: "pharmacdyisplay", component: DisplayMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyDisplayRoutingModule {}
