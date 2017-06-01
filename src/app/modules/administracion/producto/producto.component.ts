import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { OverlayPanel, DataTable, SelectItem } from 'primeng/primeng';
import { TIPOS_PRODUCTOS, PRODUCTOS, CENTROS_COSTOS, UNIDADES_MEDIDA, PROCESOS } from '../../../shared/recursos';
import { Producto } from '../../../shared/interfaces/producto.interface';
import { Material } from '../../../shared/interfaces/material.interface';
import { CentroCosto } from '../../../shared/interfaces/centro_costo.interface';
import { Utils } from '../../../shared';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @ViewChild('op1')
  op1: OverlayPanel;

  @ViewChild('dt')
  dt: DataTable;

  @ViewChild('dtMat')
  dtMat: DataTable;

  lista_tipo_producto: SelectItem[];
  lista_sub_tipo_producto: SelectItem[];

  selectedTipoProd: any = null;
  selectedSubTipoProd: any = null;
  selectedProceso: any = null;

  lista_ccostos: SelectItem[];
  materiales: Producto[];
  unidades_medida: SelectItem[];
  lista_procesos: SelectItem[];

  unidad: string = "Min";
  crear_ficha:boolean = false;

  lista_materiales: Material[];
  selectedMaterial: Material;
  newMaterial: Material = {
    codigo: "",
    nombre: "",
    unidad_medida: "",
    ccosto_consumo: null,
    cantidad: null,
    costo_total: 0,
    costo_unitario: 0
  };

  costo_total_materiales: number = 0;
  costo_total_producto: number = 0;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.materiales = PRODUCTOS;
    this.loadListaTipoProductos();
    this.loadUnidadesMedida();    
    this.lista_materiales = [];
  }

  loadListaTipoProductos() {
    let lista = TIPOS_PRODUCTOS;

    this.lista_tipo_producto = [];
    this.lista_tipo_producto.push({ label: '', value: null });
    for (var item of lista) {
      this.lista_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }
  }

  loadListaSubTipoProductos(lista) {

    this.lista_sub_tipo_producto = [];
    this.lista_sub_tipo_producto.push({ label: '', value: null });
    for (var item of lista) {
      this.lista_sub_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }
  }

  onChangeTipoProducto(event) {
    this.selectedSubTipoProd=null;
    this.loadListaSubTipoProductos(event.value.sub_tipo_producto);
    if(event.value.producto_fabricado=="No")
      this.crear_ficha=false;    
  }

  onChangeSubTipoProducto(event) {    
    this.loadListaProcesos(event.value.id);
  }

  loadListaProcesos(stp_id) {
    let precesos = PROCESOS.filter((val)=>val.sub_tipo_producto_id==stp_id);

    this.lista_procesos = [];
    this.lista_procesos.push({ label: '', value: null });
    for (var preoceso of precesos) {
      this.lista_procesos.push({ label: preoceso.codigo+" - "+preoceso.nombre, value: preoceso });
    }
  }

  onChangeProceso(event) {
    this.loadListaCcostos(event.value.centros_costos);
    this.calcularCostos();
  }

  loadListaCcostos(lista) {   

    this.lista_ccostos = [];
    this.lista_ccostos.push({ label: '', value: null });
    for (var ccosto of lista) {
      this.lista_ccostos.push({ label: ccosto.nombre, value: ccosto });
    }
  }

  loadUnidadesMedida() {
    let unidades = UNIDADES_MEDIDA;

    this.unidades_medida = [];
    this.unidades_medida.push({ label: '', value: null });
    for (var unidad of unidades) {
      this.unidades_medida.push({ label: unidad.nombre, value: unidad });
    }
  }

  onSelectMaterial(event) {
    this.newMaterial = Object.assign({}, event.data);
    this.op1.hide();
    this.dt.globalFilter.value = "";
    this.dt.reset();
  }

  agregarMaterial() {

    let lista_materiales = [...this.lista_materiales];

    for (var material of lista_materiales) {
      if (material.codigo == this.newMaterial.codigo)
        return;
    }

    var mat = {
      codigo: this.newMaterial.codigo,
      nombre: this.newMaterial.nombre,
      ccosto_consumo: this.newMaterial.ccosto_consumo,
      unidad_medida: this.newMaterial.unidad_medida,
      costo_unitario: this.newMaterial.costo_unitario,
      cantidad: this.newMaterial.cantidad,
      costo_total: Utils.round(this.newMaterial.costo_unitario * this.newMaterial.cantidad, 2)
    }

    this.costo_total_materiales = Utils.round(this.costo_total_materiales + mat.costo_total, 2);

    this.newMaterial = {
      codigo: "",
      nombre: "",
      unidad_medida: "",
      ccosto_consumo: null,
      cantidad: null,
      costo_total: 0,
      costo_unitario: 0
    };

    lista_materiales.push(mat);

    this.lista_materiales = lista_materiales;
    this.calcularCostos();
  }

  eliminarMaterial() {
    let index = this.lista_materiales.indexOf(this.selectedMaterial)
    this.lista_materiales = this.lista_materiales.filter((val, i) => i != index);

    this.costo_total_materiales = Utils.round(this.costo_total_materiales - this.selectedMaterial.costo_total, 2);

    this.selectedMaterial = null;
    this.calcularCostos();
  }

  goBack(): void {
    this._location.back();
  }

  calcularCostos(){
    this.costo_total_producto=this.selectedProceso.costos.costo_mo+this.selectedProceso.costos.costo_gf+this.costo_total_materiales;
  }

}
