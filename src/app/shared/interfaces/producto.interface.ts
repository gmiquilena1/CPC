import { UnidadMedida } from './unidad_medida.interface';
import { SubTipoProducto } from './sub_tipo_producto.interface';

export interface Producto {
    id?: number,
    codigo?: string,
    nombre?: string,
    unidad_medida?: UnidadMedida,    
    stock_min?: number,
    stock_max?: number,
    costo_unitario?: number,    
    sub_tipo_producto?: SubTipoProducto,
    tiene_ficha?: boolean,
    producto_terminado?: boolean
}