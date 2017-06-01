import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../../../shared';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {

  productos:any[];

  constructor() { }

  ngOnInit() {
    this.productos = PRODUCTOS;
  }

}
