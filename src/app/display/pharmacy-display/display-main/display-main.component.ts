import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}

  setMenu(page: string): void {
    this.menu = false;
    if (page == "queueall") {
      this.pageQueueAll = true;
    }
  }
}
