import { Proceso } from './proceso';
import { Material } from './material';

export class FichaProducto {
    id?: number;
    proceso?: Proceso;    
    lote?: number;
    materiales?: Material[];
}