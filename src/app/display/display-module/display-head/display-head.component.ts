import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-display-head",
  templateUrl: "./display-head.component.html",
  styleUrls: ["./display-head.component.scss"],
})
export class DisplayHeadComponent implements OnInit {
  @Input() classHeading: string;

  @Input() nameDisplayHeading: string;

  constructor() {}

  ngOnInit(): void {}
}
