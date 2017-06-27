import { Component, OnInit } from '@angular/core';
import { Message,SelectItem } from 'primeng/primeng';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  msgs: Message[] = [];
  meses_anio:SelectItem[] = [];
  cambiar_mes:boolean;


  constructor() { }

  ngOnInit(): void {
    this.msgs.push({ severity: 'warn', summary: 'Atención', detail: 'Se han modificado los costos de algunos productos. Para generar los reportes actualizados recuerde recostear los productos' });
    this.msgs.push({ severity: 'info', summary: 'Atención', detail: 'Se han cargado nuevos conceptos de gastos. Para generar los reportes actualizados recuerde recostear los productos' });

    this.meses_anio.push({ label: 'Selecione...', value: null });
    this.meses_anio.push({ label: 'Abril 2014', value: { id: 1, name: 'New York', code: 'NY' } });
    this.meses_anio.push({ label: 'Mayo 2014', value: { id: 2, name: 'Rome', code: 'RM' } });
    this.meses_anio.push({ label: 'Junio 2014', value: { id: 3, name: 'London', code: 'LDN' } });
    this.meses_anio.push({ label: 'Julio 2014', value: { id: 4, name: 'Istanbul', code: 'IST' } });
    this.meses_anio.push({ label: 'Agosto 2014', value: { id: 5, name: 'Paris', code: 'PRS' } });
  }
}
