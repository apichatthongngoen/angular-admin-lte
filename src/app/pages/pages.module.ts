import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoneyQueueComponent } from './money-queue/money-queue.component'


// import { MoneyComponent } from './money/money.component';
// import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [

    DashboardComponent,

    MoneyQueueComponent],
  imports: [
    CommonModule,
    PageRoutingModule

  ],
  providers: [],
})
export class PagesModule { }