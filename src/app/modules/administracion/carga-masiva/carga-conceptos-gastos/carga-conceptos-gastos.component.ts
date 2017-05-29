import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-conceptos-gastos',
  templateUrl: './carga-conceptos-gastos.component.html',
  styleUrls: ['./carga-conceptos-gastos.component.scss']
})
export class CargaConceptosGastosComponent implements OnInit {

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
