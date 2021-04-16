import { Component, OnInit, Input } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";

import { GetDataServiceService } from "../../../../shared/get-data-service.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { timer } from "rxjs";

import { QueueItem } from "../../../../shared/interface/dataapi";
import { map, filter } from "rxjs/operators";
@Component({
  selector: "app-queue-pharmacy-table",
  templateUrl: "./queue-pharmacy-table.component.html",
  styleUrls: ["./queue-pharmacy-table.component.scss"],
})
export class QueuePharmacyTableComponent implements OnInit {
  @Input() color_tb: string;
  @Input() tabsGroupQueuePharmacy: string;
  @Input() selectedValueServiceChannelTable: string;
  @Input() statusQueue: string;

  public results: QueueItem[]; //
  public resultsCheckbox: any = []; //
  constructor(
    public getDataServiceService: GetDataServiceService,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log("Table: " + this.tabsGroupQueuePharmacy + " statusQueue : " + this.statusQueue);

    const source = timer(100, 6000);
    const subscribe = source.subscribe((val) => this.loadData(val));
  }
  displayedColumns = ["q", "qn", "name", "time", "statusQueue", "select", "last"];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<QueueItem>(true, []);

  test(e, row) {
    // console.log(e.checked)
    row = Object.assign(row, { checked: e.checked });
    console.log(row);
    let i = this.resultsCheckbox.length;
    console.log(this.resultsCheckbox.length);
    this.resultsCheckbox[row.orderQueue] = row;
    // Object.assign(this.resultsCheckbox, [row.idQueue:row])

    console.log(this.resultsCheckbox);

    // console.log(row.checked)
  }

  loadData(val: any) {
    // this.results = data1;
    // return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=3&statusQueue=${this.statusQueue}&tabsgroupqueuepharmacy=${this.tabsGroupQueuePharmacy}`)
    return this.getDataServiceService
      .getDisPay(
        `servicepoinsub?statusQueue=${this.statusQueue}&idServicePointSub=3&idServicePoint=1&tabsGroupQueuePharmacy=${this.tabsGroupQueuePharmacy}&uiDisplay=queuepharmacy`
      )
      .subscribe((data: any) => {
        this.results = data;
        // console.log("*********----------*********");
        // console.log(this.statusQueue);
        // console.log(val);
      });
  }
  pushQueueAnnounce(val?: QueueItem | number | string, results: any = this.results) {
    let selectedValueServiceChannelTable = this.selectedValueServiceChannelTable;
    if (selectedValueServiceChannelTable) {
      try {
        let n: any;
        let valArr: string[];
        // let  results:any = data1
        let resultsObj: QueueItem[] = [];
        let resultsFilter: QueueItem[];
        let minMaxValArrOfsplit = [];
        let getDataServiceService = this.getDataServiceService;
        if (typeof val === "string") {
          valArr = val.split(","); //?
          // console.log(valArr)
          valArr.forEach(function (value) {
            let valArrOfsplit = value.split("-");
            valArrOfsplit.forEach(function (value) {
              if (valArrOfsplit.length <= 2) {
                minMaxValArrOfsplit.push(parseInt(value));
              } else {
                alertErrorinput();
              }
            });

            if ((minMaxValArrOfsplit.length = 2)) {
              for (
                let i = Math.min.apply(null, minMaxValArrOfsplit);
                i <= Math.max.apply(null, minMaxValArrOfsplit);
                i++
              ) {
                resultsFilter = results.filter((x: { orderQueue: string }) => x.orderQueue == i);
                console.log(resultsFilter);
                if (resultsFilter.length) {
                  // resultsObj.push(resultsFilter[0]);
                  resultsFilter[0] = Object.assign(resultsFilter[0], {
                    uiDisplay: "pharmacyqueue",
                    idServiceChannel: selectedValueServiceChannelTable,
                  });
                  // console.log(selectedValueServiceChannelTable);
                  postPushQueueAnnounce(resultsFilter[0], getDataServiceService);
                  // this.openSnackBarQueueAnnounce();
                }
              }
            }
          });
        } else if (typeof val !== "number") {
          val = Object.assign(val, {
            uiDisplay: "pharmacyqueue",
            idServiceChannel: selectedValueServiceChannelTable,
          });
          postPushQueueAnnounce(val, getDataServiceService);
          // this.openSnackBarQueueAnnounce();
        }
      } catch (error) {
        throw error;
      }
    } else {
      this.openSnackBarSelectedValueServiceChannel();
    }
    function postPushQueueAnnounce(resultsObj: QueueItem, getDataServiceService: GetDataServiceService) {
      console.log(resultsObj);
      return getDataServiceService.postDisPay(`servicepoinsub/pushqueueannounce`, resultsObj).subscribe((data) => {
        // this.results = data;
        console.log(data);
        // console.log(val)
      });
    }
    // console.log(val)
    // console.log(n)
    function alertErrorinput() {
      alert("Invalid");
      throw new Error("Error");
    }
    function filterIt(arr?: QueueItem, searchKey?: any) {
      console.log(arr);
    }
  }
  openSnackBarSelectedValueServiceChannel() {
    this._snackBar.open("กรุณาเลือกช่องบริการ", "OK", {
      duration: 2000,
    });
  }
  openSnackBarQueueAnnounce(): void {
    this._snackBar.open("ทำการเรียกคิวแล้ว", "OK", {
      duration: 2000,
    });
  }
  proBlem(val: QueueItem): void {
    // console.log(val)
    // let data = {
    //   "id": 123,
    //   "id2": 741
    // }
    val = Object.assign(val, { uiDisplay: "queuepharmacy" });
    console.log(val);
    this.getDataServiceService.postDisPay(`servicepoinsub/problem`, val).subscribe((data) => {
      // this.results = data;
      this.loadData("");
      // console.log(val)
    });
  }
  successQueue(val: QueueItem): void {
    // }
    val = Object.assign(val, { uiDisplay: "queuepharmacy" });
    console.log(val);
    this.getDataServiceService.postDisPay(`servicepoinsub/successqueue`, val).subscribe((data) => {
      // this.results = data;
      this.loadData("");
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}
