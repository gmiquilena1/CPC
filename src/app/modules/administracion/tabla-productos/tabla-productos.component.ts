import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../shared/interfaces';
import { ProductosService } from '../../../services';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {   

    this.productosService.getProductos()
      .subscribe(
        (data) => this.productos = data,
        (error) => console.log(error)
      )
  }

}
