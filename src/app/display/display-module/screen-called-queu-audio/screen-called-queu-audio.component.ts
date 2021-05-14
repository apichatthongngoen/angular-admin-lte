import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-screen-called-queu-audio",
  templateUrl: "./screen-called-queu-audio.component.html",
  styleUrls: ["./screen-called-queu-audio.component.scss"],
})
export class ScreenCalledQueuAudioComponent implements OnInit {
  public resultsAudioDisplay = [
    {
      ColorQueueChannel: "green",
      nameServiceChannel: "ก",
      nameQueue: "1-001",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
