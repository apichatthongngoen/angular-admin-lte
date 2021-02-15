import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GetDataServiceService } from '../../shared/get-data-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { timer } from 'rxjs';

import { QueueItem, QueueGroupPrint } from '../../shared/interface/dataapi';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public results: QueueItem[]; //
  public queueGroupPrint: QueueGroupPrint;
  inputHNSearchVal: string = '';
  @ViewChild('inputHNSearch') inputHNSearch: ElementRef;
  constructor(
    public getDataServiceService: GetDataServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  private charArray: [number, string][] = [
    [3592, '0'],
    [3653, '1'],
    [47, '2'],
    [45, '3'],
    [3616, '4'],
    [3606, '5'],
    [3640, '6'],
    [3638, '7'],
    [3588, '8'],
    [3605, '9'],
  ];
  private charMap: Map<number, string> = new Map(this.charArray);

  pushCreateQueue(event, inputHNSearch: string) {
    // console.log(event);
    // console.log(inputHNSearch);
    let data = {
      id: '1',
      hn: inputHNSearch,
    };
    this.getDataServiceService
      .postAPI(`createqueue`, data)
      .subscribe((data: any) => {
        // this.results = data;
        this.queueGroupPrint = data;
        // alert(data.nameQueue || 'ERROR');

        // console.log(val)
      });
    return;
  }
  inputHNSearchkeypress(event) {
    this.keyMap(event);
  }

  keyMap(event) {
    if (this.charMap.get(event.charCode) != null) {
      event.preventDefault();
      // this.inputHNSearchVal.val(
      //   this.inputHNSearchVal.val() + thsi.charMap.get(event.charCode)
      // );
      this.inputHNSearchVal =
        this.inputHNSearchVal + this.charMap.get(event.charCode);
    }
  }
}
