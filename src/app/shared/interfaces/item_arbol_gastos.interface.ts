export interface ItemArbolGastos {
    data?: {
        nombre?: string,
        descripcion?: string,
        duracion?: number,
        costo_total?:number
    },
    expanded?: boolean,
    children?: [{
        nombre?: string,
        descripcion?: string,
        duracion?: number,
        costo_unitario?: number,
        costo_total?: number
    }]
}