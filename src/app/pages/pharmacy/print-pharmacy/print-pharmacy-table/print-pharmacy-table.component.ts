import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { GetDataServiceService } from "../../../../shared/get-data-service.service";
import { QueueItem } from "../../../../shared/interface/dataapi";

@Component({
  selector: "app-print-pharmacy-table",
  templateUrl: "./print-pharmacy-table.component.html",
  styleUrls: ["./print-pharmacy-table.component.scss"],
})
export class PrintPharmacyTableComponent implements OnInit {
  public results: QueueItem; // กำหนดตัวแปร เพื่อรับค่า
  @Input() value: string;

  constructor(public GetDataServiceService: GetDataServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    const source = timer(100, 3000);
    const subscribe = source.subscribe((val) => this.loadData(val));
  }
  displayedColumns = ["position", "qn", "hn", "name", "status", "wait"];

  loadData(val: any) {
    console.log(this.value);
    return this.GetDataServiceService.getDisPay(
      `servicepoinsub?idServicePoint=1&idServicePointSub=2&statusQueue=${this.value}&uiDisplay=pharmacy-print`
    ).subscribe((data) => {
      this.results = data;
      console.log(data);
      console.log(val);
    });
  }
  getFinancialStatusName(value: number): string {
    if (value == 1) {
      return "ยังไม่ได้จ่าย";
    } else {
      return "จ่ายแล้ว";
    }
  }
}
