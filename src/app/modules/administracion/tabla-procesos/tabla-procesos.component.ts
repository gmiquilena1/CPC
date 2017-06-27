import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proceso } from 'app/helpers/models';
import { ProcesosService, LoadingService, NotificationService } from 'app/services';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-tabla-procesos',
  templateUrl: './tabla-procesos.component.html',
  styleUrls: ['./tabla-procesos.component.scss']
})
export class TablaProcesosComponent implements OnInit {

  procesos: Proceso[];
  selected: Proceso;

  constructor(private procesosService: ProcesosService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private loadingService: LoadingService,
    private notificationService: NotificationService) { }

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

  eliminar() {
    this.confirmationService.confirm({
      message: '¿Seguro que desea eliminar el proceso "' + this.selected.codigo + ' - ' +this.selected.nombre + '"?',
      accept: () => {
        this.loadingService.displayLoading(true);
        this.procesosService.eliminar(this.selected.id)
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
                this.procesos = this.procesos.filter((val) => val.id!=this.selected.id);
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
