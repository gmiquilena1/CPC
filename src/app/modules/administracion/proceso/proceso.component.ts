import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SelectItem, TreeNode } from 'primeng/primeng';
import { CENTROS_COSTOS, TIPOS_PRODUCTOS } from '../../../shared';

@Component({
    selector: 'app-proceso',
    templateUrl: './proceso.component.html',
    styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent implements OnInit {

    lista_ccostos: SelectItem[];
    lista_tipo_producto: SelectItem[];
    lista_sub_tipo_producto: SelectItem[];

    selectedTipoProd: any = null;
    selectedSubTipoProd: any = null;
    newTarea: any = {};
    selectedTarea: any = null;

    unidad:string = "Min";
    total_duracion:number = 0;
    
    arbol_tareas: TreeNode[] = [];

    constructor(private _location:Location) {
        
    }

    ngOnInit() {
        this.loadListaTipoProductos();
        this.loadListaCcostos();        
    }

    loadListaCcostos() {
        let ccostos = CENTROS_COSTOS.filter((val)=>val.tipo_centro_costo_id==1);

        this.lista_ccostos = [];
        this.lista_ccostos.push({ label: '', value: null });
        for (var ccosto of ccostos) {
            this.lista_ccostos.push({ label: ccosto.nombre, value: ccosto });
        }
    }

    loadListaTipoProductos(){
        let lista = TIPOS_PRODUCTOS.filter((val)=>val.producto_fabricado=="Si");

        this.lista_tipo_producto = [];
        this.lista_tipo_producto.push({ label: '', value: null });
        for (var item of lista) {
            this.lista_tipo_producto.push({ label: item.codigo+" - "+item.nombre, value: item });
        }
    }

    loadListaSubTipoProductos(lista){        

        this.lista_sub_tipo_producto = [];
        this.lista_sub_tipo_producto.push({ label: '', value: null });
        for (var item of lista) {
            this.lista_sub_tipo_producto.push({ label: item.codigo+" - "+item.nombre, value: item });
        }
    }

    onChangeTipoProducto(event){
        this.loadListaSubTipoProductos(event.value.sub_tipo_producto);
    }

    agregarTarea() {        
        
        //se crea el nodo hijo con los datos de la tarea
        let child = {
            "data": {
                "nombre": this.newTarea.nombre,
                "descripcion": this.newTarea.descripcion,
                "duracion": this.newTarea.duracion
            }
        }

        //se busca en el arbol si el centro de costos de la tarea ya existe
        let node = this.arbol_tareas.find((item) => item.data.nombre == this.newTarea.ccosto.nombre);

        // si no existe el centro de costo, se agrega al arbol
        if (!node) {
            //se crea el nodo del centro de costo
            node = {
                "data": {
                    "nombre": this.newTarea.ccosto.nombre,
                    "descripcion": this.newTarea.ccosto.descripcion,
                    "duracion": this.newTarea.duracion
                },
                "expanded":true,
                "children": []
            }
            //se le agrega la tarea
            node.children.push(child)
            let lista = [...this.arbol_tareas];
            
            //se agrega el centro de costo al arbol
            lista.push(node);
            this.arbol_tareas = lista;
        } else {
            //si ya existe una tarea con ese nombre, no se agrega
            if(node.children.find((item) => item.data.nombre == this.newTarea.nombre))
                return;
            else //si no
            //se agrega la tarea al centro de costos
            node.children.push(child)
            //se suma el tiempo de la tarea al centro de costo
            node.data.duracion+=this.newTarea.duracion;            
        }

        //se suma la duracion de la tarea a la duracion total
        this.total_duracion+=this.newTarea.duracion;
        this.newTarea = {};

    }

    eliminarTarea(){       
        //si se elije un centro de costo en lugar de una tarea
        if(this.selectedTarea.parent == undefined)
            return;
        
        //se busca el centro de costo de la tarea en el arbol
        let node =  this.arbol_tareas.find((item) => item.data.nombre == this.selectedTarea.parent.data.nombre);

        //se elimina la tarea del centro de costo
        node.children = node.children.filter((val)=>val.data.nombre!=this.selectedTarea.data.nombre);
        node.data.duracion-=this.selectedTarea.data.duracion

        //si el centro de costo no tiene mas tareas se, elimina del arbol
        if(node.children.length==0)
            this.arbol_tareas = this.arbol_tareas.filter((val)=>val.data.nombre!=node.data.nombre);
        
        //se descuenta la duracion de la tarea de la duracion total
        this.total_duracion-=this.selectedTarea.data.duracion;
        this.selectedTarea = null;
    }

    goBack(): void {
        this._location.back();
    }

}
