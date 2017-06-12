import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OverlayPanel, DataTable, SelectItem } from 'primeng/primeng';
import { TIPOS_PRODUCTOS, PRODUCTOS, CENTROS_COSTOS, UNIDADES_MEDIDA, PROCESOS } from '../../../helpers';
import { Producto, Proceso, Material, CentroCosto, TipoProducto, SubTipoProducto } from '../../../helpers/models';
import { Utils } from '../../../helpers';
import { ProductosService, ProcesosService } from '../../../services';

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

  producto: Producto = new Producto();
  id_producto: number;
  procesos: Proceso[];

  lista_tipo_producto: SelectItem[] = [];
  lista_sub_tipo_producto: SelectItem[] = [];

  selectedTipoProd: any = null;
  selectedSubTipoProd: any = null;
  selectedProceso: any = null;

  lista_ccostos: SelectItem[];
  materiales: Producto[];
  unidades_medida: SelectItem[];
  lista_procesos: SelectItem[];

  unidad: string = "Min";
  crear_ficha: boolean = false;

  lista_materiales: Material[];
  selectedMaterial: Material;
  newMaterial: Material = new Material();

  costo_total_materiales: number = 0;
  costo_total_producto: number = 0;

  constructor(private _location: Location,
    private route: ActivatedRoute,
    private productoService: ProductosService,
    private procesosService: ProcesosService) { }

  ngOnInit() {
    this.materiales = PRODUCTOS;
    this.lista_materiales = [];

    this.procesosService.getProcesos().subscribe(
      (data) => {
        this.procesos = data;
        this.route.params.subscribe(params => {
          let id = +params['id'];
          if (id) {
            this.productoService.buscar(id)
              .subscribe(
              (data) => {
                this.producto = data;
                this.loadListaTipoProductosDetalle();
                this.loadUnidadesMedidaDetalle();
                this.loadListaProcesosDetalle(this.producto.sub_tipo_producto.id,this.producto.ficha_producto.proceso.id);
                for (var item of this.producto.ficha_producto.lista_materiales) {
                  this.costo_total_materiales += item.costo_total;
                }
                Utils.round(this.costo_total_materiales,2);
                this.costo_total_producto = this.producto.costo_unitario;
              },
              (error) => console.log(error)
              );
          } else {
            this.loadListaTipoProductos();
            this.loadUnidadesMedida();
          }
        });

      },
      (error) => console.log(error)
    );
  }

  loadListaTipoProductosDetalle() {
    let lista = TIPOS_PRODUCTOS;

    this.lista_tipo_producto.push({ label: this.producto.sub_tipo_producto.tipo_producto.codigo + " - " + this.producto.sub_tipo_producto.tipo_producto.nombre, value: this.producto.sub_tipo_producto.tipo_producto });

    lista = lista.filter((val) => val.id != this.producto.sub_tipo_producto.tipo_producto.id)

    for (var item of lista) {
      this.lista_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }

    let tipo = TIPOS_PRODUCTOS.find((val) => val.id == this.producto.sub_tipo_producto.tipo_producto.id);

    this.loadListaSubTipoProductosDetalle(tipo.sub_tipo_producto);

  }

  loadListaSubTipoProductosDetalle(lista: any[]) {
    this.lista_sub_tipo_producto = [];

    this.lista_sub_tipo_producto.push({ label: this.producto.sub_tipo_producto.codigo + " - " + this.producto.sub_tipo_producto.nombre, value: this.producto.sub_tipo_producto });

    lista = lista.filter((val) => val.id != this.producto.sub_tipo_producto.id);

    for (var item of lista) {
      this.lista_sub_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }

  }

  loadUnidadesMedidaDetalle() {
    let unidades = UNIDADES_MEDIDA;
    this.unidades_medida = [];
    this.unidades_medida.push({ label: this.producto.unidad_medida.nombre, value: this.producto.unidad_medida });

    unidades = unidades.filter((val) => val.id != this.producto.unidad_medida.id);

    for (var unidad of unidades) {
      this.unidades_medida.push({ label: unidad.nombre, value: unidad });
    }
  }

  loadListaProcesosDetalle(stp_id,proceso_id) {
    let procesos = this.procesos.filter((val) => val.sub_tipo_producto.id == stp_id);
    let proceso = this.procesos.find((val)=>val.id==proceso_id)
    procesos = procesos.filter((val)=>val.id!=proceso_id);

    this.lista_procesos = [];
    this.lista_procesos.push({ label: proceso.codigo + " - " + proceso.nombre, value: proceso });
    for (var preoceso of procesos) {
      this.lista_procesos.push({ label: preoceso.codigo + " - " + preoceso.nombre, value: preoceso });
    }

    this.loadListaCcostosDetalle(proceso.centros_costos);
  }

  loadListaCcostosDetalle(lista) {

    this.lista_ccostos = [];
    this.lista_ccostos.push({ label: '', value: null });
    for (var ccosto of lista) {
      this.lista_ccostos.push({ label: ccosto.nombre, value: ccosto });
    }
  }

  loadListaTipoProductos() {
    let lista = TIPOS_PRODUCTOS;

    this.lista_tipo_producto.push({ label: '', value: null });

    for (var item of lista) {
      this.lista_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }
  }

  loadListaSubTipoProductos(lista: any[]) {
    this.lista_sub_tipo_producto = [];
    this.lista_sub_tipo_producto.push({ label: '', value: null });
    for (var item of lista) {
      this.lista_sub_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }
  }

  onChangeTipoProducto(event) {
    this.selectedSubTipoProd = null;
    this.loadListaSubTipoProductos(event.value.sub_tipo_producto);
    if (event.value.producto_fabricado == "No")
      this.crear_ficha = false;
  }

  onChangeSubTipoProducto(event) {
    this.loadListaProcesos(event.value.id);
  }

  loadListaProcesos(stp_id) {
    let precesos = this.procesos.filter((val) => val.sub_tipo_producto.id == stp_id);

    this.lista_procesos = [];
    this.lista_procesos.push({ label: '', value: null });
    for (var preoceso of precesos) {
      this.lista_procesos.push({ label: preoceso.codigo + " - " + preoceso.nombre, value: preoceso });
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

    let lista_materiales = [];

    if(this.producto.ficha_producto.lista_materiales!=null)
      lista_materiales = [...this.producto.ficha_producto.lista_materiales];

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

    this.newMaterial = new Material();

    lista_materiales.push(mat);

    this.producto.ficha_producto.lista_materiales = lista_materiales;
    this.calcularCostos();
  }

  eliminarMaterial() {
    let index = this.producto.ficha_producto.lista_materiales.indexOf(this.selectedMaterial)
    this.producto.ficha_producto.lista_materiales = this.producto.ficha_producto.lista_materiales.filter((val, i) => i != index);

    this.costo_total_materiales = Utils.round(this.costo_total_materiales - this.selectedMaterial.costo_total, 2);

    this.selectedMaterial = null;
    this.calcularCostos();
  }

  goBack(): void {
    this._location.back();
  }

  calcularCostos() {
    this.costo_total_producto = Utils.round(this.producto.ficha_producto.proceso.costos.costo_mo + this.producto.ficha_producto.proceso.costos.costo_gf + this.costo_total_materiales,2);
    console.log(this.producto);
  }

}
