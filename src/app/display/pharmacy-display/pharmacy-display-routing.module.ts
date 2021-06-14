import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Display1Component } from "../display1/display1.component";

import { DisplayMainComponent } from "./display-main/display-main.component";
import { QueueAllComponent } from "./queue-all/queue-all.component";
import { QueueDisplayServiceComponent } from "./queue-display-service/queue-display-service.component";

const routes: Routes = [
  {
    path: "pharmacydisplay",
    children: [
      { path: "", component: DisplayMainComponent },
      { path: "pagequeueall", component: QueueAllComponent },
      { path: "pagequeue", component: Display1Component },
      { path: "QueueDisplayService/:id", component: QueueDisplayServiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyDisplayRoutingModule {}
