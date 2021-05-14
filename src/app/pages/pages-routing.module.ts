import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from "../layout/layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MoneyQueueComponent } from "./money-queue/money-queue.component";
import { MoneyQueueMainComponent } from "./money/money-queue/money-queue-main/money-queue-main.component";
import { PrintPharmacyMinComponent } from "./pharmacy/print-pharmacy/print-pharmacy-min/print-pharmacy-min.component";
import { QueuePharmacyMainComponent } from "./pharmacy/queue-pharmacy/queue-pharmacy-main/queue-pharmacy-main.component";
import { SettingMainComponent } from "./setting/setting-main/setting-main.component";
const routes: Routes = [
  {
    path: "admin",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "money-queue", component: MoneyQueueMainComponent },
      { path: "pharmacy-printt", component: PrintPharmacyMinComponent },
      { path: "pharmacy-queue", component: QueuePharmacyMainComponent },
      { path: "setting", component: SettingMainComponent },
    ],
  },
  // {
  //     path: '**', redirectTo: '/404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
