import { SubTipoProducto } from './sub_tipo_producto';
import { CentroCosto } from './centro_costo';

export class Proceso {
    id?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    sub_tipo_producto?: SubTipoProducto;
    centros_costos?: CentroCosto[];
    ruta?: [
        {
            data?: {
                nombre?: string;
                descripcion?: string;
                duracion?: number
            };
            expanded?: boolean;
            children?: [
                {
                    data?: {
                        nombre?: string;
                        descripcion?: string;
                        duracion?: number;
                    }
                }
            ]
        }
    ]
}