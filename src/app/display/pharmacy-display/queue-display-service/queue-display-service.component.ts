import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetDataServiceService } from "src/app/shared/get-data-service.service";
import {
  InterfaceDisplayService,
  InterfaceQueueDisplayService,
} from "src/app/shared/interface/InterfaceQueueDisplayService";

@Component({
  selector: "app-queue-display-service",
  templateUrl: "./queue-display-service.component.html",
  styleUrls: ["./queue-display-service.component.scss"],
})
export class QueueDisplayServiceComponent implements OnInit {
  constructor(
    public getDataServiceService: GetDataServiceService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  @Input() displayHeading!: InterfaceDisplayService;
  queueDisplayServiceList!: InterfaceQueueDisplayService;
  classQueueSmall: string = "zoommout";
  async ngOnInit(): Promise<void> {
    if (this.displayHeading) {
      this.queueDisplayServiceList = await this.getQueueDisplayService();
      this.reloadDat();
    } else {
      this.setDataFromUrl();
    }
  }
  reloadDat() {
    setTimeout(async () => {
      this.queueDisplayServiceList = await this.getQueueDisplayService();
      this.reloadDat();
    }, 6000);
  }
  private getQueueDisplayService(): Promise<InterfaceQueueDisplayService> {
    let url: string = ``;
    return new Promise((resolve, reject) => {
      this.getDataServiceService
        .getDisPay(
          `getqueuedisplayservice?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3&idServiceChannel=${this.displayHeading.idServiceChannel}`
        )
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject();
          }
        );
    });
  }
  async setDataFromUrl() {
    const displayService: InterfaceDisplayService[] = await this.getDisplayService();
    let displayHeading = displayService.filter((item) => {
      const id: string = this.route.snapshot.paramMap.get("id");
      if (item.idDisplay == id) {
        return item;
      }
    });
    this.displayHeading = displayHeading[0];
    this.queueDisplayServiceList = await this.getQueueDisplayService();
    this.reloadDat();
  }
  getDisplayService(): Promise<InterfaceDisplayService[]> {
    return new Promise((resolve, reject) => {
      this.getDataServiceService
        .getDisPay(
          `getdisplayservice?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3&codeDisplay=600203`
        )
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject();
          }
        );
    });
  }
}
