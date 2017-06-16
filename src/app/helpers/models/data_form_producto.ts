import { TipoProducto } from './tipo_producto';
import { UnidadMedida } from './unidad_medida';
import { Proceso } from './proceso';
import { Producto } from './producto';

export class DataFormProducto{
    tipos_producto:TipoProducto[];
    unidades_medida:UnidadMedida[];
    procesos:Proceso[];
    materiales:Producto[];
}