import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.scss']
})
export class Display2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  qndisplay_row1 = [
    { "id": 1, "qn": "2-001", "dot": "6", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "2-002", "dot": "6", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "2-003", "dot": "6", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "2-004", "dot": "6", "bgcolor": "primary-rx" },
    { "id": 1, "qn": "2-005", "dot": "6", "bgcolor": "primary-rx" },];
  qndisplay_row2 = [
    { "id": 1, "qn": "3-001", "dot": "7", "bgcolor": "blue" },
    { "id": 1, "qn": "3-002", "dot": "7", "bgcolor": "blue" },
    { "id": 1, "qn": "3-003", "dot": "7", "bgcolor": "blue" },
    { "id": 1, "qn": "3-004", "dot": "7", "bgcolor": "blue" },
    { "id": 1, "qn": "3-005", "dot": "7", "bgcolor": "blue" },]
  qndisplay_row3 = [
    { "id": 1, "qn": "5-001", "dot": "4", "bgcolor": "red" },
    { "id": 1, "qn": "5-002", "dot": "4", "bgcolor": "red" },
    { "id": 1, "qn": "5-003", "dot": "4", "bgcolor": "red" },
    { "id": 1, "qn": "5-004", "dot": "4", "bgcolor": "red" },
    { "id": 1, "qn": "5-005", "dot": "4", "bgcolor": "red" },]

}
