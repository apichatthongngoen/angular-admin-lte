import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-channel-display-module",
  templateUrl: "./channel-display-module.component.html",
  styleUrls: ["./channel-display-module.component.scss"],
})
export class ChannelDisplayModuleComponent implements OnInit {
  constructor() {}
  resultsarr: { ColorQueueChannel: string; nameServiceChannel: string; nameQueue: string }[] = [
    { ColorQueueChannel: "green", nameServiceChannel: "1", nameQueue: "5-021" },
  ];
  @Input() classQueueSmall!: string;
  ngOnInit(): void {}
}
