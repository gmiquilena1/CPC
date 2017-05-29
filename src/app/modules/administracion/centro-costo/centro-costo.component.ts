import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styleUrls: ['./centro-costo.component.scss']
})
export class CentroCostoComponent implements OnInit {

  constructor(private _location:Location) { }

  reporta:boolean = false;

  ngOnInit() {
  }

  goBack(): void {
    this._location.back();
  }

}
