import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoneyQueueComponent } from './money-queue/money-queue.component'


// import { MoneyComponent } from './money/money.component';
// import { LayoutModule } from '../layout/layout.module';
// money-queue
import { MatTableModule } from '@angular/material/table';
import { PrintPharmacyMinComponent } from './pharmacy/print-pharmacy/print-pharmacy-min/print-pharmacy-min.component';





@NgModule({
  declarations: [

    DashboardComponent,

    MoneyQueueComponent,

    PrintPharmacyMinComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatTableModule

  ],
  providers: [],
})
export class PagesModule { }