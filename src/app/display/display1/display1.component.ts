import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.scss']
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  qndisplay1 = [
    { "id": 1, "qn": "1-001", "dot": "5", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "1-002", "dot": "5", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "1-003", "dot": "5", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "1-004", "dot": "5", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "1-005", "dot": "5", "bgcolor": "primary-rx" },



  ];

}

