import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-money-queue',
  templateUrl: './money-queue.component.html',
  styleUrls: ['./money-queue.component.scss']
})
export class MoneyQueueComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['position', 'name', 'status'];
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
  { position: 'D001', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 'E001', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 'A001', name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 'A001', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 'A001', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 'A001', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 'A001', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 'A001', name: 'Neon', weight: 20.1797, symbol: 'Ne' },

];