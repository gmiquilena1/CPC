import { Component, OnInit } from '@angular/core';
import { CentroCosto } from '../../../shared/models';
import { CentrosCostosService } from '../../../services';

@Component({
  selector: 'app-tabla-centros-costos',
  templateUrl: './tabla-centros-costos.component.html',
  styleUrls: ['./tabla-centros-costos.component.scss']
})
export class TablaCentrosCostosComponent implements OnInit {

  centros_costos: CentroCosto[];

  constructor(private centrosCostosService: CentrosCostosService) { }

  ngOnInit() {
    this.centrosCostosService.getCcostos()
      .subscribe(
        (data) => this.centros_costos = data,
        (error) => console.log(error)
      );
  }

}
