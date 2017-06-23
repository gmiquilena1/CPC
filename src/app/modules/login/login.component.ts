import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { AuthService, LoadingService } from '../../services';
import 'rxjs/Observable';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loading:boolean;

  credenciales: any = {
    email: "",
    password: ""
  }

  display_dialog_licence: boolean = false;
  uploadedFiles: any[] = [];
  msgs: Message[] = [];

  constructor(private router: Router, private auth: AuthService, private loadingService:LoadingService) { }

  ngOnInit() {
    this.loadingService.displayLoading(false);
  }

  login() {
    this.loading = true;
    this.auth.login(this.credenciales)
      .subscribe(
        (data) => this.handlerLogin(data),
        (error) => this.msgErrorLogin(error)
      );
  }

  handlerLogin(data) {    
    if (data) {      
      this.router.navigate(['/']);      
    }
  }

  onBeforeUpload(event) {
    console.log(event);
  }

  onUpload(event) {
    console.log(event);
    this.display_dialog_licence = false;
  }

  msgErrorLogin(error:string) {
    this.loading = false;    
    this.msgs = [];
    
    if(error.includes('invalid_credentials'))
      this.msgs.push({ severity: 'warn', summary: 'Error de Autenticación.', detail: "Usuario o Contraseña Invalidos" });
    if(error.includes('could_not_create_token'))
      this.msgs.push({ severity: 'error', summary: 'Error de Autenticación.', detail: "No se pudo crear el Token" });
  }

  msgErrorServer() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error.', detail: 'Concetando con el Servidor' });
  }

  msgErrorLicence() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error.', detail: 'No se pudo cargar el archivo de licencia' });
  }

}
