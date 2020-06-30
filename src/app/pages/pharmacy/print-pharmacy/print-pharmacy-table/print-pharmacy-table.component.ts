import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-print-pharmacy-table',
  templateUrl: './print-pharmacy-table.component.html',
  styleUrls: ['./print-pharmacy-table.component.scss']
})

export class PrintPharmacyTableComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['position', 'name', 'qn', 'status', 'wait'];
  dataSource = ELEMENT_DATA;

}


export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '1-001', name: 'Hydrogen', weight: 2, symbol: 'H' },
  { position: '2-001', name: 'Helium', weight: 2, symbol: 'He' },
  { position: '3-001', name: 'Lithium', weight: 3, symbol: 'Li' },
  { position: '4-001', name: 'Beryllium', weight: 4, symbol: 'Be' },
  { position: '5-001', name: 'Boron', weight: 6, symbol: 'B' },
  { position: '6-002', name: 'Carbon', weight: 7, symbol: 'C' },
  { position: '1-003', name: 'Nitrogen', weight: 8, symbol: 'N' },
  { position: '2-005', name: 'Oxygen', weight: 9, symbol: 'O' },
  { position: '3-007', name: 'Fluorine', weight: 15, symbol: 'F' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
  { position: '4-003', name: 'Neon', weight: 20, symbol: 'Ne' },
];