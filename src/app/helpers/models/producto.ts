import { UnidadMedida } from './unidad_medida';
import { SubTipoProducto } from './sub_tipo_producto';
import { FichaProducto } from './ficha_producto';

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
    ficha_producto?: FichaProducto;

    constructor(){
        //this.sub_tipo_producto = new SubTipoProducto;
        this.tiene_ficha = false;
        this.ficha_producto = new FichaProducto;        
    }
}