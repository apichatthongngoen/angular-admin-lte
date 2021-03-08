import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-money-queue-content",
  templateUrl: "./money-queue-content.component.html",
  styleUrls: ["./money-queue-content.component.scss"],
})
export class MoneyQueueContentComponent implements OnInit {
  @Input() selectedValueServiceChannel: string;

  color_tb_green_bg = "green-bg";
  color_tb_red_bg = "red-bg";
  //ประเภทคิว
  problem = "problem";
  success = "success";
  constructor() {}

  ngOnInit(): void {}
}
