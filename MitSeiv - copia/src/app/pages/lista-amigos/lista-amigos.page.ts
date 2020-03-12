import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';
import { Component } from '@angular/core';
import {  ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista-amigos',
  templateUrl: './lista-amigos.page.html',
  styleUrls: ['./lista-amigos.page.scss'],
})
export class ListaAmigosPage{

  constructor(public base: BaseDeDatos, private toastCtrl: ToastController) { }

  listaAmigos() {
    return this.base.capturarUsuario(this.base.capturarIdUsuarioActivo())
      .listaAmigos;
  }
  eliminarAmigo(email: string) {
    this.base.eliminarAmigo(email);
  }
}
