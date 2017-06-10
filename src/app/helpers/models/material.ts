import { CentroCosto } from './centro_costo';
import { UnidadMedida } from './unidad_medida';

export class Material {
    id?: number;
    codigo?: string;
    nombre?: string;    
    ccosto_consumo?: CentroCosto;
    cantidad?: number;
    unidad_medida?: UnidadMedida;
    costo_unitario?: number;
    costo_total?: number;
    producto_fabricado?: boolean;
}