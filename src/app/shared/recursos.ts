export const UNIDADES_MEDIDA = [
    {
        nombre: "KILOGRAMOS",
        siglas: "KG"
    },
    {
        nombre: "METROS",
        siglas: "MTS"
    },
    {
        nombre: "PIEZAS",
        siglas: "PZA"
    },
]

export const PRODUCTOS = [
    {
        codigo: "MPAG001",
        nombre: "ACEITE DE SOYA",
        unidad_medida: "LTS",
        costo_unitario: 1.84
    },
    {
        codigo: "COCL001",
        nombre: "AGUA MINERAL ENVASE 330 ML.",
        unidad_medida: "LTS",
        costo_unitario: 4.54
    },
    {
        codigo: "IPFS025",
        nombre: "ALMENDRAS FILETEADAS",
        unidad_medida: "KG",
        costo_unitario: 13.19
    },
    {
        codigo: "IPLE004",
        nombre: "AREQUIPE",
        unidad_medida: "KG",
        costo_unitario: 3.35
    },
    {
        codigo: "PCBI101",
        nombre: "BIZCOCHO REDONDO GRANDE",
        unidad_medida: "PZA",
        costo_unitario: 31.85
    },
    {
        codigo: "BECA001",
        nombre: "CAFÉ EN POLVO",
        unidad_medida: "KG",
        costo_unitario: 14
    },
    {
        codigo: "MECA030",
        nombre: "CAJAS CARTÓN CON LOGO TAMAŃO 25X25",
        unidad_medida: "PZA",
        costo_unitario: 1.08
    },
    {
        codigo: "IPES017",
        nombre: "CANELA EN POLVO",
        unidad_medida: "KG",
        costo_unitario: 8.27
    },
    {
        codigo: "PCTO021",
        nombre: "CARAMELO PARA QUESILLO",
        unidad_medida: "PZA",
        costo_unitario: 10.52
    },
    {
        codigo: "IPFU055",
        nombre: "ZANAHORIAS",
        unidad_medida: "KG",
        costo_unitario: 2.34
    },
    {
        codigo: "IPLI060",
        nombre: "VINO MÁZALA",
        unidad_medida: "LTS",
        costo_unitario: 7.45
    },
    {
        codigo: "PCTO105",
        nombre: "TORTA VAINILLA RE",
        unidad_medida: "PZA",
        costo_unitario: 50.22
    },
    {
        codigo: "IPFR002",
        nombre: "MANZANAS",
        unidad_medida: "KG",
        costo_unitario: 1.7
    },
];

