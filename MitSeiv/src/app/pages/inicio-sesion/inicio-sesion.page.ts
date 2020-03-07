import { BaseDeDatos } from "src/app/interfaceServicios/baseDeDatos";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-inicio-sesion",
  templateUrl: "./inicio-sesion.page.html",
  styleUrls: ["./inicio-sesion.page.scss"]
})
export class InicioSesionPage implements OnInit {
  private correo: string;
  private contrasena: string;

  constructor(public base: BaseDeDatos, public router: Router) {}

  ngOnInit() {}
  iniciarSesion() {
    this.base.iniciarSesion(this.correo, this.contrasena).then(r => {
      if (r) {
        console.log("correcto");
      } else {
        console.log("fallo");
      }
    });
  }
  registrar() {
    this.router.navigate(["home"]);
  }
}
