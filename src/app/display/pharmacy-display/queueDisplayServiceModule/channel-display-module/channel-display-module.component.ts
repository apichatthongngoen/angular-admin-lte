import { Component, Input, OnInit } from "@angular/core";
import {
  displayQueueForDisplayService,
  InterfaceDisplayService,
  InterfaceQueueDisplayService,
} from "src/app/shared/interface/InterfaceQueueDisplayService";

@Component({
  selector: "app-channel-display-module",
  templateUrl: "./channel-display-module.component.html",
  styleUrls: ["./channel-display-module.component.scss"],
})
export class ChannelDisplayModuleComponent implements OnInit {
  constructor() {}
  @Input() queueDisplayServiceitem: displayQueueForDisplayService;
  @Input() displayHeading: InterfaceDisplayService;
  resultsarr: { ColorQueueChannel: string; nameServiceChannel: string; nameQueue: string }[] = [
    { ColorQueueChannel: "green", nameServiceChannel: "1", nameQueue: "5-021" },
  ];
  @Input() classQueueSmall!: string;
  ngOnInit(): void {}
}
