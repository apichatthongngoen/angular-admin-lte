import { Component, OnInit } from '@angular/core';

import { GetDataServiceService } from '../../shared/get-data-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InterfaceScreenCalledQueue } from '../../shared/interface/dataapi';
import { timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.scss'],
})
export class Display1Component implements OnInit {
  public results: InterfaceScreenCalledQueue[]; //
  constructor(
    public getDataServiceService: GetDataServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const source = timer(100, 1000);
    // console.log(source);.
    const subscribe = source.subscribe((val) => {
      this.loadData(val);
    });

    this.announceQueuing(source);

    // this.results.su
    // console.log(subscribe);
  }

  loadData(val: any) {
    // this.results = data1;
    this.getDataServiceService
      .getDisPay(
        `screencalledqueu?uiDisplay=PharmacyScreenCalledQueue&idServicePoint=1`
      )
      .subscribe((data: any) => {
        this.results = data;
        console.log(val);
        console.log('*********----------*********');
        console.log(data);
        // console.log(this.announceQueuing());
      });

    // await setTimeout(async () => {}, 50000);
    return val;
  }

  announceQueuing(val: Observable<number>) {
    val.subscribe((val) => {
      console.log('val');
    });
    // console.log(val);
    // setTimeout(function () {
    //   console.log('setTimeout');
    // }, 10000);
    return 'setTimeout2';
  }
}
