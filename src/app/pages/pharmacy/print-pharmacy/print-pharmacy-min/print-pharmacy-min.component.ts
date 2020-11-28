import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-pharmacy-min',
  templateUrl: './print-pharmacy-min.component.html',
  styleUrls: ['./print-pharmacy-min.component.scss']
})
export class PrintPharmacyMinComponent implements OnInit {
  queueSsuccessFully = 'success';

  name_container_header = 'พิมพ์สติกเกอร์ ห้องยา';

  constructor() { }

  ngOnInit(): void {
  }

}