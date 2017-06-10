import { Component, OnInit } from '@angular/core';
import { Proceso } from '../../../helpers/models';
import { ProcesosService } from '../../../services';

@Component({
  selector: 'app-tabla-procesos',
  templateUrl: './tabla-procesos.component.html',
  styleUrls: ['./tabla-procesos.component.scss']
})
export class TablaProcesosComponent implements OnInit { 

  procesos:Proceso[];

  constructor(private procesosService: ProcesosService) { }

  ngOnInit() {
    this.procesosService.getProcesos()
      .subscribe(
        (data) => this.procesos = data,
        (error) => console.log(error)
      )
  }
  
}
