import { Component, OnInit } from "@angular/core";

import { GetDataServiceService } from "../../shared/get-data-service.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { InterfaceScreenCalledQueue } from "../../shared/interface/dataapi";
import { timer } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-display1",
  templateUrl: "./display1.component.html",
  styleUrls: ["./display1.component.scss"],
})
export class Display1Component implements OnInit {
  public results: InterfaceScreenCalledQueue[]; //
  public resultsarr: any = [[], [], []]; //ชัวคราว
  public resultsAudio: InterfaceScreenCalledQueue[]; //
  public resultsAudioDisplay: InterfaceScreenCalledQueue[];
  public audio: HTMLAudioElement = new Audio();
  constructor(public getDataServiceService: GetDataServiceService, private http: HttpClient) {}

  ngOnInit() {
    this.screenCalledQueuAudio();
    // this.announceQueuing(source);

    // this.results.su
    // console.log(subscribe);
    // const source = timer(100, 2000);
    // // console.log(source);.
    // const subscribe = await source.subscribe(async (val) => {
    //   console.log('loaddata_' + new Date());
    this.loadData(1);
    // });
  }

  async loadData(val: any) {
    // this.results = data1;
    // console.log('loaddata2_' + new Date());
    await this.timeout(2000);
    this.getDataServiceService
      .getDisPay(`screencalledqueue?uiDisplay=PharmacyScreenCalledQueue&idServicePoint=1`)
      .subscribe((data: any) => {
        // this.results = data;
        // console.log('loaddata3_' + new Date());
        // console.log(val);
        // // console.log('*********----------*********');
        // console.log(data);
        // // await this.timeout(1000);
        // if (data.length > 12) {
        data.splice(12);
        // this.results = data.splice(0, 3);
        this.resultsarr[0] = data.splice(0, 4);
        this.resultsarr[1] = data.splice(0, 4);
        this.resultsarr[2] = data.splice(0, 4);
        console.log(
          "🚀 ~ file: display1.component.ts ~ line 54 ~ Display1Component ~ .subscribe ~ results",
          this.resultsarr
        );
        // }
        this.loadData(1);
        // console.log(this.announceQueuing());
      });

    // await setTimeout(async () => {}, 50000);
    return val;
  }

  async screenCalledQueuAudio() {
    this.getScreenCalledQueuDisplayAudio();
    let resultsAudio: InterfaceScreenCalledQueue[] = this.resultsAudio;
    if (resultsAudio && resultsAudio.length > 0) {
      let nameQueue = resultsAudio[0].nameQueue;
      let nameSpeakServiceChannel = resultsAudio[0].nameSpeakServiceChannel;
      let idQueueGroup = resultsAudio[0].idQueueGroup;
      let orderQueue = resultsAudio[0].orderQueue;
      this.resultsAudioDisplay = resultsAudio;
      this.resultsAudio = [];
      let orderQueueArr: string = orderQueue.toString().padStart(3, "0");
      let orderQueueString = "";
      for (let index = 0; index < orderQueueArr.length; index++) {
        const c = orderQueueArr[index];
        orderQueueString += c;
        if (index < orderQueueArr.length - 1) {
          orderQueueString += " ";
        }
      }
      await this.getScreenCalledQueuAudio(
        "ขอเชิญคิว " + idQueueGroup + " ' ' " + orderQueueString + "  ที่ช่องบริการ" + nameSpeakServiceChannel
      );
      // await this.timeout(10000);
      //   await this.timeout(3000);
      console.log("done!");
      // await this.timeout(1000);
      this.screenCalledQueuAudio();
    } else {
      await this.timeout(1000);
      this.screenCalledQueuAudio();
    }
  }
  getScreenCalledQueuDisplayAudio() {
    this.getDataServiceService
      .getDisPay(`screencalledqueueAudio?uiDisplay=PharmacyScreenCalledQueue&idServicePoint=1`)
      .subscribe((data: any) => {
        this.resultsAudio = data;
        // console.log("🚀 ~ file: display1.component.ts ~ line 90 ~ Display1Component ~ .subscribe ~ data", data);
        // console.log(this.announceQueuing());
      });
  }
  async getScreenCalledQueuAudio(text: string) {
    try {
      this.audio.src = "http://" + environment.KPHGTTSServerHost + `?text=` + text + "&lang=th";
      await this.audio.load();
      await this.audio.play();
      return new Promise((resolve, reject) => {
        this.audio.onerror = reject;
        this.audio.onended = resolve;
      });
    } catch (error) {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }
  }
  timeout(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
