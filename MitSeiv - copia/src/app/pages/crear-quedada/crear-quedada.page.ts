import { ManagerUsuarioService } from "./../../services/managerUsuario/manager-usuario.service";
import { Component, OnInit } from "@angular/core";
import { ManagerQuedadaService } from "src/app/services/managerQuedada/manager-quedada.service";

@Component({
  selector: "app-crear-quedada",
  templateUrl: "./crear-quedada.page.html",
  styleUrls: ["./crear-quedada.page.scss"]
})
export class CrearQuedadaPage implements OnInit {
  private visibilidad = false;
  private descripcion: string;
  private fecha: any;
  constructor(
    public managerUsuarios: ManagerUsuarioService,
    public managerQuedadas: ManagerQuedadaService
  ) {
  }

  ngOnInit() {
  }
  crear() {
    this.managerQuedadas.crearQuedada(
      this.managerUsuarios.capturarUsuario(
        this.managerUsuarios.capturarIdUsuarioActivo()
      ).email,
      this.visibilidad,
      this.descripcion,
      new Date(this.fecha)
    );
  }
  valid(): boolean {
    let validDescripcion = false;
    if (this.descripcion !== undefined) {
      if (this.descripcion.length > 0) {
        validDescripcion = true;
      }
    }
    let validFecha = false;
    if(this.fecha !== undefined) {
      validFecha = true;
    }
    return validDescripcion && validFecha;
  }
}
