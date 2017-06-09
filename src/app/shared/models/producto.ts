import { UnidadMedida } from './unidad_medida';
import { SubTipoProducto } from './sub_tipo_producto';

export class Producto {
    id?: number;
    codigo?: string;
    nombre?: string;
    unidad_medida?: UnidadMedida;    
    stock_min?: number;
    stock_max?: number;
    costo_unitario?: number;    
    sub_tipo_producto?: SubTipoProducto;
    tiene_ficha?: boolean;
    producto_terminado?: boolean;
}