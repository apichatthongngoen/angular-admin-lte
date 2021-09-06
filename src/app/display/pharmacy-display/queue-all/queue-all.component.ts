import { Component, OnInit } from '@angular/core';
import { InterfaceAllQueueDay } from 'src/app/shared/interface/InterfaceAllQueueDay';
// import { InterfaceDisplayGroupAllDataQueue } from "src/app/shared/interface/InterfaceDisplayGroupAllDataQueue";
import { GetDataServiceService } from '../../../shared/get-data-service.service';
import { InterfaceQueueGroup } from '../../../shared/interface/InterfaceQueueGroup';
export declare interface InterfaceQueueItemByStatus {
  nameQueue: string;
}
@Component({
  selector: 'app-queue-all',
  templateUrl: './queue-all.component.html',
  styleUrls: ['./queue-all.component.scss'],
})
export class QueueAllComponent implements OnInit {
  // queueAllModuleGroupTables: InterfaceDisplayGroupAllDataQueue[];
  queueAllProblem: number[];
  dataInfoGroupQueue: InterfaceQueueGroup[] = null;
  constructor(public getDataServiceService: GetDataServiceService) {}
  queueProblem: InterfaceQueueItemByStatus[];
  allQueueDay: InterfaceAllQueueDay;
  async ngOnInit(): Promise<void> {
    this.getDataInfoGroupQueue();
    this.loadData();
  }
  async loadData() {
    await this.timeout(1000);
    if (this.dataInfoGroupQueue) {
      await this.getQueueItemLast();
      this.getQueueproblem();
      this.getAllQueueDay();
      await this.timeout(8000);
      this.loadData();
    } else {
      await this.timeout(3000);
      this.loadData();
    }
  }
  private getDataInfoGroupQueue() {
    return this.getDataServiceService
      .getDisPay(
        `countqueuegroup?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3`
      )
      .subscribe(
        (data: any) => {
          this.dataInfoGroupQueue = data;
        },
        (error: any) => {
          this.loadData();
        }
      );
  }
  private async getQueueItemLast(): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.getDataServiceService
        .getDisPay(
          `queueitemlast?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3`
        )
        .subscribe(
          (queueitemLast: any) => {
            // this.dataInfoGroupQueue = data;
            // let countQueueGroup: InterfaceQueueGroup[] = this.dataInfoGroupQueue;
            // console.log(
            //   "🚀 ~ file: queue-all.component.ts ~ line 49 ~ QueueAllComponent ~ getQueueItemLast ~ countQueueGroup",
            //   countQueueGroup
            // );
            this.dataInfoGroupQueue.map(async (data) => {
              if (queueitemLast) {
                queueitemLast.forEach((queueItem) => {
                  if (data.idQueueGroup == queueItem.idQueueGroup) {
                    Object.assign(data, { queueItem });
                    console.log(
                      '🚀 ~ file: queue-all.component.ts ~ line 71 ~ QueueAllComponent ~ queueitemLast.forEach ~ data',
                      data
                    );
                  }
                });
              }
            });
            console.log(this.dataInfoGroupQueue);
            resolve();
          },
          (err) => {
            this.loadData();
          }
        )
    );
  }
  private async getQueueproblem() {
    return this.getDataServiceService
      .getDisPay(
        `queueitembystatusqueue?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3&statusQueue=2`
      )
      .subscribe(
        (queueproblem: any) => {
          this.queueProblem = queueproblem;
        },
        (error: any) => {
          this.loadData();
        }
      );
  }
  private async getAllQueueDay() {
    return this.getDataServiceService
      .getDisPay(
        `getallqueueday?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3&statusQueue=2`
      )
      .subscribe(
        (data: any) => {
          console.log(
            '🚀 ~ file: queue-all.component.ts ~ line 84 ~ QueueAllComponent ~ .subscribe ~ data',
            data
          );
          this.allQueueDay = data;
        },
        (error: any) => {
          this.loadData();
        }
      );
  }
  timeout(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
