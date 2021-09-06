import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { GetDataServiceService } from '../../shared/get-data-service.service';
// import { GetKPHSMartCardReader } from '../../shared/KPHSMartCardReader';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

import { QueueItem, QueueGroupPrint } from '../../shared/interface/dataapi';
import { map } from 'rxjs/operators';

// print queue
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import * as pdfMakeConfig from 'pdfmake/build/pdfmake.js';
// import * as pdfFontsX from 'pdfmake-unicode/dist/pdfmake-unicode.js';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from '../../shared/pdfmake/vfs_fonts';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
(pdfMake as any).fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
  },
};
// import * as JsBarcode from "JsBarcode";

// const pdfMakeX = require('pdfmake/build/pdfmake.js');
// const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
// pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
// import * as pdfMake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() pdf: any;
  @ViewChild('inputHNSearch', { static: false }) inputElem: ElementRef;
  @ViewChild('Loading', { static: false }) LoadingElem: ElementRef;
  @ViewChild('missLoading', { static: false }) missLoadingElem: ElementRef;
  // @ViewChild("output", { static: false }) outputElem: HTMLIFrameElement;

  public results: QueueItem[];
  public printQueueData: QueueGroupPrint | undefined;
  // public queueGroupPrint: QueueGroupPrint;
  public cid: string;
  public cid1: string;
  public loadingStatus: boolean = false;
  inputHNSearchVal: string = '';

  constructor(
    public getDataServiceService: GetDataServiceService,
    // public getKPHSMartCardReader: GetKPHSMartCardReader,
    private http: HttpClient,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    // this.getKPHSMartCardReader();
    // this.getDataFromIDCardTimeOut(); //อ่านIDCard

    this.focusSearchTextloop();
  }

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

  pushCreateQueue(inputHNSearch: string, event?: any) {
    console.log(
      '🚀 ~ file: home.component.ts ~ line 91 ~ HomeComponent ~ pushCreateQueue ~ this.loadingStatus',
      this.loadingStatus
    );
    // console.log(event);
    let data = {
      id: '1',
      hn: inputHNSearch,
    };
    if (!this.loadingStatus) {
      this.loading('open');
    }

    // this.getKPHSMartCardReader.loadData();
    if (!this.loadingStatus) {
      try {
        this.loadingStatus = true;
        this.getDataServiceService.postAPI(`createqueue`, data).subscribe(
          (data: any) => {
            console.log(
              '🚀 ~ file: home.component.ts ~ line 94 ~ HomeComponent ~ this.getDataServiceService.postAPI ~ data',
              data
            );
            // this.results = data;
            // this.queueGroupPrint = data;
            // this.printQueue(data);
            if (data && !data.error) {
              this.printQueue(data);
            } else {
              this.missLoading('open');
              setTimeout(() => {
                this.loading('dismiss');
              }, 3000);
            }
            // alert(data.nameQueue || 'ERROR');
          },
          (error?: any) => {
            console.log(
              '🚀 ~ file: home.component.ts ~ line 94 ~ HomeComponent ~ this.getDataServiceService.postAPI ~ data222',
              error + '111'
            );
            this.missLoading('open');
            setTimeout(() => {
              this.loading('dismiss');
            }, 3000);
            console.log(55);
          },
          () => {
            console.log(55);
          }
        );
      } catch (error) {
        console.log(88877444);
      }
    }
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
  printQueue(data: QueueGroupPrint): void {
    if (data.hn) {
      let x: string = `-รอเรียกรับยา`;
      if (data.bypassFinancial == 1) {
        x = `-รอห้องการเงินเรียก \n -รอเรียกรับยา`;
      }
      this.pdf = {
        pageSize: 'A4',
        pageMargins: [20, 0, 435, 30],
        content: [
          // {
          //   text: ` โรงพยาบาลกำแพงเพชร`,
          //   fontSize: 20,
          // },
          {
            text: ` คิวรับยา`,
            fontSize: 20,
          },
          {
            text: ` ประเภท ` + data.queueGroupPurport,
            fontSize: 20,
          },
          // { image: this.textToBase64Barcode(data.hn), width: 100 },
          {
            text: `คิว ` + data.nameQueue,
            fontSize: 40,
          },
          {
            text: ` HN ` + data.hn + ` อายุ ` + data.age,
            fontSize: 15,
          },
          { text: data.fname + ` ` + data.lname + ` `, fontSize: 15 },
          {
            text: x,
            fontSize: 20,
          },
          {
            text: data.Date,
            fontSize: 15,
            // pageBreak: "after",
          },
          {
            text: `จะได้รับบริการในอีก ` + data.waitQueueTinme + ` นาที`,
            fontSize: 15,
            // pageBreak: "after",
          },
        ],
        defaultStyle: {
          font: 'THSarabunNew',
          bold: true,
          fontSize: 14,
        },
      };
      // pdfMake.createPdf(this.pdf).print();
      this.printQueueData = data;
      setTimeout(() => {
        const win = window.open('', 'tempWinForPdf');
        pdfMake.createPdf(this.pdf).print({}, win);
        setTimeout(() => {
          win.close();
          this.loading('dismiss');
        }, 2000);
      }, 1000);
      setTimeout(() => {
        this.printQueueData.nameQueue = '';
        this.printQueueData = undefined;
      }, 10000);
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
  // textToBase64Barcode(text: string): string {
  //   let canvas: HTMLCanvasElement = document.createElement("canvas");
  //   JsBarcode(canvas, text, {
  //     format: "CODE128",
  //     width: 4,
  //     height: 80,
  //     displayValue: false,
  //   });
  //   return canvas.toDataURL("image/png");
  // }
  getKPHSMartCardReader() {
    return this.getDataServiceService
      .getKPHSMartCardReader()
      .subscribe((data) => {
        // this.results = data;
        this.cid = data.CID;
        // console.log(data);
        // this.getDataFromIDCard(data.CID);
      });
  }
  // getDataFromIDCardTimeOut() {
  //   setTimeout(() => {
  //     this.getKPHSMartCardReader();
  //     let cid: string = this.cid;
  //     if (cid != null && cid != "null" && cid != "") {
  //       if (cid != this.cid1) {
  //         this.cid1 = cid;
  //         // this.inputHNSearchVal = cid;
  //         setTimeout(() => {
  //           this.pushCreateQueue(this.cid1);
  //         }, 1000);
  //         setTimeout(() => {
  //           this.getDataFromIDCardTimeOut();
  //         }, 7000);
  //       } else {
  //         setTimeout(() => {
  //           this.getDataFromIDCardTimeOut();
  //         }, 7000);
  //       }
  //     } else {
  //       this.cid1 = cid;
  //       // console.log('id: NULL');
  //       setTimeout(() => {
  //         this.getDataFromIDCardTimeOut();
  //       }, 1000);
  //     }
  //   }, 1000);
  // }

  clickNumberButton(number) {
    var searchText = this.inputHNSearchVal;
    if (searchText.length < 13) {
      this.inputHNSearchVal = this.inputHNSearchVal + '' + number;
    }
    this.focusSearchText();
  }
  clickDeleteButton() {
    this.inputHNSearchVal = this.inputHNSearchVal.slice(0, -1);
    this.focusSearchText();
  }
  clickClearButton() {
    this.inputHNSearchVal = '';
    this.focusSearchText();
  }
  focusSearchText() {
    document.getElementById('searchText').focus();
  }
  focusSearchTextloop() {
    this.focusSearchText();
    setTimeout(() => {
      this.focusSearchTextloop();
    }, 1000);
  }
  loading(params: string): void {
    if (params == 'open') {
      this.modalService.open(this.LoadingElem);
    } else if (params == 'dismiss') {
      this.modalService.dismissAll(this.LoadingElem);
      this.loadingStatus = false;
      this.clickClearButton();
    }
  }
  missLoading(params: string): void {
    if (params == 'open') {
      this.modalService.open(this.missLoadingElem);
    } else if (params == 'dismiss') {
      this.modalService.dismissAll(this.missLoadingElem);
    }
  }
}
