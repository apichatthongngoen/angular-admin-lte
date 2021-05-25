import { Component, Input, OnInit } from "@angular/core";
import { GetDataServiceService } from "src/app/shared/get-data-service.service";
import { InterfaceDisplayService } from "src/app/shared/interface/InterfaceQueueDisplayService";

@Component({
  selector: "app-queue-display-service",
  templateUrl: "./queue-display-service.component.html",
  styleUrls: ["./queue-display-service.component.scss"],
})
export class QueueDisplayServiceComponent implements OnInit {
  constructor(public getDataServiceService: GetDataServiceService) {}

  @Input() displayHeading!: InterfaceDisplayService;
  classQueueSmall: string = "zoommout";
  ngOnInit(): void {}
  private getQueueDisplayService() {
    return new Promise((resolve, reject) => {
      this.getDataServiceService
        .getDisPay(`queueservicedisplay?uiDisplay=pharmacdyisplay&idServicePoint=1&idServicePointSub=3`)
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
