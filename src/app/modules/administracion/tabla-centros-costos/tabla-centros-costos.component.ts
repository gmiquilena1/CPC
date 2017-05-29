import { Component, OnInit } from '@angular/core';
import { CENTROS_COSTOS } from '../../../shared/recursos';

@Component({
  selector: 'app-tabla-centros-costos',
  templateUrl: './tabla-centros-costos.component.html',
  styleUrls: ['./tabla-centros-costos.component.scss']
})
export class TablaCentrosCostosComponent implements OnInit {

  centros_costos: any[];

  constructor() { }

  ngOnInit() {
    this.centros_costos = CENTROS_COSTOS;
  }

}