export const CENTROS_COSTOS = [
    {
        id: 98,
        codigo: "AD",
        nombre: "ADMINSITRACION",
        descripcion: "",
        tipo: "SERVICIO",
        tipo_centro_costo_id: 3,
        reporta: "No",
        color: null
    },
    {
        id: 99,
        codigo: "AL",
        nombre: "ALMACEN",
        descripcion: "",
        tipo: "SERVICIO",
        tipo_centro_costo_id: 3,
        reporta: "No",
        color: ""
    },
    {
        id: 100,
        codigo: "AM",
        nombre: "AMASADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "Si",
        color: "bg-green"
    },
    {
        id: 101,
        codigo: "BA",
        nombre: "BATIDO",
        descripcion: null,
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    },
    {
        id: 102,
        codigo: "CA",
        nombre: "CAVA",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    },
    {
        id: 103,
        codigo: "CO",
        nombre: "COCINADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "Si",
        color: "bg-red"
    },
    {
        id: 104,
        codigo: "DE",
        nombre: "DECORADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "Si",
        color: "bg-teal"
    },
    {
        id: 111,
        codigo: "TI",
        nombre: "DESPACHO",
        descripcion: "",
        tipo: "SERVICIO",
        tipo_centro_costo_id: 3,
        reporta: "No",
        color: null
    },
    {
        id: 105,
        codigo: "EM",
        nombre: "EMPACADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "Si",
        color: "bg-purple"
    },
    {
        id: 106,
        codigo: "EN",
        nombre: "ENVASADO",
        descripcion: null,
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    },
    {
        id: 107,
        codigo: "HO",
        nombre: "HORNEADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "Si",
        color: "bg-orange"
    },
    {
        id: 108,
        codigo: "LI",
        nombre: "LICUADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    },
    {
        id: 109,
        codigo: "PE",
        nombre: "PESAJE",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    },
    {
        id: 110,
        codigo: "PR",
        nombre: "PRODUCCION",
        descripcion: null,
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    },
    {
        id: 112,
        codigo: "TR",
        nombre: "TRANSPORTE",
        descripcion: "",
        tipo: "SERVICIO",
        tipo_centro_costo_id: 3,
        reporta: "No",
        color: null
    },
    {
        id: 113,
        codigo: "VA",
        nombre: "VACIADO",
        descripcion: "",
        tipo: "PRODUCTIVO",
        tipo_centro_costo_id: 1,
        reporta: "No",
        color: null
    }
];

export const TIPOS_PRODUCTOS = [
    {
        id: 137,
        created_at: "2014-10-23 02:32:51",
        updated_at: "2014-10-23 02:32:51",
        codigo: "CO",
        nombre: "CONSUMUBLIES",
        descripcion: null,
        activo: true,
        producto_terminado: "No",
        producto_fabricado: "No",
        sub_tipo_producto: [
            {
                id: 101,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 137,
                codigo: "BO",
                nombre: "BOLSA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980701"
            },
            {
                id: 103,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 137,
                codigo: "CO",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980703"
            },
            {
                id: 102,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2016-01-22 19:05:45",
                tipo_producto_id: 137,
                codigo: "CL",
                nombre: "CLORO",
                descripcion: "",
                activo: true,
                cuenta_contable: "980702"
            }
        ]
    },
    {
        id: 138,
        created_at: "2014-10-23 02:32:51",
        updated_at: "2014-10-23 02:32:51",
        codigo: "IP",
        nombre: "ISUMOS DE PRODUCCION",
        descripcion: null,
        activo: true,
        producto_terminado: "No",
        producto_fabricado: "No",
        sub_tipo_producto: [
            {
                id: 104,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "CH",
                nombre: "CHOCOLATE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980704"
            },
            {
                id: 105,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "ES",
                nombre: "ESENCIA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980705"
            },
            {
                id: 106,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "FR",
                nombre: "FRUTAS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980706"
            },
            {
                id: 107,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "FS",
                nombre: "FRUTAS SECAS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980707"
            },
            {
                id: 108,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "FU",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980708"
            },
            {
                id: 109,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "GF",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980709"
            },
            {
                id: 110,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "LE",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980710"
            },
            {
                id: 111,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "LI",
                nombre: "LICOR",
                descripcion: null,
                activo: true,
                cuenta_contable: "980711"
            },
            {
                id: 112,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 138,
                codigo: "ME",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980712"
            }
        ]
    },
    {
        id: 140,
        created_at: "2014-10-23 02:32:51",
        updated_at: "2014-10-23 02:32:51",
        codigo: "MP",
        nombre: "MATERIA PRIMA",
        descripcion: null,
        activo: true,
        producto_terminado: "No",
        producto_fabricado: "No",
        sub_tipo_producto: [
            {
                id: 117,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "AZ",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980717"
            },
            {
                id: 118,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "CH",
                nombre: "CHOCOLATE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980718"
            },
            {
                id: 119,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "FR",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980719"
            },
            {
                id: 120,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "GP",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980720"
            },
            {
                id: 121,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "HA",
                nombre: "HARINA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980721"
            },
            {
                id: 122,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "HU",
                nombre: "HUEVOS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980722"
            },
            {
                id: 123,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "LE",
                nombre: "LECHE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980723"
            },
            {
                id: 124,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 140,
                codigo: "QU",
                nombre: "QUESO",
                descripcion: null,
                activo: true,
                cuenta_contable: "980724"
            },
            {
                id: 116,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2017-05-15 14:47:39",
                tipo_producto_id: 140,
                codigo: "AG",
                nombre: "AGUA",
                descripcion: "",
                activo: true,
                cuenta_contable: "980716"
            }
        ]
    },
    {
        id: 139,
        created_at: "2014-10-23 02:32:51",
        updated_at: "2017-05-13 11:55:46",
        codigo: "ME",
        nombre: "MATERIALES DE EMPAQUE",
        descripcion: "",
        activo: true,
        producto_terminado: "No",
        producto_fabricado: "No",
        sub_tipo_producto: [
            {
                id: 113,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 139,
                codigo: "BO",
                nombre: "BOLSA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980713"
            },
            {
                id: 114,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 139,
                codigo: "CA",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980714"
            },
            {
                id: 115,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 139,
                codigo: "PA",
                nombre: "PAPEL",
                descripcion: null,
                activo: true,
                cuenta_contable: "980715"
            }
        ]
    },
    {
        id: 141,
        created_at: "2014-10-23 02:32:51",
        updated_at: "2016-09-23 20:40:35",
        codigo: "PC",
        nombre: "PRODUCTO COMPLEMENTARIO",
        descripcion: "",
        activo: true,
        producto_terminado: "No",
        producto_fabricado: "Si",
        sub_tipo_producto: [
            {
                id: 125,
                created_at: "2014-10-24 00:14:14",
                updated_at: "2014-10-24 00:14:14",
                tipo_producto_id: 141,
                codigo: "BG",
                nombre: "BRAZO GITANO",
                descripcion: null,
                activo: true,
                cuenta_contable: "980725"
            },
            {
                id: 126,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "BI",
                nombre: "BIZCOCHO",
                descripcion: null,
                activo: true,
                cuenta_contable: "980726"
            },
            {
                id: 127,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "BR",
                nombre: "BROWNIE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980727"
            },
            {
                id: 128,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "CC",
                nombre: "CHEESECAKE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980728"
            },
            {
                id: 129,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "CH",
                nombre: "CHOCOLATE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980729"
            },
            {
                id: 130,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "CR",
                nombre: "CREMA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980730"
            },
            {
                id: 131,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "LE",
                nombre: "LECHE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980731"
            },
            {
                id: 132,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "LI",
                nombre: "LICOR",
                descripcion: null,
                activo: true,
                cuenta_contable: "980732"
            },
            {
                id: 133,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "ME",
                nombre: "MERMELADA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980733"
            },
            {
                id: 134,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "MU",
                nombre: "MOUSE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980734"
            },
            {
                id: 135,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PC",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980735"
            },
            {
                id: 136,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PF",
                nombre: "PROFITEROLES",
                descripcion: null,
                activo: true,
                cuenta_contable: "980736"
            },
            {
                id: 137,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PI",
                nombre: "PIE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980737"
            },
            {
                id: 138,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PL",
                nombre: "PLACAS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980738"
            },
            {
                id: 139,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PR",
                nombre: "PRALINE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980739"
            },
            {
                id: 140,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "QU",
                nombre: "QUESILLO",
                descripcion: null,
                activo: true,
                cuenta_contable: "980740"
            },
            {
                id: 141,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "TE",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980741"
            },
            {
                id: 142,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "TO",
                nombre: "TORTAS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980742"
            },
            {
                id: 143,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PB",
                nombre: "falta",
                descripcion: null,
                activo: true,
                cuenta_contable: "980743"
            },
            {
                id: 144,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 141,
                codigo: "PQ",
                nombre: "PONQUE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980744"
            }
        ]
    },
    {
        id: 142,
        created_at: "2014-10-23 02:32:51",
        updated_at: "2017-05-13 11:41:18",
        codigo: "PT",
        nombre: "PRODUCTO TERMINADO",
        descripcion: "",
        activo: true,
        producto_terminado: "Si",
        producto_fabricado: "Si",
        sub_tipo_producto: [
            {
                id: 145,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 142,
                codigo: "AS",
                nombre: "ASOPAO",
                descripcion: null,
                activo: true,
                cuenta_contable: "980745"
            },
            {
                id: 146,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 142,
                codigo: "BG",
                nombre: "BRAZO GITANO",
                descripcion: null,
                activo: true,
                cuenta_contable: "980746"
            },
            {
                id: 147,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 142,
                codigo: "BR",
                nombre: "BROWNIE",
                descripcion: null,
                activo: true,
                cuenta_contable: "980747"
            },
            {
                id: 148,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 142,
                codigo: "MA",
                nombre: "MARQUESA",
                descripcion: null,
                activo: true,
                cuenta_contable: "980748"
            },
            {
                id: 149,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 142,
                codigo: "TF",
                nombre: "TARTALETAS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980749"
            },
            {
                id: 150,
                created_at: "2014-10-24 00:14:15",
                updated_at: "2014-10-24 00:14:15",
                tipo_producto_id: 142,
                codigo: "TO",
                nombre: "TORTAS",
                descripcion: null,
                activo: true,
                cuenta_contable: "980750"
            }
        ]
    }
]

export const PROCESOS = [
    {
        id: 159,
        codigo: "qqqq",
        nombre: "aaaa",
        descripcion: "proceso de prueba",
        tipo_producto: "PRODUCTO COMPLEMENTARIO",
        tipo_producto_id: 141,
        sub_tipo_producto: "BRAZO GITANO",
        sub_tipo_producto_id: 125,
        centros_costos: [
            {
                id: 100,
                nombre: "AMASADO"
            },
            {
                id: 103,
                nombre: "COCINADO"
            }
        ],
        costos: {
            costo_mo: 9.9,
            costo_gf: 3.67
        }
    },
    {
        id: 154,
        codigo: "nuevo2",
        nombre: "nuevo2",
        descripcion: "modificacion nueva",
        tipo_producto: "PRODUCTO COMPLEMENTARIO",
        tipo_producto_id: 141,
        sub_tipo_producto: "BRAZO GITANO",
        sub_tipo_producto_id: 125,
        centros_costos: [
            {
                id: 100,
                nombre: "AMASADO"
            },
            {
                id: 107,
                nombre: "HORNEADO"
            }
        ],
        costos: {
            costo_mo: 49.01,
            costo_gf: 123.94
        }
    },
    {
        id: 141,
        codigo: "PROAS01",
        nombre: "Proceso PROAS01",
        descripcion: "",
        tipo_producto: "PRODUCTO TERMINADO",
        tipo_producto_id: 142,
        sub_tipo_producto: "ASOPAO",
        sub_tipo_producto_id: 145,
        centros_costos: [
            {
                id: 104,
                nombre: "DECORADO"
            }
        ],
        costos: {
            costo_mo: 4.39,
            costo_gf: 3.75
        }
    },
    {
        id: 101,
        codigo: "PROBI01",
        nombre: "Proceso PROBI01",
        descripcion: null,
        tipo_producto: "PRODUCTO COMPLEMENTARIO",
        tipo_producto_id: 141,
        sub_tipo_producto: "BIZCOCHO",
        sub_tipo_producto_id: 126,
        centros_costos: [
            {
                id: 109,
                nombre: "PESAJE"
            },
            {
                id: 101,
                nombre: "BATIDO"
            },
            {
                id: 113,
                nombre: "VACIADO"
            },
            {
                id: 107,
                nombre: "HORNEADO"
            },
            {
                id: 105,
                nombre: "EMPACADO"
            }
        ],
        costos: {
            costo_mo: 50.99,
            costo_gf: 65.03
        }
    },
    {
        id: 102,
        codigo: "PROBR01",
        nombre: "Proceso PROBR01",
        descripcion: null,
        tipo_producto: "PRODUCTO COMPLEMENTARIO",
        tipo_producto_id: 141,
        sub_tipo_producto: "BROWNIE",
        sub_tipo_producto_id: 127,
        centros_costos: [
            {
                id: 109,
                nombre: "PESAJE"
            },
            {
                id: 101,
                nombre: "BATIDO"
            },
            {
                id: 113,
                nombre: "VACIADO"
            },
            {
                id: 107,
                nombre: "HORNEADO"
            },
            {
                id: 105,
                nombre: "EMPACADO"
            }
        ],
        costos: {
            costo_mo: 69.3,
            costo_gf: 124.56
        }
    },
    {
        id: 103,
        codigo: "PROCC01",
        nombre: "Proceso PROCC01",
        descripcion: null,
        tipo_producto: "PRODUCTO COMPLEMENTARIO",
        tipo_producto_id: 141,
        sub_tipo_producto: "CHEESECAKE",
        sub_tipo_producto_id: 128,
        centros_costos: [
            {
                id: 109,
                nombre: "PESAJE"
            },
            {
                id: 108,
                nombre: "LICUADO"
            },
            {
                id: 113,
                nombre: "VACIADO"
            },
            {
                id: 105,
                nombre: "EMPACADO"
            }
        ],
        costos: {
            costo_mo: 32.18,
            costo_gf: 16.48
        }
    },
    {
        id: 142,
        codigo: "PROCC02",
        nombre: "Proceso PROCC02",
        descripcion: null,
        tipo_producto: "PRODUCTO TERMINADO",
        tipo_producto_id: 142,
        sub_tipo_producto: "ASOPAO",
        sub_tipo_producto_id: 145,
        centros_costos: [
            {
                id: 109,
                nombre: "PESAJE"
            },
            {
                id: 108,
                nombre: "LICUADO"
            },
            {
                id: 113,
                nombre: "VACIADO"
            },
            {
                id: 107,
                nombre: "HORNEADO"
            },
            {
                id: 105,
                nombre: "EMPACADO"
            }
        ],
        costos: {
            costo_mo: 89.1,
            costo_gf: 175.89
        }
    }
]