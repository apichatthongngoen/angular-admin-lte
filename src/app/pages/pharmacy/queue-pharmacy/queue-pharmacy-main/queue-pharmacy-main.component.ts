import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-pharmacy-main',
  templateUrl: './queue-pharmacy-main.component.html',
  styleUrls: ['./queue-pharmacy-main.component.scss']
})
export class QueuePharmacyMainComponent implements OnInit {

  name_container_header = 'คิวการเรียกรับยา';
  tabs_group1 = '1';
  tabs_group2 = '2';
  tabs_group3 = '3';
  tabs_group4 = '4';
  tabs_group5 = '5';
  tabs_group6 = '6';
  tabs_group7 = '7';
  constructor() { }

  ngOnInit(): void {
  }
} 