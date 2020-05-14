import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoneyQueueComponent } from './money-queue/money-queue.component'


// import { MoneyComponent } from './money/money.component';
// import { LayoutModule } from '../layout/layout.module';
// money-queue
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PrintPharmacyMinComponent } from './pharmacy/print-pharmacy/print-pharmacy-min/print-pharmacy-min.component';
import { PrintPharmacyTableComponent } from './pharmacy/print-pharmacy/print-pharmacy-table/print-pharmacy-table.component';


// template
import { LayoutContentHeaderComponent } from '../layout/layout-content-header/layout-content-header.component';
import { QueuePharmacyMainComponent } from './pharmacy/queue-pharmacy/queue-pharmacy-main/queue-pharmacy-main.component';
import { QueuePharmacyContentComponent } from './pharmacy/queue-pharmacy/queue-pharmacy-content/queue-pharmacy-content.component';
import { QueuePharmacyTableComponent } from './pharmacy/queue-pharmacy/queue-pharmacy-table/queue-pharmacy-table.component';


@NgModule({
  declarations: [

    DashboardComponent,

    MoneyQueueComponent,

    PrintPharmacyMinComponent,

    PrintPharmacyTableComponent,
    LayoutContentHeaderComponent,
    QueuePharmacyMainComponent,
    QueuePharmacyContentComponent,
    QueuePharmacyTableComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatTableModule,
    MatTabsModule

  ],
  providers: [],
})
export class PagesModule { }