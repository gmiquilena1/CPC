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

  private onBeforeSend(event) {
    
    var xhr:XMLHttpRequest = event.xhr;
    //event.xhr.setRequestHeader("Host", "http://google.com");
    var headers = event.xhr.getAllResponseHeaders().toLowerCase();
    alert(headers);
  }

  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}
