import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import * as pdfMake from "pdfmake/build/pdfmake";
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
  public pdf;

  constructor(public GetDataServiceService: GetDataServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    const source = timer(100, 3000);
    const subscribe = source.subscribe((val) => this.loadData(val));
  }
  displayedColumns = ["position", "qn", "hn", "name", "status", "print", "wait"];

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
  printQueue(data: QueueItem): void {
    console.log(
      "🚀 ~ file: print-pharmacy-table.component.ts ~ line 44 ~ PrintPharmacyTableComponent ~ printQueue ~ data",
      data
    );
    if (data.hn) {
      this.pdf = {
        pageSize: "A4",
        pageMargins: [25, 50, 100, 30],
        content: [
          // {
          //   text: ` โรงพยาบาลกำแพงเพชร`,
          //   fontSize: 20,
          // },
          {
            text: ` HN : ${data.hn}`,
            fontSize: 20,
          },
          {
            text: ` Q : ${data.nameQueue}`,
            fontSize: 40,
          },
          // { image: this.textToBase64Barcode(data.hn), width: 100 },
        ],
        defaultStyle: {
          font: "THSarabunNew",
          bold: true,
          fontSize: 14,
        },
      };

      setTimeout(() => {
        const win = window.open("", "tempWinForPdf");
        pdfMake.createPdf(this.pdf).print({}, win);
        setTimeout(() => {
          win.close();
        }, 10000);
      }, 1000);

      // win.close();
      // pdfMake.createPdf(this.pdf).getDataUrl(
      //   function (result) {
      //     // document.getElementById("output").src = result;
      //     // (<HTMLIFrameElement>document.getElementById("output")).src = result;
      //     this.outputElem.nativeElement.src = result;
      //   },
      //   { autoPrint: true }
      // );
    }
  }
}
