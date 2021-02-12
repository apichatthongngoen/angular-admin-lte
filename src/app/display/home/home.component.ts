import { Component, OnInit } from '@angular/core';

import { GetDataServiceService } from '../../shared/get-data-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { timer } from 'rxjs';

import { QueueItem } from '../../shared/interface/dataapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public results: QueueItem[]; //

  constructor(
    public getDataServiceService: GetDataServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  pushCreateQueue(event, inputHNSearch: string) {
    // console.log(event);
    // console.log(inputHNSearch);
    let data = {
      id: '1',
      vn: inputHNSearch,
    };
    console.log(data);
    this.getDataServiceService
      .postAPI(`createqueue`, data)
      .subscribe((data) => {
        // this.results = data;
        console.log(data);
        alert(data.nameQueue || 'ERROR');
        // console.log(val)
      });
    return;
  }
}
