import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerQuedadaService } from 'src/app/services/managerQuedada/manager-quedada.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss']
})
export class InicioSesionPage implements OnInit {
  private correo: string;
  private contrasena: string;

  constructor(public base: BaseDeDatos, public router: Router, public managerQuedada: ManagerQuedadaService,
    public menuCtrl: MenuController) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  iniciarSesion() {
    this.base.iniciarSesion(this.correo, this.contrasena).then(r => {
      if (r) {
        console.log('correcto');
        this.router.navigate(['timeline']);
      } else {
        console.log('fallo');
      }
    });
  }
  registrar() {
    this.router.navigate(['registro']);
  }
}
