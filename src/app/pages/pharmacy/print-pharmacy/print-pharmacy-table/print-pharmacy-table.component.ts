import { Component, OnInit, Input } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { GetDataServiceService } from '../../../../shared/get-data-service.service';
import { QueueItem } from "../../../../shared/interface/dataapi";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { asyncScheduler, Observable, Subject, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, timer } from 'rxjs';
import { map, filter } from "rxjs/operators";


@Component({
  selector: 'app-print-pharmacy-table',
  templateUrl: './print-pharmacy-table.component.html',
  styleUrls: ['./print-pharmacy-table.component.scss']
})

export class PrintPharmacyTableComponent implements OnInit {
  public results: QueueItem;// กำหนดตัวแปร เพื่อรับค่า
  @Input() value: string;

  constructor(public GetDataServiceService: GetDataServiceService,
    private http: HttpClient) { }

  ngOnInit(): void {
    const source = timer(100, 3000);
    const subscribe = source.subscribe(val => this.loadData(val));
  }
  displayedColumns = ['position', 'qn', 'hn', 'name', 'status', 'wait'];
  dataSource = ELEMENT_DATA;

  loadData(val: any) {
    console.log(this.value)
    return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=2&statusQueue=${this.value}&uiDisplay=pharmacy-print`)
      .subscribe((data) => {
        this.results = data;
        console.log(data)
        console.log(val)
      })
  }
  getFinancialStatusName(value: number): string {
    if (value == 1) {
      return 'ยังไม่ได้จ่าย'
    } else {
      return 'จ่ายแล้ว'
    }
  }
}


export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '1-001', name: 'Hydrogen', weight: 2, symbol: 'H' },
  { position: '2-001', name: 'Helium', weight: 2, symbol: 'He' },
  { position: '3-001', name: 'Lithium', weight: 3, symbol: 'Li' },
  { position: '4-001', name: 'Beryllium', weight: 4, symbol: 'Be' },
  { position: '5-001', name: 'Boron', weight: 6, symbol: 'B' },
  { position: '6-002', name: 'Carbon', weight: 7, symbol: 'C' },
  { position: '1-003', name: 'Nitrogen', weight: 8, symbol: 'N' },
  { position: '2-005', name: 'Oxygen', weight: 9, symbol: 'O' },
  { position: '3-007', name: 'Fluorine', weight: 15, symbol: 'F' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
];