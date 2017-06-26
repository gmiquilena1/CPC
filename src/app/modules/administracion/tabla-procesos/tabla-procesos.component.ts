import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proceso } from '../../../helpers/models';
import { ProcesosService } from '../../../services';

@Component({
  selector: 'app-tabla-procesos',
  templateUrl: './tabla-procesos.component.html',
  styleUrls: ['./tabla-procesos.component.scss']
})
export class TablaProcesosComponent implements OnInit {

  procesos: Proceso[];
  selected: Proceso;

  constructor(private procesosService: ProcesosService,
    private router: Router) { }

  ngOnInit() {
    this.procesosService.getProcesos()
      .subscribe(
        (data) => this.procesos = data,
        (error) => console.log(error)
      )
  }

  goDetalleProceso() {
    this.router.navigate(['/admin/detalle-proceso', this.selected.id]);
  }

}
