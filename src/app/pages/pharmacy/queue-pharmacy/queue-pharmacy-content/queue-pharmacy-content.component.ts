import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-pharmacy-content',
  templateUrl: './queue-pharmacy-content.component.html',
  styleUrls: ['./queue-pharmacy-content.component.scss']
})
export class QueuePharmacyContentComponent implements OnInit {
  @Input() tabs_group: string;
  constructor() { }

  ngOnInit(): void {
  }

}
