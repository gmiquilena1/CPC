import { SubTipoProducto } from './sub_tipo_producto.interface';
import { CentroCosto } from './centro_costo.interface';
import { Tarea } from './tarea.interface';

export interface Proceso {
    id?: number,
    codigo?: string,
    nombre?: string,
    descripcion?: string,
    sub_tipo_producto?: SubTipoProducto,
    centros_costos?: CentroCosto[],
    ruta?: [
        {
            data?: {
                nombre?: string,
                descripcion?: string,
                duracion?: number
            },
            expanded?: boolean,
            children?: Tarea[]
        }
    ]
}