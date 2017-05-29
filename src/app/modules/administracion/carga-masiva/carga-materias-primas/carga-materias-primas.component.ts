import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-materias-primas',
  templateUrl: './carga-materias-primas.component.html',
  styleUrls: ['./carga-materias-primas.component.scss']
})
export class CargaMateriasPrimasComponent implements OnInit {

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
