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
    this.loadData(1);
  }

  async loadData(val: any) {
    await this.timeout(2000);
    this.getDataServiceService
      .getDisPay(`screencalledqueue?uiDisplay=PharmacyScreenCalledQueue&idServicePoint=1&idServicePointSub=3`)
      .subscribe((data: any) => {
        data.splice(12);
        this.resultsarr[0] = data.splice(0, 4);
        this.resultsarr[1] = data.splice(0, 4);
        this.resultsarr[2] = data.splice(0, 4);
        this.loadData(1);
      });
    return val;
  }

  async screenCalledQueuAudio() {
    let resultsAudio: InterfaceScreenCalledQueue[] = this.resultsAudio;
    if (resultsAudio && resultsAudio.length > 0) {
      let nameQueueGroup = resultsAudio[0].nameQueueGroup;
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
        "ขอเชิญคิว " + nameQueueGroup + " ' ' " + orderQueueString + "' 'ช่อง' '" + nameSpeakServiceChannel
      );
      console.log(
        "ขอเชิญคิว " + nameQueueGroup + " ' ' " + orderQueueString + "  ที่ช่องบริการ" + nameSpeakServiceChannel!
      );
      this.getScreenCalledQueuDisplayAudio();
    } else {
      await this.timeout(1000);
      this.getScreenCalledQueuDisplayAudio();
    }
  }
  getScreenCalledQueuDisplayAudio() {
    this.getDataServiceService
      .getDisPay(`screencalledqueueAudio?uiDisplay=PharmacyScreenCalledQueue&idServicePoint=1&idServicePointSub=3`)
      .subscribe((data: any) => {
        this.resultsAudio = data;
        console.log("🚀 ~ file: display1.component.ts ~ line 103 ~ Display1Component ~ .subscribe ~ data", data);
        this.screenCalledQueuAudio();
      });
  }
  async getScreenCalledQueuAudio(text: string) {
    try {
      this.audio.src = "http://" + environment.KPHGTTSServerHost + `?text=` + text + "&lang=th";
      this.audio.load();
      this.audio.playbackRate = 1.5;
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
