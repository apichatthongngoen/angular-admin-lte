import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-queue-main',
  templateUrl: './money-queue-main.component.html',
  styleUrls: ['./money-queue-main.component.scss']
})
export class MoneyQueueMainComponent implements OnInit {
  name_container_header = 'คิวการเงิน';
  constructor() { }

  ngOnInit(): void {
  }

}
