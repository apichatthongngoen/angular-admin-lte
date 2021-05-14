import { Component, Input, OnInit } from "@angular/core";
import { InterfaceQueueGroup } from "src/app/shared/interface/InterfaceQueueGroup";

@Component({
  selector: "app-queue-all-module-grup-tables",
  templateUrl: "./queue-all-module-grup-tables.component.html",
  styleUrls: ["./queue-all-module-grup-tables.component.scss"],
})
export class QueueAllModuleGrupTablesComponent implements OnInit {
  constructor() {}
  @Input() queueAllModuleGroupTables: InterfaceQueueGroup;

  public groupcolor1: string = "green";
  ngOnInit(): void {}
}
