import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayPanel, DataTable, SelectItem, ConfirmationService } from 'primeng/primeng';
import { DataFormProducto, Producto, Proceso, Material, CentroCosto, TipoProducto, SubTipoProducto } from 'app/helpers/models';
import { Utils } from 'app/helpers';
import { LoadingService, ProductosService, NotificationService } from 'app/services';

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

  dataForm: DataFormProducto;

  title: string;
  classCard: string;

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
    private router: Router,
    private productoService: ProductosService,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private confirmationService: ConfirmationService)
  { }

  ngOnInit() {

    if (this.router.url == "/admin/producto") {
      this.title = "Nuevo";
      this.classCard = "card card-accent-success";
    }
    else {
      this.title = "Detalle";
      this.classCard = "card card-accent-primary";
    }

    this.lista_materiales = [];
    this.loadingService.displayLoading(true);
    this.productoService.dataForm().subscribe(
      (data) => {
        this.dataForm = data;
        this.materiales = this.dataForm.materiales;
        this.route.params.subscribe(params => {
          let id = +params['id'];
          if (id) {
            this.productoService.buscar(id)
              .subscribe(
              (data) => {
                this.producto = data;
                this.loadListaTipoProductosDetalle();
                this.loadUnidadesMedidaDetalle();
                if (this.producto.tiene_ficha) {
                  this.loadListaProcesosDetalle(this.producto.sub_tipo_producto.id, this.producto.ficha_producto.proceso.id);
                  for (var item of this.producto.ficha_producto.lista_materiales) {
                    this.costo_total_materiales += item.costo_total;
                  }
                  this.costo_total_materiales = Utils.round(this.costo_total_materiales, 2);
                  this.calcularCostos();
                }
                this.loadingService.displayLoading(false);
              },
              (error) => {
                console.log(error);
                this.loadingService.displayLoading(false);
              }
              );
          } else {
            this.loadingService.displayLoading(false);
            this.loadListaTipoProductos();
            this.loadUnidadesMedida();
          }
        });

      },
      (error) => {
        console.log(error);
        this.loadingService.displayLoading(false);
      }
    );
  }

  loadListaTipoProductosDetalle() {

    this.selectedTipoProd = this.producto.sub_tipo_producto.tipo_producto;

    let lista = this.dataForm.tipos_producto;

    this.lista_tipo_producto = [];

    this.lista_tipo_producto.push({ label: this.producto.sub_tipo_producto.tipo_producto.codigo + " - " + this.producto.sub_tipo_producto.tipo_producto.nombre, value: this.producto.sub_tipo_producto.tipo_producto });

    lista = lista.filter((val) => val.id != this.producto.sub_tipo_producto.tipo_producto.id)

    for (var item of lista) {
      this.lista_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }

    let tipo = this.dataForm.tipos_producto.find((val) => val.id == this.producto.sub_tipo_producto.tipo_producto.id);

    this.loadListaSubTipoProductosDetalle(tipo.sub_tipo_producto);

  }

  loadListaSubTipoProductosDetalle(lista: any[]) {

    this.selectedSubTipoProd = Object.assign({}, this.producto.sub_tipo_producto);

    this.lista_sub_tipo_producto = [];

    this.lista_sub_tipo_producto.push({ label: this.producto.sub_tipo_producto.codigo + " - " + this.producto.sub_tipo_producto.nombre, value: this.producto.sub_tipo_producto });

    lista = lista.filter((val) => val.id != this.producto.sub_tipo_producto.id);

    for (var item of lista) {
      this.lista_sub_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
    }

  }

  loadUnidadesMedidaDetalle() {
    let unidades = this.dataForm.unidades_medida;
    this.unidades_medida = [];
    this.unidades_medida.push({ label: this.producto.unidad_medida.nombre, value: this.producto.unidad_medida });

    unidades = unidades.filter((val) => val.id != this.producto.unidad_medida.id);

    for (var unidad of unidades) {
      this.unidades_medida.push({ label: unidad.nombre, value: unidad });
    }
  }

  loadListaProcesosDetalle(stp_id, proceso_id) {
    let procesos = this.dataForm.procesos.filter((val) => val.sub_tipo_producto.id == stp_id);
    this.selectedProceso = this.dataForm.procesos.find((val) => val.id == proceso_id)
    procesos = procesos.filter((val) => val.id != proceso_id);

    this.lista_procesos = [];
    this.lista_procesos.push({ label: this.selectedProceso.codigo + " - " + this.selectedProceso.nombre, value: this.selectedProceso });
    for (var preoceso of procesos) {
      this.lista_procesos.push({ label: preoceso.codigo + " - " + preoceso.nombre, value: preoceso });
    }

    this.loadListaCcostosDetalle(this.selectedProceso.centros_costos);
  }

  loadListaCcostosDetalle(lista) {

    this.lista_ccostos = [];
    this.lista_ccostos.push({ label: '', value: null });
    for (var ccosto of lista) {
      this.lista_ccostos.push({ label: ccosto.nombre, value: ccosto });
    }
  }

  loadListaTipoProductos() {
    let lista = this.dataForm.tipos_producto;

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
    this.loadListaProcesos(0);
    this.producto.sub_tipo_producto = null;
    if (event.value.producto_fabricado == false)
      this.crear_ficha = false;

  }

  onChangeSubTipoProducto(event) {
    this.loadListaProcesos(event.value.id);
    this.loadListaCcostos(null);
    this.productoService.codigoNuevo(event.value.id)
      .subscribe(
      (data) => this.producto.codigo = data.data,
      (error) => console.log(error)
      )
  }

  loadListaProcesos(stp_id) {
    let precesos = this.dataForm.procesos.filter((val) => val.sub_tipo_producto.id == stp_id);

    this.lista_procesos = [];
    this.lista_procesos.push({ label: '', value: null });
    for (var preoceso of precesos) {
      this.lista_procesos.push({ label: preoceso.codigo + " - " + preoceso.nombre, value: preoceso });
    }
  }

  onChangeProceso(event) {
    if (event.value)
      this.loadListaCcostos(event.value.centros_costos);
    else
      this.loadListaCcostos(null);

    this.producto.ficha_producto.proceso = event.value;
    this.calcularCostos();
  }

  loadListaCcostos(lista) {
    this.lista_ccostos = [];
    this.lista_ccostos.push({ label: '', value: null });
    
    if(!lista)
      return;
      
    for (var ccosto of lista) {
      this.lista_ccostos.push({ label: ccosto.nombre, value: ccosto });
    }
  }

  loadUnidadesMedida() {
    let unidades = this.dataForm.unidades_medida;

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

    if (this.producto.ficha_producto.lista_materiales != null)
      lista_materiales = [...this.producto.ficha_producto.lista_materiales];

    for (var material of lista_materiales) {
      if (material.codigo == this.newMaterial.codigo)
        return;
    }

    var mat = {
      id: this.newMaterial.id,
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
    if (this.selectedProceso)
      this.costo_total_producto = Utils.round(this.selectedProceso.costos.costo_mo + this.selectedProceso.costos.costo_gf + this.costo_total_materiales, 2);
    else
      this.costo_total_producto = Utils.round(this.costo_total_materiales, 2);

    this.calcularCostoUnitario();
  }

  calcularCostoUnitario() {
    if (this.producto.ficha_producto.lote) {
      this.producto.costo_unitario = Utils.round(this.costo_total_producto / this.producto.ficha_producto.lote, 2);
      return Utils.round(this.costo_total_producto / this.producto.ficha_producto.lote, 2);
    }
    else {
      this.producto.costo_unitario = 0;
      return 0;
    }
  }

  validarForm(): boolean {

    if (!this.producto.sub_tipo_producto)
      return true;

    if (!this.producto.codigo || this.producto.codigo == "")
      return true;

    if (!this.producto.nombre || this.producto.nombre == "")
      return true;

    if (!this.producto.unidad_medida)
      return true;

    if (!this.producto.costo_unitario)
      return true;

    if (this.producto.tiene_ficha) {

      if (!this.producto.ficha_producto.lista_materiales ||
        (this.producto.ficha_producto.lista_materiales &&
          !this.producto.ficha_producto.lista_materiales.length)
        || !this.producto.ficha_producto.lote)
        return true;
    }

    return false;
  }

  guardar() {
    this.confirmationService.confirm({
      message: '¿Seguro que desea guardar el producto?',
      accept: () => {
        this.loadingService.displayLoading(true);
        this.productoService.guardar(this.producto)
          .subscribe(
          (data) => {
            this.loadingService.displayLoading(false);
            switch (data.status) {
              case 'success':
                this.notificationService.sendMsg({
                  severity: 'success',
                  summary: 'Exitoso',
                  detail: data.msg
                })
                this.router.navigate(['/admin/tabla-productos']);
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
          )
      }
    });
  }

}
