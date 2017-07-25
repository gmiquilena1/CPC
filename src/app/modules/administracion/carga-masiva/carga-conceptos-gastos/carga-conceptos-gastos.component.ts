import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ConfirmationService } from 'primeng/primeng';
import { CargaMasivaService, LoadingService, NotificationService } from 'app/services';

@Component({
  selector: 'app-carga-conceptos-gastos',
  templateUrl: './carga-conceptos-gastos.component.html',
  styleUrls: ['./carga-conceptos-gastos.component.scss']
})
export class CargaConceptosGastosComponent implements OnInit {

  constructor(private cargaMasivaService: CargaMasivaService,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {

  }

  uploadedFiles: any[] = [];

  onBeforeUpload(event) {
    console.log(event);
  }

  onBeforeSend(event) {
    //event.xhr.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem("AccessToken"));
    //let url = environment.origin + "api/carga_masiva/upload?token="+this.auth.getAccesToken();
    //event.xhr.open('POST', url, true);
  }

  uploadHandler(event) {
    console.log(event.files);
    this.cargaMasivaService.subirArchivo(event.files[0], null).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
