import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageRoutingModule } from "./pages-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MoneyQueueComponent } from "./money-queue/money-queue.component";

// template module
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CookieModule } from "ngx-cookie";

// import { MoneyComponent } from './money/money.component';
// import { LayoutModule } from "../layout/layout.module";

import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// money-queue
import { PrintPharmacyMinComponent } from "./pharmacy/print-pharmacy/print-pharmacy-min/print-pharmacy-min.component";
import { PrintPharmacyTableComponent } from "./pharmacy/print-pharmacy/print-pharmacy-table/print-pharmacy-table.component";

// template
import { LayoutContentHeaderComponent } from "../layout/layout-content-header/layout-content-header.component";

import { QueuePharmacyMainComponent } from "./pharmacy/queue-pharmacy/queue-pharmacy-main/queue-pharmacy-main.component";
import { QueuePharmacyContentComponent } from "./pharmacy/queue-pharmacy/queue-pharmacy-content/queue-pharmacy-content.component";
import { QueuePharmacyTableComponent } from "./pharmacy/queue-pharmacy/queue-pharmacy-table/queue-pharmacy-table.component";
import { MoneyQueueTabelComponent } from "./money/money-queue/money-queue-tabel/money-queue-tabel.component";
import { MoneyQueueMainComponent } from "./money/money-queue/money-queue-main/money-queue-main.component";
import { MoneyQueueContentComponent } from "./money/money-queue/money-queue-content/money-queue-content.component";

//getdata
import { HttpClientModule } from "@angular/common/http";
import { SettingMainComponent } from "./setting/setting-main/setting-main.component";
import { SettingPharmacyComponent, dialogConfirm } from "./setting/setting-pharmacy/setting-pharmacy.component";

@NgModule({
  declarations: [
    DashboardComponent,
    MoneyQueueComponent,
    PrintPharmacyMinComponent,
    PrintPharmacyTableComponent,
    QueuePharmacyMainComponent,
    QueuePharmacyContentComponent,
    QueuePharmacyTableComponent,
    MoneyQueueTabelComponent,
    MoneyQueueMainComponent,
    MoneyQueueContentComponent,
    LayoutContentHeaderComponent,
    SettingMainComponent,
    SettingPharmacyComponent,
    dialogConfirm,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    CookieModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class PagesModule {}
