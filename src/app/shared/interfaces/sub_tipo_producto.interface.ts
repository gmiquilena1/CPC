import { TipoProducto } from './tipo_producto.interface';

export interface SubTipoProducto {
    id?: number,
    created_at?: string,
    updated_at?: string,
    tipo_producto?: TipoProducto,
    codigo?: string,
    nombre?: string,
    descripcion?: string,
    activo?: boolean,
    cuenta_contable?: string
}