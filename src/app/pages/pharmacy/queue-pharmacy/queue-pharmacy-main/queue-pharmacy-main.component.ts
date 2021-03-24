import { Component, OnInit } from "@angular/core";

import { MatSelectModule } from "@angular/material/select";

import { GetDataServiceService } from "../../../../shared/get-data-service.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { timer } from "rxjs";

import { ServiceChannel } from "../../../../shared/interface/dataapi";

@Component({
  selector: "app-queue-pharmacy-main",
  templateUrl: "./queue-pharmacy-main.component.html",
  styleUrls: ["./queue-pharmacy-main.component.scss"],
})
export class QueuePharmacyMainComponent implements OnInit {
  public resultsServiceChannels: ServiceChannel;
  public selectedValueServiceChannel;
  constructor(public GetDataServiceService: GetDataServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  public name_container_header = "คิวการเรียกรับยา";
  public tabsGroup2 = "2";
  public tabsGroup3 = "3";
  public tabsGroup4 = "4";
  public tabsGroup5 = "5";
  public tabsGroup1 = "1";
  public tabsGroup6 = "6";
  public tabsGroup7 = "7";
  public tabsGroup8 = "8";

  loadData() {
    // this.results = data1;
    // return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=3&statusQueue=${this.statusQueue}&tabsgroupqueuepharmacy=${this.tabsGroupQueuePharmacy}`)
    return this.GetDataServiceService.getDisPay(
      `servicechannel?test={"idServicePoint":1,"idServicePointSub":3}`
    ).subscribe((data: any) => {
      this.resultsServiceChannels = data;
      console.log(" room :");
      console.log(this.resultsServiceChannels);
    });
  }
}
