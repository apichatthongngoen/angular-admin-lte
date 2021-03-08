import { Component, OnInit, Input, TemplateRef, ViewChild } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { GetDataServiceService } from "../../../../shared/get-data-service.service";
import { QueueItem } from "../../../../shared/interface/dataapi";

import {
  asyncScheduler,
  Observable,
  Subject,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent,
  SubscriptionLike,
  PartialObserver,
  timer,
} from "rxjs";
import { map, filter } from "rxjs/operators";
// import * as Rx from "rxjs";

@Component({
  selector: "app-money-queue-tabel",
  templateUrl: "./money-queue-tabel.component.html",
  styleUrls: ["./money-queue-tabel.component.scss"],
})
export class MoneyQueueTabelComponent implements OnInit {
  @Input() color_tb: string;
  @Input() statusQueue: string;
  @Input() products$: Observable<any>;
  @Input() selectedValueServiceChannel: string;

  // @Input() btnSuccess: boolean = false;

  public results: QueueItem; // กำหนดตัวแปร เพื่อรับค่า
  public headerDatas: any;
  public jsonData: any;
  public mykey: any;

  constructor(
    public GetDataServiceService: GetDataServiceService,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // if (this.statusQueue == 'success') {
    //   this.btnSuccess = true
    // }

    const source = timer(100, 1000);
    const subscribe = source.subscribe((val) => this.loadData(val));
  }
  displayedColumns2 = ["position", "QHOSXP", "hn", "name", "name2", "weight", "times"];
  displayedColumns = ["position", "name", "weight"];
  // dataSource1 = ELEMENT_DATA;

  loadData(val: any) {
    return this.GetDataServiceService.getDisPay(
      `servicepoinsub?idServicePoint=1&idServicePointSub=1&statusQueue=${this.statusQueue}`
    ).subscribe((data) => {
      this.results = data;
      console.log(data);
      console.log(val);
    });
  }

  checkNull(val: any): boolean {
    if (val === null) {
      return true;
    } else {
      return false;
    }
  }
  proBlem(val: QueueItem) {
    // console.log(val)
    // let data = {
    //   "id": 123,
    //   "id2": 741
    // }
    val = Object.assign(val, { uiDisplay: "money" });
    console.log(val);
    return this.GetDataServiceService.postDisPay(`servicepoinsub/problem`, val).subscribe((data) => {
      // this.results = data;
      console.log(data);
      this.loadData("");
      // console.log(val)
    });
  }
  pushQueueAnnounce(val: QueueItem) {
    if (this.selectedValueServiceChannel) {
      val = Object.assign(val, { uiDisplay: "money", idServiceChannel: this.selectedValueServiceChannel });
      return this.GetDataServiceService.postDisPay(`servicepoinsub/pushqueueannounce`, val).subscribe((data) => {
        // this.results = data;
        console.log(data);
        this.loadData("");
        // console.log(val)
      });
    } else {
      this.openSnackBarSelectedValueServiceChannel();
    }
  }

  payMentQueue(val: number) {
    // console.log(val)
    val = Object.assign(val, { uiDisplay: "money" });
    return this.GetDataServiceService.postDisPay(`servicepoinsub/paymentqoueue`, val).subscribe((data) => {
      // this.results = data;
      console.log(data);
      this.loadData("");
      // console.log(val)
    });
  }
  openSnackBarSelectedValueServiceChannel() {
    this._snackBar.open("กรุณาเลือกช่องบริการ", "OK", {
      duration: 2000,
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}
