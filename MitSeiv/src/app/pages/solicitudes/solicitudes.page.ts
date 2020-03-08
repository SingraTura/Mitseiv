import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss']
})
export class SolicitudesPage implements OnInit {
  private email: string;
  constructor(public base: BaseDeDatos) {
    console.log(this.base.capturarUsuario(this.base.capturarIdUsuarioActivo()));
    console.log(this.base.capturarUsuarioPorCorreo('adrian@gmail.com'));
  }

  ngOnInit() {}

  listaAmigos() {
    return this.base.capturarUsuario(this.base.capturarIdUsuarioActivo())
      .solicitudesAmigos;
  }
  enviar() {
    console.log(this.base.capturarUsuarioPorCorreo(this.email));
    this.base.enviarSolicitud(this.email).then(r => {
      if (r) {
        console.log('enviado');
      } else {
        console.log('usuario no existe');
      }
    });
  }
}
