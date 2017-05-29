import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-horas-ccostos',
  templateUrl: './carga-horas-ccostos.component.html',
  styleUrls: ['./carga-horas-ccostos.component.scss']
})
export class CargaHorasCcostosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadedFiles: any[] = [];

  onBeforeUpload(event) {
    console.log(event);
  }

  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
