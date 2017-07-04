import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { CentroCosto, TipoCcosto, DataFormCentroCosto } from 'app/helpers';
import { CentrosCostosService, LoadingService, NotificationService } from 'app/services';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styleUrls: ['./centro-costo.component.scss']
})
export class CentroCostoComponent implements OnInit {

  centroCosto: CentroCosto = new CentroCosto();
  dataForm: DataFormCentroCosto;

  title: string;
  classCard: string;

  lista_tipos: SelectItem[];

  constructor(private _location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private centrosCostoService: CentrosCostosService,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {

    if (this.router.url == "/admin/ccosto") {
      this.title = "Nuevo";
      this.classCard = "card card-accent-success";
    }
    else {
      this.title = "Detalle";
      this.classCard = "card card-accent-primary";
    }

    this.loadingService.displayLoading(true);
    this.centrosCostoService.dataForm().subscribe(
      (data) => {
        this.dataForm = data;
        this.route.params.subscribe(params => {
          let id = +params['id'];
          if (id) {
            this.centrosCostoService.buscar(id).subscribe(
              (data) => {
                this.loadingService.displayLoading(false);
                this.centroCosto = data;
                this.loadListaTiposCcostoDetalle();
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
          } else {
            this.loadingService.displayLoading(false);
            this.loadListaTiposCcosto();
          }
        })
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

  loadListaTiposCcostoDetalle() {
    let lista = this.dataForm.tipos_centro_costo.filter((val) => val.id != this.centroCosto.tipo_centro_costo.id);

    this.lista_tipos = [];
    this.lista_tipos.push({ label: this.centroCosto.tipo_centro_costo.nombre, value: this.centroCosto.tipo_centro_costo });
    for (var item of lista) {
      this.lista_tipos.push({ label: item.nombre, value: item });
    }
  }

  loadListaTiposCcosto() {
    let lista = this.dataForm.tipos_centro_costo;

    this.lista_tipos = [];
    this.lista_tipos.push({ label: '', value: null });
    for (var item of lista) {
      this.lista_tipos.push({ label: item.nombre, value: item });
    }
  }

  goBack(): void {
    this._location.back();
  }

  guardar() {

    this.confirmationService.confirm({
      message: '¿Seguro que desea guardar el Centro de Costo?',
      accept: () => {

        this.loadingService.displayLoading(true);

        this.centrosCostoService.guardar(this.centroCosto).subscribe(
          (data) => {
            this.loadingService.displayLoading(false);
            switch (data.status) {
              case 'success':
                this.notificationService.sendMsg({
                  severity: 'success',
                  summary: 'Exitoso',
                  detail: data.msg
                })
                this.router.navigate(['/admin/tabla-ccostos']);
                break;
              case 'error':
                this.notificationService.sendMsg({
                  severity: 'error',
                  summary: 'Error',
                  detail: data.msg
                })
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
        );
      }
    })
  }

}
