import { Component, OnInit } from "@angular/core";
import { GetDataServiceService } from "src/app/shared/get-data-service.service";
import { InterfaceDisplayService } from "src/app/shared/interface/InterfaceQueueDisplayService";

@Component({
  selector: "app-display-main",
  templateUrl: "./display-main.component.html",
  styleUrls: ["./display-main.component.scss"],
})
export class DisplayMainComponent implements OnInit {
  public classHeading = "bg-primary-rx";
  public nameDisplayHeading = "จุดรับบริการ รับยา / การเงิน";
  public menu: boolean = true;
  public pageQueueAll: boolean = false;
  displayService!: InterfaceDisplayService[];
  constructor(public getDataServiceService: GetDataServiceService) {}

  async ngOnInit(): Promise<void> {
    this.displayService = await await this.getDisplayService();
    this.displayService.map((data) => {
      // if (displayService) {
      //   displayService.forEach((displayServiceItem) => {

      Object.assign(data, { displayServiceItemShow: false });

      //   });
      // }
    });
    console.log(
      "🚀 ~ file: display-main.component.ts ~ line 19 ~ DisplayMainComponent ~ ngOnInit ~ displayService",
      this.displayService
    );
  }

  setMenu(page: string): void {
    console.log("🚀 ~ file: display-main.component.ts ~ line 36 ~ DisplayMainComponent ~ setMenu ~ page", page);
    if (page) {
      this.menu = false;
      this.displayService.map((data) => {
        if (data.idDisplay == page) {
          data.displayServiceItemShow = true;
        }
      });
    }
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
