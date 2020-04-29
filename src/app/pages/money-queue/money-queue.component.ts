import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-queue',
  templateUrl: './money-queue.component.html',
  styleUrls: ['./money-queue.component.scss']
})
export class MoneyQueueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
  { position: 'A001', name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 'B001', name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 'C001', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 'D001', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 'E001', name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 'A002', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 'B003', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 'D005', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 'C007', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'E003', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];