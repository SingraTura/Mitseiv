import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';
import { Component, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss']
})
export class SolicitudesPage {
  private email: string;
  @ViewChild('lista', { static: false }) lista: IonList;
  constructor(public base: BaseDeDatos, private toastCtrl: ToastController) {}

  listaAmigos() {
    return this.base.capturarUsuario(this.base.capturarIdUsuarioActivo())
      .solicitudesAmigos;
  }
  enviar() {
    this.base
      .capturarUsuarioPorCorreo(this.email)
      .then(() => {
        this.base
          .comprobarListaAmigos(this.email)
          .then(() => {
            this.base.enviarSolicitud(this.email);
            const mensaje = 'Petición enviada a ' + this.email + ' :D';
            this.presentToast(mensaje);
          })
          .catch(mensaje => {
            this.presentToast(mensaje);
          });
      })
      .catch(() => {
        const mensaje =
          'El usuario ' + this.email + ' no ha sido encontrado D:';
        this.presentToast(mensaje);
      });
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  aceptar(email: string) {
    this.base.aceptarSolicitud(email);
  }
  rechazar(email: string) {
    this.base.rechazarSolicitud(email);
  }
}
