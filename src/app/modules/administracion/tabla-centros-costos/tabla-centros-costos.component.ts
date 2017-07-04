import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentroCosto } from 'app/helpers/models';
import { CentrosCostosService, LoadingService, NotificationService } from 'app/services';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-tabla-centros-costos',
  templateUrl: './tabla-centros-costos.component.html',
  styleUrls: ['./tabla-centros-costos.component.scss']
})
export class TablaCentrosCostosComponent implements OnInit {

  centros_costos: CentroCosto[];
  selected: CentroCosto;

  constructor(private centrosCostosService: CentrosCostosService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.centrosCostosService.listAll()
      .subscribe(
      (data) => this.centros_costos = data,
      (error) => console.log(error)
      );
  }

  goDetalleCcosto() {
    this.router.navigate(['/admin/detalle-ccosto', this.selected.id]);
  }

  eliminar() {
    this.confirmationService.confirm({
      message: '¿Seguro que desea eliminar el Centro de Costo "' + this.selected.codigo + ' - ' + this.selected.nombre + '"?',
      accept: () => {
        this.loadingService.displayLoading(true);
        this.centrosCostosService.eliminar(this.selected.id)
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
                this.centros_costos = this.centros_costos.filter((val) => val.id != this.selected.id);
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
