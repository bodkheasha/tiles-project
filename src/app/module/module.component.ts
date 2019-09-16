import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'quantity', 'amount','total'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  date: string;
  id: number;
  quantity: number;
  amount: number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, date: '23 Jan 1998', quantity: 1.0079,  amount: 10000, total:123},
  {id: 2, date: '05 May 2017 ', quantity: 4.0026,  amount: 20000, total:123},
  {id: 3, date: '18 June 2013', quantity: 6.941,  amount: 668000, total:123},
  {id: 4, date: '20 Nov 2019', quantity: 9.0122,  amount: 90000, total:123},
  {id: 5, date: '01 Feb 2018', quantity: 10.811,  amount: 54000, total:123},
  {id: 6, date: '30 May 2016 ', quantity: 12.0107, amount: 239000, total:123},
  {id: 7, date: '12 Aug 2017',quantity: 14.0067,  amount: 60000, total:123},
 
];

