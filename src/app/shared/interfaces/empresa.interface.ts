export interface Empresa {
    id?: number,
    updated_at?: string,
    created_at?: string,
    nombre?: string,
    rif?: string,
    und_tiempo?: number,
    direccion?: string,
    cod_empresa?: string,
    unidad_tiempo_id?: number,
    mes_cierre?: number,
    anio_cierre?: number,
    registro_sundde?: string,
    unidades_tiempo?: [
        {
            id?: number,
            created_at?: string,
            updated_at?: string,
            unidad?: string,
            descripcion?: string            
        }
    ]
}