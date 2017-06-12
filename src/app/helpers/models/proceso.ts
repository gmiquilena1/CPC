import { SubTipoProducto } from './sub_tipo_producto';
import { CentroCosto } from './centro_costo';

export class Proceso {
    id?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    sub_tipo_producto?: SubTipoProducto;
    centros_costos?: CentroCosto[];
    costos:{
        costo_mo:number,
        costo_gf:number
    }
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