import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-queue-pharmacy-table',
  templateUrl: './queue-pharmacy-table.component.html',
  styleUrls: ['./queue-pharmacy-table.component.scss']
})
export class QueuePharmacyTableComponent implements OnInit {
  @Input() color_tb: string;
  @Input() tabsGroupQueuePharmacy: string;
  @Input() statusQueue: string;
  constructor() { }

  ngOnInit(): void {
    console.log('Table: ' + this.tabsGroupQueuePharmacy + ' statusQueue : ' + this.statusQueue)
  }
  displayedColumns = ['position', 'name', 'time', 'weight', 'select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
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