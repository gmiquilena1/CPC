import { Proceso } from './proceso.interface';
import { Material } from './material.interface';

export interface FichaProducto {
    id?: number,
    proceso?: Proceso,    
    lote?: number,
    materiales?: Material[];
}