import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetDataServiceService } from '../../../../shared/get-data-service.service';
import { QueueItem } from "../../../../shared/interface/dataapi";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { asyncScheduler, Observable, Subject, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, timer } from 'rxjs';
import { map, filter } from "rxjs/operators";
// import * as Rx from "rxjs";

@Component({
  selector: 'app-money-queue-tabel',
  templateUrl: './money-queue-tabel.component.html',
  styleUrls: ['./money-queue-tabel.component.scss']
})
export class MoneyQueueTabelComponent implements OnInit {
  @Input() color_tb: string;
  @Input() statusQueue: string;
  @Input() products$: Observable<any>;

  // @Input() btnSuccess: boolean = false;

  public urlSource: string = "http://localhost:3008/api/dispay/servicepoinsub";
  public results: QueueItem;// กำหนดตัวแปร เพื่อรับค่า
  public headerDatas: any;
  public jsonData: any;
  public mykey: any;





  constructor(
    public GetDataServiceService: GetDataServiceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    // if (this.statusQueue == 'success') {
    //   this.btnSuccess = true
    // }
    const source = timer(100, 1000);
    const subscribe = source.subscribe(val => this.loadData(val));
    // this.loadData("2")
    // this.loadData2();
    //emit 0 after 1 second then complete, since no second argument is supplied

    // const requestStream = from(fetch("http://localhost:3008/api/disPay/ServicePoinSub?id_service_point=1&id_service_point_sub=1&status_queue=1"));
    // requestStream.subscribe({
    //   next(response) {
    //     console.log(response.status);
    //     console.log(response.body);
    //     console.log(response);
    //   },
    //   error(error) {
    //     console.log(error.message);
    //   },
    //   complete() {
    //     console.log("Completed!");
    //   }
    // });
    // asyncScheduler.schedule(task, 3000);
    // const timerStream = Rx.Observable.timer(3000, 1000)

    // setInterval(() => this.loadData(), 5000)
    // const timerStream = Observable.interval(1000)
    // console.log(this.status_queue)
    // this.http.get(this.urlSource, { observe: 'response' }).subscribe(resp => {
    //   // อ่านค่า result จาก JSON response ที่ส่งออกมา
    //   console.log(resp);// ดูโครงสร้างของ json ทั้งหมดผ่าน console
    //   console.log(resp.status);
    //   this.jsonData = resp;
    //   // this.headerDatas = resp.headers.get('ชื่อ property ส่วน header ที่ต้องการ');
    //   // ใช้ข้อมูลในส่วนของ response body  ที่ส่งออกมา
    //   this.results = resp.body
    // },
    //   (err: HttpErrorResponse) => {
    //     // กรณี error
    //     if (err.error instanceof Error) {
    //       // กรณี error ฝั่งผู้ใช้งาน หรือ การเชื่อมต่อเกิด error ขึ้น
    //       console.log('An error occurred:', err.error.message);
    //     } else { // กรณี error ฝั่ง server ไม่พบไฟล์ ,server error 
    //       console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     }
    //   }
    // );
  }
  displayedColumns2 = ['position', 'QHOSXP', 'hn', 'name', 'name2', 'weight', 'times'];
  displayedColumns = ['position', 'name', 'weight'];
  // dataSource1 = ELEMENT_DATA;

  loadData(val: any) {
    return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=1&statusQueue=${this.statusQueue}`)
      .subscribe((data) => {
        this.results = data;
        console.log(data)
        console.log(val)

      })
  }

  loadData2(val: any) {
    console.log(val)
  }

  checkNull(val: any): boolean {
    if (val === null) {
      return true
    } else {
      return false
    }
  }
  proBlem(val: QueueItem) {
    // console.log(val)
    // let data = {
    //   "id": 123,
    //   "id2": 741
    // }
    val = Object.assign(val, { "uiDisplay": "money" })
    console.log(val)
    return this.GetDataServiceService.postDisPay(`servicepoinsub/problem`, val)
      .subscribe((data) => {
        // this.results = data;
        console.log(data)
        this.loadData("")
        // console.log(val)
      })
  }
  pushQueueAnnounce(val: QueueItem) {
    val = Object.assign(val, { "uiDisplay": "money" })
    return this.GetDataServiceService.postDisPay(`servicepoinsub/pushqueueannounce`, val)
      .subscribe((data) => {
        // this.results = data;
        console.log(data)
        this.loadData("")
        // console.log(val)
      })
  }
  payMentQueue(val: number) {
    // console.log(val)
    val = Object.assign(val, { "uiDisplay": "money" })
    return this.GetDataServiceService.postDisPay(`servicepoinsub/paymentqoueue`, val)
      .subscribe((data) => {
        // this.results = data;
        console.log(data)
        this.loadData("")
        // console.log(val)
      })
  }
}



export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: '1-008', name: 'Hydrogen', weight: 2, symbol: 'H' },
//   { position: '2-001', name: 'Helium', weight: 2, symbol: 'He' },
//   { position: '3-001', name: 'Lithium', weight: 3, symbol: 'Li' },
//   { position: '4-001', name: 'Beryllium', weight: 4, symbol: 'Be' },
//   { position: '5-001', name: 'Boron', weight: 6, symbol: 'B' },
//   { position: '6-002', name: 'Carbon', weight: 7, symbol: 'C' },
//   { position: '1-003', name: 'Nitrogen', weight: 8, symbol: 'N' },
//   { position: '2-005', name: 'Oxygen', weight: 9, symbol: 'O' },
//   { position: '3-007', name: 'Fluorine', weight: 15, symbol: 'F' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
//   { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
// ];
