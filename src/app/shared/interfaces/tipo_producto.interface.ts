import { SubTipoProducto } from './sub_tipo_producto.interface';

export interface TipoProducto {
    id?: number,
    created_at?: string,
    updated_at?: string,
    codigo?: string,
    nombre?: string,
    descripcion?: string,
    activo?: boolean,
    producto_terminado?: boolean,
    producto_fabricado?: boolean,
    sub_tipo_producto?: SubTipoProducto[];
}