import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../helpers/models';
import { ProductosService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {

  productos: Producto[];
  selected: Producto;

  constructor(private productosService: ProductosService, private router:Router) { }

  ngOnInit() {   
    this.productosService.listAll()
      .subscribe(
        (data) => this.productos = data,
        (error) => console.log(error)
      )
  }

  goDetalleProducto(){
    this.router.navigate(['/admin/detalle-producto',this.selected.id]);
  }

}
