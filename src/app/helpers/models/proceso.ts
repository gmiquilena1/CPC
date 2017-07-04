import { SubTipoProducto } from './sub_tipo_producto';
import { CentroCosto } from './centro_costo';

export class Proceso {
    id?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    sub_tipo_producto?: SubTipoProducto;
    centros_costos?: CentroCosto[];
    costos: {
        costo_mo: number,
        costo_gf: number
    }
    ruta?: NodoCcosto[];
    arbolGastoFabrica: NodoCcostoGastos[];
    arbolManoObra: NodoCcostoGastos[];

    constructor(){
        this.ruta = new Array<NodoCcosto>();
    }
}

export class NodoCcosto {

    data?: {
        centro_costo_id?: number;
        nombre?: string;
        descripcion?: string;
        duracion?: number
    };
    expanded?: boolean;
    children?: Tarea[];
}

export class Tarea {
    data?: {
        nombre?: string;
        descripcion?: string;
        duracion?: number;        
    }
    parent?:any;
}

export class NodoCcostoGastos {

    data?: {
        centro_costo_id?: number;
        nombre?: string;
        descripcion?: string;
        duracion?: number;
        costo_unitario?: number;
        costo_total?: number;
    };
    expanded?: boolean;
    children?: TareaGastos[];
}

export class TareaGastos {
    data?: {
        nombre?: string;
        descripcion?: string;
        duracion?: number;
        costo_unitario?: number;
        costo_total?: number;        
    }
    parent?:any;
}