import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-pharmacy-main',
  templateUrl: './queue-pharmacy-main.component.html',
  styleUrls: ['./queue-pharmacy-main.component.scss']
})
export class QueuePharmacyMainComponent implements OnInit {

  name_container_header = 'คิวการเรียกรับยา';
  tabsGroup1 = '1';
  tabsGroup2 = '2';
  tabsGroup3 = '3';
  tabsGroup4 = '4';
  tabsGroup5 = '5';
  tabsGroup6 = '6';
  tabsGroup7 = '6';
  constructor() { }

  ngOnInit(): void {
  }
} 