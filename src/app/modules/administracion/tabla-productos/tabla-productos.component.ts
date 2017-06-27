import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/helpers/models';
import { ProductosService, LoadingService, NotificationService } from 'app/services';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {

  productos: Producto[];
  selected: Producto;

  constructor(private productoService: ProductosService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.productoService.listAll()
      .subscribe(
      (data) => this.productos = data,
      (error) => console.log(error)
      )
  }

  goDetalleProducto() {
    this.router.navigate(['/admin/detalle-producto', this.selected.id]);
  }

  eliminar() {
    this.confirmationService.confirm({
      message: '¿Seguro que desea eliminar el producto "' + this.selected.nombre + '"?',
      accept: () => {
        this.loadingService.displayLoading(true);
        this.productoService.eliminar(this.selected.id)
          .subscribe(
          (data) => {
            this.loadingService.displayLoading(false);

            switch (data.status) {
              case 'success':
                this.notificationService.sendMsg({
                  severity: 'success',
                  summary: 'Exitoso',
                  detail: data.msg
                });
                this.productos = this.productos.filter((val) => val.id!=this.selected.id);
                this.selected = null;
                break;
              case 'error':
                this.notificationService.sendMsg({
                  severity: 'error',
                  summary: 'Error',
                  detail: data.msg
                });
                break;
            }
          },
          (error) => {
            this.loadingService.displayLoading(false);
            this.notificationService.sendMsg({
              severity: 'error',
              summary: 'Error',
              detail: error
            })
          }
          )
      }
    });
  }

}
