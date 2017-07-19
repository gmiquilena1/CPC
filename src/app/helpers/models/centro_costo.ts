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
    conceptos_gastos?: ElementoCosto[];
}

export class TipoCcosto{
    id?: number;
    nombre: string;
}

export class ElementoCosto{
    data?: {
        elemnto_costo_id?: number;
        nombre?: string;
        descripcion?: string;
        costo_real?: number;
    };
    expanded?: boolean;
    children?: ConceptoGasto[];
}

export class ConceptoGasto{
    data?: {
        nombre?: string;
        descripcion?: string;
        costo_real?: number;        
    }
    parent?:any;
} 