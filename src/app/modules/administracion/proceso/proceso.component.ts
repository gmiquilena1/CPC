import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, TreeNode, ConfirmationService } from 'primeng/primeng';
import { ProcesosService, LoadingService, NotificationService } from 'app/services';
import { DataFormProceso, Proceso, Tarea, NodoCcosto } from 'app/helpers/models';


@Component({
    selector: 'app-proceso',
    templateUrl: './proceso.component.html',
    styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent implements OnInit {

    dataForm: DataFormProceso;
    proceso: Proceso = new Proceso;

    lista_ccostos: SelectItem[];
    lista_tipo_producto: SelectItem[];
    lista_sub_tipo_producto: SelectItem[];

    selectedTipoProd: any = null;
    selectedSubTipoProd: any = null;
    newTarea: any = {};
    selectedTarea: any = null;

    unidad: string = "Min";
    total_duracion: number = 0;

    arbol_tareas: TreeNode[] = [];

    constructor(private _location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private procesosService: ProcesosService,
        private loadingService: LoadingService,
        private notificationService: NotificationService,
        private confirmationService: ConfirmationService) {
    }

    ngOnInit() {
        this.loadingService.displayLoading(true);
        this.procesosService.dataForm().subscribe(
            (data) => {
                this.dataForm = data;
                this.route.params.subscribe(params => {
                    let id = +params['id'];
                    if (id) {
                        this.procesosService.buscar(id).subscribe(
                            (data) => {
                                this.loadingService.displayLoading(false);
                                this.proceso = data;
                                this.loadListaTipoProductosDetalle();
                            },
                            (error) => {
                                this.loadingService.displayLoading(false);
                                console.log(error);
                            }
                        )
                    } else {
                        this.loadingService.displayLoading(false);
                        this.loadListaTipoProductos();
                    }
                });

                this.loadListaCcostos();
            },
            (error) => {
                console.log(error);
            }
        )
    }

    loadListaCcostos() {
        let ccostos = this.dataForm.centros_costos_productivos;

        this.lista_ccostos = [];
        this.lista_ccostos.push({ label: '', value: null });
        for (var ccosto of ccostos) {
            this.lista_ccostos.push({ label: ccosto.nombre, value: ccosto });
        }
    }

    loadListaTipoProductosDetalle() {
        let lista = this.dataForm.tipos_producto.filter((val) => val.producto_fabricado && val.id != this.proceso.sub_tipo_producto.tipo_producto.id);
        let tipo = this.dataForm.tipos_producto.find((val) => val.id == this.proceso.sub_tipo_producto.tipo_producto.id);

        this.lista_tipo_producto = [];
        this.lista_tipo_producto.push({ label: tipo.codigo + " - " + tipo.nombre, value: null });
        for (var item of lista) {
            this.lista_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
        }

        this.loadListaSubTipoProductosDetalle(tipo.sub_tipo_producto);
    }

    loadListaSubTipoProductosDetalle(lista) {

        let sub_tipo = lista.find((val) => val.id == this.proceso.sub_tipo_producto.id)
        lista = lista.filter((val) => val.id != this.proceso.sub_tipo_producto.id)

        this.lista_sub_tipo_producto = [];
        this.lista_sub_tipo_producto.push({ label: sub_tipo.codigo + " - " + sub_tipo.nombre, value: sub_tipo });
        for (var item of lista) {
            this.lista_sub_tipo_producto.push({ label: item.codigo + " - " + item.nombre, value: item });
        }
    }

    loadListaTipoProductos() {
        let lista = this.dataForm.tipos_producto.filter((val) => val.producto_fabricado);

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
        if (event.value)
            this.loadListaSubTipoProductos(event.value.sub_tipo_producto);
    }

    agregarTarea() {

        //se crea el nodo hijo con los datos de la tarea
        let child: Tarea = {
            "data": {
                "nombre": this.newTarea.nombre,
                "descripcion": this.newTarea.descripcion,
                "duracion": this.newTarea.duracion
            }
        }

        //se busca en el arbol si el centro de costos de la tarea ya existe
        let node = this.proceso.ruta.find((item) => item.data.nombre == this.newTarea.ccosto.nombre);

        // si no existe el centro de costo, se agrega al arbol
        if (!node) {
            //se crea el nodo del centro de costo
            let node: NodoCcosto = {
                "data": {
                    "centro_costo_id": this.newTarea.ccosto.id,
                    "nombre": this.newTarea.ccosto.nombre,
                    "descripcion": this.newTarea.ccosto.descripcion,
                    "duracion": this.newTarea.duracion
                },
                "expanded": true,
                "children": []
            }
            //se le agrega la tarea
            node.children.push(child)
            let lista = [...this.proceso.ruta];

            //se agrega el centro de costo al arbol
            lista.push(node);
            this.proceso.ruta = lista;
        } else {
            //si ya existe una tarea con ese nombre, no se agrega
            if (node.children.find((item) => item.data.nombre == this.newTarea.nombre))
                return;
            else //si no
                //se agrega la tarea al centro de costos
                node.children.push(child)
            //se suma el tiempo de la tarea al centro de costo
            node.data.duracion += this.newTarea.duracion;
        }

        //se suma la duracion de la tarea a la duracion total
        this.total_duracion += this.newTarea.duracion;
        this.newTarea = {};

    }

    eliminarTarea() {
        //si se elije un centro de costo en lugar de una tarea
        if (this.selectedTarea.parent == undefined)
            return;

        //se busca el centro de costo de la tarea en el arbol
        let node = this.proceso.ruta.find((item) => item.data.nombre == this.selectedTarea.parent.data.nombre);

        //se elimina la tarea del centro de costo
        node.children = node.children.filter((val) => val.data.nombre != this.selectedTarea.data.nombre);
        node.data.duracion -= this.selectedTarea.data.duracion

        //si el centro de costo no tiene mas tareas se, elimina del arbol
        if (node.children.length == 0)
            this.proceso.ruta = this.proceso.ruta.filter((val) => val.data.nombre != node.data.nombre);

        //se descuenta la duracion de la tarea de la duracion total
        this.total_duracion -= this.selectedTarea.data.duracion;
        this.selectedTarea = null;
    }

    goBack(): void {
        this._location.back();
    }

    guardar() {

        this.confirmationService.confirm({
            message: '¿Seguro que desea guardar el proceso?',
            accept: () => {

                this.proceso.ruta.forEach((v) => {
                    v.children.forEach((x) => {
                        delete x.parent;
                    })
                });

                this.loadingService.displayLoading(true);

                this.procesosService.guardar(this.proceso).subscribe(
                    (data) => {
                        this.loadingService.displayLoading(false);
                        switch (data.status) {
                            case 'success':
                                this.notificationService.sendMsg({
                                    severity: 'success',
                                    summary: 'Exitoso',
                                    detail: data.msg
                                })
                                this.router.navigate(['/admin/tabla-procesos']);
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
