import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-pharmacy-content',
  templateUrl: './queue-pharmacy-content.component.html',
  styleUrls: ['./queue-pharmacy-content.component.scss'],
})
export class QueuePharmacyContentComponent implements OnInit {
  @Input() tabsGroupQueuePharmacyContent: string;
  @Input() selectedValueServiceChannelContent: string;

  color_tb_green_bg = 'green-bg';
  color_tb_red_bg = 'red-bg';
  success = 'success';
  problem = 'problem';
  show = true;
  constructor() {}

  ngOnInit(): void {
    console.log(this.tabsGroupQueuePharmacyContent);
  }
}
