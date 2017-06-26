import { TipoProducto } from './tipo_producto';
import { UnidadMedida } from './unidad_medida';
import { Proceso } from './proceso';
import { Producto } from './producto';
import { CentroCosto } from './centro_costo';

export class DataFormProducto{
    tipos_producto:TipoProducto[];
    unidades_medida:UnidadMedida[];
    procesos:Proceso[];
    materiales:Producto[];
}

export class DataFormProceso{
    tipos_producto:TipoProducto[];
    centros_costos_productivos:CentroCosto[];
}