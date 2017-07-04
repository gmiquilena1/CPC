export class CentroCosto{
    id?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    tipo?: string;
    tipo_centro_costo?: {
        id?:number;
        nombre?:string;
    };
    reporta?: boolean = false;
    color?: string;
}

export class TipoCcosto{
    id?: number;
    nombre: string;
}