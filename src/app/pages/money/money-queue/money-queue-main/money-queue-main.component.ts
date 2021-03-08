import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ServiceChannel } from "src/app/shared/interface/dataapi";
import { GetDataServiceService } from "../../../../shared/get-data-service.service";

// interface ItemsResponse {
//   results: any
// }

@Component({
  selector: "app-money-queue-main",
  templateUrl: "./money-queue-main.component.html",
  styleUrls: ["./money-queue-main.component.scss"],
})
export class MoneyQueueMainComponent implements OnInit {
  name_container_header = "คิวการเงิน";
  public results: any; // กำหนดตัวแปร เพื่อรับค่า
  public headerDatas: any;
  public jsonData: any;
  public mykey: any;
  public selectedValueServiceChannel;
  public resultsServiceChannels: ServiceChannel;
  constructor(public GetDataServiceService: GetDataServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    // this.results = data1;
    // return this.GetDataServiceService.getDisPay(`servicepoinsub?idServicePoint=1&idServicePointSub=3&statusQueue=${this.statusQueue}&tabsgroupqueuepharmacy=${this.tabsGroupQueuePharmacy}`)
    this.GetDataServiceService.getDisPay(`servicechannel?test={"idServicePoint":1,"idServicePointSub":1}`).subscribe(
      (data: any) => {
        this.resultsServiceChannels = data;
      }
    );
  }
}
