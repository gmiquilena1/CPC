import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { EmpresaComponent } from './empresa/empresa.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Configuracion'
        },
        children:[  
            {
                path: 'empresa',
                component: EmpresaComponent,
                data: {
                    title: 'Empresa'
                }
            },
            {
                path: 'usuarios',
                component: UsuariosComponent,
                data: {
                    title: 'Usuarios'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }