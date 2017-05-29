import { CentroCosto } from './centro_costo.interface';

export interface Material{
    codigo:string;
    nombre:string;
    ccosto_consumo?:CentroCosto;
    unidad_medida:string;        
    costo_unitario:number;
    cantidad:number;
    costo_total:number;
}