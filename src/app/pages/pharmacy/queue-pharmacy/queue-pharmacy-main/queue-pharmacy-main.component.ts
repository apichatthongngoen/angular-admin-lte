import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-pharmacy-main',
  templateUrl: './queue-pharmacy-main.component.html',
  styleUrls: ['./queue-pharmacy-main.component.scss']
})
export class QueuePharmacyMainComponent implements OnInit {

  name_container_header = 'คิวการเรียกรับยา';
  constructor() { }

  ngOnInit(): void {
  }

}
