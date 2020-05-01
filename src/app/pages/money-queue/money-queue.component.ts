import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-queue',
  templateUrl: './money-queue.component.html',
  styleUrls: ['./money-queue.component.scss']
})
export class MoneyQueueComponent implements OnInit {
  name_container_header = 'คิวการเงิน';
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns2 = ['position', 'name', 'weight', 'times'];
  displayedColumns = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'A001', name: 'Hydrogen', weight: 2, symbol: 'H' },
  { position: 'B001', name: 'Helium', weight: 2, symbol: 'He' },
  { position: 'C001', name: 'Lithium', weight: 3, symbol: 'Li' },
  { position: 'D001', name: 'Beryllium', weight: 4, symbol: 'Be' },
  { position: 'E001', name: 'Boron', weight: 6, symbol: 'B' },
  { position: 'A002', name: 'Carbon', weight: 7, symbol: 'C' },
  { position: 'B003', name: 'Nitrogen', weight: 8, symbol: 'N' },
  { position: 'D005', name: 'Oxygen', weight: 9, symbol: 'O' },
  { position: 'C007', name: 'Fluorine', weight: 15, symbol: 'F' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20, symbol: 'Ne' },
];