import { Component, OnInit } from '@angular/core';
import { PROCESOS } from '../../../shared/recursos';

@Component({
  selector: 'app-tabla-procesos',
  templateUrl: './tabla-procesos.component.html',
  styleUrls: ['./tabla-procesos.component.scss']
})
export class TablaProcesosComponent implements OnInit { 

  procesos:any[];

  constructor() { }

  ngOnInit() {
    this.procesos=PROCESOS;
  }
  
}
